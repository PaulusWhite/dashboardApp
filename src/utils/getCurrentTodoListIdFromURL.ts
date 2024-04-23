const getCurrentTodoListIdFromURL = (): string => {
  return window.location.hash.slice(1); //hash is todoList ID
};

export default getCurrentTodoListIdFromURL;
