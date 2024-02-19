import {
  createContext,
  useContext,
  useReducer,
} from "react";
import { tasksReducer } from "../reducers/tasksReducer";
import { initialTasks } from "../initialTasks";

const TasksContext = createContext(null);

export const useTasks = () => {
  return useContext(TasksContext);
};

export const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
