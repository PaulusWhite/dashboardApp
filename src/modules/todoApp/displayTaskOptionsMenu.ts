const hideExtraOptionsMenu = (openedOptionsMenu?: HTMLDivElement): void => {
  const allOptionsMenus: NodeListOf<HTMLDivElement> = document.querySelectorAll(".popup-options")!;

  allOptionsMenus.forEach((optionsMenu: HTMLDivElement) => {
    if (openedOptionsMenu && optionsMenu === openedOptionsMenu) return;

    optionsMenu.classList.add("hide");
  });
};

const displayTaskOptionsMenu = (): void => {
  const todoList: HTMLDivElement = document.querySelector(".todo-list-page")!;

  todoList.addEventListener("click", (event: Event) => {
    const target: HTMLElement = event.target as HTMLElement;

    if (!target.closest(".bullet-point__options")) {
      const activeOptionsMenu: HTMLElement | null = document.querySelector(".popup-options:not(.hide)");
      activeOptionsMenu && activeOptionsMenu.classList.add("hide");

      return;
    }

    const taskOptionsBtn: HTMLButtonElement = target.closest(".bullet-point__options")!;
    const popupOptionsMenu: HTMLDivElement = taskOptionsBtn.parentElement?.nextElementSibling as HTMLDivElement;

    popupOptionsMenu.classList.remove("hide");

    hideExtraOptionsMenu(popupOptionsMenu);
  });
};

export default displayTaskOptionsMenu;
