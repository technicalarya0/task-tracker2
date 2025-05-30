import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskList = ({ title }) => {
  const [projectId, setProjectId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(
          (import.meta.env.VITE_BACKEND_URI || 'http://localhost:5000') + "/api/projects",
          { headers: token ? { Authorization: `Bearer ${token}` } : {} }
        );
        const project = res.data.find((p) => p.title === decodeURIComponent(title));
        if (project) {
          setProjectId(project._id);
        } else {
          toast.error("Project not found");
        }
      } catch (err) {
        toast.error("Failed to fetch tasks: ", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [title]);

  const fetchTasks = async () => {
    if (!projectId) return;
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(
        (import.meta.env.VITE_BACKEND_URI || 'http://localhost:5000') + `/api/tasks?projectId=${projectId}`,
        { headers: token ? { Authorization: `Bearer ${token}` } : {} }
      );
      setTasks(res.data);
    } catch (err) {
      toast.error("Failed to fetch tasks: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [projectId]);

  const handleCreate = async () => {
    if (!form.title.trim() || !form.description.trim()) return;
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        (import.meta.env.VITE_BACKEND_URI || 'http://localhost:5000') + "/api/tasks",
        { ...form, project: projectId },
        { headers: token ? { Authorization: `Bearer ${token}` } : {} }
      );
      setForm({ title: "", description: "" });
      fetchTasks();
    } catch (err) {
      toast.error("Failed to add task: " + err.message);
      console.error("Failed to add task:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(
        (import.meta.env.VITE_BACKEND_URI || 'http://localhost:5000') + `/api/tasks/${id}`,
        { headers: token ? { Authorization: `Bearer ${token}` } : {} }
      );
      fetchTasks();
    } catch (err) {
      toast.error("Failed to delete task.");
    }
  };

  if (loading) return <div className="text-gray-900 dark:text-white">Loading...</div>;

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md transition-colors duration-500">
      <ToastContainer position="top-right" autoClose={2000} />
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Tasks for Project {title}</h2>
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Task Title"
          className="flex-2 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Task Description"
          className="flex-1 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add Task
        </button>
      </div>
      <ul className="space-y-3">
  {tasks.map((task) => (
    <li
      key={task._id}
      className="flex justify-between items-center bg-gray-200 dark:bg-gray-700 rounded px-4 py-3 text-gray-900 dark:text-white"
    >
      <div>
        <div className="font-semibold">{task.title}</div>
        <div className="text-sm text-gray-500 dark:text-gray-300">{task.description}</div>
        <div className="text-xs text-gray-400">
          Status: 
          <select
            value={task.status}
            onChange={async (e) => {
              try {
                const token = localStorage.getItem('token');
                await axios.put(
                  (import.meta.env.VITE_BACKEND_URI || 'http://localhost:5000') + `/api/tasks/${task._id}`,
                  { status: e.target.value },
                  { headers: token ? { Authorization: `Bearer ${token}` } : {} }
                );
                fetchTasks(); // Refresh the list
              } catch {
                // handle error if needed
              }
            }}
            className="ml-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-1 py-1"
            style={{ minWidth: "80px" }} 
          >
            <option className="" value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
      <button
        onClick={() => handleDelete(task._id)}
        className="ml-4 px-3 py-1 bg-red-400 rounded text-white hover:bg-red-600 transition"
      >
        X
      </button>
    </li>
  ))}
</ul>
    </div>
  );
};

export default TaskList;
