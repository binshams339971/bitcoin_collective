import React from 'react'
import Image from 'next/image'

export default function CategorySection() {
    const [hovered, setHovered] = React.useState<number>(0);

    return (
        <div className='t-p-8'>
            <div className="t-flex t-justify-between t-gap-4 t-w-full t-flex-wrap">
                <div className='t-col-span-1'>
                    <div onMouseEnter={() => setHovered(1)} onMouseLeave={() => setHovered(0)} className='t-border hover:t-border-0 t-border-dashed t-border-[#747AA8] hover:-t-translate-y-2 t-transition t-duration-200 hover:t-ease-in hover:t-bg-[#737EC7]/30 hover:t-backdrop-blur-xl t-p-6 t-rounded-3xl t-w-[180px]'>
                        <div className='t-flex t-justify-center t-gap-2'>
                            <div className='t-mt-0.5'>
                                <Image src='/images/wallet.png' width={20} height={16} alt="wallet" />
                            </div>
                            <p className="t-text-center t-text-[#E2EBFB] t-text-[16px] t-font-medium">Dell</p>
                        </div>
                        {
                            hovered === 1 ?
                                <div className='t-mt-4 t-bg-[#3753BA] t-rounded-lg t-text-center t-py-2 t-text-[12px] t-text-[#E2EBFB] t-font-medium t-cursor-pointer'>
                                    Get Started
                                </div> :
                                <div className='t-mt-4 t-bg-[#75849D] t-rounded-b-xl t-rounded-t-sm t-text-center t-py-2 t-text-[12px] t-text-[#E2EBFB] t-font-medium'>Discover</div>
                        }
                    </div>
                </div>
                <div className='t-col-span-1'>
                    <div onMouseEnter={() => setHovered(2)} onMouseLeave={() => setHovered(0)} className='t-border hover:t-border-0 t-border-dashed t-border-[#747AA8] hover:-t-translate-y-2 t-transition t-duration-200 hover:t-ease-in hover:t-bg-[#737EC7]/30 hover:t-backdrop-blur-xl t-p-6 t-rounded-3xl t-w-[180px]'>
                        <div className='t-flex t-justify-center t-gap-2'>
                            <div className='t-mt-0.5'>
                                <Image src='/images/wallet.png' width={20} height={16} alt="wallet" />
                            </div>
                            <p className="t-text-center t-text-[#E2EBFB] t-text-[16px] t-font-medium">Infrastructure</p>
                        </div>
                        {
                            hovered === 2 ?
                                <div className='t-mt-4 t-bg-[#3753BA] t-rounded-lg t-text-center t-py-2 t-text-[12px] t-text-[#E2EBFB] t-font-medium t-cursor-pointer'>
                                    Get Started
                                </div> :
                                <div className='t-mt-4 t-bg-[#75849D] t-rounded-b-xl t-rounded-t-sm t-text-center t-py-2 t-text-[12px] t-text-[#E2EBFB] t-font-medium'>Discover</div>
                        }
                    </div>
                </div>

                <div className='t-col-span-1'>
                    <div onMouseEnter={() => setHovered(3)} onMouseLeave={() => setHovered(0)} className='t-border hover:t-border-0 t-border-dashed t-border-[#747AA8] hover:-t-translate-y-2 t-transition t-duration-200 hover:t-ease-in hover:t-bg-[#737EC7]/30 hover:t-backdrop-blur-xl t-p-6 t-rounded-3xl t-w-[180px]'>
                        <div className='t-flex t-justify-center t-gap-2'>
                            <div className='t-mt-0.5'>
                                <Image src='/images/wallet.png' width={20} height={16} alt="wallet" />
                            </div>
                            <p className="t-text-center t-text-[#E2EBFB] t-text-[16px] t-font-medium">Payments</p>
                        </div>
                        {
                            hovered === 3 ?
                                <div className='t-mt-4 t-bg-[#3753BA] t-rounded-lg t-text-center t-py-2 t-text-[12px] t-text-[#E2EBFB] t-font-medium t-cursor-pointer'>
                                    Get Started
                                </div> :
                                <div className='t-mt-4 t-bg-[#75849D] t-rounded-b-xl t-rounded-t-sm t-text-center t-py-2 t-text-[12px] t-text-[#E2EBFB] t-font-medium'>Discover</div>
                        }
                    </div>
                </div>

                <div className='t-col-span-1'>
                    <div onMouseEnter={() => setHovered(4)} onMouseLeave={() => setHovered(0)} className='t-border hover:t-border-0 t-border-dashed t-border-[#747AA8] hover:-t-translate-y-2 t-transition t-duration-200 hover:t-ease-in hover:t-bg-[#737EC7]/30 hover:t-backdrop-blur-xl t-p-6 t-rounded-3xl t-w-[180px]'>
                        <div className='t-flex t-justify-center t-gap-2'>
                            <div className='t-mt-0.5'>
                                <Image src='/images/wallet.png' width={20} height={16} alt="wallet" />
                            </div>
                            <p className="t-text-center t-text-[#E2EBFB] t-text-[16px] t-font-medium">Tools</p>
                        </div>
                        {
                            hovered === 4 ?
                                <div className='t-mt-4 t-bg-[#3753BA] t-rounded-lg t-text-center t-py-2 t-text-[12px] t-text-[#E2EBFB] t-font-medium t-cursor-pointer'>
                                    Get Started
                                </div> :
                                <div className='t-mt-4 t-bg-[#75849D] t-rounded-b-xl t-rounded-t-sm t-text-center t-py-2 t-text-[12px] t-text-[#E2EBFB] t-font-medium'>Discover</div>
                        }
                    </div>
                </div>

                <div className='t-col-span-1'>
                    <div onMouseEnter={() => setHovered(5)} onMouseLeave={() => setHovered(0)} className='t-border hover:t-border-0 t-border-dashed t-border-[#747AA8] hover:-t-translate-y-2 t-transition t-duration-200 hover:t-ease-in hover:t-bg-[#737EC7]/30 hover:t-backdrop-blur-xl t-p-6 t-rounded-3xl t-w-[180px]'>
                        <div className='t-flex t-justify-center t-gap-2'>
                            <div className='t-mt-0.5'>
                                <Image src='/images/wallet.png' width={20} height={16} alt="wallet" />
                            </div>
                            <p className="t-text-center t-text-[#E2EBFB] t-text-[16px] t-font-medium">Social/Identity</p>
                        </div>
                        {
                            hovered === 5 ?
                                <div className='t-mt-4 t-bg-[#3753BA] t-rounded-lg t-text-center t-py-2 t-text-[12px] t-text-[#E2EBFB] t-font-medium t-cursor-pointer'>
                                    Get Started
                                </div> :
                                <div className='t-mt-4 t-bg-[#75849D] t-rounded-b-xl t-rounded-t-sm t-text-center t-py-2 t-text-[12px] t-text-[#E2EBFB] t-font-medium'>Discover</div>
                        }
                    </div>
                </div>

                <div className='t-col-span-1'>
                    <div onMouseEnter={() => setHovered(6)} onMouseLeave={() => setHovered(0)} className='t-border hover:t-border-0 t-border-dashed t-border-[#747AA8] hover:-t-translate-y-2 t-transition t-duration-200 hover:t-ease-in hover:t-bg-[#737EC7]/30 hover:t-backdrop-blur-xl t-p-6 t-rounded-3xl t-w-[180px]'>
                        <div className='t-flex t-justify-center t-gap-2'>
                            <div className='t-mt-0.5'>
                                <Image src='/images/wallet.png' width={20} height={16} alt="wallet" />
                            </div>
                            <p className="t-text-center t-text-[#E2EBFB] t-text-[16px] t-font-medium">Wallets</p>
                        </div>
                        {
                            hovered === 6 ?
                                <div className='t-mt-4 t-bg-[#3753BA] t-rounded-lg t-text-center t-py-2 t-text-[12px] t-text-[#E2EBFB] t-font-medium t-cursor-pointer'>
                                    Get Started
                                </div> :
                                <div className='t-mt-4 t-bg-[#75849D] t-rounded-b-xl t-rounded-t-sm t-text-center t-py-2 t-text-[12px] t-text-[#E2EBFB] t-font-medium'>Discover</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
