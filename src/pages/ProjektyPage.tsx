import ProjetkyStranka from '@/components/projekty'
import Tempalte from '@/components/tempalatepage'

import { projektyPageText } from '@/data/projektyPage'
import { projekty } from '@/data/projects'

export default function ProjektyPage() {

  return (
    <Tempalte
    text={projektyPageText}>

      <ProjetkyStranka data={projekty} />
    </Tempalte>
  );
}
