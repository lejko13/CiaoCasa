import { useMemo } from "react"
import type { Projekt } from "@/lib/types/content"

import Template2 from "./projektyweb"
import MapovanieDetail from './mapovanie'
import ZoznamZaskrtnutim from './zoznamZaskrtnutim'
import GaleriaFotiek from './galeriaFotiek'

import Druhacst from '@/components/druhacast/druhacast'
import { projekty as projektySk } from "@/data/projects"
import { useLocale } from "@/lib/i18n/LocaleProvider"
import { prelozMoznost } from "@/lib/i18n/moznosti"
import { OBSAH_DOMOVSKEJ } from "@/data/i18n/homepage"
import { resolveProjekt, resolveProjekty } from "@/lib/i18n/resolveContent"

type Props = {
  data: Projekt
}

export default function Uisamosatane({ data: dataSk }: Props) {
  const { t, locale } = useLocale();
  const data = useMemo(() => resolveProjekt(dataSk, locale), [dataSk, locale]);

  const formatted = [
    {
      Vrchnytext: data?.NazovProjektu,
      Spodnytext: data?.PopisKratkyUvod,
      Fotka: data?.Fotka,
    }

  ]

  const galeria = data?.Galeria && data.Galeria.length > 0 ? data.Galeria : (data?.Fotka ? [data.Fotka] : [])

  // na stránku "ďalšie projekty" zobrazíme ostatné projekty (bez aktuálneho)
  const dalsieProjekty = useMemo(
    () => resolveProjekty(projektySk.filter((p) => p._id !== dataSk?._id), locale),
    [dataSk, locale]
  )

  return <Template2 text={formatted}>
    <>
    <div className="w-full h-fit bg-black flex flex-col p-4 md:pt-5  gap-8 lg:flex-row md:px-[var(--stred)] lg:px-[var(--pcokrej)]">

        <div className="w-full  p-2 h-fit lg:w-[40vw]  lg:h-full relative">
  <div className="w-full h-fit flex flex-col gap-1 lg:sticky top-28 ">

{(data?.TypProjektu?.length || data?.StavProjektu || data?.StylDizajnu?.length || data?.TypVyuzitia?.length) ? (
  <div className="flex flex-wrap gap-2 pb-5">
    {[
      ...(data.TypProjektu ?? []),
      ...(data.StavProjektu ? [data.StavProjektu] : []),
      ...(data.StylDizajnu ?? []),
      ...(data.TypVyuzitia ?? []),
    ].map((stitok, i) => (
      <span
        key={i}
        className="text-xs text-[var(--sivaSvetlsie)] border border-[var(--sivaTmava)] rounded-full px-3 py-1 font-light"
      >
        {prelozMoznost(stitok, locale)}
      </span>
    ))}
  </div>
) : null}

{data?.PopsiDlhy && (
  <p className="text-[var(--bielasvetla)] text-sm md:text-base leading-relaxed pb-6">
    {data.PopsiDlhy}
  </p>
)}

{data?.InterierInfo?.map((item, index) => (
<MapovanieDetail
key={index}
nazov = {item.Nazov}
hodnota = {item.Hodnota}

></MapovanieDetail>
))}

{data?.CoZahruje && data.CoZahruje.length > 0 && (
  <div className="pt-6">
    <ZoznamZaskrtnutim nadpis={t.projektDetail.coProjektZahrnal} polozky={data.CoZahruje} />
  </div>
)}

  </div>
</div>

        <GaleriaFotiek obrazky={galeria} nazov={data?.NazovProjektu || ""} />

    </div>


       <div  className=" pt-17 h-fit md:h-fit-content w-[full] bg-black flex px-4   md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
       <Druhacst
         pozadiedata = {dalsieProjekty}
         projektyuvodna = {[OBSAH_DOMOVSKEJ[locale].dalsieProjektySekciaText]}
       ></Druhacst>
          </div>



    </>



  </Template2>

}
