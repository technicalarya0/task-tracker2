import React, { useState, useEffect } from "react";
import API from "../../api.js";
import TaskList from "./TaskList.js";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [selected, setSelected] = useState(null);

  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  const handleCreate = async () => {
    await API.post("/projects", { title });
    setTitle("");
    fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <h2> Your Projects</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Project"
      />
      <button onClick={handleCreate}>Add</button>
      <ul>
        {projects.map((p) => (
          <li key={p._id} onClick={() => setSelected(p._id)}>
            {p.title}
          </li>
        ))}
      </ul>
      {selected && <TaskList projectId={selected} />}
    </div>
  );
};

export default ProjectList;
