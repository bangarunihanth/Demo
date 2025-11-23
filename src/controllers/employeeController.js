const Employee = require('../models/employee.model');



// Create
exports.createEmployee = async (req, res) => {
try {
const { id, employeeName, salary } = req.body;
if (!id || !employeeName || salary == null) {
return res.status(400).json({ message: 'id, employeeName and salary are required' });
}
const exists = await Employee.findOne({ id });
if (exists) return res.status(409).json({ message: 'Employee with id already exists' });
const employee = new Employee({ id, employeeName, salary });
await employee.save();
res.status(201).json(employee);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};

// Read all
exports.getAllEmployees = async (req, res) => {
try {
const employees = await Employee.find().sort({ id: 1 });
res.json(employees);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};


// Read one
exports.getEmployeeById = async (req, res) => {
try {
const emp = await Employee.findOne({ id: Number(req.params.id) });
if (!emp) return res.status(404).json({ message: 'Not found' });
res.json(emp);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};


// Update
exports.updateEmployee = async (req, res) => {
try {
const updates = req.body;
const emp = await Employee.findOneAndUpdate({ id: Number(req.params.id) }, updates, { new: true });
if (!emp) return res.status(404).json({ message: 'Not found' });
res.json(emp);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};


// Delete
exports.deleteEmployee = async (req, res) => {
try {
const emp = await Employee.findOneAndDelete({ id: Number(req.params.id) });
if (!emp) return res.status(404).json({ message: 'Not found' });
res.json({ message: 'Deleted' });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Server error' });
}
};