import { Link } from "react-router-dom";

const UserSidebar = () => {
  return (
    <nav className="flex-1 p-4">
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="block hover:text-gray-300">
            Overview
          </Link>
        </li>
        <li>
          <Link to="/dashboard/profile" className="block hover:text-gray-300">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/dashboard/orders/" className="block hover:text-gray-300">
            Orders
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserSidebar;
