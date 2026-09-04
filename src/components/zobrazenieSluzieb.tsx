import ServicesSection from './zobrazovanieslubeibkomponent'
import type { SluzbaItem } from '@/lib/types/content'

type Props = {
    TypSlubzy:SluzbaItem[]
}

export default function ZobrazenieSluzieb({TypSlubzy} : Props) {

  return (
    <div className=" text-white rounded-xl h-fit w-full flex flex-col gap-2.5">
{TypSlubzy.map((item, index) => (



  <ServicesSection
    key={index}
    index={index}
    nazov={item.Nazov}
    popis={item.Popis}
    fotka={item.Obrazok}
    slug={item.slug}
    comingSoon={item.comingSoon}
  />


))}
 {/* <div className='w-full h-[20px] bg-amber-500'></div> */}
    </div>
  );
}
