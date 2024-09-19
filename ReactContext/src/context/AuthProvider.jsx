import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || "");
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  const loginAction = async (data) => {
    try {
      const response = await fetch(`http://localhost:3000/api/users`, {
        method: "GET",
      });
      const users = await response.json();
      const user = users.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (user && user.role === data.role) {  
        setUser(user.email);
        setToken(user.token);
        setRole(user.role);
        localStorage.setItem("site", user.token);
        localStorage.setItem("role", user.role);
        localStorage.setItem("user", user.email);
        navigate("/dashboard");
        return;
      }
      throw new Error("Invalid Credentials");
    } catch (err) {
      console.error("Login Error", err);
      alert("Login Failed: " + err.message);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    setRole("");
    localStorage.removeItem("site");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, role, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
