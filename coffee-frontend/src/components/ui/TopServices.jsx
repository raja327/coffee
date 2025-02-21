import { Link } from "react-router-dom";
import { useGetTopServicesQuery } from "../../features/serviceApi";

const TopServices = () => {
  const { data, isLoading } = useGetTopServicesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <ul className="grid grid-cols-3  px-28 py-16 gap-6 w-screen ">
      {data?.services?.map((item) => (
        <li key={item._id} className="cursor-pointer  ">
          <Link to={`/menus/${item._id}`} className="flex gap-4">
            <img
              src={`${
                item.image.startsWith("http")
                  ? item.image
                  : "https://images.unsplash.com/photo-1609898793184-7d1496532e84?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              } `}
              alt="image"
            />
            <div>
              <p className="font-medium text-base leading-8">{item.name}</p>
              <p className="font-normal text-lg leading-6">
                Rs {item.description}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TopServices;
