import React from "react";
import { useAuth } from "../../useCases/context/AuthProvider";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SuperAdminDashboard = () => {
  const { role, logOut, incomeData, loading, error } = useAuth();

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }
  if (error) {
    return <div className="text-danger text-center mt-5">{error}</div>;
  }

  const totalIncome = incomeData
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + parseInt(item.amount), 0);

  const totalExpense = incomeData
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + parseInt(item.amount), 0);

  const incomeItems = incomeData.filter((item) => item.type === "income");
  const expenseItems = incomeData.filter((item) => item.type === "expense");

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Super Admin Dashboard</h1>

      <div className="mb-4">
        <h4>Total Income: {totalIncome}</h4>
        <h4>Total Expense: {totalExpense}</h4>
      </div>

      <h3>Income Table</h3>
      <table className="table table-striped mb-5">
        <thead className="thead-dark">
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {incomeItems.map((item) => (
            <tr key={item.id}>
              <td>{item.amount}</td>
              <td>{item.description}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Expense Table</h3>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenseItems.map((item) => (
            <tr key={item.id}>
              <td>{item.amount}</td>
              <td>{item.description}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between mt-4">
        <Link to="/create" className="btn btn-success">
          Create Income/Expense
        </Link>
      
        <button className="btn btn-danger" onClick={logOut}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
