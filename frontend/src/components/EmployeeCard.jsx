// Shows the details and actions for one employee
function EmployeeCard({ employee, onEdit, onDelete }) {
  return (
    <div className="employee-card"> {/* Edit and delete actions */}
      <h3>{employee.name}</h3>

      <p>{employee.role}</p>

      <p>
        <strong>Department:</strong> {employee.department}
      </p>

      <p>
        <strong>Email:</strong> {employee.email || 'Not provided'}
      </p>

      <p>
        <strong>Phone:</strong> {employee.phone || 'Not provided'}
      </p>

      <div className="card-buttons">
        <button onClick={() => onEdit(employee)}>
          Edit
        </button>

        <button onClick={() => onDelete(employee._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;