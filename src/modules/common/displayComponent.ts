const displayComponent = (element: HTMLElement, flag: boolean, transition: number): void => {
  if (flag) {
    element.classList.remove("none");

    setTimeout(() => {
      element.classList.remove("hide");
    }, transition);
  } else {
    element.classList.add("hide");

    setTimeout(() => {
      element.classList.add("none");
    }, transition);
  }
};

export default displayComponent;
