import React from 'react'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className='t-p-8 t-flex t-justify-between'>
            <div className='t-flex t-gap-4'>
                <p className='t-text-[18px] t-text-[#EFF5FF] t-my-auto'>Bitcoin Collective</p>
                <div className='t-my-auto t-bg-[#39446D] t-p-2 t-rounded-xl t-h-[36px] t-w-[36px]'>
                    <div className='t-text-center t-mt-0'>
                        <Image src='/images/search.png' width={16} height={16} alt="search" />
                    </div>
                </div>
            </div>
            <div className='t-flex t-gap-8'>
                <div className='t-text-[#8F9BBF] t-text-[14px] t-flex t-gap-12 t-my-auto'>
                    <p className='hover:t-text-[#E2EBFB] t-cursor-pointer'>DeFi</p>
                    <p className='hover:t-text-[#E2EBFB] t-cursor-pointer'>Marketplace</p>
                    <p className='hover:t-text-[#E2EBFB] t-cursor-pointer'>Ordinals</p>
                </div>
                <div className='t-flex t-gap-4'>
                    <div className='t-border t-border-[#7A98FF] t-rounded-xl t-px-4 t-py-1 t-flex t-cursor-pointer'>
                        <div className='t-mt-2.5'>
                            <Image src='/images/fileIcon.png' width={14} height={18} alt="icon" />
                        </div>
                        <span className='t-ml-2 t-text-white t-text-[12px] t-my-auto'>Exclusive Newsletter</span>
                    </div>
                    <div className='t-border t-border-[#7A98FF] t-rounded-xl t-px-4 t-py-1 t-flex t-cursor-pointer'>
                        <div className='t-mt-2'>
                            <Image src='/images/moon.png' width={14} height={18} alt="icon" />
                        </div>
                    </div>
                    <div className='t-border t-border-[#7A98FF] t-rounded-xl t-px-4 t-py-1 t-flex t-cursor-pointer'>
                        <div className='t-mt-1.5'>
                            <Image src='/images/menubar.png' width={18} height={12} alt="icon" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
