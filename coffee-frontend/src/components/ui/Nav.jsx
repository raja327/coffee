import { useState, useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for detecting outside clicks

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 py-4 lg:top-4 w-full lg:w-auto ${
        isScrolled
          ? "bg-[#5A3D2E] text-white py-2 shadow-md sm:rounded-md md:rounded-none lg:rounded-md px-10"
          : "bg-transparent text-[#3E2723]"
      }`}
    >
      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center items-center mr-4">
        <div className="first-part flex gap-x-3 md:gap-x-12">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-all duration-300 ${
                  isActive
                    ? "text-yellow-600"
                    : "text-white hover:underline-offset-4 hover:underline  lg:text-inherit "
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `transition-all duration-300 ${
                  isActive
                    ? "text-yellow-600"
                    : "text-white hover:underline-offset-4 hover:underline lg:text-inherit"
                }`
              }
            >
              Services
            </NavLink>
          </li>
        </div>

        <div className="logo-part">
          <li className="flex flex-col items-center lg:px-14 px-4">
            <NavLink to="/" className="flex flex-col items-center">
              <img src={logo} alt="logo" className="w-14 h-14" />
              <p className="text-sm font-satisfy text-white lg:text-inherit">
                Coffeehouse
              </p>
            </NavLink>
          </li>
        </div>

        <div className="second-part flex gap-x-3 md:gap-x-12">
          <li>
            <NavLink
              to="/menus"
              className={({ isActive }) =>
                `transition-all duration-300 ${
                  isActive
                    ? "text-yellow-400"
                    : "text-white text-inherit hover:underline-offset-4 hover:underline"
                }`
              }
            >
              Menus
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-all duration-300 ${
                  isActive
                    ? "text-yellow-400"
                    : "md:text-white text-inherit hover:underline-offset-4 hover:underline"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className="md:text-white text-inherit hover:underline-offset-4 transition-all duration-300"
            >
              <BiSearch size={24} />
            </NavLink>
          </li>
        </div>
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center justify-between px-4">
        {/* Logo on the left */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-12 h-12" />
        </NavLink>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#3E2723] focus:outline-none"
        >
          {isMenuOpen ? (
            <HiX size={30} color="white" />
          ) : (
            <HiMenu size={30} color="white" />
          )}
        </button>
      </div>

      {/* Dropdown Menu (Mobile) */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 left-0 w-full bg-[#5A3D2E] text-white flex flex-col items-center py-5 space-y-4 shadow-lg"
        >
          <NavLink
            to="/about"
            className="hover:text-yellow-400"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="hover:text-yellow-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/menus"
            className="hover:text-yellow-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Menus
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-yellow-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>

          {/* Search Input for Mobile */}
          <div className="flex items-center w-3/4 border border-white rounded-md px-2 py-1">
            <BiSearch size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-2 text-white w-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
