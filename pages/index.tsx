import CategorySection from '@components/CategorySection'
import Chart from '@components/LineChart'
import Navbar from '@components/common/Navbar'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <div className='t-p-8'>
      {/* lg:t-max-w-[1400px] t-m-auto */}
      <div className='t-bg-[#1E1E1E] t-min-h-96 t-rounded-xl '> 
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
              <Chart />
            </div>
          </div>
        </div>

        <CategorySection />
      </div>
    </div>
  )
}

export default Home
