//Icons
import CheckIcon from "../../assets/icons/CheckIcon";
import StarIcon from "../../assets/icons/StarIcon";
import EditIcon from "../../assets/icons/EditIcon";
import BinIcon from "../../assets/icons/BinIcon";
import SingleCheckIcon from "../../assets/icons/SingleCheckIcon";

//Components
import PopupLabel from "./PopupLabel";
import PopupOptions from "./PopupOptions";

//Interfaces
import { IBulletPointObjectData, IBulletPointBtnData, IBulletPointData, TBulletPointBtnType } from "../../interfaces/ITodoList";
import { TBulletPointType } from "../../interfaces/ITodoList";

const bulletPointData: IBulletPointObjectData = {
  complete: {
    icon: CheckIcon(),
    className: "bullet-point__complete-btn",
  },
  important: {
    icon: StarIcon(),
    className: "bullet-point__important-btn",
  },
  editTaskName: {
    icon: SingleCheckIcon(),
    className: "bullet-point__edit-btn",
  },
  editListName: {
    icon: EditIcon(),
    className: "bullet-point__option-edit-list-btn",
  },
  delete: {
    icon: BinIcon(),
    className: "bullet-point__option-delete-list-btn",
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

const BulletPoint = (data: IBulletPointData, type: TBulletPointType): string => {
  const { isCompleted, isImportant, id } = data;
  const importanceLabelText: string = data.isImportant ? "Remove importance" : "Mark as important"; //only for task
  const statusLabelText: string = data.isCompleted ? "Mark as uncompleted" : "Mark as completed"; //only for task
  const apllyingLabelText: string = "Apply changes";
  const removindLabelText: string = "Delete the list"; //only for list

  const fulfillmentClass: "bullet-point__completed" | "" = isCompleted ? "bullet-point__completed" : "";
  const importanceClass: "bullet-point__important" | "" = isImportant ? "bullet-point__important" : "";
  const navLinkClass: "nav-link" | "" = type === "list" ? "nav-link" : "";
  const dataURL: string = navLinkClass ? `data-url="/todo/list/#${id}"` : "";

  const view: string = `
    <li class="bullet-point ${fulfillmentClass} ${importanceClass} ${navLinkClass}" id="${id}" ${dataURL} data-bullet-point-type="${type}">

      ${type === "task" ? BulletPointBtn("complete", statusLabelText) : ""}
    
      <p class="bullet-point__text">${data.text}</p>

      <div class="bullet-point__edit-mode-field none">
        <input type="text" class="bullet-point__edit-input">
        ${BulletPointBtn("editTaskName", apllyingLabelText)}
      </div>

      <div class="bullet-point__tools">
        ${
          type === "task"
            ? `
              ${BulletPointBtn("important", importanceLabelText)}

              <button class="bullet-point__options">
                <span class="bullet-point__options-circle"></span>
                <span class="bullet-point__options-circle"></span>
                <span class="bullet-point__options-circle"></span>
                ${PopupLabel("More options")}
              </button>
           `
            : `
            ${BulletPointBtn("editListName", apllyingLabelText)}
            ${BulletPointBtn("delete", removindLabelText)}
          `
        }
      </div>

      ${type === "task" ? PopupOptions(importanceLabelText, statusLabelText) : ""}
    </li>
  `;

  return view;
};

export default BulletPoint;
