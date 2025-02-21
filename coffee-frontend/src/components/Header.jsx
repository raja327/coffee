import { Link } from "react-router-dom";
import roastedCoffee from "../assets/roasted-coffee.svg";
import Nav from "./ui/Nav";
import SocialIcons from "./ui/SocialIcons";

const Header = () => {
  return (
    <header className="relative w-full h-screen flex flex-col lg:grid lg:grid-cols-2 mb-4 lg:mb-20">
      <Nav />

      {/* Second Part Background (Mobile: Covers Entire Background) */}
      <div className="block lg:hidden absolute inset-0 h-screen bg-[url('https://images.unsplash.com/photo-1517640033243-dc06bb716df5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center lg:relative lg:w-full lg:h-auto lg:bg-none">
        {/* Overlay to make text readable */}
        <div className="absolute inset-0 bg-black opacity-30 lg:hidden"></div>
      </div>

      {/* First Part (Content) */}
      <div className="relative z-10 flex flex-col  justify-around lg:items-center  px-4 lg:px-28 h-screen text-white lg:text-inherit lg:text-black">
        {/* Faded Coffee Bean Image */}
        <div>
          <img
            src={roastedCoffee}
            alt="roasted coffee"
            className="absolute w-[318px] h-[323px] rotate-[120deg] -top-28 -left-28 opacity-10"
          />
        </div>

        {/* Hero Text */}
        <div className="flex flex-col lg:pt-20 gap-4 h-full justify-center items-center text-center lg:items-start lg:text-left">
          <h1 className="text-3xl leading-normal md:text-4xl lg:text-5xl font-bold md:leading-[48px] text-white lg:text-[#6A3D2A]">
            From Crop To Cup
          </h1>
          <p className="lg:text-lg font-normal lg:leading-8">
            Himalayan Java Coffee Beans are grown locally and are roasted to
            perfection in the ideal Himalayan air. It is then packaged
            immediately and rushed off to our outlets which ensures we deliver
            the best coffee experience possible for all of our customers.
          </p>

          {/* Button */}
          <div>
            <button className="bg-brown-800 text-white py-2 px-6 my-4 hover:bg-white transition-all duration-300 ease-in-out  hover:text-brown-800 lg:border lg:border-brown-800">
              <Link to="/menus">See Menu</Link>
            </button>
          </div>

          {/* Social Icons */}
          <div>
            <SocialIcons
              mobileColors={["#fff", "#fff", "#fff"]}
              largeScreenColors={["#000", "#000", "#000"]}
            />
          </div>
        </div>
      </div>

      {/* Stats Section (Remains at the Bottom) */}
      <div className="relative bg-[url('https://images.unsplash.com/photo-1517640033243-dc06bb716df5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <div className="absolute z-10 w-full flex flex-col md:flex-row justify-around bg-[#4D3D2E] p-4 bottom-0 text-white text-sm">
          <div className="flex gap-2 justify-center">
            <span className="font-bold">7</span>
            <span>Years Experience</span>
          </div>
          <div className="flex gap-2 justify-center">
            <span className="font-bold">25k</span>
            <span>Coffee Consumed</span>
          </div>
          <div className="flex gap-2 justify-center">
            <span className="font-bold">35k+</span>
            <span>Customers</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
