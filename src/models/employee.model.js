const mongoose = require('mongoose');


const EmployeeSchema = new mongoose.Schema({
id: { type: Number, required: true, unique: true },
employeeName: { type: String, required: true },
salary: { type: Number, required: true }
}, { timestamps: true });


module.exports = mongoose.model('Employee', EmployeeSchema);