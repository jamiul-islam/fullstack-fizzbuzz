import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import config from './config';
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.send('welcome to my api');
});

app.listen(config.port, () => {
  console.log(`api is running on port: ${config.port}`);
});

export default app;
