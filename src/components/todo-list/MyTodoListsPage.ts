//Icons
import CheckIcon from "../../assets/icons/CheckIcon";

//Components
import BackBtn from "../common/BackBtn";

const MyTodoListsPage = (): string => {
  const view: string = `
    <main class="my-todo-lists">
      <h1>${CheckIcon()} My Todo Lists</h1>

      <ul class="my-todo-lists__list"></ul>

      <h3 class="my-todo-lists__no-lists none">You do not have any lists yet<h3>

      ${BackBtn("/")}
    </main>
  `;

  return view;
};

export default MyTodoListsPage;
