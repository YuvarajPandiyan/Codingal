import React from "react";
import { Link } from "react-router-dom";
import { Timer } from "../Timer/Timer";
import { useClassEndButton } from "./endClassContextProvider";

export const NavDesktop = () => {
  const classEndButton = useClassEndButton();

  const handelEndClassButton = () => {
    classEndButton?.setEndClassState(true);
  };
  return (
    <div className="sticky top-0 z-20 hidden md:block">
      <div className=""></div>
      <nav className="flex h-16 shadow bg-white sticky top-0">
        {/* nav bar flex container has 2 sections*/}
        <div className="flex justify-between items-center w-full px-5 md:px-10">
          {/* 1st section div */}
          <div className="md:flex md:space-x-6">
            <div className="flex items-center mr-12">
              <img
                src="https://cdn.codingal.com/images/logos/logos-main/logo-with-text.svg"
                alt="Codingal"
                className="h-8 cursor-pointer"
              />
            </div>
          </div>

          {/* 1st section div */}
          <div className="md:flex md:space-x-6">
            <Timer time={{ minutes: 10, seconds: 0 }} />
            <Link
              className="ml-2 inline-block text-lg font-600 bg-main align-middle text-white font-medium py-2 px-2 rounded"
              to="#"
              onClick={handelEndClassButton}
            >
              End Class
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
