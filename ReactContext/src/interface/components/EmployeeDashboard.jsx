import React from "react";
import { useAuth } from "../../useCases/context/AuthProvider";

const EmployeeDashboard = () => {
  const { role, logOut, incomeData, loading, error } = useAuth();

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }
  if (error) {
    return <div className="text-danger text-center mt-5">{error}</div>;
  }
  return (
    <div>
      <h1>Employee Dashboard</h1>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {incomeData.map((item) => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.description}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-danger" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
};

export default EmployeeDashboard;
