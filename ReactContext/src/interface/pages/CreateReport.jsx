import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../useCases/context/AuthProvider";

const CreateReport = () => {
  const [status, setStatus] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const { refreshData } = useAuth();

  const postData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/reports", {
        title,
        author,
        date,
        status,
        details,
      });
      refreshData(); // Trigger data refresh
      navigate("/report");
    } catch (error) {
      console.error("Error adding a report:", error);
      alert("Failed to add report. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Add New Income/Expense</h1>
      <form onSubmit={postData} className="shadow p-4 rounded">
        <div className="form-group mb-3">
          <label htmlFor="amount">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="amount">Details</label>
          <input
            type="text"
            id="details"
            className="form-control"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Author</label>
          <input
            type="text"
            id="author"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Status</label>
          <div className="form-check">
            <input
              type="radio"
              id="approved"
              name="status"
              value="approved"
              className="form-check-input"
              checked={status === "approved"}
              onChange={() => setStatus("approved")}
            />
            <label htmlFor="income" className="form-check-label">
              Approved
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="pending"
              name="status"
              value="pending"
              className="form-check-input"
              checked={status === "pending"}
              onChange={() => setStatus("pending")}
            />
            <label htmlFor="expense" className="form-check-label">
              Pending
            </label>
          </div>
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

export default CreateReport;
