import express from "express";

const app = express();
const PORT = 3000;

app.get('/health', (req, res) => {
    console.log("Request on /health route...");
    return res.status(200).json({
        status: 'OK',
        message: "Server is up and running..."
    });
});

app.get("/", (req, res) => {
    console.log("Request on / route...");
    return res.status(200).json({
        status: 'OK',   
        message: "Home route"
    });
})

app.listen(PORT, (err) => {
    if (err) {
        console.log("Server connection error...");
    } else {
        console.log(`Server connected on port ${PORT}`);
    }
});