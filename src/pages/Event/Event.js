import React from "react";
import birthdayCake from "../../images/BirthdayCake.png";
import date from "../../images/date.png";
import location from "../../images/location.png";

const Event = () => {
  return (
    <div className="flex justify-between mt-[100px] mx-10">
      <div className=" ">
        <img src={birthdayCake} className="w-[500px] h-[500px]" alt="" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl mt-9 mb-4 text-[#240D57]">Birthday Bash</h1>
        <p className="text-[#828282] mb-5">Hosted by Elysia</p>
        <form>
          <div class="form-control">
            <label class="input-group">
              <span>Event Name</span>
              <input
                type="text"
                placeholder="Enter Event Name"
                class="input input-bordered"
              />
            </label>
          </div>
          <div class="form-control mt-2">
            <label class="input-group">
              <span>Host Name</span>
              <input
                type="text"
                placeholder="Enter Host Name"
                class="input input-bordered"
              />
            </label>
          </div>
          <div class="form-control mt-3">
            <label class="input-group input-group-lg">
              <span>Start Date</span>
              <input
                type="Date"
                placeholder="Type here"
                class="input input-bordered input-lg"
              />
            </label>
          </div>
          <div class="form-control mt-3">
            <label class="input-group input-group-lg">
              <span>End Date</span>
              <input
                type="Date"
                placeholder="Type here"
                class="input input-bordered input-lg"
              />
            </label>
          </div>
          <div class="form-control mt-3">
            <label class="input-group">
              <span>Photo Url</span>
              <input
                type="text"
                placeholder="Enter photo url"
                class="input input-bordered"
              />
            </label>
          </div>
          <p className="pt-12">
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg normal-case text-xl"
              style={{ background: "linear-gradient(#8456EC, #E87BF8)" }}
            >
              Submit
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Event;
