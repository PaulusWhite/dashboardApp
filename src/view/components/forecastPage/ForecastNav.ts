const ForecastNav = (): string => {
  const view = `
    <div class="forecast-nav__periods-list">
      <input type="radio" id="3days" name="period" value="3">
      <label for="3">3 days</label>

      <input type="radio" id="3days" name="period" value="7">
      <label for="7">7 days</label>

      <input type="radio" id="3days" name="period" value="14">
      <label for="14">14 days</label>
    </div>

    <ul class="forecast-nav__period-days-list"></ul>

  `;
  return view;
};

export default ForecastNav;
