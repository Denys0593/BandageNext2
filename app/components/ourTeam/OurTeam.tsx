"use client";

import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ourTeam.scss";
import { useEffect, useState, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Team({ data, fullTeam }: any) {
  const main = data.slices[2].primary;
  let cardsNumber: [] = fullTeam ? main.users : main.users.slice(0, 3);

  const [hover, setHover] = useState();

  const [active, setActive] = useState();

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScreenSize = () => setIsLargeScreen(window.innerWidth > 768);
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useGSAP(() => {
    gsap.to(".ourTeam", {
      scrollTrigger: {
        trigger: ".ourTeam",
        start: "-30% top",
        end: "+=200",
        scrub: true,
      },
      marginTop: "224px",
    });
    gsap.to(".ourTeam", {
      scrollTrigger: {
        trigger: ".ourTeam",
        start: "80% top",
        end: "+=200",
        scrub: true,
      },
      y: -50,
      filter: "blur(20px)",
    });

    const cardsArray = gsap.utils.toArray(".ourTeam_user");

    gsap.set(cardsArray, {
      filter: "grayscale(100%)",
    });

    gsap.to(cardsArray, {
      scrollTrigger: {
        trigger: ".ourTeam",
        start: "top center",
        end: "+=200",
        scrub: true,
      },
      filter: "grayscale(0%)",
    });

    const cardsParent = document.querySelector("body") as HTMLBodyElement;

    cardsParent.addEventListener("click", function (e: any) {
      setActive(undefined);
      if (
        e.target.id ||
        e.target.classList.contains("ourTeam_image") ||
        e.target.classList.contains("ourTeam_name") ||
        e.target.classList.contains("ourTeam_profession") ||
        e.target.classList.contains("ourTeam_btn")
      ) {
        cardsArray.forEach((one: any, j: number) => {
          gsap.to(one, { scale: 1, zIndex: 9, duration: 0.1 });
          one.classList.remove("activeUser");
          if (e.target.id == j) {
            setActive(e.target.id);

            gsap.to(one, {
              scale: 1.5,
              zIndex: 10,
              duration: 0.2,
            });
            one.classList.add("activeUser");
          }
        });
      } else {
        cardsArray.forEach((one: any, j: number) => {
          gsap.to(one, { scale: 1, zIndex: 9, duration: 0.1 });
        });
      }
    });
  });

  let result = cardsNumber.map((user: any) => {
    return (
      <div
        key={user.uid}
        id={user.uid}
        className={`ourTeam_user ${active === user.uid && isLargeScreen ? "activeUser" : ""}`}
        onMouseEnter={() => setHover(user.uid)}
        onMouseLeave={() => setHover(undefined)}
      >
        <div className="ourTeam_btnAndImg">
          <button
            id={user.uid}
            className={`ourTeam_btn ${active === hover ? null : hover === user.uid && hover !== active ? "activeBtn" : null}`}
          >
            Show more
          </button>
          <PrismicNextImage
            id={user.uid}
            className={`ourTeam_image ${active === user.uid && isLargeScreen ? "activeImage" : ""}`}
            field={user.image}
            alt=""
          />
        </div>
        {/* <button
          className={`ourTeam_btn ${active === hover ? null : hover === user.uid && hover !== active ? "activeBtn" : null}`}
        >
          CLICK
        </button>
        <PrismicNextImage
          id={user.uid}
          className={`ourTeam_image ${active === user.uid && isLargeScreen ? "activeImage" : ""}`}
          field={user.image}
          alt=""
        /> */}
        <div
          id={user.uid}
          className={`ourTeam_name ${active === user.uid && isLargeScreen ? "activeName" : ""}`}
        >
          {user.name}
        </div>
        <div
          id={user.uid}
          className={`ourTeam_profession ${active === user.uid && isLargeScreen ? "activeProfession" : ""}`}
        >
          {user.profession}
        </div>
        <div
          className={`ourTeam_aboutUser ${active === user.uid && isLargeScreen ? "activeAboutUser" : ""}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          perspiciatis eum adipisci quis itaque eligendi molestias dolorum vero
          facilis, exercitationem quia delectus error minus minima architecto
          cumque ipsum sapiente dicta?
        </div>
        <div className="ourTeam_links">
          <Link href={user.facebookLink}>
            <PrismicNextImage field={main.facebook} alt="" />
          </Link>
          <Link href={user.instagramLink}>
            <PrismicNextImage field={main.instagram} alt="" />
          </Link>
          <Link href={user.twitterLink}>
            <PrismicNextImage field={main.twitter} alt="" />
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="ourTeam">
      <div className="container">
        <h2 className="ourTeam_title">{main.title}</h2>
        <p className="ourTeam_text">{main.text}</p>
        <div className="ourTeam_users" ref={container}>
          {result}
        </div>
      </div>
    </div>
  );
}
