import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App";
import GlobalStyles from "./globals/Globalstyles";
// Supports weights 100-900
import '@fontsource-variable/inter';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      <App />
      <GlobalStyles />
    </>
  </React.StrictMode>
);
