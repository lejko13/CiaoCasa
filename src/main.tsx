import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource-variable/figtree";
import "./index.css";
import App from "./App";

// Nechceme, aby si prehliadač pri navigácii dozadu/dopredu pamätal staré
// scroll pozície – každá zmena URL má vždy začínať úplne hore (viď
// src/layout/ScrollToTop.tsx, ktorý to isté zabezpečuje aj pri bežnej
// navigácii cez odkazy).
if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
