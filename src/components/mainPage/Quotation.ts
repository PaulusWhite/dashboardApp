const Quotation = (text: string, author: string): string => {
  const view = `
    <p class="quotation__text">"${text}"</p>
    <p class="quotation__author">${author}</p>
  `;

  return view;
};

export default Quotation;
