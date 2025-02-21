import { Link } from "react-router-dom";
import TopMenus from "../components/ui/TopMenus";
import { useGetAllMenusQuery } from "../features/menuApi";

const MenuList = () => {
  const { data, isLoading } = useGetAllMenusQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return (
    <div className="px-8 md:px-16 lg:px-24">
      <div className="relative titleSection text-center ">
        <h2 className="font-bold text-4xl py-6">Menu</h2>
        <p className="font-normal lg:w-1/2 mx-auto  sm:text-base lg:text-lg leading-8 py-6">
          While most of the food in our menu changes from kitchen to kitchen and
          from cook to cook, what remains the same is our product from the
          bakery.
        </p>
        <div className="absolute right-0 top-20 md:top-10 lg:top-36 font-medium underline text-lg">
          <Link to="/menus">View All</Link>
        </div>
      </div>
      <div className="menuList  bg-[#f6ede0] ">
        <TopMenus />
      </div>
    </div>
  );
};

export default MenuList;
