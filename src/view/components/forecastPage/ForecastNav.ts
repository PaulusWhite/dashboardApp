const ForecastNav = (): string => {
  const view = `
    <h3 class="forecast-nav__heading">The Next Days Forecast</h3>

    <div class="forecast-nav__periods-list">
      <input type="radio" id="3days" name="period" value="3" checked>
      <label for="3days">3 days</label>

      <input type="radio" id="7days" name="period" value="7">
      <label for="7days">7 days</label>

      <input type="radio" id="14days" name="period" value="14">
      <label for="14days">14 days</label>
    </div>

    <ul class="forecast-nav__period-days-list"></ul>

  `;
  return view;
};

export default ForecastNav;
