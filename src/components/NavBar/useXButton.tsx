import React, { useState } from "react";
import { useCloseButton } from "./closeButtonContext";
export const useXButton = () => {
  const [click, setClick] = useState(true);
  const context = useCloseButton();
  const handelClick = () => {
    setClick(click ? false : true);
    context?.setClose(true);
  };
  return {
    CloseButton: () => (
      <button
        onClick={handelClick}
        type="button"
        className={`focus:outline-none transform transition duration-500 ease-in ${
          click ? "scale-0" : "scale-100"
        }`}
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
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    ),
    closeButtonState: click,
    setCloseButtonState: setClick,
  };
};
