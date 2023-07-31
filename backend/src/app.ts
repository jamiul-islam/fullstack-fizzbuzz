/* eslint-disable no-console */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import config from './config';
const app: Application = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// function that returns fizz, buzz, fizzbuzz
function fizzBuzz(num: number): string | number {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {
    return num;
  }
}

// GET route for fizzbuzz
app.get('/fizzbuzz', (req: Request, res: Response) => {
  const numbers: (string | number)[] = [];
  for (let num = 1; num <= 100; num++) {
    numbers.push(fizzBuzz(num));
  }
  res.json(numbers);
});

// welcome route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the fizzbuzz api');
});

// testing
app.listen(config.port, () => {
  console.log(`api is running on port: ${config.port}`);
});

export default app;
