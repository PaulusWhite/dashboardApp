const InpitField = (placeholder: string, btnText: string): string => {
  const view = `
    <div class="input-field">
      <input id="input-field__input" type="text" placeholder="${placeholder}">
      <button class="input-field__add-btn">+ ${btnText}</button>
    </div>
  `;

  return view;
};

export default InpitField;
