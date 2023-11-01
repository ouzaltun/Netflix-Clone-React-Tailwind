import React from "react";
import { IoIosArrowForward } from "react-icons/Io";

function Email() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center text-left mt-4">
        <div className="relative flex items-center justify-center">
          <input
            type="text"
            id="floating_filled"
            className="block min-h-[56px] min-w-[403px] text-white leading-6 bg-[rgba(0,0,0,0.29)] border pl-6 pt-4 pb-2 border-gray-400 rounded peer"
            placeholder=" "
          />
          <label
            for="floating_filled"
            className="absolute text-[14px] text-[#B7B7B7] pl-2 pt-0.4  tracking-wide dark:text-[#B7B7B7] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
          >
            E-posta adresi
          </label>
        </div>

        <div className="ml-2 flex items-center ">
          <button className="flex border mt-4 md:mt-0 py-3 px-6 border-black bg-netflix text-white text-2xl cursor-pointer  tracking-[-0.4px] rounded font-bold transition-colors hover:bg-[#c11119]">
            <div className="max-h-[56px] ">
              <label for="email">Başlayın</label>

              <div className="inline-block ml-2 h-6 w-6">
                <IoIosArrowForward></IoIosArrowForward>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Email;
