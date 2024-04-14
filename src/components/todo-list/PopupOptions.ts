//Icons Compoents
import EditIcon from "../../assets/icons/EditIcon";
import CheckIcon from "../../assets/icons/CheckIcon";
import StarIcon from "../../assets/icons/StarIcon";
import BinIcon from "../../assets/icons/BinIcon";

const PopupOptions = (): string => {
  const view = `
    <div class="popup-options">
      <button class="popup-options__edit-btn">
        ${EditIcon()}
        <span class="popup-options__text">Edit task</span>
      </button>

      <button class="popup-options__complete-btn">
        ${CheckIcon()}
        <span class="popup-options__text">Mark as completed</span>
      </button>

      <button class="popup-options__important-btn">
        ${StarIcon()}
        <span class="popup-options__text">Mark as important</span>
      </button>

      <button class="popup-options__delete-btn">
        ${BinIcon()}
        <span class="popup-options__text">Delete task</span>
      </button>
      
    </div>
  `;

  return view;
};

export default PopupOptions;
