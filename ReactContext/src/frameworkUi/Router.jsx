import React from "react";
import LoginForm from "../interface/pages/LoginForm";
import ProtectedRoute from "./ProtectedRoute";
import { Route, Routes } from "react-router-dom";

import Dashboard from "../interface/pages/Dashboard";
import Create from "../interface/pages/Create";
import Report from "../interface/pages/Report";
import CreateReport from "../interface/pages/CreateReport";
import Unauthorized from "../interface/components/Unauthorized";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          element={
            <ProtectedRoute
              allowedRoles={["superadmin", "admin", "employee"]}
            />
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route
          element={<ProtectedRoute allowedRoles={["superadmin", "admin"]} />}
        >
          <Route path="/create" element={<Create />} />
          <Route path="/report" element={<Report />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={["superadmin"]} />}>
          <Route path="/createReport" element={<CreateReport />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
