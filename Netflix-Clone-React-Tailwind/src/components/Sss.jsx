import React from "react";
import { Disclosure } from "@headlessui/react";
import Title from "./Title";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from "react";
import Desc from "./Desc";
import Email from "./Email";
import SSS from "../api/sss.json";

function Sss() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(SSS.SSS);
  }, []);

  return (
    <div className="pt-[10px]">
      <div className="bg-black flex flex-col py-[70px] items-center ">
        <div className="text-center tracking-[-3px]">
          <Title>Sıkça Sorulan Sorular</Title>
        </div>
        <div className="mt-8 ">
          {item.map((e) => (
            <Disclosure key={e.id}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="text-[24px] [word-spacing:-8px] w-[75vw] font-thin mb-1 mt-3 text-left p-6 flex justify-between items-center   bg-[#2D2D2D] hover:bg-[#484747] transition-colors">
                    {e.question}
                    <div className="h-[36px] w-[36px]">
                      <AiOutlinePlus
                        className={
                          open
                            ? "h-full w-full rotate-45 transform"
                            : "h-full w-full"
                        }
                      ></AiOutlinePlus>
                    </div>
                  </Disclosure.Button>

                  <Disclosure.Panel className="">
                    <div
                      to="/"
                      className="w-[75vw] [word-spacing:-8px] h-full text-left bg-[#2d2d2d] p-6 pt-3 flex  items-center  font-medium text-[15px] "
                    >
                      <Desc>{e.answer}</Desc>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
        <h3 className="w-[75vw] text-[20px] mt-[40px] px-8 font-normal leading-6 text-center">
          İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için
          tek yapmanız gereken <br></br> e-posta adresinizi girmek.
        </h3>
        <Email></Email>
      </div>
    </div>
  );
}

export default Sss;
