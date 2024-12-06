import React from "react";

function Subnav() {
  return (
    <div className="flex gap-3 pt-3  border-t-[1px] border-b-[1px] pb-3">
      <button className="px-[12px] py-[5px] bg-[#4d4d4d] border-[#949494] border text-white hover:bg-white hover:text-black rounded-3xl font-normal text-sm leading-5">
        Kino
      </button>
      <button className="px-[12px] py-[5px] bg-[#4d4d4d] border-[#949494] border text-white hover:bg-white hover:text-black rounded-3xl font-normal text-sm leading-5">
        Comedy
      </button>
      <button className="px-[12px] py-[5px] bg-[#4d4d4d] border-[#949494] border text-white hover:bg-white hover:text-black rounded-3xl font-normal text-sm leading-5">
        Mix
      </button>
      <button className="px-[12px] py-[5px] bg-[#4d4d4d] border-[#949494] border text-white hover:bg-white hover:text-black rounded-3xl font-normal text-sm leading-5">
        Cartoons{" "}
      </button>
      <button className="px-[12px] py-[5px] bg-[#4d4d4d] border-[#949494] border text-white hover:bg-white hover:text-black rounded-3xl font-normal text-sm leading-5">
        Muzik{" "}
      </button>
      <button className="px-[12px] py-[5px] bg-[#4d4d4d] border-[#949494] border text-white hover:bg-white hover:text-black rounded-3xl font-normal text-sm leading-5">
        Futbol{" "}
      </button>
      <button className="px-[12px] py-[5px] bg-[#4d4d4d] border-[#949494] border text-white hover:bg-white hover:text-black rounded-3xl font-normal text-sm leading-5">
        El sanatları{" "}
      </button>
      <button className="px-[12px] py-[5px] bg-[#4d4d4d] border-[#949494] border text-white hover:bg-white hover:text-black rounded-3xl font-normal text-sm leading-5">
        UX Tasarım{" "}
      </button>
      <button className="px-[12px] py-[5px] bg-[#4d4d4d] border-[#949494] border text-white hover:bg-white hover:text-black rounded-3xl font-normal text-sm leading-5">
        Animasyon{" "}
      </button>
      <button className="px-[12px] py-[5px] bg-[#4d4d4d] border-[#949494] border text-white hover:bg-white hover:text-black rounded-3xl font-normal text-sm leading-5">
        Görsel sanatlar
      </button>
      <button className="px-[12px] py-[5px] bg-[#4d4d4d] border-[#949494] border text-white hover:bg-white hover:text-black rounded-3xl font-normal text-sm leading-5">
        Son yüklenenler{" "}
      </button>
    </div>
  );
}

export default Subnav;
