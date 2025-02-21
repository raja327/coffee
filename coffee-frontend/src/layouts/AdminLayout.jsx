import { Outlet } from "react-router-dom";
import AdminSidebar from "../pages/admin/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-[256px_1fr] ">
      <div>
        <AdminSidebar />
      </div>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
