import React from "react";
import "./App.css";
import { EndClassContextProvider } from "./components/NavBar/endClassContextProvider";
import { CloseButtonContextProvider } from "./components/NavBar/closeButtonContextForPopup";
import { RootRouter } from "./routers";

function App() {
  return (
    <div className="App">
      <CloseButtonContextProvider>
        <EndClassContextProvider>
          <RootRouter />
        </EndClassContextProvider>
      </CloseButtonContextProvider>
    </div>
  );
}

export default App;
