const UserNameInputWindow = (): string => {
  const view = `
    <section class="username-input-window none hide">

      <div class="username-input-window__field">
        <input type="text" id="username-input" placeholder="please, enter your name">
        <button class="username-input-window__okBtn">enter</button>
      </div>

    </section>
  `

  return view;
}

export default UserNameInputWindow;