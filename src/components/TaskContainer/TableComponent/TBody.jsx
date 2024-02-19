import React from "react";
import TRow from "./TRow";
import { initialTasks } from "../../../initialTasks";
import { useTasks } from "../../../contexts/TaskContext";
import { useSearch } from "../../../contexts/SearchContext";

const TBody = ({ handleEditClick }) => {
  const { tasks } = useTasks();
  const { searchValue } = useSearch();
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchValue?.toLowerCase())
  );
  return (
    <tbody>
      {filteredTasks?.map((task) => (
        <TRow key={task.id} task={task} handleEditClick={handleEditClick} />
      ))}
    </tbody>
  );
};

export default TBody;
