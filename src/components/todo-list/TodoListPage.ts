//Icons
import CheckIcon from "../../assets/icons/CheckIcon";

//Components
import BackBtn from "../common/BackBtn";
import InpitField from "./InputField";

const TodoList = (listId: string): string => {
  const placeholder: string = "What do you want to do?";
  const applyBtnText: string = "Add";

  const view: string = `
    <main class="todo-list" id="${listId}">
      <h1> ${CheckIcon()} Todo List</h1>

      <div class="tasks">

        <div class="tasks__all-tasks tasks__tasks-group">
          <h2>Tasks</h2>
          <ul class="tasks__tasks-list" id="tasks-list-all"></ul>
        </div>

        <div class="tasks__important-tasks tasks__tasks-group none">
          <h2>Important</h2>
          <ul class="tasks__tasks-list" id="tasks-list-important"></ul>
        </div>

        <h3 class="tasks__no-tasks none">You do not have any tasks yet</h3>

      </div>

      ${InpitField(placeholder, applyBtnText)}
      
      ${BackBtn("/todo")}
    </main>
  `;

  return view;
};

export default TodoList;
