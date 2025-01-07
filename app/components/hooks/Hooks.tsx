"use client";

import { useState } from "react";

export default function Hooks() {
  const [content, setContent] = useState(true);
  const [load, setLoad] = useState(false);
  const [successfulReg, setSuccessfulReg] = useState(false);
  const [error, setError] = useState(false);

  const request = async (
    url: string,
    data: {},
    close: Function,
    reset: Function
  ) => {
    setContent(false);
    setLoad(true);

    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!res.ok) {
        setLoad(false);
        setError(true);
        setTimeout(() => {
          close();
          reset();
        }, 2000);
        setTimeout(() => {
          setLoad(false);
          setContent(true);
        }, 2500);

        throw new Error(`Error. Status: ${res.status}`);
      }

      const result = await res.json();
      console.log(result);
      setLoad(false);
      setSuccessfulReg(true);

      setTimeout(() => {
        close();
        reset();
      }, 1000);
    } catch (e: any) {
      throw e;
    } finally {
      setTimeout(() => {
        setSuccessfulReg(false);
        setContent(true);
      }, 1500);
    }
  };

  return {
    content,
    load,
    successfulReg,
    setContent,
    setLoad,
    setSuccessfulReg,
    request,
    error,
  };
}
