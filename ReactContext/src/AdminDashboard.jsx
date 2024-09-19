import React, { useEffect, useState } from "react";
import { useAuth } from "./context/AuthProvider";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const { role, logOut } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      if (role === "admin") {
        try {
          const response = await axiosInstance.get("admin/apiUrl");
          if (response.status === 200) {
            const data = response.data;
            console.log(data);
          } else {
            console.error("Failed to Fetch Data");
          }
        } catch (error) {
          console.error("Error", error);
        }
      }
    };
    fetchData();
  }, [role]);
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link to={"./create"}>
        <button>Create Expense</button>
      </Link>
      <button onClick={logOut}>LogOut</button>
    </div>
  );
};

export default AdminDashboard;
