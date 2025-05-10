import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { User, Mail, IdCard, Calendar, Book } from "lucide-react";

const StudentForm = ({ onStudentAdded }) => {
  const [student, setStudent] = useState({
    name: "",
    rollNumber: "",
    course: "",
    year: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const modalRef = useRef();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, rollNumber, course, year, email } = student;

    if (!name || !rollNumber || !course || !year || !email) {
      setError("All fields are required.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      await addDoc(collection(db, "students"), student);
      onStudentAdded(student); // Notify parent
      setSuccess("Student added successfully!");
      setStudent({
        name: "",
        rollNumber: "",
        course: "",
        year: "",
        email: "",
      });
    } catch (err) {
      console.error("Error adding student:", err);
      setError("Failed to add student.");
    }
  };

  return (
    <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl p-6 space-y-4">
      <h2 className="text-center text-xl font-bold text-gray-800 mb-4">
        Add New Student
      </h2>

      {error && <p className="text-red-600 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">{success}</p>}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        {/* Name */}
        <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-sm">
          <User size={18} className="text-gray-500" />
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            placeholder="Student Name"
            className="w-full border-none outline-none text-sm"
          />
        </div>

        {/* Roll Number */}
        <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-sm">
          <IdCard size={18} className="text-gray-500" />
          <input
            type="text"
            name="rollNumber"
            value={student.rollNumber}
            onChange={handleChange}
            placeholder="Roll Number"
            className="w-full border-none outline-none text-sm"
          />
        </div>

        {/* Course */}
        <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-sm">
          <Book size={18} className="text-gray-500" />
          <input
            type="text"
            name="course"
            value={student.course}
            onChange={handleChange}
            placeholder="Course (e.g. BCA)"
            className="w-full border-none outline-none text-sm"
          />
        </div>

        {/* Year */}
        <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-sm">
          <Calendar size={18} className="text-gray-500" />
          <input
            type="text"
            name="year"
            value={student.year}
            onChange={handleChange}
            placeholder="Year (e.g. 2nd)"
            className="w-full border-none outline-none text-sm"
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-sm">
          <Mail size={18} className="text-gray-500" />
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            placeholder="Email address"
            className="w-full border-none outline-none text-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-md font-medium text-sm shadow"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
