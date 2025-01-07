"use client";

import { PrismicNextImage } from "@prismicio/next";

import "./growYours.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function GrowYours({ data }: any) {
  const main = data.slices[4].primary;

  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".grow",
        start: "90% bottom",
      },
    });

    gsap.to(".grow_left", {
      scrollTrigger: {
        trigger: ".grow",
        start: "90% bottom",
      },
      background: "#2a7cc7",
      duration: 1.5,
    });

    tl.from(".grow_subtitle", {
      y: -100,
      skewY: 10,
      opacity: 0,
      ease: "elastic",
      duration: 2,
    })
      .from(
        ".grow_title",
        {
          y: -100,
          skewY: 10,
          opacity: 0,
          ease: "elastic",
          duration: 2,
        },
        "-=1.5"
      )
      .from(
        ".grow_text",
        {
          y: -100,
          skewY: 10,
          opacity: 0,
          ease: "elastic",
          duration: 1,
        },
        "-=1"
      )
      .from(
        ".grow_b",
        {
          filter: "blur(20px)",
          duration: 2,
        },
        "-=3"
      )
      // .from(".grow_btn", {
      //   filter: "blur(20px)",
      //   duration: 5,
      // })
      .fromTo(
        ".grow_right > img",
        {
          opacity: 0,
          filter: " blur(3px)",
          objectPosition: "-180px 0",
          clipPath: "inset(0 95% 0 0)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          objectPosition: "0px 0px",
          clipPath: "inset( 0 0% 0 0)",
        },
        0.5
      );
  });

  return (
    <>
      <div className="grow" ref={container}>
        <div className="grow_left">
          <div className="grow_wrapper">
            <h3 className="grow_subtitle">{main.subtitle}</h3>
            <h2 className="grow_title">{main.title}</h2>
            <p className="grow_text">{main.text}</p>
            {/* <button className="grow_btn">{main.button}</button> */}
            <button className="grow_b">{main.button}</button>
          </div>
        </div>
        <div className="grow_right">
          <PrismicNextImage field={main.image} alt="" />
        </div>
      </div>
    </>
  );
}
