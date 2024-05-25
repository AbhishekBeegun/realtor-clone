import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const CategoriesCard = () => {
  return (
    <Link href={"/search/QB/New"} className='h-[200px] rounded-lg relative overflow-hidden transition-all ease-in-out'>
        <img className='rounded-lg object-cover hover:scale-105 -z-10 ' src="https://ap.rdcpix.com/64e61a8c09331996975d787fa30efe79l-m2042954781od-w480_h360.jpg" alt='Cat_Image' /> 
        <div className='img_overlay absolute top-0 h-full w-full bg-black opacity-30 hover:opacity-10 transition-all ease-in-out '>

        </div>
        <div className='absolute top-0 w-full flex justify-between items-center px-3 pt-3'>
            <p className='text-white text-lg font-bold'>New Listings</p>

            <div className='bg-white rounded-full text-sm px-2 py-0.5 '>
                <p className=''>25</p>
            </div>
        </div>             
    </Link>
  )
}

export default CategoriesCard
