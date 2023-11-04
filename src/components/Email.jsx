import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Email() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center text-left mt-4 gap-y-4">
        <div className="relative flex items-center justify-center">
          <input
            type="text"
            id="floating_filled"
            className="block min-h-[38px] md:min-h-[56px] max-w-[320px] md:max-w-[404px] md:min-w-[403px] text-white leading-6 bg-[rgba(0,0,0,0.29)] border pl-6 pt-4 pb-2 border-gray-400 rounded peer"
            placeholder=" "
          />
          <label
            for="floating_filled"
            className="absolute text-[14px] text-[#B7B7B7] pl-2   tracking-wide dark:text-[#B7B7B7] duration-300 transform -translate-y-4 scale-75  z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            E-posta adresi
          </label>
        </div>

        <div className="ml-2   ">
          <button className=" border 0.5rem 1rem px-4 md:px-6 border-black bg-netflix text-white text-lg md:text-2xl cursor-pointer  tracking-[-0.4px] rounded font-bold transition-colors hover:bg-[#c11119]">
            <div className=" flex justify-center items-center h-[48px] md:h-[56px] md:pb-1">
              <span>Başlayın</span>

              <div className=" h-[30px] w-[24px]">
                <IoIosArrowForward className="inline-block ml-2 h-full w-full md:mb-2"></IoIosArrowForward>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Email;
