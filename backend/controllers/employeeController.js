const Employee = require('../models/Employee');

/**
 * Get all employees.
 * A search can be done using name or department.
 */
const getEmployees = async (req, res) => {
  try {
    const search = req.query.search;

    let employees;

    if (search) {
      employees = await Employee.find({
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { department: { $regex: search, $options: 'i' } }
        ]
      }).sort({ name: 1 });
    } else {
      employees = await Employee.find().sort({ name: 1 });
    }

    res.json(employees);
  } catch (error) {
    console.error('Error getting employees:', error.message);
    res.status(500).json({
      message: 'Failed to get employees'
    });
  }
};

/**
 * Get one employee using their ID.
 */
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: 'Employee not found'
      });
    }

    res.json(employee);
  } catch (error) {
    res.status(400).json({
      message: 'Invalid employee ID'
    });
  }
};

/**
 * Add a new employee.
 */
const createEmployee = async (req, res) => {
  try {
    const { name, role, department, email, phone } = req.body;

    if (!name || !role || !department) {
      return res.status(400).json({
        message: 'Name, role and department are required'
      });
    }

    const employee = await Employee.create({
      name,
      role,
      department,
      email,
      phone
    });

    res.status(201).json(employee);
  } catch (error) {
    console.error('Error creating employee:', error.message);

    res.status(500).json({
      message: 'Failed to create employee'
    });
  }
};

/**
 * Update an existing employee.
 */
const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!employee) {
      return res.status(404).json({
        message: 'Employee not found'
      });
    }

    res.json(employee);
  } catch (error) {
    res.status(400).json({
      message: 'Could not update employee'
    });
  }
};

/**
 * Delete an employee.
 */
const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: 'Employee not found'
      });
    }

    res.json({
      message: 'Employee deleted successfully'
    });
  } catch (error) {
    res.status(400).json({
      message: 'Could not delete employee'
    });
  }
};

module.exports = {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};