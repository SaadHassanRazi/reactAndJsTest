import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div>
      <div className="card">
        <div className="card-title text-center">
          <h2>Unauthorized Access</h2>
        </div>
        <div className="card-body">
          <p>You Currently do not have permission to access this page</p>
          <Link className="btn btn-success" to={"/dashboard"}>
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
