"use client";

import { PrismicNextImage } from "@prismicio/next";

import "./logos.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Logos({ data, homepage }: any) {
  const main = data.slices[3].primary;

  useGSAP(() => {
    gsap.to(".logos", {
      scrollTrigger: {
        trigger: ".logos",
        start: "30% top",
        end: "+=50",
        scrub: true,
      },
      y: -50,
      filter: "blur(20px)",
    });
  });

  const logos = main.logos.map((logo: any) => {
    return (
      <PrismicNextImage
        key={logo.logo.id}
        className="logos_logo"
        field={logo.logo}
        alt=""
      />
    );
  });

  return (
    <div className="logos">
      <div className="container">
        {homepage ? (
          <>
            <h2 className="logos_title">{main.title}</h2>
            <p className="logos_text">{main.text}</p>
          </>
        ) : null}
        {homepage ? null : (
          <p className="logos_descr">Trusted By Over 4000 Big Companies</p>
        )}
        <div className="logos_wrapper">{logos}</div>
      </div>
    </div>
  );
}
