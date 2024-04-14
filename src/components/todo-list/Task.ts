//Components
import PopupLabel from "./PopupLabel";
import PopupOptions from "./PopupOptions";

//Icons Compoents
import CheckIcon from "../../assets/icons/CheckIcon";
import StarIcon from "../../assets/icons/StarIcon";

//Interfaces
import { ITask } from "../../interfaces/ITodoList";

const Task = (data: ITask): string => {
  const view = `
    <div class="task" id="${data.id}">
      <button class="task__complete-btn">
        ${CheckIcon()}
        ${PopupLabel("Mark as completed")}
      </button>
      <p class="task__text">${data.text}</p>

      <div class="task__tools">
        <button class="task__important-btn">
          ${StarIcon()}
          ${PopupLabel("Mark as important")}
        </button>
        <button class="task__options">
          <span class="task__options-circle"></span>
          <span class="task__options-circle"></span>
          <span class="task__options-circle"></span>
          ${PopupLabel("More options")}
        </button>
      </div>

      ${PopupOptions()}
    </div>
  `;

  return view;
};

export default Task;
