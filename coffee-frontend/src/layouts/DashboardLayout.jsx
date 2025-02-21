import { Outlet, useNavigate } from "react-router-dom";

import UserSidebar from "../pages/dashboard/UserSidebar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { persistor } from "../state/store";
import { toast } from "react-toastify";

const DashboardLayout = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    persistor.purge(); // Clear persisted state
    toast.success("Logged out successfully!");
    navigate("/login");
  };
  return (
    <div className="grid grid-cols-[256px_1fr] ">
      <div>
        <aside className="fixed h-screen w-64 bg-gray-800 text-white flex flex-col">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-2xl font-bold text-white">Dashboard</h3>
            <p className="text-sm text-gray-400">{user?.name}</p>
          </div>
          <UserSidebar />
          <button
            onClick={handleLogout}
            className="p-4 bg-red-600 hover:bg-red-700 text-center"
          >
            Logout
          </button>
        </aside>
      </div>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
