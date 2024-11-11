import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../useCases/context/AuthProvider";

const Create = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("income");
  const navigate = useNavigate();
  const { refreshData } = useAuth();

  const postData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/income-expenses", {
        type,
        amount,
        description,
        date,
      });
      refreshData(); // Trigger data refresh
      navigate("/dashboard");
    } catch (error) {
      console.error("Error adding income/expense:", error);
      alert("Failed to add income/expense. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Add New Income/Expense</h1>
      <form onSubmit={postData} className="shadow p-4 rounded">
        <div className="form-group mb-3">
          <label>Type</label>
          <div className="form-check">
            <input
              type="radio"
              id="income"
              name="type"
              value="income"
              className="form-check-input"
              checked={type === "income"}
              onChange={() => setType("income")}
            />
            <label htmlFor="income" className="form-check-label">
              Income
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="expense"
              name="type"
              value="expense"
              className="form-check-input"
              checked={type === "expense"}
              onChange={() => setType("expense")}
            />
            <label htmlFor="expense" className="form-check-label">
              Expense
            </label>
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
