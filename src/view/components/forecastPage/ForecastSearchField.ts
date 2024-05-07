const ForecastSearchField = (): string => {
  const view = `
    <div class="forecast-search-field">
      <input type="text" id="forecast-search-input">
      <button class="forecast-search-field__search-btn">Search</button>
    </div>
  `;

  return view;
};

export default ForecastSearchField;
