const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();


const connectDB = require('./config/db');
const employeeRoutes = require('./routes/employee.routes');


const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


app.use('/api/employees', employeeRoutes);


app.get('/', (req, res) => res.send('Employee microservice running'));


const PORT = process.env.PORT || 3000;


connectDB().then(() => {
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
});