import CategorySection from '@components/CategorySection'
import Chart from '@components/LineChart'
import Coins from '@components/Coins'
import Navbar from '@components/common/Navbar'
import Trending from '@components/Trending'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Statistics from '@components/Statistics'


const Home: NextPage = () => {
  return (
    <div className='t-p-8'>
      {/* lg:t-max-w-[1400px] t-m-auto */}
      <div className='t-bg-[#1E1E1E] t-min-h-96 t-rounded-xl t-relative'>
        <Navbar />
        <div className='t-px-8'>
          <span className='t-text-[#EFF5FF] t-text-[70px]'>Web3 on Bitcoin </span>
          <span className='t-text-[#7A98FF] t-text-[28px]'>has arrived</span>
        </div>

        <div className='t-my-12 t-p-4'>
          <div className='t-grid t-grid-cols-1 lg:t-grid-cols-2'>
            <div className='t-flex t-flex-col t-gap-4'>
              <Chart />
            </div>
            <div className='t-flex t-flex-col t-gap-4'>
              <Statistics />
            </div>
          </div>
        </div>

        <CategorySection />

        <div className='t-grid t-grid-cols-4 t-gap-24 t-p-8'>
          <Coins />
          <Trending />
        </div>


        <div className='t-absolute t-bottom-8 t-right-48 '>
          <div className='t-bg-[#515993] t-rounded-l-3xl t-p-4 t-w-[240px] t-h-[150px]'>
            <p className='t-text-center t-text-[32px] t-text-[#EFF5FF]'>Hello Wander,</p>
            <p className='t-text-right t-text-[13px] t-text-[#747AA8]'>are you ready to explore the mysteries of Bitcoin and join The Collective?</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
