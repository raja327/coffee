import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import MenuPage from "./pages/MenuPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./routes/ProtectedRoute";
// import Dashboard from "./pages/dashboard/Dashboard";
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import DashboardProfile from "./pages/dashboard/DashboardProfile";
import AdminRoute from "./routes/AdminRoute";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddService from "./pages/admin/AddService";
import AddMenu from "./pages/admin/AddMenu";
import MenuDetails from "./pages/MenuDetails";
import AdminMenuList from "./pages/admin/MenuList"; // form "./pages/admin/MenuList";
import UpdateMenu from "./pages/admin/UpdateMenu";
// import Service from "./pages/Service";
import Service from "./pages/Service";
import CartPage from "./pages/CartPage";
// import OrderList from "./pages/admin/OrderList";
// import OrderDetails from "./pages/dashboard/OrderDetails";
import OrderList from "./pages/dashboard/OrderList";
import AdminOrderList from "./pages/admin/AdminOrderList";
import DashboardLayout from "./layouts/DashboardLayout";
import AllSearch from "./pages/AllSearch";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "services", element: <Service /> },
        { path: "search", element: <AllSearch /> },
        {
          path: "menus",
          children: [
            { index: true, element: <MenuPage /> },
            { path: ":id", element: <MenuDetails /> },
          ],
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          ),
        },
        // { path: "/order/:id", element: <OrderPage /> },
      ],
    },
    {
      path: "dashboard",
      element: (
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        { path: "", element: <DashboardOverview /> },
        { path: "profile", element: <DashboardProfile /> },
        { path: "orders/", element: <OrderList /> },
      ],
    },
    // admin routes [protected]
    {
      path: "admin",
      element: <AdminRoute />,
      children: [
        {
          element: <AdminLayout />,
          children: [
            { index: true, element: <AdminDashboard /> },
            { path: "services", element: <AddService /> },
            { path: "menus", element: <AdminMenuList /> },
            { path: "menus/create", element: <AddMenu /> },
            { path: "menus/update/:id", element: <UpdateMenu /> },
            { path: "orders", element: <AdminOrderList /> },

            // { path: "view", element: <MenuPage /> },  // Added MenuPage under admin
          ],
        },
      ],
    },

    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    { path: "*", element: <NotFound /> },

    // {
    //   path: '/',
    //   element: <MainLayout />,
    //   children: [
    //     { path: '', element: <Home /> },
    //     { path: 'menu', element: <Menu /> },
    //     { path: 'services', element: <Services /> },
    //     { path: 'profile', element: <Profile /> },
    //     { path: 'login', element: <Login /> },
    //     { path: 'register', element: <Register /> },
    //   ],
    // },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
