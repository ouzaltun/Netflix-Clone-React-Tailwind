import React from "react";
import footerlist from "../api/footer.json";
import { useState, useEffect } from "react";
import Language from "./Language";
function Footer() {
  const [footerItem, setFooterItem] = useState([]);

  useEffect(() => {
    setFooterItem(footerlist.FooterLinks);
  }, []);

  return (
    <div>
      <div className=" bg-black mt-[10px] text-[#ffffffb3] gap-y-4">
        <div className="py-[72px] px-[32px] md:px-[142px]">
          <p>
            Sorularınız mı var?{" "}
            <a className="border-b-2 border-slate-400 mb-3" href="#">
              0850-390-7444
            </a>{" "}
            numaralı telefonu arayın
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full my-3 font-normal text-[14px] underline decoration-solid gap-y-4">
            {footerItem.map((item, index) => (
              <div key={index}>
                <a href="#">{item.Text}</a>
              </div>
            ))}
          </div>
          <div className="w-[129px] mt-6 ">
            <Language></Language>
          </div>

          <p className="text-[14px] mt-6">OzzyFlix Türkiye</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
