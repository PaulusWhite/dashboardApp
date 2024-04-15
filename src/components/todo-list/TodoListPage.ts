//Icons
import CheckIcon from "../../assets/icons/CheckIcon";

//Components
import BackBtn from "../common/BackBtn";

const TodoList = (): string => {
  const view = `
    <div class="todo-list">
      <h1> ${CheckIcon()} Todo Lists</h1>

      <div class="tasks">

        <div class="tasks__all-tasks tasks__tasks-group">
          <h2>Tasks</h2>
          <div class="tasks__tasks-list" id="tasks-list-all">
          </div>
        </div>

        <div class="tasks__important-tasks tasks__tasks-group none">
          <h2>Important</h2>
          <div class="tasks__tasks-list" id="tasks-list-important"></div>
        </div>

        <h3 class="tasks__no-tasks none">You do not have any tasks yet</h3>

      </div>

      <div class="todo-list__input-field">
        <input id="todo-list__input" type="text" placeholder="What do you need to do?">
        <button class="todo-list__add-btn">+ Add</button>
      </div>
      
      ${BackBtn("/")}
    </div>
  `;

  return view;
};

export default TodoList;
