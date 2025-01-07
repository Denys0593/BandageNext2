"use client";

import { useEffect, useState } from "react";
import AfterHeader from "../components/afterHeader/AfterHeader";
import Faq from "../components/faq/Faq";
import FreeComponent from "../components/freeComponent/FreeComponent";
import Logos from "../components/logos/Logos";
import PricingMain from "../components/pricingMain/PricingMain";
import Register from "../components/userComponents/register/Register";
import Login from "../components/userComponents/login/Login";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
// import home from "../gsap";

export default function Main({ data, data2 }: any) {
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [overflow, setOverflow] = useState<boolean>(false);

  useEffect(() => {
    // const body = document.querySelector("body") as HTMLBodyElement;
    document.documentElement.style.overflow = overflow ? "hidden" : "visible";
  }, [overflow]);

  // useEffect(() => {
  //   home();
  // }, []);

  function setChange(state: boolean, setState: Function) {
    setState((state: boolean) => !state);
  }

  return (
    <>
      <Register
        showRegister={showRegister}
        close={setShowRegister}
        setOverflow={setOverflow}
      />
      <Login
        showLogin={showLogin}
        close={setShowLogin}
        setOverflow={setOverflow}
      />
      <Header
        data={data2}
        changeRegister={() => setChange(showRegister, setShowRegister)}
        changeLogin={() => setChange(showLogin, setShowLogin)}
        setOverflow={setOverflow}
      />
      <AfterHeader data={data} />
      <PricingMain data={data} />
      <Logos data={data2} homepage={false} />
      <Faq data={data} />
      <FreeComponent data={data} paddingTop={false} />
      <Footer data={data2} />
    </>
  );
}
