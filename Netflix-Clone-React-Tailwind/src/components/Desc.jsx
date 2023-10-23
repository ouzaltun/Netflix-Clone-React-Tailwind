import React from "react";

function Desc({ children }) {
  return (
    <div>
      <div className="font-normal text-2xl leading-8 mt-4">{children}</div>
    </div>
  );
}

export default Desc;
