"use client";

import { PrismicNextImage } from "@prismicio/next";

import "./pricingCards.scss";
import { useEffect, useState } from "react";

export default function PricingCards({ data, yearly }: any) {
  const main = data.slices[1].primary.card;

  const [hover, setHover] = useState();
  const [screenSize768, setScreenSize768] = useState(false);

  useEffect(() => {
    const changeScreenSize = () => setScreenSize768(window.innerWidth > 768);
    changeScreenSize();
    window.addEventListener("resize", changeScreenSize);
    return () => window.removeEventListener("resize", changeScreenSize);
  }, []);

  const cards = main.map((card: any) => {
    return (
      <div
        id={card.uid}
        className={`card ${hover === card.uid && screenSize768 ? "hoverCard" : ""}`}
        key={card.uid}
        onMouseEnter={() => setHover(card.uid)}
        onMouseLeave={() => setHover(undefined)}
      >
        <h3
          className={`card_title ${hover === card.uid && screenSize768 ? "hoverTitle" : ""}`}
        >
          {card.title}
        </h3>
        <p
          className={`card_subtitle ${hover === card.uid && screenSize768 ? "hoverChangeColor" : ""}`}
        >
          {card.subtitle}
        </p>
        <div card-index={card.uid} className="card_priceWrapper">
          <span>
            <div className="card_priceNumber">
              {yearly ? card.yearlyPrice : card.price}
            </div>
            <div className="card_priceInfo">
              $<p>{yearly ? "Per Year" : "Per Month"}</p>
            </div>
          </span>
        </div>
        <div className="card_circlesWrapper">
          <div className="card_greenCircle">
            <PrismicNextImage field={card.greenCircle} alt="" />
            <div
              className={`card_line ${hover === card.uid && screenSize768 ? "hoverChangeColor" : ""}`}
            >
              Unlimited product updates
            </div>
          </div>
          <div className="card_greenCircle">
            <PrismicNextImage field={card.greenCircle} alt="" />
            <div
              className={`card_line ${hover === card.uid && screenSize768 ? "hoverChangeColor" : ""}`}
            >
              Unlimited product updates
            </div>
          </div>
          <div className="card_greenCircle">
            <PrismicNextImage field={card.greenCircle} alt="" />
            <div
              className={`card_line ${hover === card.uid && screenSize768 ? "hoverChangeColor" : ""}`}
            >
              Unlimited product updates
            </div>
          </div>
          <div className="card_greyCircle">
            <PrismicNextImage field={card.greyCircle} alt="" />
            <div
              className={`card_line ${hover === card.uid && screenSize768 ? "hoverChangeColor" : ""}`}
            >
              1GB Cloud storage
            </div>
          </div>
          <div className="card_greyCircle">
            <PrismicNextImage field={card.greyCircle} alt="" />
            <div
              className={`card_line ${hover === card.uid && screenSize768 ? "hoverChangeColor" : ""}`}
            >
              Email and community support
            </div>
          </div>
        </div>
        <button
          className={`card_btn ${hover === card.uid && screenSize768 ? "hoverBtn" : ""}`}
        >
          Try for free
        </button>
      </div>
    );
  });
  return <>{cards}</>;
}
