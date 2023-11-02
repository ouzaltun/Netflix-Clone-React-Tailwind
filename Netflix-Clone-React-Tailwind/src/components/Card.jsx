import React from "react";
import Desc from "./Desc";
import Title from "./Title";
import Cards from "../api/cards.json";
import { useState, useEffect } from "react";

function Card() {
  const [cardItem, setCardItem] = useState([]);
  useEffect(() => {
    setCardItem(Cards);
  }, []);
  console.log(cardItem);

  return (
    <div>
      <div>
        <div className="flex md:flex-row-reverse flex-col py-[10px]">
          <div className="flex">
            <div className="bg-red-700">
              <div>
                <Title>Televizyonunuzda izleyin</Title>
              </div>
              <div>
                <Desc>
                  Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
                  oynatıcılar ve daha fazlasında seyredin.
                </Desc>
              </div>
            </div>
            <div className="bg-green-700">
              <div>
                <img
                  alt=""
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
