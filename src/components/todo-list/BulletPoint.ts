//Icons
import CheckIcon from "../../assets/icons/CheckIcon";
import StarIcon from "../../assets/icons/StarIcon";
import EditIcon from "../../assets/icons/EditIcon";

//Components
import PopupLabel from "./PopupLabel";
import PopupOptions from "./PopupOptions";

interface IBulletPointData {
  isCompleted?: boolean;
  isImportant?: boolean;
  isEditMode?: boolean;
  bulletPointID: string;
}

interface IBulletPointBtnData {
  icon: string;
  className: "complete-btn" | "important-btn" | "edit-btn";
}

interface IBulletPointObjectData {
  complete?: IBulletPointBtnData;
  important?: IBulletPointBtnData;
  edit?: IBulletPointBtnData;
}

const bulletPointData: IBulletPointObjectData = {
  complete: {
    icon: CheckIcon(),
    className: "complete-btn",
  },
  important: {
    icon: StarIcon(),
    className: "important-btn",
  },
  edit: {
    icon: EditIcon(),
    className: "edit-btn",
  },
};

type TBulletPointBtnType = "complete" | "important" | "edit";

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
  const importanceLabelText: string = data.isImportant ? "Remove importance" : "Mark as important";
  const statusLabelText: string = data.isCompleted ? "Mark as uncompleted" : "Mark as completed";
  // const editLabelText: string = "Apply changes";

  const view: string = `
    <li class="bullet-point ${data.isCompleted && "mark-completed"} ${data.isImportant && "mark-important"}" id="${data.bulletPointID}">

      ${type === "task" ? BulletPointBtn("complete", statusLabelText) : ""}
    
      <p class="bullet-point__text"></p>

      ${
        type === "task"
          ? `
        <div class="task__tools">

          ${BulletPointBtn("important", importanceLabelText)}

          <button class="task__options">
            <span class="task__options-circle"></span>
            <span class="task__options-circle"></span>
            <span class="task__options-circle"></span>
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
