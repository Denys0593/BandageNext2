"use client";

import { useEffect, useState } from "react";
import ContactUsMain from "../components/contactUsMain/ContactUsMain";
import LetsTalk from "../components/letsTalk/LetsTalk";
import Support from "../components/support/Support";
import Register from "../components/userComponents/register/Register";
import Login from "../components/userComponents/login/Login";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Main({ data, data2 }: any) {
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [overflow, setOverflow] = useState<boolean>(false);

  useEffect(() => {
    // const body = document.querySelector("body") as HTMLBodyElement;
    document.documentElement.style.overflow = overflow ? "hidden" : "visible";
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
        data={data2}
        changeRegister={() => setChange(showRegister, setShowRegister)}
        changeLogin={() => setChange(showLogin, setShowLogin)}
        setOverflow={setOverflow}
      />
      <ContactUsMain data={data} />
      <Support data={data} />
      <LetsTalk />
      <Footer data={data2} />
    </>
  );
}
