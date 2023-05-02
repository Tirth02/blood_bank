const mongoose = require('mongoose')

const { PATIENT } = require('../constants/roles')


const Schema = mongoose.Schema;

// the Client is NOT the User
const PatientSchema = new Schema({
    name: { type: String, unique: true, required: true },
    id: { type: String, required: true },
    secret: { type: String, required: true },
    userId: { type: String, required: true },
});

module.exports = mongoose.model('Patients',PatientSchema);