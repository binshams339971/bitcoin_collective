import React from 'react'
import Image from 'next/image'

export default function Trending() {
  return (
    <div className='t-col-span-3'>
      <div className='t-bg-[#373F64] t-h-[420px] t-rounded-xl t-w-full t-p-8'>
        <div className=''>
          <span className='t-text-[#EFF5FF] t-text-[30px]'>Trending Ordinals</span>
          <span className='t-text-[12px] t-text-[#7A98FF] t-ml-4'>All</span>
        </div>
        <div className='t-flex t-justify-between t-flex-wrap t-place-items-end t-mt-[-40px]'>
            <div className=''>
              <Image src='/images/cartoon1.png' width={45} height={50} alt='nft'/>
            </div>
            <div className=''>
              <Image src='/images/cartoon2.png' width={45} height={50} alt='nft'/>
            </div>
            <div className=''>
              <Image src='/images/cartoon3.png' width={45} height={50} alt='nft'/>
            </div>
            <div className=''>
              <Image src='/images/cartoon4.png' width={45} height={50} alt='nft'/>
            </div>
            <div className=''>
              <Image src='/images/cartoon5.png' width={45} height={50} alt='nft'/>
            </div>
            <div className=''>
              <Image src='/images/cartoon6.png' width={45} height={50} alt='nft'/>
            </div>
            <div className=''>
              <Image src='/images/cartoonBig.png' width={120} height={120} alt='nft'/>
            </div>
        </div>
      </div>
    </div>
  )
}
