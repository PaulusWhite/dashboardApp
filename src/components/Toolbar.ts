//Components
import ToolbarIcon from "./toolbar-icons/ToolbarIcon";

//Icons
import todoIcon from "./../assets/icons/todo.svg";

const Toolbar = (): string => {
  const view = `
    <div class="toolbar">
    ${ToolbarIcon(todoIcon, "todo-list-icon")}
    </div>
  `

  return view;
}

export default Toolbar;