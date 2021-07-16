import React, { createContext, useContext, useState } from "react";

const endClassContextProvider = createContext<null | {
  state: boolean;
  setEndClassState: React.Dispatch<React.SetStateAction<boolean>>;
}>(null);

export const useClassEndButton = () => useContext(endClassContextProvider);
export const EndClassContextProvider: React.FC = ({ children }) => {
  const [endClass, setEndClass] = useState(false);
  return (
    <endClassContextProvider.Provider
      value={{ state: endClass, setEndClassState: setEndClass }}
    >
      {children}
    </endClassContextProvider.Provider>
  );
};
