import React from "react";
import { useParams } from "react-router-dom";
import TaskList from "./TaskList";

const TaskListPage = () => {
  const { title } = useParams();
  return (
    <main className="flex-1 flex flex-col">
      <TaskList title={title} />
    </main>
  );
};

export default TaskListPage;