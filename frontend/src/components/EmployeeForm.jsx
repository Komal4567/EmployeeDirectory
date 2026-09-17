import { useEffect, useState } from 'react';

function EmployeeForm({ employeeToEdit, onSave, onCancel }) {
  // Stores the values entered in the form
  const [formData, setFormData] = useState({ 
    name: '',
    role: '',
    department: '',
    email: '',
    phone: ''
  });
// Fill the form with existing data when editing an employee
  useEffect(() => {
    if (employeeToEdit) {
      setFormData({
        name: employeeToEdit.name,
        role: employeeToEdit.role,
        department: employeeToEdit.department,
        email: employeeToEdit.email || '',
        phone: employeeToEdit.phone || ''
      });
    }
  }, [employeeToEdit]);
// Update the field that the user is currently typing in
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };
// Stop the page from refreshing and send the form data
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>
        {employeeToEdit ? 'Edit Employee' : 'Add Employee'}
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <div className="form-buttons"> {/* Show Update when editing and Add when creating */}
        <button type="submit">
          {employeeToEdit ? 'Update Employee' : 'Add Employee'}
        </button>

        {employeeToEdit && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default EmployeeForm;