import React from "react";
import LandingPageImage from "../../images/LandingPageImage.svg";

const Home = () => {
  return (
    <div className="ml-[170px] mt-[100px]">
      <div>
        <img src={LandingPageImage} alt="" />
      </div>
      <div>
        <h1 className=" text-[64px] leading-[64px]">
          Imagine If
          <span className="bg-gradient-[#8456EC 100% #E87BF8  100%]">
            Snapchat
          </span>
          <span>had events.</span>
        </h1>
        <p>
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>
    </div>
  );
};

export default Home;
