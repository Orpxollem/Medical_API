const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema(
    {
    patientID: {
        type: String,
        required: [true, 'Patient name is required']
    },
    surname: {
        type: String,
        required: [true, 'Patient surname is required']
    },
    othernames: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    residentialAddress: {
        type: String,
        required: true
    },
    emergencyName: {
        type: String,
        required: true
    },
    emergencycontact: {
        type: String,
        required: true
    },
    emergencyContactRelationship: {
        type: String,
        required: true
    },
    }
)

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;