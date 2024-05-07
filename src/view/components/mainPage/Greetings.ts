//store
import store from "../../../model/store";

const Greetings = (time: string): string => {
  let userName: string | null = store.getState().userName;
  userName = userName ? userName : "Buddy";
  const greetingPhrase: string = `Hello, dear ${userName}`;

  const view = `
    <p class="greeting__time">${time}</p>
    <p class="greeting__name">${greetingPhrase}</p>
  `;

  return view;
};

export default Greetings;
