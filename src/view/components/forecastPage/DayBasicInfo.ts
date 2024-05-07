const DayBasicInfo = (): string => {
  const view = `
    <div class="day-basic-info__location">
      <span class="day-basic-info__location-name"></span>
    </div>

    <div class="day-basic-info__info">
      <span class="today-basic-info__temp"></span>
      <span class="today-basic-info__wind"></span>
    </div>
  `;

  return view;
};

export default DayBasicInfo;
