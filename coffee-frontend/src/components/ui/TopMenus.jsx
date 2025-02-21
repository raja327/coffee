import { Link } from "react-router-dom";
import { useGetTopMenusQuery } from "../../features/menuApi";

const TopMenus = () => {
  const { data, isLoading } = useGetTopMenusQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 px-4 py-16">
        {data?.menu?.map((item) => (
          <li
            key={item._id}
            className="flex items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg p-2 rounded-lg"
          >
            <Link
              to={`/menus/${item._id}`}
              className="flex items-center gap-4 hover:text-[#005163]"
            >
              <img
                src={`${
                  item.image.startsWith("http")
                    ? item.image
                    : "https://images.unsplash.com/photo-1609898793184-7d1496532e84?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }`}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
              />
              <div className="text-left">
                <p className="font-medium text-lg transition-all duration-300 hover:text-[#005163]">
                  {item.name}
                </p>
                <p className="font-normal text-base">Rs {item.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopMenus;
