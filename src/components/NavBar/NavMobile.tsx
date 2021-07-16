import React, { useEffect } from "react";
import { Timer } from "../Timer/Timer";
import { useCloseButton } from "./closeButtonContext";
import { useHamburger } from "./useHamburger";
import { useXButton } from "./useXButton";
import { useClassEndButton } from "./endClassContextProvider";
import { Link } from "react-router-dom";

export const NavMobile = () => {
  // using custom hooks
  const { HamburgerButton, HamburgerButtonState, SetHamburgerButtonState } =
    useHamburger();

  const { CloseButton, closeButtonState, setCloseButtonState } = useXButton();

  //   context
  const context = useCloseButton();
  const classEndButton = useClassEndButton();

  const handelEndClassButton = () => {
    classEndButton?.setEndClassState(true);
    setCloseButtonState(true);
    SetHamburgerButtonState(false);
    context?.setClose(false);
  };

  useEffect(() => {
    if (HamburgerButtonState) {
      setCloseButtonState(false);
    }

    if (HamburgerButtonState && context?.close) {
      setCloseButtonState(true);
      SetHamburgerButtonState(false);
      context?.setClose(false);
    }
  }, [closeButtonState, HamburgerButtonState, context?.close]);

  return (
    <>
      {/* Nav mobile responsive */}
      <div className=" md:hidden sticky top-0">
        <nav className="false flex h-16 z-30 shadow bg-white">
          <div className="flex items-center justify-between w-full z-20 px-5 md:px-10">
            <div className="flex md:hidden justify-between w-full">
              <div className="flex items-center">
                <img
                  src="https://cdn.codingal.com/images/logos/logos-main/logo-with-text.svg"
                  alt="CodingalLogo"
                  className="h-8 cursor-pointer mr-20"
                />
              </div>
              {/* Hamburger icon button */}
              <HamburgerButton />
            </div>
            <div
              className={`z-20 fixed top-0 inset-x-0 transition-all transform md:hidden overflow-hidden duration-500 ease-in-out ${
                HamburgerButtonState ? "max-h-100" : "max-h-0"
              }`}
            >
              <div className="bg-white h-screen">
                <div className="px-5 space-y-10">
                  <div className="flex items-center justify-between h-16">
                    <div>
                      <img
                        src="https://cdn.codingal.com/images/logos/logos-main/logo-with-text.svg"
                        alt="Codingal"
                        className="h-8 w-auto"
                      />
                    </div>
                    {/* Close button */}
                    <CloseButton />
                  </div>
                  <div>
                    {/*  */}
                    hey
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
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
