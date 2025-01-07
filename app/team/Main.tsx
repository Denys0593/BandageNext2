"use client";

import AfterHeader from "../components/afterHeader/AfterHeader";
import OurTeam from "../components/ourTeam/OurTeam";
import FreeComponent from "../components/freeComponent/FreeComponent";
import TeamCards from "../components/teamCards/TeamCards";

import { useEffect, useState } from "react";
import Register from "../components/userComponents/register/Register";
import Login from "../components/userComponents/login/Login";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Main({ data, homepageData, pricingData }: any) {
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [overflow, setOverflow] = useState<boolean>(false);

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    body.style.overflow = overflow ? "hidden" : "visible";
  }, [overflow]);

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
        data={homepageData}
        changeRegister={() => setChange(showRegister, setShowRegister)}
        changeLogin={() => setChange(showLogin, setShowLogin)}
        setOverflow={setOverflow}
      />
      <AfterHeader data={data} />
      <TeamCards data={data} />
      <OurTeam data={homepageData} fullTeam={true} />
      <FreeComponent data={pricingData} paddingTop={true} />
      <Footer data={homepageData} />
    </>
  );
}
