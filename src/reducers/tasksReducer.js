export const tasksReducer = (state, action) => {
  switch (action.type) {
    case "added":
      return [...state, action.payload];

    case "updated":
      const updatedState = state.map((task) => {
        if (action.payload.id === task.id) {
          return {
            ...action.payload,
          };
        }
        return task;
      });
      return [...updatedState];

    case "deleted":
      return state.filter((task) => task.id != action.payload);
    case "deleteAll":
      return [];
    default:
      return state;
  }
};
