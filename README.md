# Employee Directory

A full-stack Employee Directory application built with React, Node.js, Express.js, and MongoDB.

## Features

- View all employees
- Search employees by name or department
- Add new employees
- Edit employee details
- Delete employees
- Store employee data in MongoDB

## Technologies Used

- React.js
- Vite
- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- CSS

## Project Structure

```text
employee-directory/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── seed.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   └── ...
│
└── README.md

Getting Started

Backend
cd backend
npm install
npm run dev

Frontend
Open a new terminal:
cd frontend
npm install
npm run dev

Database

The application uses MongoDB to store employee information.
Create a .env file inside the backend folder and add your MongoDB connection string:
MONGODB_URI=your_mongodb_connection_string
PORT=5000

To add sample employee data:

cd backend
npm run seed
