import Hybemkomponent from './komponet'
import { useState } from "react"
import type { OtazkaItem } from "@/lib/types/content"


type Props = {
    otazkycast:OtazkaItem[]
}
export function Otakza({otazkycast} : Props) {

const [count, setCount] = useState<number | false>(false);

    return <div className="w-full h-fit0 flex flex-col  gap-8 md:flex-row">
<div className=' h-[90px] w-[40vw] hidden md:flex'></div>


        <div className='w-full flex flex-col gap-3'>
            {otazkycast.map((item,i) => <Hybemkomponent
            key={i}
        onClick = {() => setCount(prev => prev === i ? false : i)}
        podmienka = {count === i}
        otazka = {item.otazka}
        odpvene = {item.odpoved}
        ></Hybemkomponent>)}

        </div>





    </div>

}
