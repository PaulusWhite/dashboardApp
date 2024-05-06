interface IError extends Error {
  message: string;
  name: string;
  description: string;
  code?: number;
}

export { IError };
