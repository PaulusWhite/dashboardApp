//Components
import ToolbarIcon from "./toolbar-icons/ToolbarIcon";

//Icons
import TodoIcon from "../assets/icons/TodoIcon";

const Toolbar = (): string => {
  const view = `
    <div class="toolbar">
    ${ToolbarIcon(TodoIcon(), "todo-list-icon")}
    </div>
  `;

  return view;
};

export default Toolbar;
