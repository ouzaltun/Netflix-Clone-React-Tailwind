import React from "react";

function Title({ children }) {
  return (
    <div>
      <div className="text-5xl font-black [word-spacing:-20px] ">
        {children}
      </div>
    </div>
  );
}

export default Title;
