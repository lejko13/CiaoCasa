import { motion } from "framer-motion";


type objekt = {
  pohyb:boolean
  onClick: () => void
}


const Buttonheader = ({onClick,pohyb} : objekt) => {
  return (
    <div onClick={onClick} className=' w-[23px]  h-full relative cursor-pointer '>

       <motion.div
  initial={{ rotate: 0, }}        // počiatočný uhol a x
  animate={{ rotate:pohyb ?  24 :  0 , }}      // cieľový uhol a posun doprava
  transition={{ duration: 0.2 }}
  style={{ transformOrigin: "left center" }}
  className='w-6 h-[2px] bg-[var(--biela)] absolute top-[14px] '
></motion.div>

<motion.div
  initial={{ rotate: 0, }}
  animate={{ rotate:pohyb ?     -24 : 0 , }}     // opačný uhol a rovnaký posun
  transition={{ duration: 0.2 }}
  style={{ transformOrigin: "left center" }}
  className='w-6 h-[2px] bg-[var(--biela)] absolute bottom-[14px]'
></motion.div>

    </div>
  )
}

export default Buttonheader
