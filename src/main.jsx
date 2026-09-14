import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Stairs from "./components/common/stairs.jsx";
import Navbarcontext from "./context/Navcontext.jsx";
import { HelmetProvider } from "react-helmet-async";
createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <Stairs>
        <Navbarcontext>
          <App />
        </Navbarcontext>
      </Stairs>
    </BrowserRouter>
  </HelmetProvider>,
);
