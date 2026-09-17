import EmployeeCard from "./EmployeeCard";

/**
 * Render a list of employees as cards. When the list is empty
 * a small informational message is shown.
 * @param {{employees: Array, onEdit: function, onDelete: function}} props
 * @returns {JSX.Element}
 */
function EmployeeList({ employees, onEdit, onDelete }) {
  if (employees.length === 0) {
    // Display a message when there are no employees
    return <p className="no-employees">No employees found.</p>;
  }

  return (
    <div className="employee-list">
      {/* Create one card for each employee */}
      {employees.map((employee) => (
        <EmployeeCard
          key={employee._id}
          employee={employee}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default EmployeeList;
