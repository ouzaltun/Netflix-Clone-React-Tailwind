import React from "react";
import Desc from "./Desc";
import Title from "./Title";
import Cards from "../api/cards.json";
import { useEffect, useState } from "react";
import classNames from "classnames";

function Card() {
  const [cardItem, setCardItem] = useState([]);

  useEffect(() => {
    setCardItem(Cards.Cards);
  }, []);

  return (
    <div>
      <div>
        <div className="flex ">
          <div className="">
            {cardItem &&
              cardItem.map((item, counter) => (
                <div
                  key={item.id}
                  className={classNames(
                    "bg-black mt-[10px] py-[72px] px-[24px] md:px-[34px] lg:px-[152px] items-center inline-flex flex-col  w-full text-center lg:text-left ",
                    {
                      "lg:flex-row": counter % 2 == 0,
                      "lg:flex-row-reverse": counter % 2 !== 0,
                    }
                  )}
                >
                  <div className=" flex flex-col  lg:w-1/2 justify-center items-center mr-[6px]">
                    <div className="">
                      <Title>{item.title}</Title>
                    </div>
                    <div className="mt-1">
                      <Desc>{item.description}</Desc>
                    </div>
                  </div>
                  <div className=" lg:w-1/2">
                    <div className="relative ">
                      <div className="relative z-10">
                        <img alt="" src={item.image} />
                      </div>

                      <div className=" absolute z-0 overflow-hidden max-w-[60%] max-h-[100%] top-[24%] left-[20%]  w-full  h-full">
                        <video autoPlay loop alt="" src={item.image2} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
