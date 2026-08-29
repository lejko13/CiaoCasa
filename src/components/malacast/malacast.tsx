import ProjectsHeader from '../textoprops/textprops'
import type { SekciaText } from '@/lib/types/content'


type Props = {
        SluzbyUvodna:SekciaText[]
    }

export default function MalaCast({SluzbyUvodna} : Props) {



return(<div className='md:pb-4'>
    <ProjectsHeader
    SluzbyUvodna = {SluzbyUvodna}

    ></ProjectsHeader>

</div>)
}
