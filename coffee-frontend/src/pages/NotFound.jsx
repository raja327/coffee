import BackToHome from "../components/ui/BackToHome";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Animated GIF */}
      <div className="mb-6">
        <iframe
          width="600"
          height="400"
          alt="404 Error"
          className="mb-4"
          src="https://lottie.host/embed/e73ca6f3-2b12-45c4-8e38-21e95ca4104c/qIVbucWIjF.lottie"
        ></iframe>
      </div>

      {/* Heading and Text */}
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">
        Oops! The page you are looking for doesn&apos;t exist.
      </p>

      {/* Button to Homepage */}
      <BackToHome />
    </div>
  );
};

export default NotFound;
