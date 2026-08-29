import { Header } from './header'
import { headerNav } from '@/data/header'
import { siteInfo } from '@/data/siteInfo'

export default function DATAheader() {
  return (
    <Header
      data={headerNav}
      data2={[{ LogoNazovWebu: siteInfo.nazovWebu }]}
    />
  )
}
