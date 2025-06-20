import User from "../models/User.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
    try {
        const { name, email, password, country } = req.body;
        // Correctly check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(409).json({ message: "User already exists" });

        const hash = await bcrypt.hash(password, 10);
        // Correctly create a new user
        const newUser = new User({ name, email, password: hash, country });
        const savedUser = await newUser.save();

        const token = jwt.sign({ id: savedUser._id, name: savedUser.name, email: savedUser.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({
            token,
            user: {
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email,
                country: savedUser.country
            }
        });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user) return res.status(400).json({message: "User not found"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: "Invalid credentials"});

        const token = jwt.sign({id: user._id, name: user.name, email: user.email },
            process.env.JWT_SECRET, {expiresIn: "5h"});
        res.json({token});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};