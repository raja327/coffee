import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { persistor } from "../../state/store";
import { toast } from "react-toastify";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const AdminSidebar = () => {
  const location = useLocation(); // Get current route
  const [menuOpen, setMenuOpen] = useState(false); // State to track the menu open/close
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <aside className="fixed h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-2xl font-bold pb-4 text-center text-white">
          Admin Panel
        </h3>
        <p className="text-sm text-center text-gray-400">{user?.name}</p>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li>
            <Link to="/admin" className="block hover:text-gray-300">
              Overview
            </Link>
          </li>
          <li>
            <Link to="/admin/orders" className="block hover:text-gray-300">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/admin/services" className="block hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            {/* Button to toggle the menu */}

            <button
              onClick={() => setMenuOpen((prev) => !prev)} // Toggle menu open/close
              className="w-full flex justify-between items-center hover:text-gray-300"
            >
              Menu
              {menuOpen ? <FaAngleUp /> : <FaAngleDown />}
            </button>

            {/* Submenu that stays open if inside any /admin/menus route */}
            <ul
              className={`ml-4 mt-2 space-y-2 border-l border-gray-600 pl-4 transition-all duration-300 ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  to="/admin/menus/create"
                  className={`block hover:text-gray-300 ${
                    location.pathname === "/admin/menus/create"
                      ? "font-bold"
                      : ""
                  }`}
                >
                  Create
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/menus"
                  className={`block hover:text-gray-300 ${
                    location.pathname === "/admin/menus" ? "font-bold" : ""
                  }`}
                >
                  View List
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleLogout}
        className="p-4 bg-red-600 hover:bg-red-700 text-center"
      >
        Logout
      </button>
    </aside>
  );
};

export default AdminSidebar;
