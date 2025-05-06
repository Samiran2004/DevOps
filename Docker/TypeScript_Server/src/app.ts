import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

interface ApiRes {
  status: string;
  message: string;
}

app.get('/', (req: Request, res: Response) => {
  console.log("Request on / route...");
  const response: ApiRes = {
    status: 'OK',
    message: 'Home route!',
  };
  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});