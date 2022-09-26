import React from "react";
import birthdayCake from "../../images/BirthdayCake.png";

const Event = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[100px]">
        <img src={birthdayCake} width="50%" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center mt-9">
        <h1 className="text-5xl mt-9 mb-4 text-[#240D57]">Birthday Bash</h1>
        <p className="text-[#828282]">Hosted by Elysia</p>
      </div>
    </div>
  );
};

export default Event;
