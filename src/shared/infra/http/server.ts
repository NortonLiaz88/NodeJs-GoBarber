import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';
import '@shared/infra/database';
import AppError from '@shared/errors/AppError';
import uploadConfing from '@config/upload';

import '@shared/container';

const app = express();
app.use(cors());
const port = 3333;

app.use(express.json());
app.use('/files', express.static(uploadConfing.uploadsFolder));
app.use(routes);

app.use(
  (
    err: Error,
    request: Request,
    response: Response,
    nextFunction: NextFunction,
  ) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.log(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);
app.listen(port, () => {
  console.log(`🚀 Server started on port ${port} !`);
});
