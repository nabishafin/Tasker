export const getNextId = (data) => {
  let nextId = 0;
  if (data?.length > 0) {
    const maxId = data?.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    nextId = maxId + 1;
  }
  return nextId;
};
