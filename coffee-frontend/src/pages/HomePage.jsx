import Branches from "./Branches";
import MenuList from "./MenuList";
// import MenuPage from "./MenuPage";
import ServiceList from "./ServiceList";
import Testimonial from "./Testimonial";

const HomePage = () => {
  return (
    <div className="">
      <ServiceList />
      <Branches />
      <MenuList />
      <Testimonial />
    </div>
  );
};

export default HomePage;
