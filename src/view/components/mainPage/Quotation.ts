const Quotation = (content: string, author: string): string => {
  const view = `
    <p class="quotation__text">"${content}"</p>
    <p class="quotation__author">${author}</p>
  `;

  return view;
};

export default Quotation;
