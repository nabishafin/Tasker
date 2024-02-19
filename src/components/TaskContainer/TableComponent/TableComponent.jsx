import React from "react";
import THead from "./THead";
import TBody from "./TBody";
import { useTasks } from "../../../contexts/TaskContext";
import TaskForm from "../../TaskForm/TaskForm";

const TableComponent = ({handleEditClick}) => {
  const { tasks } = useTasks();
  return (
    <div className="overflow-auto">
      {tasks?.length > 0 ? (
        <table className="table-fixed overflow-auto xl:w-full">
          <THead />
          <TBody handleEditClick={handleEditClick}/>
        </table>
      ) : (
        <div
          style={{ fontSize: "40px", textAlign: "center", fontWeight: "bold" }}
        >
          <h1 style={{ padding: "40px" }}>Task List is Empty!</h1>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
