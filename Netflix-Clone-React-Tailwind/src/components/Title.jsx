import React from "react";

function Title({ children }) {
  return (
    <div>
      <div className="md:text-5xl text-[32px] font-bold md:font-black md:[word-spacing:-20px] [word-spacing:-10px] ">
        {children}
      </div>
    </div>
  );
}

export default Title;
