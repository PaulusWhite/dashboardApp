interface IGetReadableDateData {
  dayIndex: number;
  monthIndex: number;
}

interface IError extends Error {
  message: string;
  name: string;
  description: string;
  code?: number;
}

export { IGetReadableDateData, IError };
