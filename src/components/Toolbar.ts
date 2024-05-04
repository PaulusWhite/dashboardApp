//Components
import ToolbarIcon from "./toolbar-icons/ToolbarIcon";

//Icons
import TodoIcon from "../assets/icons/TodoIcon";
import WeatherIcon from "../assets/icons/WeatherIcon";

const Toolbar = (): string => {
  const view = `
    <div class="toolbar">
      ${ToolbarIcon(TodoIcon(), "/todo")}
      ${ToolbarIcon(WeatherIcon(), "/forecast")}
    </div>
  `;

  return view;
};

export default Toolbar;
