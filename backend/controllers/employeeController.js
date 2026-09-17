const Employee = require("../models/Employee");

/**
 * Retrieve a list of employees. Supports optional `search` query to
 * filter by name or department.
 * @param {import('express').Request} req - Express request
 * @param {import('express').Response} res - Express response
 * @returns {Promise<void>}
 */
const getEmployees = async (req, res) => {
  try {
    const search = req.query.search;

    let employees;

    if (search) {
      employees = await Employee.find({
        $or: [
          { name: { $regex: search, $options: "i" } },
          { department: { $regex: search, $options: "i" } },
        ],
      }).sort({ name: 1 });
    } else {
      employees = await Employee.find().sort({ name: 1 });
    }

    res.json(employees);
  } catch (error) {
    console.error("Error getting employees:", error.message);
    res.status(500).json({
      message: "Failed to get employees",
    });
  }
};

/**
 * Retrieve a single employee by MongoDB ID.
 * Returns 404 when no matching employee is found.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns {Promise<void>}
 */
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json(employee);
  } catch (error) {
    res.status(400).json({
      message: "Invalid employee ID",
    });
  }
};

/**
 * Create a new employee document.
 * Validates required fields and returns the created resource.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns {Promise<void>}
 */
const createEmployee = async (req, res) => {
  try {
    const { name, role, department, email, phone } = req.body;

    if (!name || !role || !department) {
      return res.status(400).json({
        message: "Name, role and department are required",
      });
    }

    const employee = await Employee.create({
      name,
      role,
      department,
      email,
      phone,
    });

    res.status(201).json(employee);
  } catch (error) {
    console.error("Error creating employee:", error.message);

    res.status(500).json({
      message: "Failed to create employee",
    });
  }
};

/**
 * Update an existing employee by ID. Returns the updated document.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns {Promise<void>}
 */
const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json(employee);
  } catch (error) {
    res.status(400).json({
      message: "Could not update employee",
    });
  }
};

/**
 * Delete an employee by ID. Responds with a success message on deletion.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns {Promise<void>}
 */
const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json({
      message: "Employee deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Could not delete employee",
    });
  }
};

module.exports = {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
