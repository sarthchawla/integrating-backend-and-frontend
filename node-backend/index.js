const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

const dotenv = require('dotenv');
dotenv.config(); // inserts all the env vars at process.env

app.get('/', (req, res) => {
    //res.send("Hi Hello");
    res.json({ message: "CHANGES IN BACKEND" });
});

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port number = ${process.env.PORT}`);
})