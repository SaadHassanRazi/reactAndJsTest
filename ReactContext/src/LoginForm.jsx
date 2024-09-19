import React, { useContext, useState } from "react";
import { useAuth } from "./context/AuthProvider";

const LoginForm = () => {
  const auth = useAuth();
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "employee",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.email !== "" && input.password !== "") {
      auth.loginAction(input);
    } else {
      alert("Please Provide valid credentials");
    }
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Account Management System</h1>
      <form onSubmit={submitHandler}>
        <h2>Choose your role</h2>
        <div id="radios">
          <input
            label="admin"
            name="role"
            value="admin"
            type="radio"
            checked={input.role === "admin"}
            onChange={inputHandler}
          />
          <input
            label="employee"
            name="role"
            value="employee"
            type="radio"
            onChange={inputHandler}
            checked={input.role === "employee"}
          />
          <input
            label="superAdmin"
            name="role"
            value="superAdmin"
            type="radio"
            onChange={inputHandler}
            checked={input.role === "superAdmin"}
          />
        </div>
        <div id="input-group">
          <input
            type="email"
            name="email"
            aria-label="email"
            onChange={inputHandler}
            value={input.email}
            id="email-id"
            placeholder="Enter Email"
          />

          <input
            type="password"
            name="password"
            aria-label="password"
            onChange={inputHandler}
            value={input.password}
            placeholder="Enter Password"
            id="password-id"
          />
        </div>
        <button onSubmit={submitHandler} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
