//Icons
import CheckIcon from "../../assets/icons/CheckIcon";

//Components
import BackBtn from "../common/BackBtn";
import InpitField from "./InputField";

const MyTodoListsPage = (): string => {
  const placeholder: string = "Create new list";
  const applyBtnText: string = "Create";

  const view: string = `
    <main class="my-todo-lists">
      <h1>${CheckIcon()} My Todo Lists</h1>

      <ul class="my-todo-lists__list"></ul>

      <h3 class="my-todo-lists__no-lists none">You do not have any lists yet</h3>

      ${InpitField(placeholder, applyBtnText)}

      ${BackBtn("/")}
    </main>
  `;

  return view;
};

export default MyTodoListsPage;
