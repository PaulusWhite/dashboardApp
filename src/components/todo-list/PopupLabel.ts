const PopupLabel = (text: string): string => {
  const view = `
    <span class="popup-label">${text}</span>
  `;
  return view;
};

export default PopupLabel;
