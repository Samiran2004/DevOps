import express from "express";

const app = express();
const PORT = 3000;

app.get('/health', (req, res) => {
    return res.status(200).json({
        status: 'OK',
        message: "Server is up and running..."
    });
});

app.listen(PORT, (err) => {
    if (err) {
        console.log("Server connection error...");
    } else {
        console.log(`Server connected on port ${PORT}`);
    }
});