import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './api/mockApi.js';
import StudentList from './components/StudentList';
import Login from './components/Login';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import ProtectedRoute from './components/PrivateRoute.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-student" element={
            <ProtectedRoute>
              <StudentForm />
            </ProtectedRoute>
          
          } />
        <Route
          path="/student-details"
          element={
            <ProtectedRoute>
              <StudentDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;