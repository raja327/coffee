import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import {
  useDeleteMenuMutation,
  useGetAllMenusQuery,
} from "../../features/menuApi";
import Pagination from "../../components/ui/Pagination";

const MenuList = () => {
  const { data } = useGetAllMenusQuery();
  const [deleteMenu] = useDeleteMenuMutation();

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Adjust the number of items per page

  // Handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  // Filter menu based on search input
  const filteredMenus = data?.data?.menu?.filter((menu) =>
    menu.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil((filteredMenus?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedMenus = filteredMenus?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this menu item?")) {
      await deleteMenu(id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Title Section */}
      <div className="relative text-center mb-10">
        <h2 className="font-bold text-4xl py-4">Menu</h2>
        <p className="text-lg text-gray-600 leading-7">
          Explore our delicious menu, freshly prepared with high-quality
          ingredients.
        </p>

        {/* Search box */}
        <div>
          <input
            type="text"
            placeholder="Search menu..."
            value={searchTerm}
            onChange={handleSearch}
            className="text-black py-2 px-6 mt-4 rounded-md border border-gray-300"
          />
        </div>

        {/* Create Button */}
        <div>
          <NavLink
            to="/admin/menus/create"
            className="absolute top-32 right-0 bg-blue-700 text-white py-2 px-6 mt-4 rounded-md"
          >
            Create <span>+</span>
          </NavLink>
        </div>
      </div>

      {/* Menu Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="w-full border-collapse bg-white">
          {/* Table Header */}
          <thead className="bg-[#005163] text-white">
            <tr>
              <th className="py-3 px-6 text-left">Image</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {paginatedMenus?.length > 0 ? (
              paginatedMenus.map((menu) => (
                <tr key={menu._id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6">
                    <img
                      src={menu.image || "https://via.placeholder.com/60"}
                      alt={menu.name}
                      className="w-14 h-14 object-cover rounded"
                    />
                  </td>
                  <td className="py-3 px-6">{menu.name}</td>
                  <td className="py-3 px-6">{menu.category}</td>
                  <td className="py-3 px-6 font-semibold">Rs {menu.price}</td>
                  <td className="py-3 px-6 flex gap-4">
                    {/* Edit Button */}
                    <Link
                      to={`/admin/menus/update/${menu._id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Pencil size={20} />
                    </Link>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(menu._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No menu items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default MenuList;
