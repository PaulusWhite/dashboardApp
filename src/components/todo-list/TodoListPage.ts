const TodoList = (): string => {
  const view = `
    <div class="todo-list">
      <h1>Todo Lists</h1>

      <div class="tasks">

        <div class="tasks__all-tasks tasks__tasks-group">
          <h2>Tasks</h2>
          <div class="tasks__tasks-list" id="tasks-list-all">
          </div>
        </div>

        <div class="tasks__important-tasks tasks__tasks-group">
          <h2>Important</h2>
          <div class="tasks__tasks-list" id="tasks-list-important"></div>
        </div>

      </div>

      <div class="todo-list__input-field">
        <input id="todo-list__input" type="text" placeholder="What do you need to do?">
        <button class="todo-list__add-btn">+ Add</button>
      </div>
      
    </div>
  `;

  return view;
};

export default TodoList;
