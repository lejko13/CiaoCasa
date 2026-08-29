import { Outlet } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import RouteTransition from "./RouteTransition";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { AppProvider } from "@/providers/AppProvider";
import DATAheader from "@/components/header/DATAheader";
import FOOTETIK from "@/components/footer/footerzobrazovanie";
import CookieConsent from "@/components/cookieConsent";

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <LocaleProvider>
        <AppProvider>
          <DATAheader />

          <RouteTransition>
            <Outlet />
          </RouteTransition>

          <FOOTETIK />
          <CookieConsent />
        </AppProvider>
      </LocaleProvider>
    </>
  );
}
