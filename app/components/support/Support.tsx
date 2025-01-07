import { PrismicNextImage } from "@prismicio/next";

import "./support.scss";
import { useEffect, useState } from "react";

export default function Support({ data }: any) {
  const main = data.slices[1].primary;

  const [hover, setHover] = useState<string>();
  const [screenSize768, setScreenSize768] = useState<boolean>(false);

  useEffect(() => {
    const updateScreenSize = () => setScreenSize768(window.innerWidth > 768);
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  });

  const supportCards = main.supportCards.map((card: any) => {
    return (
      <div
        key={card.logo.id}
        className={`support_card ${hover === card.logo.id && screenSize768 ? "hoverCard" : ""}`}
        onMouseEnter={() => setHover(card.logo.id)}
        onMouseLeave={() => setHover("")}
      >
        <PrismicNextImage field={card.logo} alt="" />
        <div
          className={`support_emailFirst ${hover === card.logo.id && screenSize768 ? "hoverEmail" : ""}`}
        >
          {card.emailFirst}
        </div>
        <div
          className={`support_emailSecond ${hover === card.logo.id && screenSize768 ? "hoverEmail" : ""}`}
        >
          {card.emailSecond}
        </div>
        <p>Get Support</p>
        <button className="support_btn">{card.button}</button>
      </div>
    );
  });

  return (
    <div className="support">
      <div className="container">
        <h3 className="support_subtitle">{main.subtitle}</h3>
        <h2 className="support_title">{main.title}</h2>
        <div className="support_cards">{supportCards}</div>
      </div>
    </div>
  );
}
