const MainPage = (): string => {
  const view = `
    <main class="main">
      <div section="forecast"></div>

      <div class="wrapper">

        <div class="greeting">
          <p class="greeting__time"></p>
          <p class="greeting__name"></p>
        </div>

        <div class="feauters-panel"></div>
      </div>

    </main>
  `

  return view;
}

export default MainPage;