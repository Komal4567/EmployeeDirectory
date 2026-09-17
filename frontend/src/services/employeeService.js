const API_URL = "http://localhost:5000/api/employees";

/**
 * Fetch a list of employees from the API. Optionally supply a search
 * term to filter results by name or department.
 * @param {string} [search=''] - Optional search string
 * @returns {Promise<Array>} Resolves to an array of employee objects
 */
export const getEmployees = async (search = "") => {
  const url = search
    ? `${API_URL}?search=${encodeURIComponent(search)}`
    : API_URL;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  return response.json();
};

/**
 * Create a new employee record via the API.
 * @param {Object} employee - Employee data
 * @returns {Promise<Object>} The created employee
 */
export const addEmployee = async (employee) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });

  if (!response.ok) {
    throw new Error("Failed to add employee");
  }

  return response.json();
};

/**
 * Update an existing employee by ID.
 * @param {string} id - Employee MongoDB _id
 * @param {Object} employee - Fields to update
 * @returns {Promise<Object>} The updated employee
 */
export const updateEmployee = async (id, employee) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });

  if (!response.ok) {
    throw new Error("Failed to update employee");
  }

  return response.json();
};

/**
 * Delete an employee by ID.
 * @param {string} id - Employee MongoDB _id
 * @returns {Promise<void>} Resolves when deletion succeeds
 */
export const deleteEmployee = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete employee");
  }
};
