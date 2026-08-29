import ExclusiveProjects from '../karta2/karta2'
import type { Projekt, SekciaText } from '@/lib/types/content'


type Props = {
    pozadiedata:Projekt[],
    projektyuvodna:SekciaText[]
}






export default function Druhacst({pozadiedata,projektyuvodna} : Props)

{
    return<div className="w-full h-full pb-18">

        <ExclusiveProjects
        pozadiedata = {pozadiedata}
             projektyuvodna = {projektyuvodna}
        ></ExclusiveProjects>
    </div>
}
