import React from "react";
import { Link } from "react-router-dom";
import LandingPageImage from "../../images/LandingPageImage.svg";

const Home = () => {
  return (
    <div>
      <div className="ml-[170px] mr-[160px] mt-[100px] flex gap-10 justify-between sm:flex-col-reverse md:flex-col-reverse lg:flex-row">
        <div className="flext items-center justify-center sm:pl-5">
          <img src={LandingPageImage} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <div className="text-right">
            <h1 className=" text-[64px] leading-[64px]">
              Imagine If
              <span
                style={{ backgroundColor: "linear-gradient(#8456EC, #E87BF8)" }}
                className="block"
              >
                Snapchat
              </span>
              <span>had events.</span>
            </h1>
            <p className="text-2xl pt-4">
              Easily host and share events with your friends across any social
              media.
            </p>
            <p className="pt-12">
              <Link to="../Event">
                <button
                  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg normal-case text-xl"
                  style={{ background: "linear-gradient(#8456EC, #E87BF8)" }}
                >
                  Create my event
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
