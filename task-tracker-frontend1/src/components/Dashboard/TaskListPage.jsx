import React from "react";
import { useParams } from "react-router-dom";
import TaskList from "./TaskList";

const TaskListPage = () => {
  const { title } = useParams();
  return <TaskList title ={title} />;
};

export default TaskListPage;