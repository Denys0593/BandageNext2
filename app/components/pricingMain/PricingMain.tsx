"use client";

import { useState } from "react";
import PricingCards from "../pricingCards/PricingCards";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./pricingMain.scss";

gsap.registerPlugin(ScrollTrigger);

export default function PricingMain({ data }: any) {
  const [yearly, setYearly] = useState<boolean>(false);

  return (
    <div className="pricingMain">
      <div className="container">
        <h2 className="pricingMain_title">Pricing</h2>
        <p className="pricingMain_descr">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="pricingMain_buttons">
          <div className="pricingMain_changer">
            <button className="pricingMain_monthly">Monthly</button>
            <div
              onClick={() => setYearly((yearly) => !yearly)}
              className={`pricingMain_change ${yearly ? "changeBG" : ""}`}
            >
              <div
                className={`pricingMain_changeCircle ${yearly ? "circleActive" : ""}`}
              ></div>
            </div>
            <button className="pricingMain_yearly">Yearly</button>
          </div>
          <button className="pricingMain_save">Save 25%</button>
        </div>
        <div className="cardsWrapper">
          <PricingCards data={data} yearly={yearly} />
        </div>
      </div>
    </div>
  );
}
