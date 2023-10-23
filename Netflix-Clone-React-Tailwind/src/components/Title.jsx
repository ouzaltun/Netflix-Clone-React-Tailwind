import React from "react";

function Title({ children }) {
  return (
    <div>
      <div className="font-bold text-5xl [word-spacing:-20px] ">{children}</div>
    </div>
  );
}

export default Title;
