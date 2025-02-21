const Branches = () => {
  return (
    <div className="branches flex flex-col justify-center items-center pb-12 lg:px-24 px-4">
      <h2 className=" py-6">Find Us</h2>
      <p className="pb-10 text-center lg:w-1/2 mx-auto">
        Himalayan Java outlets are available withe the best coffee throughout
        the major cities of Nepal.{" "}
      </p>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-12 text-center ">
        <div className="shadow-xl rounded-xl">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1609898793184-7d1496532e84?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p className="py-4">Patan Durbar Square</p>
        </div>
        <div className="shadow-xl rounded-xl">
          <img
            className="w-full  object-cover"
            src="https://images.unsplash.com/photo-1722595631994-6de3b5318da1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxha2VzaWRlJTJDJTIwcG9raGFyYXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <p className="py-4">Lakeside,Pokhara</p>
        </div>
        <div className="shadow-xl rounded-xl">
          <img
            className="w-full  object-cover"
            src="https://pix10.agoda.net/hotelImages/47607076/0/9e6e4b4d3cb3a126a752df25abfd9bf0.jpg?ce=0&s=702x392"
            alt=""
          />
          <p className="py-4">Mandala Street</p>
        </div>
        <div className="shadow-xl rounded-xl">
          <img
            className="w-full  object-cover"
            src="https://www.nepalhorizontreks.com/uploads/namche.jpeg"
            alt=""
          />
          <p className="py-4">Namche Bazar</p>
        </div>
        <div className="shadow-xl rounded-xl">
          <img
            className="w-full  object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Boudhanath_Stupa-IMG_7048.jpg/1280px-Boudhanath_Stupa-IMG_7048.jpg"
            alt=""
          />
          <p className="py-4">Boudhanath Stupa</p>
        </div>
        <div className="shadow-xl rounded-xl">
          <img
            className="w-full  object-cover"
            src="https://ramadaencorekathmandu.com/userfiles/images/pashupati.jpg"
            alt=""
          />
          <p className="py-4">Pasupatinath Marga</p>
        </div>
        <div className="shadow-xl rounded-xl">
          <img
            className="w-full  object-cover"
            src="https://images.unsplash.com/photo-1580321827154-812450ccf214?ixid=M3wzODM4MzZ8MHwxfGFsbHx8fHx8fHx8fDE2ODU5NzQ1NDl8&ixlib=rb-4.0.3&fm=jpg&q=85&fit=crop&w=768&h=1024"
            alt=""
          />
          <p className="py-4">Thamel</p>
        </div>
        <div className="shadow-xl rounded-xl">
          <img
            className="w-full  object-cover"
            src="https://www.nepaltraveladventure.com/blog/wp-content/uploads/2020/02/Untitled-1-copy.jpg"
            alt=""
          />
          <p className="py-4">Basantapur</p>
        </div>
      </div>
    </div>
  );
};

export default Branches;
