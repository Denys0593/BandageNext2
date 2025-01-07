"use client";

import AboutUs from "./components/aboutUs/AboutUs";
import UnderAboutUs from "./components/underAboutUs/UnderAboutUs";
import OurTeam from "./components/ourTeam/OurTeam";
import Logos from "./components/logos/Logos";
import GrowYours from "./components/growYours/GrowYours";
import Register from "./components/userComponents/register/Register";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Login from "./components/userComponents/login/Login";
import Footer from "./components/footer/Footer";

export default function Main({ data }: any) {
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [overflow, setOverflow] = useState<boolean>(false);

  useEffect(() => {
    // const body = document.querySelector("body") as HTMLBodyElement;
    document.documentElement.style.overflow = overflow ? "hidden" : "visible";
  }, [overflow]);

  function setChange(state: boolean, setState: Function) {
    setState((state: boolean) => !state);
    setOverflow(true);
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
        data={data}
        changeRegister={() => setChange(showRegister, setShowRegister)}
        changeLogin={() => setChange(showLogin, setShowLogin)}
        setOverflow={setOverflow}
      />
      <AboutUs data={data} />
      <UnderAboutUs />
      <OurTeam data={data} fullTeam={false} />
      <Logos data={data} homepage={true} />
      <GrowYours data={data} />
      <Footer data={data} />
    </>
  );
}
