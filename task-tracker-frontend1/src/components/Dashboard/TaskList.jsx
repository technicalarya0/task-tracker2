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
    <div>
      <h2> Your Task</h2>
      <input
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        placeholder="Task Title"
      />
      <input
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        placeholder="Task Description"
      />
      <button onClick={handleCreate}>Add Task</button>
      <ul>
        {tasks.map((p) => (
          <li key={p._id}>
            {p.title} - {p.status}
            <button onClick={() => handleDelete(p._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
