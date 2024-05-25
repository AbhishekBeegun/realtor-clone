import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className=''>
        <div className='container'>
            <div className='row flex-row items-center py-1.5'>

             <div className='col-8 flex items-center'>
              <Image className='mb-1 mr-9' width={"142"} height={"50"} src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg" alt=''/>
              <div className='flex items-center justify-center gap-3 text-sm'>
                <Link href={'/buy'}>
                    Buy
                </Link>
                <Link href={'/sell'}>
                    Sell
                </Link>
                <Link href={'/sell'}>
                    Rent
                </Link>
                <Link href={'/sell'}>
                    Mortgage
                </Link>
                <Link href={'/sell'}>
                    My Home
                </Link>
                <Link href={'/sell'}>
                    News & Insights
                </Link>
              </div>
             </div>

             <div className='col-2 flex justify-center gap-3'>
                <Link href={''} className='font-semibold underline'>
                    Rentals
                </Link>
                <Link href={''} className='font-semibold underline'>
                    Advertise
                </Link>
             </div>

             <div className='col flex justify-end text-sm gap-3 items-center'>
                <Link href={'/login'}>
                    Log In
                </Link>

                <button className='bg-black rounded-full font-semibold text-base text-white px-4 py-2'>
                    Sign Up
                </button>
             </div>
            </div>
        </div>      
    </nav>
  )
}

export default Navbar
