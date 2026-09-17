const API_URL = 'http://localhost:5000/api/employees';

/**
 * Gets employees from the backend.
 */
export const getEmployees = async (search = '') => {
  const url = search
    ? `${API_URL}?search=${encodeURIComponent(search)}`
    : API_URL;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch employees');
  }

  return response.json();
};

/**
 * Adds a new employee.
 */
export const addEmployee = async (employee) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(employee)
  });

  if (!response.ok) {
    throw new Error('Failed to add employee');
  }

  return response.json();
};

/**
 * Updates an employee.
 */
export const updateEmployee = async (id, employee) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(employee)
  });

  if (!response.ok) {
    throw new Error('Failed to update employee');
  }

  return response.json();
};

/**
 * Deletes an employee.
 */
export const deleteEmployee = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });

  if (!response.ok) {
    throw new Error('Failed to delete employee');
  }
};