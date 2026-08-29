type Props = {
    nazov:string
    hodnota:string
}

export default function MapovanieDetail({nazov,hodnota}:Props) {
      return (
        <div className="w-full h-fit py-3 flex items-center justify-between border-t border-[var(--sivaTmava)]" >

            <div className='text-[var(--bielasvetla)] text-sm'>
            {nazov}
            </div>
            <div className='text-white text-sm font-medium'>
                {hodnota}
            </div>

        </div>
      )

}
