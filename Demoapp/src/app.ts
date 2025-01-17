import express, { Request, Response } from 'express';

const app = express();

app.get('/', (request: Request, response: Response) => {
    response.status(200).send({
        status: "Success",
        message: "App is running..."
    });
})

app.get('/work', (request: Request, response: Response)=>{
    response.status(200).send({
        status: "Success",
        message: "Working :D"
    });
})

app.listen(8000, (err?: Error) => {
    console.log("Server connected");
})