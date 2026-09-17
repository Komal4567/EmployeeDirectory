import EmployeeCard from './EmployeeCard';

function EmployeeList({ employees, onEdit, onDelete }) {
  if (employees.length === 0) {     // Display a message when there are no employees
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