import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { useTasks } from "../../../contexts/TaskContext";

const TRow = ({ task, handleEditClick }) => {
  const { dispatch } = useTasks();
  const { id, title, description, tags, priority, favourite } = task || {};
  const colors = [
    "#00d58f",
    "#3b82f6",
    "#ef4444",
    "#8d4615",
    "#14b9b2",
    "#2a3ac5",
  ];

  const handleDelete = () => {
    const result = confirm("Are you sure to delete this task?");
    result &&
      dispatch({
        type: "deleted",
        payload: id,
      });
  };

  const handleFavouriteClick = () => {
    dispatch({
      type: "updated",
      payload: {
        ...task,
        favourite: !task.favourite,
      },
    });
  };

  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        <button onClick={handleFavouriteClick}>
          {favourite ? (
            <FaStar color="yellow" size={"24"} />
          ) : (
            <FaRegStar size={"24"} />
          )}
        </button>
      </td>
      <td>{title}</td>
      <td>
        <div>{description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {tags?.map((tag, index) => {
            const tagColor = colors[index % colors.length];
            return (
              <li key={tag}>
                <span
                  style={{ backgroundColor: tagColor }}
                  className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]`}
                >
                  {tag}
                </span>
              </li>
            );
          })}
        </ul>
      </td>
      <td className="text-center">{priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button className="text-red-500" onClick={handleDelete}>
            Delete
          </button>
          <button
            className="text-blue-500"
            onClick={() => handleEditClick(task)}
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TRow;
