import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate for React Router v6

function Login() {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use useNavigate for React Router v6

  // This function will be triggered when the user submits the login form
  const handleLogin = (e) => {
    e.preventDefault();

    // Get the list of users stored in localStorage
    const usersData = JSON.parse(localStorage.getItem("usersData")) || [];

    // Check if the entered email and password match any stored user
    const foundUser = usersData.find((user) => user.email === email && user.password === password);

    if (foundUser) {
      // If user is found, login successful
      // Store user details in sessionStorage (or localStorage, depending on your needs)
      sessionStorage.setItem("authToken", "someGeneratedAuthToken"); // You can generate or retrieve an actual auth token
      sessionStorage.setItem("AdminName", foundUser.name);

      // Navigate to the admin dashboard or any other protected route
      navigate("/Admin");

      console.log("Login successful:", foundUser.name);
      setError(null); // Clear any previous errors
    } else {
      // If user is not found, display an error message
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md" style={{ marginTop: "-50px" }}>
        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 p-2 border rounded w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 p-2 border rounded w-full"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="text-center">
            <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
