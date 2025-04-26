import React, { useState, useEffect } from "react";
import API from "../../api.jsx";

const TaskList = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });

  const fetchTasks = async () => {
    const res = await API.get(`/tasks?projectId=${projectId}`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [projectId]);

  const handleCreate = async () => {
    await API.post("/tasks", { ...form, projectId });
    setForm({ title: "", description: "" });
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold text-white mb-4">Your Tasks</h2>
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Task Title"
          className="flex-1 px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Task Description"
          className="flex-1 px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add Task
        </button>
      </div>
      <ul className="space-y-3">
        {tasks.map((p) => (
          <li
            key={p._id}
            className="flex justify-between items-center bg-gray-700 rounded px-4 py-3 text-white"
          >
            <div>
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm text-gray-300">{p.description}</div>
              <div className="text-xs text-gray-400">Status: {p.status}</div>
            </div>
            <button
              onClick={() => handleDelete(p._id)}
              className="ml-4 px-3 py-1 bg-red-600 rounded text-white hover:bg-red-700 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
