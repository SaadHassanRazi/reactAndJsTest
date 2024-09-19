import React from "react";
import LoginForm from "./LoginForm";
import ProtectedRoute from "./ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Create from "./Create";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          element={
            <ProtectedRoute
              allowedRoles={["superAdmin", "admin", "employee"]}
            />
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route
          element={<ProtectedRoute allowedRoles={["superAdmin", "admin"]} />}
        >
          <Route path="/create" element={<Create />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
