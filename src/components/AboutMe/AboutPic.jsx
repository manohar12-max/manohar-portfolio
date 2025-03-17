import React from "react";

const AboutPic = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img className="h-full object-cover " src="/about-me.jpg" alt="about-me"  />
      </div>
      <div className="bg-orange h-[500px] w-[250px] absolute bottom-[-30px] left-[-30px] rounded-bl-[120px]  rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px]   -z-10 "></div>
    </div>
  );
};

export default AboutPic;
