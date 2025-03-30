import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (email && password) {
      console.log("User Registered:", { email, password });
      setMessage("Registration Successful!");
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  return (
    <div>
      <div>
        <h2>Sign Up</h2>

        {message && <p>{message}</p>}

        <form onSubmit={handleSignup} >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            // className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
