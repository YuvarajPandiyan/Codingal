import React, { useEffect } from "react";
import { Pop } from "../../components/EndClassPop/Pop";
import { CloseButtonContextProvider } from "../../components/NavBar/closeButtonContext";
import { useCloseButton } from "../../components/NavBar/closeButtonContextForPopup";
import { useClassEndButton } from "../../components/NavBar/endClassContextProvider";
import { NavDesktop } from "../../components/NavBar/NavDesktop";
import { NavMobile } from "../../components/NavBar/NavMobile";

export const Home: React.FC = () => {
  const context = useClassEndButton();
  const useCloseButtonContext = useCloseButton();
  
  useEffect(() => {}, [useCloseButtonContext?.close]);
  console.log(
    "🚀 ~ file: Home.tsx ~ line 14 ~ context",
    context,
    useCloseButtonContext
  );
  return (
    <>
      <CloseButtonContextProvider>
        {/*  nav bar desktop */}
        <NavDesktop />
        <NavMobile />
        {context?.state && useCloseButtonContext?.close === false ? (
          <Pop />
        ) : null}
      </CloseButtonContextProvider>
    </>
  );
};
