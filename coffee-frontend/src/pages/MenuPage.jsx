import { Link } from "react-router-dom";
import BackToHome from "../components/ui/BackToHome";
import { useGetAllMenusQuery } from "../features/menuApi";
import { Coffee } from "lucide-react";

const MenuPage = () => {
  const { data, isLoading } = useGetAllMenusQuery();

  if (isLoading) {
    return (
      <div className="text-center text-2xl py-10 font-semibold text-[#5A3D2E]">
        Brewing your menu... ☕
      </div>
    );
  }

  return (
    <div className="px-4 md:px-12 lg:px-24 py-10 bg-white">
      <h2 className="font-extrabold text-4xl py-6 text-center text-[#5A3D2E]">
        Explore Our Coffee Menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data?.data?.menu?.map((menu) => (
          <div
            key={menu._id}
            className="relative bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-300 flex flex-col"
          >
            <Link to={`/menus/${menu._id}`}>
              <img
                src={menu.image}
                alt={menu.name}
                className="w-full h-52 object-cover rounded-lg"
              />
              <h3 className="font-bold text-2xl mt-4 text-[#5A3D2E]">
                {menu.name}
              </h3>
              <p className="text-gray-600 line-clamp-2 mt-2">
                {menu.description}
              </p>
            </Link>

            {/* Price and Button Fixed */}
            <div className="flex justify-between items-center mt-auto min-h-[60px]">
              <p className="font-extrabold text-xl text-[#5A3D2E] flex items-center">
                <Coffee className="w-5 h-5 text-[#5A3D2E] mr-2" />${menu.price}
              </p>
              <Link
                to={`/menus/${menu._id}`}
                className="text-white bg-[#5A3D2E] font-semibold py-2 px-6 rounded-full hover:bg-black transition-all duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <BackToHome />
      </div>
    </div>
  );
};

export default MenuPage;
