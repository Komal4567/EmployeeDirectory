require('dotenv').config();

const connectDB = require('./config/db');
const Employee = require('./models/Employee');

const employees = [
  {
    name: 'Aarav Sharma',
    role: 'Frontend Developer',
    department: 'Engineering',
    email: 'aarav@example.com',
    phone: '9876543210'
  },
  {
    name: 'Priya Mehta',
    role: 'UI/UX Designer',
    department: 'Design',
    email: 'priya@example.com',
    phone: '9876543211'
  },
  {
    name: 'Rohan Gupta',
    role: 'Backend Developer',
    department: 'Engineering',
    email: 'rohan@example.com',
    phone: '9876543212'
  },
  {
    name: 'Ananya Verma',
    role: 'HR Manager',
    department: 'Human Resources',
    email: 'ananya@example.com',
    phone: '9876543213'
  },
  {
    name: 'Karan Singh',
    role: 'Sales Executive',
    department: 'Sales',
    email: 'karan@example.com',
    phone: '9876543214'
  }
];

/**
 * Adds sample employees to the database.
 */
const seedEmployees = async () => {
  try {
    await connectDB();

    await Employee.deleteMany();

    await Employee.insertMany(employees);

    console.log('Sample employees added');

    process.exit();
  } catch (error) {
    console.error('Error adding employees:', error.message);
    process.exit(1);
  }
};

seedEmployees();