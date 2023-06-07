import ReactDOM from "react-dom/client";
import App from "../src/components/App";
import GlobalStyles from "./globals/Globalstyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <App />
    <GlobalStyles />
  </>
);
