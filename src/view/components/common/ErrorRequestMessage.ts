const ErrorRequestMessage = (message: string): string => {
  const view = `
    <h2 class="error-request-message">${message}</h2>
  `;

  return view;
};

export default ErrorRequestMessage;
