import React from "react";
import AdminDashboard from "./AdminDashboard";
import EmployeeDashboard from "./EmployeeDashboard";
import { useAuth } from "./context/AuthProvider";

const Dashboard = () => {
  const { user, role } = useAuth();
  return (
    <div>
      <h2>Dashboard Page</h2>
      <h3>Logged In as {user}</h3>
      {role === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </div>
  );
};
export default Dashboard;
