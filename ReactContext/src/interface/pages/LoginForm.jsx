import React, { useContext, useState } from "react";
import { useAuth } from "../../useCases/context/AuthProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const auth = useAuth();
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "employee",
  });
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (input.email !== "" && input.password !== "") {
      try {
        const success = await auth.loginAction(input);
        if (success) {
          navigate("/dashboard"); // Navigate on successful login
        }
      } catch (error) {
        alert("Login Failed: " + error.message);
      }
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
    <div className="">
      <div className="container mt-5 ">
        <h1 className="text-center">Account Management System</h1>
        <form onSubmit={submitHandler} className="">
          <h2 className="mb-4">Choose your role</h2>
          <div className="form-group mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                name="role"
                value="admin"
                type="radio"
                checked={input.role === "admin"}
                onChange={inputHandler}
                id="role-admin"
              />
              <label className="form-check-label" htmlFor="role-admin">
                Admin
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                name="role"
                value="employee"
                type="radio"
                onChange={inputHandler}
                checked={input.role === "employee"}
                id="role-employee"
              />
              <label className="form-check-label" htmlFor="role-employee">
                Employee
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                name="role"
                value="superadmin"
                type="radio"
                onChange={inputHandler}
                checked={input.role === "superadmin"}
                id="role-superadmin"
              />
              <label className="form-check-label" htmlFor="role-superadmin">
                Super Admin
              </label>
            </div>
          </div>
          <div className="form-group mb-4">
            <input
              type="email"
              name="email"
              className="form-control"
              aria-label="email"
              onChange={inputHandler}
              value={input.email}
              id="email-id"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password"
              name="password"
              className="form-control"
              aria-label="password"
              onChange={inputHandler}
              value={input.password}
              placeholder="Enter Password"
              id="password-id"
            />
          </div>
          <button className="btn btn-primary btn-block" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
