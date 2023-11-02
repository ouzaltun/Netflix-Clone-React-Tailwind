import React from "react";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import Title from "./Title";
import { AiOutlinePlus } from "react-icons/ai";
import Desc from "./Desc";

function Sss() {
  return (
    <div>
      <div className="bg-black flex flex-col py-[70px] items-center ">
        <div className="text-center tracking-[-3px]">
          <Title>Sıkça Sorulan Sorular</Title>
        </div>
        <div className="mt-8 ">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="text-[24px] [word-spacing:-8px] w-[75vw] mb-1 text-left p-6 flex justify-between items-center  font-bold bg-[#2D2D2D] hover:bg-[#484747] transition-colors">
                  Netflix nedir?
                  <AiOutlinePlus
                    height={32}
                    width={32}
                    className={open ? "rotate-45 transform" : ""}
                  ></AiOutlinePlus>
                </Disclosure.Button>

                <Disclosure.Panel className="">
                  <div
                    to="/"
                    className="w-[75vw] [word-spacing:-8px] h-full text-left bg-[#2d2d2d] p-6 pt-3 flex  items-center  font-medium text-[15px] "
                  >
                    <Desc>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Esse natus voluptatem voluptates rerum dolorum voluptas
                      officia ut architecto animi!
                      <br></br>
                      <br></br> Assumenda inventore veniam sunt, quibusdam
                      exercitationem consequatur modi ratione possimus alias!
                    </Desc>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}

export default Sss;
