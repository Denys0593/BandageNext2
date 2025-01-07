"use client";

import { ChangeEvent, ChangeEventHandler, useState } from "react";
import "./search.scss";

export default function Search() {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const updateSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <img
        src="/icons/headerSearch.svg"
        alt="search"
        onClick={() => setShowInput((showInput) => !showInput)}
      />
      <div className={`inputAndButton ${showInput ? "active" : ""}`}>
        <input
          className="inputAndButton_inputSearch"
          type="text"
          placeholder="Search.."
          value={value}
          onChange={updateSearch}
        />
        {value ? (
          <button className="inputAndButton_btn">
            <img src="/icons/headerSearch.svg" alt="search" />
          </button>
        ) : null}
      </div>
    </>
  );
}
