const PopupOptions = (): string => {
  const view = `
    <div class="popup-options">
      <button class="popup-options__edit-btn"></button>
      <button class="popup-options__complete-btn"></button>
      <button class="popup-options__important-btn"></button>
      <button class="popup-options__delete-btn"></button>
    </div>
  `;

  return view;
};

export default PopupOptions;
