import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Testimonial = () => {
  return (
    <div className="px-4 lg:px-24 mt-14  grid grid-cols-1 lg:grid-cols-2 items-center  bg-[url('https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-blend-overlay bg-gray-900">
      <div className="relative flex flex-col  items-center py-16 gap-24">
        <img
          className=" sm:w-[350px] sm:h-[361px] bg-cover z-10"
          src="https://clickdribble.com/wp-content/uploads/2023/03/wp10139539.webp"
          alt=""
        />
        <div className="absolute w-[350px] h-[361px] bg-transparent outline outline-8 outline-white outline-700 ml-8 mt-6 rounded-sm"></div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-white text-sm sm:text-lg">John Doe, Student</p>
          <p className="text-xl sm:text-3xl tracking-wider">⭐⭐⭐⭐⭐</p>
        </div>

        {/* <div className="absolute left-64 rectangleShape w-[350px] h-[361px] bg-cyan-700"></div> */}
      </div>
      <div className="secondPart text-white">
        <div className="py-3 text-3xl lg:text-[44px]">
          <ImQuotesLeft />
        </div>
        <blockquote className="text-[#FFFDF8] text-justify z-10 text-sm sm:text-xl  lg:text-2xl sm:leading-8 lg:leading-10 font-normal">
          The Himalayan Java Coffee house had the best coffee around Pokhara.The
          shop is quiet, clean and has an outdoor sitting area to enjoy your
          coffee and people watch. The staff are very friendly and very helpful.
          The muffins here are also very good.
        </blockquote>
        <div>
          <ImQuotesRight className="float-right text-3xl lg:text-[44px]" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
