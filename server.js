const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Patient = require('./hospitalDb');

app.use(express.json());

//Home route
app.get('/', (req, res) => {
    res.send("Medical API is running...");
})

//fetch Hopital patients
app.get('/patients', async(req, res) => {
    try{
        const patients = await Patient.find({});
        res.status(200).json(patients)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
})


//Database connection
mongoose.connect('mongodb://localhost:27017/Medical-API')
.then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
        console.log("Medical API app is running on port 3000");
    })
}).catch((error) => {
    console.log(error)
})