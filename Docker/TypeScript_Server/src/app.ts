// index.ts
import express, { Request, Response } from 'express';

const app = express();

const PORT = process.env.PORT || 3000

interface ApiRes {
  status: string;
  message: string;
}

app.get('/', (req: Request, res: Response<ApiRes>) => {
  console.log("Request on / route...");
  return res.status(200).json({
    status: 'OK',
    message: 'Home route!',
  });
});

app.listen(PORT, () => {
  console.log(`Server connected on port ${PORT}`);
});