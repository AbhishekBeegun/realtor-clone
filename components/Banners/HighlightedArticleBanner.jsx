import Link from 'next/link'
import React from 'react'

const HighlightedArticleBanner = () => {
  return (
    <section className='h-[500px] relative'>
        <img className='absolute -z-20 top-0 w-full h-full object-cover' src="https://na.rdcpix.com/b78df262675844f430cd8fdd8766089ew-c1723033084srd_q80.jpg" />
        <div className='img-overlay -z-10 absolute top-0 bg-black h-full w-full opacity-40'></div>
        <div className='container text-white h-full'>
            <div className='row flex-col justify-center items-center text-center'>
                <h4 className='text-xl mt-32'>Celebrity Real Estate</h4>

                <p className='text-2xl font-semibold w-1/2 mt-12'>Elvis’ Beloved Graceland Foreclosure Auction Stopped as Granddaughter Riley Keough Fights Sale</p>

                <Link href={"blog/title"} className='mt-12 border py-2.5 w-[150px] rounded-full bg-[#1A1816] hover:bg-gray-800'>
                    Read Article
                </Link>
            </div>
        </div>
      
    </section>
  )
}

export default HighlightedArticleBanner
