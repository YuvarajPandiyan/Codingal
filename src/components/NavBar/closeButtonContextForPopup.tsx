import React, { createContext, useContext, useState } from "react";

const closeButton = createContext<null | {
  close: boolean;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}>(null);
export const useCloseButton = () => useContext(closeButton);
export const CloseButtonContextProvider: React.FC = ({ children }) => {
  const [close, setClose] = useState(false);
  return (
    <closeButton.Provider value={{ close: close, setClose: setClose}}>
      {children}
    </closeButton.Provider>
  );
};
