//Icons
import CheckIcon from "../../assets/icons/CheckIcon";

//Components
import BackBtn from "../components/common/BackBtn";
import InpitField from "../components/todoApp/InputField";

const MyTodoListsPage = (): string => {
  const placeholder: string = "Create new list";
  const applyBtnText: string = "Create";

  const view = `
    <main class="todo-lists-page">
      <h1>${CheckIcon()} My Todo Lists</h1>

      <ul class="todo-lists-page__list"></ul>

      <h3 class="todo-lists-page__no-lists none">You do not have any lists yet</h3>

      ${InpitField(placeholder, applyBtnText)}

      ${BackBtn("/")}
    </main>
  `;

  return view;
};

export default MyTodoListsPage;
