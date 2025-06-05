
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routers/Routers.js')

const app = express();
app.use(cors());
app.use(express.json());
app.use('/Appointment', router);

const url = "mongodb+srv://mhkrimi:OkozgUuS4tUwGA6b@cluster0.ejyckft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// connect to the atlas database.
mongoose.connect(url).then(() => {
    console.log("server is connected successfully");
    app.listen(5000, () => {
        console.log("server is running on port 5000");
    })
}).catch((error) => {
    console.error("cant connect to the server.", error);
})
