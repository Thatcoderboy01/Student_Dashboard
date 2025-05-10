// src/api/mockApi.js
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Create mock adapter instance
const mock = new MockAdapter(axios, { delayResponse: 1000 });

// Mock student data
let students = [
  { id: 1, name: "Ravi", email: "ravi@example.com", course: "BCA" },
  { id: 2, name: "Priya", email: "priya@example.com", course: "MBA" },
  { id: 3, name: "Ritesh Ray", email: "ritesh@example.com", course: "BCA" },
];

// Mock GET /api/students
mock.onGet("/api/students").reply(200, students);

// Mock POST /api/students (optional)
mock.onPost("/api/students").reply(config => {
  const newStudent = JSON.parse(config.data);
  const studentWithId = { ...newStudent, id: students.length + 1 };
  students.push(studentWithId);
  return [200, studentWithId];
});

// Just importing this file in your app will activate the mock
export default mock;