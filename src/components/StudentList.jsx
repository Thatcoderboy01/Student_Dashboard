import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [filteredCourse, setFilteredCourse] = useState("All");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "students"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStudents(data);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching students:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const filteredStudents =
    filteredCourse === "All"
      ? students
      : students.filter((s) => s.course === filteredCourse);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Wave Background */}
      <motion.svg
        className="absolute inset-0 w-full h-full z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,100 C30,60 70,40 100,0 L100,100 L0,100 Z"
          fill="rgba(59, 130, 246, 0.2)"
          className="wave-path"
        />
      </motion.svg>

      <style jsx="true">{`
        @keyframes waveAnimation {
          0% {
            d: path('M0,100 C30,60 70,40 100,0 L100,100 L0,100 Z');
          }
          50% {
            d: path('M0,100 C40,80 60,30 100,10 L100,100 L0,100 Z');
          }
          100% {
            d: path('M0,100 C30,60 70,40 100,0 L100,100 L0,100 Z');
          }
        }

        .wave-path {
          animation: waveAnimation 6s ease-in-out infinite alternate;
        }
      `}</style>

      {/* Navbar */}
      <header className="bg-blue-600 text-white p-4 shadow-md z-10 relative">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Student Dashboard</h1>
          <nav>
            <ul className="flex gap-4 text-sm">
              <li className="hover:underline font-bold cursor-pointer">Home</li>
              <li className="hover:underline font-bold cursor-pointer">Directory</li>
              <li className="hover:underline font-bold cursor-pointer">About</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 pt-12 pb-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Student Directory
        </h2>

        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <label className="font-medium text-gray-700">Filter by Course:</label>
          <select
            value={filteredCourse}
            onChange={(e) => setFilteredCourse(e.target.value)}
            className="border px-3 py-2 rounded w-full sm:w-64 shadow-sm"
          >
            <option value="All">All</option>
            <option value="BCA">BCA</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MCA">MCA</option>
            <option value="M.Tech">M.Tech</option>
            <option value="BBA">BBA</option>
            <option value="MBA">MBA</option>
          </select>
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            {/* Spinning loader */}
            <div className="w-16 h-16 border-4 border-t-4 border-blue-600 rounded-full animate-spin"></div>
          </div>
        ) : filteredStudents.length === 0 ? (
          <p className="text-center text-red-500 font-medium">No students found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredStudents.map((student) => (
              <motion.div
                key={student.id}
                className="bg-white border border-gray-200 p-5 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer backdrop-blur-sm bg-opacity-80"
                onClick={() => navigate("/login")}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2,
                }}
              >
                <h3 className="text-xl font-semibold text-blue-700">{student.name}</h3>
                <p className="text-gray-700 mt-1">Email: {student.email}</p>
                <p className="text-gray-700">Course: {student.course}</p>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default StudentList;
