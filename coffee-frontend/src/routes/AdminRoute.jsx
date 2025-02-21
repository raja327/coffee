import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const { role, isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated && role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" />
  );
};

export default AdminRoute;
