const mongoose = require("mongoose");

/**
 * Mongoose model for an employee record.
 * Fields are intentionally simple for the demo app.
 * @module models/Employee
 */
const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

/**
 * Employee model exported for use in controllers and scripts.
 * @type {import('mongoose').Model}
 */
module.exports = mongoose.model("Employee", employeeSchema);
