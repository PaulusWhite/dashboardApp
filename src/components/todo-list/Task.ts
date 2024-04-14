//Components
import PopupLabel from "./PopupLabel";
import PopupOptions from "./PopupOptions";

//Icons Compoents
import CheckIcon from "../../assets/icons/CheckIcon";
import StarIcon from "../../assets/icons/StarIcon";
import SingleCheckIcon from "../../assets/icons/SingleCheckIcon";

//Interfaces
import { ITask } from "../../interfaces/ITodoList";

const Task = (data: ITask): string => {
  const importanceLabelText: string = data.isImportant ? "Remove importance" : "Mark as important";
  const statusLabelText: string = data.isCompleted ? "Mark as uncompleted" : "Mark as completed";

  const view = `
    <div class="task ${data.isCompleted && "task__completed"} ${data.isImportant && "task__important"}" id="${data.id}">

      <button class="task__complete-btn">
        ${CheckIcon()}
        ${PopupLabel(statusLabelText)}
      </button>

      <p class="task__text">${data.text}</p>
      <div class="task__edit-mode-field none">
        <input type="text" class="task__edit-input">
        <button class="task__edit-btn">
          ${SingleCheckIcon()}
        </button>
      </div>

      <div class="task__tools">

        <button class="task__important-btn">
          ${StarIcon()}
          ${PopupLabel(importanceLabelText)}
        </button>

        <button class="task__options">
          <span class="task__options-circle"></span>
          <span class="task__options-circle"></span>
          <span class="task__options-circle"></span>
          ${PopupLabel("More options")}
        </button>
        
      </div>

      ${PopupOptions(importanceLabelText, statusLabelText)}
    </div>
  `;

  return view;
};

export default Task;
