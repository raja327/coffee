import img from "../assets/logo/logo.svg";
console.log(img);
const ServiceList = () => {
  const services = [
    {
      title: "Nepali Coffee Beans",
      description:
        "Himalayan Java Coffee offers its customers with locally brewed taste.",
      image:
        "https://woocoffee.ir/wp-content/uploads/2024/07/Layer2-150x150.webp",
    },
    {
      title: "Barista Coffee School",
      description:
        "Himalayan Java Barista Coffee School was introduced to promote the culture of vocational training in Nepal.",
      image:
        "data:image/png;base64,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",
    },
    {
      title: "Coffee Equipment",
      description:
        "Himalayan Java is the sole distributor of various coffee equipment and products in Nepal.",
      image: img,
    },
    {
      title: "Fresh Bakery Items",
      description: "We provide you a wide variety of fresh bakery items.",
      image: "https://cdn-icons-png.flaticon.com/512/4080/4080339.png",
    },
  ];

  return (
    <div className="grid grid-cols-1  lg:grid-cols-[1fr_1.5fr] gap-8 my-32 lg:px-24 text-center px-4">
      <div className="titleSection">
        <h2 className="font-bold text-4xl py-6">Our Services</h2>
        <p className="font-normal text-base sm:text-lg leading-8 py-6">
          Himalayan Java offers its customers the best-tasting coffee beverages
          in the country. We have achieved this by using high-quality
          ingredients and strictly following preparation guidelines.
        </p>
        <button className="outline-none border-2 border-brown-800 py-2 text-black font-medium px-6">
          Contact Us
        </button>
      </div>
      <div className="servicesList">
        <ul className="grid grid-cols-1 md:grid-cols-2 text-center gap-8">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex flex-col justify-center items-center gap-3"
            >
              <img
                className="w-[71px] h-[71px]"
                src={service.image}
                alt={service.title}
              />
              <h3 className="text-base font-medium">{service.title}</h3>
              <p className="text-base leading-6">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceList;
