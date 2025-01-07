"use client";

import { PrismicNextImage } from "@prismicio/next";
import "./teamCards.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function TeamCards({ data }: any) {
  const main = data.slices[1].primary;

  const [width, setWidth] = useState(0);

  useEffect(() => {
    // const body = document.querySelector("body") as HTMLBodyElement;
    setWidth((width) => document.documentElement.clientWidth);
  }, []);

  const smallImages = main.smallImages.map((image: any) => {
    if (width > 480) {
      return (
        <PrismicNextImage key={image.image.id} field={image.image} alt="" />
      );
    } else {
      return (
        <PrismicNextImage
          key={image.image.id}
          field={image.imageMobile}
          alt=""
        />
      );
    }
  });

  useGSAP(() => {
    gsap.to(".teamCards", {
      scrollTrigger: {
        trigger: ".teamCards",
        start: "20% top",
        end: "bottom",
        scrub: true,
      },
      filter: "grayscale(100%)",
    });
  });

  return (
    <div className="teamCards">
      <div className="teamCards_image">
        <PrismicNextImage
          field={width > 480 ? main.bigImage : main.mobileImage}
          alt=""
        />
      </div>
      <div
        className={`${width > 480 ? "teamCards_wrapper" : "teamCards_mobileWrapper"}`}
      >
        <div
          className={`${width > 480 ? "teamCards_wrapper-up" : "teamCards_mobileWrapper-up"}`}
        >
          {smallImages.splice(0, 2)}
        </div>
        <div
          className={`${width > 480 ? "teamCards_wrapper-low" : "teamCards_mobileWrapper-low"}`}
        >
          {smallImages.splice(0, 2)}
        </div>
      </div>
    </div>
  );
}
