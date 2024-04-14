//icons
import checkIcon from "./../../assets/icons/check.svg";
import starIcon from "./../../assets/icons/star.svg";

const Task = (): string => {
  const view = `
    <div class="task">
      <button class="task__complete-btn">
        <img src="${checkIcon}" alt="check-icon">
      </button>
      <p class="task__text">Get a job in IT sphere</p>

      <div class="task__tools">
        <button class="task__important-btn">
          <img src="${starIcon}" alt="star-icon">
        </button>
        <button class="task__options">
          <span class="task__options-circle"></span>
          <span class="task__options-circle"></span>
          <span class="task__options-circle"></span>
        </button>
      </div>
      
    </div>
  `

  return view;
}

export default Task;