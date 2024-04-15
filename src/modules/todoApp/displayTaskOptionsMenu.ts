const hideExtraOptionsMenu = (openedOptionsMenu?: HTMLDivElement) => {
  const allOptionsMenus: NodeListOf<HTMLDivElement> = document.querySelectorAll(".popup-options") as NodeListOf<HTMLDivElement>;

  allOptionsMenus.forEach((optionsMenu: HTMLDivElement) => {
    if (openedOptionsMenu && optionsMenu === openedOptionsMenu) return;

    optionsMenu.classList.add("hide");
  });
};

const displayTaskOptionsMenu = () => {
  const todoList: HTMLDivElement = document.querySelector(".todo-list") as HTMLDivElement;

  todoList.addEventListener("click", (event: Event) => {
    const target: HTMLElement = event.target as HTMLElement;

    if (!target.closest(".task__options")) {
      const activeOptionsMenu: HTMLElement | null = document.querySelector(".popup-options:not(.hide)");
      activeOptionsMenu && activeOptionsMenu.classList.add("hide");

      return;
    }

    const taskOptionsBtn: HTMLButtonElement = target.closest(".task__options") as HTMLButtonElement;
    const popupOptionsMenu: HTMLDivElement = taskOptionsBtn.parentElement?.nextElementSibling as HTMLDivElement;

    popupOptionsMenu.classList.remove("hide");

    hideExtraOptionsMenu(popupOptionsMenu);
  });
};

export default displayTaskOptionsMenu;
