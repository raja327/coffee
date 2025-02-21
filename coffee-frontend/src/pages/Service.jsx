import { Link } from "react-router-dom";
import { useGetAllServicesQuery } from "../features/serviceApi";

const Service = () => {
  const { data, isLoading } = useGetAllServicesQuery();
  if (isLoading) {
    return <div className="text-center py-10 text-lg">Loading...</div>;
  }

  return (
    <div className="px-8 md:px-16 lg:px-24 py-12">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="font-bold text-4xl text-[#6A3D2A]">Our Services</h2>
        <p className="text-lg text-gray-700 mt-4">
          Himalayan Java offers its customers the best-tasting coffee beverages.
          <br />
          We use high-quality ingredients and strictly follow preparation
          guidelines.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.data?.services?.map((service) => (
            <div
              key={service._id}
              className="bg-gradient-to-br from-[#F9F6F2] to-[#EDE3D9] p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="font-semibold text-2xl text-[#6A3D2A] mt-4">
                {service.name}
              </h3>
              {/* Two-row clamp applied here */}
              <p className="text-gray-700 mt-2 leading-relaxed line-clamp-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="text-[#6A3D2A] font-semibold hover:underline transition-all"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
