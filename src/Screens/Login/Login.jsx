import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Config/Firebase/FirebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      // Redirect or perform other actions
    } catch (error) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2021/10/11/04/08/university-6699377_640.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-6">
        <div className="text-white md:w-1/2 p-6">
          <h1 className="text-4xl font-bold mb-4">Congratulations <span className="inline-block">🎉</span></h1>
          <p className="mb-4">Welcome to online portal!</p>
          <p className="mb-4">
            To finish your enrolment, please complete your registration with your personal, academic details, and fee payment.
          </p>
          <p className="mb-4">Thank you for choosing our university and see you soon!</p>
        </div>
        <div className="bg-white  bg-opacity-50 p-8 rounded-xl shadow-lg md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <p className="mb-4">Welcome onboard with us!</p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-black-700">Admin Email ID</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-black-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <a href="#" className="text-sm text-black-600">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white p-2 rounded font-bold"
            >
              Login as Admin
            </button>
          </form>
          <p className="mt-4 text-sm text-black-600">
            Are you a student?{" "}
            <a href="#" className="text-blue-500">Login as a student</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;


