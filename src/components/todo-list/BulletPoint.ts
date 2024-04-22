//Icons
import CheckIcon from "../../assets/icons/CheckIcon";
import StarIcon from "../../assets/icons/StarIcon";
import EditIcon from "../../assets/icons/EditIcon";

//Components
import PopupLabel from "./PopupLabel";
import PopupOptions from "./PopupOptions";

//Interfaces
import { IBulletPointObjectData, IBulletPointBtnData, IBulletPointData, TBulletPointBtnType } from "../../interfaces/ITodoList";

const bulletPointData: IBulletPointObjectData = {
  complete: {
    icon: CheckIcon(),
    className: "bullet-point__complete-btn",
  },
  important: {
    icon: StarIcon(),
    className: "bullet-point__important-btn",
  },
  edit: {
    icon: EditIcon(),
    className: "bullet-point__edit-btn",
  },
};

const BulletPointBtn = (btnType: TBulletPointBtnType, labelText: string): string => {
  const btnData: IBulletPointBtnData = bulletPointData[btnType] as IBulletPointBtnData;

  const view: string = `
    <button class="bullet-point-btn ${btnData.className}">
      ${btnData.icon}
      ${PopupLabel(labelText)}
    </button>
  `;

  return view;
};

const BulletPoint = (data: IBulletPointData, type: "task" | "list"): string => {
  const { isCompleted, isImportant, isEditMode, id } = data;
  const importanceLabelText: string = data.isImportant ? "Remove importance" : "Mark as important";
  const statusLabelText: string = data.isCompleted ? "Mark as uncompleted" : "Mark as completed";
  // const editLabelText: string = "Apply changes";

  const fulfillmentClass = isCompleted ? "bullet-point__completed" : "";
  const importanceClass = isImportant ? "bullet-point__important" : "";

  const view: string = `
    <li class="bullet-point ${fulfillmentClass} ${importanceClass}" id="${id}" data-bullet-point-type="${type}">

      ${type === "task" ? BulletPointBtn("complete", statusLabelText) : ""}
    
      <p class="bullet-point__text">${data.text}</p>

      ${
        type === "task"
          ? `
        <div class="bullet-point__tools">

          ${BulletPointBtn("important", importanceLabelText)}

          <button class="bullet-point__options">
            <span class="bullet-point__options-circle"></span>
            <span class="bullet-point__options-circle"></span>
            <span class="bullet-point__options-circle"></span>
            ${PopupLabel("More options")}
          </button>
          
        </div>`
          : ""
      }

      ${type === "task" ? PopupOptions(importanceLabelText, statusLabelText) : ""}
    </li>
  `;

  return view;
};

export default BulletPoint;
