import { NextFunction } from 'connect';
import express, { Request, Response } from 'express';

const app: express.Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello There!')
});

app.listen(5000, () => console.log('Server running at port 5000'));