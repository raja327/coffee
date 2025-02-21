import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <>
      <Link
        to="/"
        className="text-[#6A3D2A] font-semibold hover:underline transition-all"
      >
        &larr; Back to Home
      </Link>
    </>
  );
};

export default BackToHome;
