//modules
import { navigateTo } from "./router";

const setNavLinkRouter = () => {
  window.addEventListener("click", (event: Event) => {
    const target: HTMLElement = event.target as HTMLElement;

    if (!target.closest(".nav-link")) return;

    const navLink: HTMLElement = target.closest(".nav-link") as HTMLElement;
    const navLinkURL: string = navLink.dataset.url as string;

    navigateTo(navLinkURL);
  });
};

export default setNavLinkRouter;
