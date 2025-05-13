import React, { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import image from "../assets/StudentImg.jpeg";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
  // State variables to manage login form fields, visibility of password, and loading state
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Function to handle login via email/password
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Attempt to sign in with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userEmail = userCredential.user.email;

      // Display success message
      toast.success("Login Successful!");

      // Role-based Redirect: admin to admin-dashboard, others to student-details
      if (userEmail === "admin@example.com") {
        navigate("/admin-dashboard");
      } else {
        navigate("/student-details");
      }

    } catch (err) {
      // Error handling in case of failed login
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setLoading(false); // Reset loading state after login attempt
    }
  };

  // Function to handle Google login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    try {
      // Attempt to sign in using Google sign-in popup
      const result = await signInWithPopup(auth, provider);
      const userEmail = result.user.email;

      // Display success message
      toast.success("Google Sign-In Successful!");

      // Role-based Redirect: admin to admin-dashboard, others to student-details
      if (userEmail === "admin@example.com") {
        navigate("/admin-dashboard");
      } else {
        navigate("/student-details");
      }
    } catch (error) {
      // Error handling in case of failed Google sign-in
      toast.error("Google Sign-In failed.");
    } finally {
      setLoading(false); // Reset loading state after login attempt
    }
  };

  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      <ToastContainer position="top-center" /> {/* Toast container for showing notifications */}

      {/* Diagonal wave SVG background */}
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
          fill="#3B82F6"
          className="wave-path"
        />
      </motion.svg>

      {/* Login Card */}
      <motion.div
        className="relative z-10 w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left side form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex items-center mb-6">
            <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
            <span className="font-semibold text-xl font-bold text-gray-800">Student Dashboard</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">LOGIN</h2>

          {/* Login form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600">Email Address</label>
              <motion.input
                type="email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                placeholder="yourname@email.com"
                required
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            <div className="relative">
              <label className="block text-sm text-gray-600">Password</label>
              <motion.input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
                placeholder="••••••••"
                required
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-600"
                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex justify-end text-sm">
              <a href="#" className="text-blue-500 hover:underline">
                Forgot your password?
              </a>
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded font-semibold text-white transition ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {loading ? "Signing In..." : "LOGIN"}
            </motion.button>

            {/* Google sign-in option */}
            <div className="text-center my-4 text-gray-500">OR</div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center py-2 border rounded text-gray-700 hover:bg-gray-100 transition"
            >
              <FaGoogle className="mr-2" /> Sign in with Google
            </button>
          </form>
        </div>

        {/* Right image (background image on large screens) */}
        <motion.div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* CSS for animated wave effect */}
      <style jsx>{`
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
          animation: waveAnimation 5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Login;
