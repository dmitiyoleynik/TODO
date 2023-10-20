import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import authRouter from './api/auth.api';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send();
});

app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Serversss is running ast http://localhost:${port}`);
});
