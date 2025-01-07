"use client";

import { useGSAP } from "@gsap/react";
import "./underAboutUs.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function UnderAboutUs() {
  useGSAP(() => {
    const tl = gsap.timeline();

    function changeNumbers(arg: any) {
      const num = document.querySelectorAll(".underAboutUs_number > span");

      num[0].innerHTML = `${Math.round(arg.a)}`;
      num[1].innerHTML = `${Math.round(arg.b)}`;
      num[2].innerHTML = `${Math.round(arg.c)}`;
      num[3].innerHTML = `${Math.round(arg.d)}`;
    }

    const nomero = { a: 0, b: 0, c: 0, d: 0 };

    gsap.to(nomero, {
      scrollTrigger: {
        trigger: ".underAboutUs",
        start: "top bottom",
        end: "+=100",
      },
      a: 15,
      b: 150,
      c: 15,
      d: 100,
      duration: 3,
      onUpdate: () => {
        changeNumbers(nomero);
      },
    });

    gsap.to(".underAboutUs_mainPicture", {
      scrollTrigger: {
        trigger: ".underAboutUs_mainPicture",
        start: "50% top",
        end: "+=200",
        scrub: true,
      },
      filter: "blur(20px)",
      y: -50,
    });
  });

  return (
    <div className="underAboutUs">
      <div className="container">
        <div className="underAboutUs_top">
          <div className="underAboutUs_subtitle">Problems trying</div>
          <div className="underAboutUs_textWrapper">
            <div className="underAboutUs_leftText">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </div>
            <div className="underAboutUs_rightText">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </div>
          </div>
        </div>
        <div className="underAboutUs_middle">
          <div className="underAboutUs_item">
            <div className="underAboutUs_number">
              <span>0</span>K
            </div>
            <div className="underAboutUs_info">Happy Customers</div>
          </div>
          <div className="underAboutUs_item">
            <div className="underAboutUs_number">
              <span>0</span>K
            </div>
            <div className="underAboutUs_info">Monthly Visitors</div>
          </div>
          <div className="underAboutUs_item">
            <div className="underAboutUs_number">
              <span>0</span>
            </div>
            <div className="underAboutUs_info">Countries Worldwide</div>
          </div>
          <div className="underAboutUs_item">
            <div className="underAboutUs_number">
              <span>0</span>+
            </div>
            <div className="underAboutUs_info">Top Partners</div>
          </div>
        </div>
        <div className="underAboutUs_bottom">
          <img
            className="underAboutUs_mainPicture"
            src="../../../videoCard.png"
            alt="video"
          />
          <button className="underAboutUs_playButton">
            <img src="../../../videoPlayButton.png" alt="playButton" />
          </button>
        </div>
      </div>
    </div>
  );
}
