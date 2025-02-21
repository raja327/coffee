import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";
import { useGetAllMenusQuery } from "../features/menuApi";

const MenuDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllMenusQuery();

  if (isLoading) {
    return (
      <div className="text-center text-2xl py-10 font-semibold text-[#5A3D2E]">
        Brewing your selection... ☕
      </div>
    );
  }

  const menuItem = data?.data?.menu?.find((item) => item._id === id);

  if (!menuItem) {
    return (
      <div className="text-center text-xl font-medium text-red-500 py-10">
        Menu item not found!
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addItem(menuItem));
  };

  return (
    <div className="w-full min-h-screen bg-[#F5F5F5] py-12 px-4 md:px-12">
      {/* Back Button */}
      <Link
        to="/menus"
        className="flex items-center gap-2 text-[#5A3D2E] hover:text-black transition font-semibold text-lg mb-6"
      >
        <ArrowLeft size={24} />
        <span>Back to Menu</span>
      </Link>

      {/* Menu Details */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 bg-white shadow-lg rounded-lg p-8 md:p-16">
        {/* Image Section */}
        <div className="relative group w-full md:w-1/2">
          <img
            src={menuItem.image || "https://via.placeholder.com/600"}
            alt={menuItem.name}
            className="w-full h-[400px] object-cover rounded-lg shadow-md border border-gray-300 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute top-3 right-3 bg-[#5A3D2E] text-white px-4 py-1 text-sm rounded-full shadow-md">
            {menuItem.category}
          </span>
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <h2 className="text-5xl font-extrabold text-[#5A3D2E]">
            {menuItem.name}
          </h2>
          <p className="text-2xl text-[#5A3D2E] font-semibold mt-3">
            Rs {menuItem.price}
          </p>
          <p className="text-gray-700 mt-4 leading-8 text-lg">
            {menuItem.description}
          </p>

          {/* Order Button */}
          <Link to="/cart">
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full md:w-auto bg-[#5A3D2E] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black transition shadow-md"
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;
