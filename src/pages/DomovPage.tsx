import { useMemo } from 'react'
import Uvod from '@/components/uvod'
import Druhacst from '@/components/druhacast/druhacast'
import MalaCast from '@/components/malacast/malacast'
import {Otakza} from '@/components/otazkycast'
import ZobrazenieSluzieb  from '@/components/zobrazenieSluzieb';

import { projekty as projektySk } from '@/data/projects'
import { sluzby as sluzbySk } from '@/data/sluzby'
import { useLocale } from '@/lib/i18n/LocaleProvider'
import { OBSAH_DOMOVSKEJ } from '@/data/i18n/homepage'
import { resolveProjekty, resolveSluzby } from '@/lib/i18n/resolveContent'

export default function DomovPage() {
  const { locale } = useLocale();
  const { heroText, statistiky, projektySekciaText, sluzbySekciaText, faqSekciaText, otazky } =
    OBSAH_DOMOVSKEJ[locale];
  const projekty = useMemo(() => resolveProjekty(projektySk, locale), [locale]);
  const sluzby = useMemo(() => resolveSluzby(sluzbySk, locale), [locale]);

  return <>
  <div className="h-[700px]   md:h-screen w-[full] bg-black flex p-4 md:pt-5  md:px-[var(--stred)] lg:px-[var(--pcokrej)]">


    <Uvod
    data={[heroText]}
    data2 = {statistiky}
    pozadiedata = {projekty}
    ></Uvod>

    </div>

    <div  className=" pt-17 h-fit md:h-fit-content w-[full] bg-black flex px-4   md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
 <Druhacst
   pozadiedata = {projekty}
   projektyuvodna = {[projektySekciaText]}
 ></Druhacst>
    </div>


    <div className="h-fit  bg-black w-[full] flex p-4 md:pt-5  flex-col md:px-[var(--stred)] lg:px-[var(--pcokrej)] pb-12 md:pb-15">
<MalaCast
SluzbyUvodna = {[sluzbySekciaText]}
></MalaCast>
<div className="w-full h-fit ">

  <ZobrazenieSluzieb
  TypSlubzy = {sluzby}
  ></ZobrazenieSluzieb>
</div>


    </div>
    <div className="h-fit md:h-fit w-[full] bg-black flex p-4 md:pt-5 flex-col pb-22 md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
      <MalaCast
      SluzbyUvodna={[faqSekciaText]}
      ></MalaCast>
      <Otakza
      otazkycast = {otazky}

      ></Otakza>

    </div>




</>

  ;
}
