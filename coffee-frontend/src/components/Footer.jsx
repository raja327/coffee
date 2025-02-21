import { Link } from "react-router-dom";
import SocialIcons from "./ui/SocialIcons";

const Footer = () => {
  return (
    <div className="px-24">
      <div className="footer-firstPart grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] lg:justify-between gap-4  pt-20 pb-10 text-center ">
        <div className="flex flex-col gap-4">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Services</Link>
          <Link to="/">Team</Link>
          <Link to="/">FAQs</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Contact Us</Link>
        </div>
        <div className="flex flex-col gap-4 contact">
          <h3>Contact</h3>
          <div className="flex flex-col gap-2">
            <pre>Tridevi marg, Thamel</pre>
            <pre>Kathmandu,Nepal</pre>

            <pre>#info@himalayanjava.com</pre>
            <pre>+977-[0]1-4435171</pre>
          </div>
        </div>

        <div className="">
          <iframe
            className="w-full min-h-[200px]  rounded-[10px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.105614311399!2d85.31391999999997!3d27.714025200000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190286e454ad%3A0xb002146d30bac2e5!2sHimalayan%20Java%20-%20Tridevi%20Thamel!5e0!3m2!1sen!2snp!4v1738209778971!5m2!1sen!2snp"
          ></iframe>
        </div>
      </div>
      <div className="footer-secondPart  grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] lg:justify-between j  py-10">
        <div>Copyright@ {new Date().getFullYear()} HimalayanJava</div>
        <div>
          <SocialIcons
            mobileColors={["#3B5998", "#FF0000", "#000"]}
            largeScreenColors={["#3B5998", "#FF0000", "#000"]}
          />
        </div>
        <div>Created by Rajaram Neupane</div>
      </div>
    </div>
  );
};

export default Footer;
