import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Expresssss + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Serversss is running ast http://localhost:${port}`);
});
