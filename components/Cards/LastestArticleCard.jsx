import Link from 'next/link'
import React from 'react'

const LastestArticleCard = () => {
  return (
    <Link href={"blog/articleTitle"} className='rounded-lg shadow p-0'>
     <img className='rounded-t-lg object-cover -z-10 h-[200px] w-full' src="https://na.rdcpix.com/f4fe2a541d732a3fb506fe016fab9105w-c794512058rd-w300_h200_r4_q80.jpg" alt='Article_Image' /> 

     <div className='px-3 py-2'>
        <p className='line-clamp-2'>The 10 Strongest Seller’s Markets in the U.S.—Where Homes Still Attract Bidding Wars Galore</p>
     </div>

    </Link>
  )
}

export default LastestArticleCard
