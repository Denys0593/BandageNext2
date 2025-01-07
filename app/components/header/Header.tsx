"use client";

import "./header.scss";

import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { useEffect, useState } from "react";
import Search from "./search/Search";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";

gsap.registerPlugin(TextPlugin);

export default function Header({
  data,
  changeRegister,
  changeLogin,
  setOverflow,
}: any) {
  const main = data.slices[0].primary;

  const [showMenu, setshowMenu] = useState(false);

  const listItem = main.list.map((list: any) => {
    return (
      <li key={list.listItem} className="main_listItem">
        <Link href={list.link}>{list.listItem}</Link>
      </li>
    );
  });

  return (
    <header>
      <div className="container">
        <div className="main">
          <Link href="/" className="main_logo ">
            {main.mainLogo}
          </Link>
          <div className="main_wrapper">
            <nav className={`${showMenu ? "active" : ""}`}>
              <ul className="main_list">{listItem}</ul>
            </nav>
            <div className="main_buttons">
              <button
                onClick={() => {
                  changeLogin();
                  setOverflow(true);
                }}
                className="main_login"
              >
                {main.buttonLogin}
              </button>
              <button
                onClick={() => {
                  changeRegister();
                  setOverflow(true);
                }}
                className="main_member"
              >
                {main.buttonMember}
                <PrismicNextImage field={main.buttonArrow} alt="" />
              </button>
            </div>
          </div>
          <div className="main_mobileWrapper">
            <Search />
            <Image
              src="/icons/headerCart.svg"
              alt="cart"
              width="24"
              height="23"
            />
            <div
              onClick={() => setshowMenu(!showMenu)}
              className={`main_hamburger ${showMenu ? "main_hamburger-active" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
