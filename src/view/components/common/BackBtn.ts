//Icons
import backIcon from "../../../assets/icons/BackIcon";

//Interfaces
import { TPath } from "../../../interfaces/IRouter";

const BackBtn = (url: TPath): string => {
  const view = `
    <button class="back-btn nav-link" data-url="${url}">
      ${backIcon()}
    </button>
  `;

  return view;
};

export default BackBtn;
