import React from "react";
import { useAuth } from "../../useCases/context/AuthProvider";
import { Link } from "react-router-dom";

const Report = () => {
  const { reportData, loading, error } = useAuth();
  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }
  if (error) {
    return <div className="text-danger text-center mt-5">{error}</div>;
  }
  return (
    <div>
      <div className="card">
        <div className="card-title text-center">
          <h2>Reports</h2>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                    <td>{item.details}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Link to="/createReport" className="btn btn-success">
            Create a Report
          </Link>
          <Link to="/dashboard" className="btn btn-success mx-2">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Report;
