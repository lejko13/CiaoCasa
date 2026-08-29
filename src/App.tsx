import { Routes, Route, Navigate } from "react-router-dom";

import RootLayout from "@/layout/RootLayout";
import DomovPage from "@/pages/DomovPage";
import ProjektyPage from "@/pages/ProjektyPage";
import DetailPage from "@/pages/DetailPage";
import SluzbaDetailPage from "@/pages/SluzbaDetailPage";
import KontaktPage from "@/pages/KontaktPage";
import ONasPage from "@/pages/ONasPage";
import PreFirmyPage from "@/pages/PreFirmyPage";
import OchranaOsobnychUdajovPage from "@/pages/OchranaOsobnychUdajovPage";
import PodmienkyPage from "@/pages/PodmienkyPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<DomovPage />} />
        <Route path="domov" element={<Navigate to="/" replace />} />
        <Route path="projekty" element={<ProjektyPage />} />
        <Route path="detail/:slug" element={<DetailPage />} />
        <Route path="sluzby/:slug" element={<SluzbaDetailPage />} />
        <Route path="kontakt" element={<KontaktPage />} />
        <Route path="o-nas" element={<ONasPage />} />
        <Route path="pre-firmy" element={<PreFirmyPage />} />
        <Route path="ochrana-osobnych-udajov" element={<OchranaOsobnychUdajovPage />} />
        <Route path="podmienky" element={<PodmienkyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
