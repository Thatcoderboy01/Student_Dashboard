import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LogOut,
  GraduationCap,
  Mail,
  UserRound,
  CalendarDays,
  Menu,
  PlusCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';
import StudentForm from './StudentForm';

const StudentDetails = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      if (!user) {
        navigate('/login');
        return;
      }

      try {
        const studentCollection = collection(db, 'students');
        const snapshot = await getDocs(studentCollection);
        const studentsFromDB = snapshot.docs.map(doc => {
          const data = doc.data();
          const avatarURL = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(data.name)}`;
          return { ...data, avatar: avatarURL, id: doc.id };
        });

        setStudents(studentsFromDB);
        setFilteredStudents(studentsFromDB);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, [user, navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = students.filter(student =>
      student.name.toLowerCase().includes(value)
    );
    setFilteredStudents(filtered);
  };

  const handleAddStudent = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleStudentAdded = (newStudent) => {
    const avatarURL = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(newStudent.name)}`;
    const updatedStudent = { ...newStudent, avatar: avatarURL };
    const updatedList = [...students, updatedStudent];
    setStudents(updatedList);
    setFilteredStudents(updatedList);
    setShowForm(false);
  };

  if (students.length === 0) return <p className="text-center mt-10 text-gray-600">Loading student details...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 relative">
      {/* Navbar */}
      <div className="bg-blue-600 p-4 shadow-lg flex justify-between items-center relative">
        <h1 className="text-white text-2xl font-semibold">🎓 Students Dashboard</h1>

        {/* Mobile Menu */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <Menu size={28} />
          </button>

          {menuOpen && (
            <div className="absolute top-16 right-4 bg-white rounded-xl shadow-lg p-4 w-60 z-50 space-y-3">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search by name"
                className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm"
              />
              <button
                onClick={handleAddStudent}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-md flex items-center justify-center gap-2 text-sm"
              >
                <PlusCircle size={16} /> Add Student
              </button>
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-md flex items-center justify-center gap-2 text-sm"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>

        {/* Desktop Controls */}
        <div className="hidden sm:flex items-center gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by name"
            className="px-3 py-1.5 border border-gray-300 rounded-md text-sm"
          />
          <button
            onClick={handleAddStudent}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl shadow-md text-sm"
          >
            <PlusCircle size={16} /> Add Student
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-xl shadow-md text-sm"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      {/* Student Grid */}
      <div className="w-full max-w-7xl mx-auto mt-10 px-4">
        {filteredStudents.length === 0 ? (
          <p className="text-center text-gray-500">No students found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredStudents.map((student, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center hover:shadow-2xl transition-transform hover:scale-[1.02]"
              >
                <img
                  src={student.avatar}
                  alt={`${student.name}'s avatar`}
                  className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-md mb-4"
                />
                <h2 className="text-xl font-bold text-gray-800 text-center mb-1 flex items-center gap-2">
                  <UserRound size={18} /> {student.name}
                </h2>
                <p className="text-sm text-blue-500 mb-3 text-center flex items-center gap-2">
                  <GraduationCap size={16} /> {student.course}
                </p>

                <div className="text-sm text-gray-600 space-y-2 w-full">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Roll:</span> {student.rollNumber}
                  </p>
                  <p className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    <span className="font-semibold">Year:</span> {student.year}
                  </p>
                  <p className="flex items-center gap-2 break-words">
                    <Mail size={16} />
                    <span className="font-semibold">Email:</span> {student.email}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal with Blur Background */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex justify-center items-center p-4 backdrop-blur-sm bg-white/30">
          <div className="bg-white p-6 rounded-2xl w-full max-w-lg shadow-xl relative">
            <button
              onClick={handleCloseForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
            >
              &times;
            </button>
            <StudentForm onClose={handleCloseForm} onStudentAdded={handleStudentAdded} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDetails;
