import React, { useState } from "react";
import { useTasks } from "../../contexts/TaskContext";
import { getNextId } from "../../utils";

const TaskForm = ({ handleCloseClick, isAdd, clickedTask }) => {
  const { tasks, dispatch } = useTasks();
  const [task, setTask] = useState(
    isAdd
      ? {
          title: "",
          description: "",
          tags: [],
          priority: "",
          favourite: false,
        }
      : clickedTask
  );

  const resetForm = () => {
    setTask({
      title: "",
      description: "",
      tags: [],
      priority: "",
      favourite: false,
    });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "tags") {
      value = value.split(",");
    }
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid =
      task.title?.length > 0 &&
      task.description?.length > 0 &&
      task?.tags?.length > 0 &&
      task.priority?.length > 0;
    if (isValid) {
      if (isAdd) {
        const newTask = {
          id: getNextId(tasks),
          ...task,
        };
        dispatch({
          type: "added",
          payload: newTask,
        });
      } else {
        const editedTask = {
          id: clickedTask.id,
          ...task,
        };
        dispatch({
          type: "updated",
          payload: editedTask,
        });
      }
      handleCloseClick();
      resetForm();
    } else {
      alert("Please enter all the fields");
    }
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          opacity: 0.7,
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0px",
          left: "0px",
          zIndex: 10,
        }}
      ></div>
      <form
        onSubmit={handleSubmit}
        style={{
          position: "absolute",
          top: "25%",
          left: "33%",
          zIndex: 10,
          //   height: "100%",
        }}
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? "Add New Task" : "Edit Task"}
        </h2>

        {/* <!-- inputs --> */}
        <div className="space-y-9 text-white lg:space-y-10">
          {/* <!-- title --> */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
            />
          </div>
          {/* <!-- description --> */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
            ></textarea>
          </div>
          {/* <!-- input group --> */}
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            {/* <!-- tags --> */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={task.tags}
                onChange={handleChange}
              />
            </div>
            {/* <!-- priority --> */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>
        {/* <!-- inputs ends --> */}
        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            {isAdd ? "Create New Task" : "Save Changes"}
          </button>
          <button
            onClick={handleCloseClick}
            style={{ marginLeft: "20px", backgroundColor: "#ef4444" }}
            className="rounded px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
