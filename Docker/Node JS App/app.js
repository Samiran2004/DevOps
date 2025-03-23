const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
dotenv.config();

const app = express();
app.use(cors());

const viewsPath = path.resolve(__dirname, 'views');
const publicPath = path.resolve(__dirname, 'Public');
// Setup view engine...
app.set('view engine', 'ejs');
app.set('views', viewsPath);

app.get('/', (req, res)=>{
    try {
        return res.render("Home")
    } catch (error) {
        return res.status(500).json({
            status: 'Failed',
            message: "Internal Server Error!"
        });
    }
});
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log("Server connection error...");
    } else {
        console.log(`Server connected on port: ${process.env.PORT}`);
    }
});