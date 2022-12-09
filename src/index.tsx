import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalProvider from "./GlobalState";
import i18n from "./locales/i18n";
import { I18nextProvider } from "react-i18next";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </GlobalProvider>
  </React.StrictMode>
);
