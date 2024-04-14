//Components
import PopupLabel from "./PopupLabel";

//icons
import checkIcon from "./../../assets/icons/check.svg";
import starIcon from "./../../assets/icons/star.svg";

const Task = (): string => {
  const view = `
    <div class="task">
      <button class="task__complete-btn">
        <img src="${checkIcon}" alt="check-icon">
        ${PopupLabel("Mark as completed")}
      </button>
      <p class="task__text">Get a job in IT sphere</p>

      <div class="task__tools">
        <button class="task__important-btn">
          <img src="${starIcon}" alt="star-icon">
          ${PopupLabel("Mark as important")}
        </button>
        <button class="task__options">
          <span class="task__options-circle"></span>
          <span class="task__options-circle"></span>
          <span class="task__options-circle"></span>
          ${PopupLabel("More options")}
        </button>
      </div>
      
    </div>
  `

  return view;
}

export default Task;