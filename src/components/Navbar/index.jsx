import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between pt-3 pb-3">
      <div className="flex gap-6">
        <img src="/hamburgerbutton.svg" alt="" />
        <img src="/Logo.svg" alt="" />
      </div>
      <div className="flex">
        <input
          className="bg-[#000000] w-[574px] text-white"
          type="text"
          placeholder="Ara"
        />
        <button className="px-5 py-1 flex justify-center items-center bg-[#FFFFFF33]">
          <img src="/search.svg" alt="" />
        </button>
      </div>
      <div className="flex gap-6">
        <button>
          <img src="/camera.svg" alt="" />
        </button>
        <button>
          <img src="/left-topbar.svg" alt="" />
        </button>
        <button>
          <img src="/bell.svg" alt="" />
        </button>
        <img src="/pp.png" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
