import React, { useState, useEffect } from "react";
import API from "../../api.jsx";
import TaskList from "./TaskList.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  //const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const fetchProjects = async () => {
    const res = await API.get("/api/projects");
    setProjects(res.data);
  };

  const handleCreate = async () => {
    if(!title.trim()){
      toast.error("Project can not be empty!!!");
      return;
    }

    try {
      await API.post("/api/projects", { title });
      setTitle("");
      fetchProjects();
      toast.success("Project added successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add project");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-900 p-6">
      <ToastContainer position="top-right" autoClose={2000} />
      <h2 className="text-2xl font-bold text-white mb-6">Your Projects</h2>
      <div className="flex mb-6 w-full max-w-md">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New Project"
          className="flex-1 px-4 py-2 rounded-l bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>
      <ul className="w-full max-w-md mb-8">
        {projects.map((p) => (
          <li
            key={p._id}
            onClick={() => navigate(`/dashboard/taskList/${p.title}`)}
            className={`cursor-pointer px-4 py-3 mb-2 rounded bg-gray-800 text-white hover:bg-blue-700 transition `}
          >
            {p.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
