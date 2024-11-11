import React from "react";
import AdminDashboard from "../components/AdminDashboard";
import EmployeeDashboard from "../components/EmployeeDashboard";
import { useAuth } from "../../useCases/context/AuthProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import SuperAdminDashboard from "../components/SuperAdminDashboard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, role } = useAuth();

  return (
    <div className="container  rounded mt-5">
      <h2 className="text-center mb-4">Dashboard Page</h2>
      <h3 className="text-center mb-4">
        Logged In as: <span className="text-primary">{user}</span>
      </h3>
      <ul class="nav">
        <li class="nav-item">
          <Link class="nav-link text-warning" to={"/report"}>
            Company Reports
          </Link>
        </li>
      </ul>

      <div className="card shadow">
        <div className="card-body">
          {role === "superadmin" ? (
            <SuperAdminDashboard />
          ) : role === "admin" ? (
            <AdminDashboard />
          ) : (
            <EmployeeDashboard />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
