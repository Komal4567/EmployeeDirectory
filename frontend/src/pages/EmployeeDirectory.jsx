import { useEffect, useState } from "react";

import SearchBar from "../components/SearchBar";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/employeeService";

function EmployeeDirectory() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  /**
   * Loads employees from the backend.
   */
  const loadEmployees = async () => {
    try {
      const data = await getEmployees(search);
      setEmployees(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, [search]);

  /**
   * Adds a new employee or updates existing one.
   */
  const handleSave = async (employee) => {
    try {
      if (employeeToEdit) {
        await updateEmployee(employeeToEdit._id, employee);
        setEmployeeToEdit(null);
      } else {
        await addEmployee(employee);
      }

      loadEmployees();
    } catch (error) {
      console.error(error.message);
    }
  };

  /**
   * Deletes an employee.
   */
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?",
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteEmployee(id);
      loadEmployees();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Employee Directory</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <EmployeeForm
        employeeToEdit={employeeToEdit}
        onSave={handleSave}
        onCancel={() => setEmployeeToEdit(null)}
      />

      <EmployeeList
        employees={employees}
        onEdit={setEmployeeToEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default EmployeeDirectory;
