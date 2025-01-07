"use client";

import { PrismicNextImage } from "@prismicio/next";

import "./aboutUs.scss";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(TextPlugin);

export default function AboutUs({ data }: any) {
  const main = data.slices[1].primary;

  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.to(".aboutUs", {
      scrollTrigger: {
        trigger: ".aboutUs",
        start: "50% top",
        end: "+=120",
        scrub: true,
      },
      filter: "blur(20px)",
      y: -100,
    });
  });

  return (
    <div className="aboutUs">
      <PrismicNextImage
        field={main.background}
        alt=""
        className="aboutUs_background"
        priority={true}
      />
      <div className="container">
        <div className="aboutUs_wrapper">
          <h3 className="aboutUs_subtitle">{main.subtitle}</h3>
          <h2 className="aboutUs_title">{main.title}</h2>
          <p className="aboutUs_text">{main.text}</p>
          <p className="aboutUs_textMobileVersion">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <button className="aboutUs_button">{main.button}</button>
        </div>
      </div>
    </div>
  );
}
