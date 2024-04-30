//modules
import { navigateTo } from "./router";

const isPreventedClassName = (element: HTMLElement): boolean => {
  const preventedClasses: string[] = ["bullet-point__edit-mode", "bullet-point__tools", "bullet-point__edit-btn"];

  const isPrevented: boolean = preventedClasses.some((className: string) => element.closest(`.${className}`));

  return isPrevented;
};

const setNavLinkRouter = (): void => {
  window.addEventListener("click", (event: Event) => {
    const target: HTMLElement = event.target as HTMLElement;

    if (!target.closest(".nav-link") || isPreventedClassName(target)) return;

    const navLink: HTMLElement = target.closest(".nav-link") as HTMLElement;
    const navLinkURL: string = navLink.dataset.url as string;

    navigateTo(navLinkURL);
  });
};

export default setNavLinkRouter;
