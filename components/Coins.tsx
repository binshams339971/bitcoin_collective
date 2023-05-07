import React from 'react';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Image from "next/image";

const COINS = [
  {
    name: "Palino",
    descriptions: "Platform built on the Bitcoin.",
    icon: "/images/detailsIcons.png",
    likes: "3.1K",
    state: "down"
  },
  {
    name: "Sovryn",
    descriptions: "A decentralized finance (DeFi).",
    icon: "/images/detailsIcons.png",
    likes: "2K",
    state: 'up'
  },
  {
    name: "Sniper",
    descriptions: "Has Joined!.",
    icon: "/images/detailsIcons.png",
    likes: "2K",
    state: 'up'
  }
]

export default function Coins() {
  const [typeSelect, setTypeSelect] = React.useState("Popular");

  return (
    <div className='t-col-span-1'>
      <div className='t-bg-[#373F64] t-rounded-xl t-h-[662px]'>
        <div className='t-flex t-gap-2 t-py-8 t-px-6'>
          <div onClick={() => setTypeSelect("Popular")} className={`t-rounded-xl t-border ${typeSelect === "Popular" ? "t-border-[#7A98FF] t-text-[#E2EBFB]" : "t-border-[#75849D] t-text-[#75849D]"} t-px-2.5 t-py-1.5  t-text-[12px] t-cursor-pointer`}>Popular</div>
          <div onClick={() => setTypeSelect("New")} className={`t-rounded-xl t-border ${typeSelect === "New" ? "t-border-[#7A98FF] t-text-[#E2EBFB]" : "t-border-[#75849D] t-text-[#75849D]"} t-px-2.5 t-py-1.5 t-text-[12px] t-cursor-pointer`}>New</div>
        </div>

        <div className='t-px-6'>

          {
            COINS.map((coin, index) => (
              <div key={index} className="t-flex t-justify-between t-border-b t-border-[#6F7894] t-pb-5 t-mb-6">
                <div className='t-flex t-gap-6'>
                  <div className=''>
                    <Image src='/images/coinIcon.png' width={24} height={24} alt='icons' />
                  </div>
                  <div className='t-block'>
                    <p className='t-text-[#EFF5FF] t-text-[11px]'>{coin?.name}</p>
                    <p className='t-text-[#747AA8] t-text-[11px] t-mt-1.5'>{coin?.descriptions}</p>
                  </div>
                </div>
                <div className='t-flex t-gap-4'>
                  <div className='t-flex t-gap-0.5'>
                    {
                      coin.state === 'up' ? <FaCaretUp className='t-text-[#7A98FF] t-text-[14px]' /> : <FaCaretDown className='t-text-[#547D1E] t-text-[14px]' />
                    }
                    <p className='t-text-[12px] t-text-[#EFF5FF]'>{coin?.likes}</p>
                  </div>
                  <div className='t-mt-[-5px]'>
                    <Image className='t-cursor-pointer' src='/images/detailsIcons.png' width={3} height={8} alt='icons' />
                  </div>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}
