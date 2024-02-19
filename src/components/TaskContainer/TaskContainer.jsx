import React, { useState } from "react";
import SearchBox from "./SearchBox";
import TableComponent from "./TableComponent/TableComponent";
import { TasksProvider } from "../../contexts/TaskContext";
import { SearchProvider } from "../../contexts/SearchContext";
import TaskForm from "../TaskForm/TaskForm";

const TaskContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [clickedTask, setClickedTask] = useState(null);
  const handleAddClick = () => {
    setIsOpen(true);
    setIsAdd(true);
  };
  const handleEditClick = (task) => {
    setIsOpen(true);
    setIsAdd(false);
    setClickedTask({ ...task });
  };
  const handleCloseClick = () => {
    setIsOpen(false);
    setClickedTask(null);
  };
  return (
    <section className="mb-20" id="tasks">
      <TasksProvider>
        <SearchProvider>
          {isOpen && (
            <TaskForm
              handleCloseClick={handleCloseClick}
              isAdd={isAdd}
              clickedTask={clickedTask}
            ></TaskForm>
          )}
          <div className="container">
            <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
              <SearchBox handleAddClick={handleAddClick} />
              <TableComponent handleEditClick={handleEditClick} />
            </div>
          </div>
        </SearchProvider>
      </TasksProvider>
    </section>
  );
};

export default TaskContainer;
