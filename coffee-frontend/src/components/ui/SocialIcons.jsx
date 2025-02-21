import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialIcons = ({
  // eslint-disable-next-line react/prop-types
  mobileColors = ["#000", "#000", "#000"],
  // eslint-disable-next-line react/prop-types
  largeScreenColors = ["#FFF", "#FFF", "#FFF"],
}) => {
  const [iconColors, setIconColors] = useState(mobileColors);

  useEffect(() => {
    const handleResize = () => {
      setIconColors(
        window.innerWidth >= 960 ? largeScreenColors : mobileColors
      );
    };

    handleResize(); // Set initial color
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileColors, largeScreenColors]);

  return (
    <div className="social-links">
      <ul className="flex space-x-4 mt-4">
        <li>
          <a href="#">
            <FaFacebookF size={15} color={iconColors?.[0] || "#000"} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaYoutube size={19} color={iconColors?.[1] || "#000"} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram size={21} color={iconColors?.[2] || "#000"} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
