import React, { useEffect, useState } from "react";

export const useHamburger = () => {
  const [click, setClick] = useState<boolean>(false);

  const clickHandler = () => {
    setClick(click ? false : true);
  };
  useEffect(() => {}, [click]);
  return {
    HamburgerButton: () => (
      <button
        className={`md:hidden focus:outline-none transform transition duration-500 ease-out ${
          click ? "scale-0" : "scale-100"
        }`}
        onClick={clickHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="text-grey"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    ),
    HamburgerButtonState: click,
    SetHamburgerButtonState: setClick,
  };
};
