import React from "react";

function Desc({ children }) {
  return (
    <div>
      <div className="font-normal text-[18px] md:text-2xl leading-8 mt-4">
        <div dangerouslySetInnerHTML={{ __html: children }}></div>
      </div>
    </div>
  );
}

export default Desc;
