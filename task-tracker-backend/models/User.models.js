import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
    country: String,
})

modeule.exports = mongoose.model("User", userSchema);