import { Response } from 'express';

interface IResponse<I> {
  statusCode: number;
  success: boolean;
  message?: string | null;
  data: I;
}

const sendResponse = <I>(res: Response, data: IResponse<I>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    message: data.message || null,
    data: data.data,
  });
};

export default sendResponse;
