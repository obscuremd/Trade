import { useState } from "react"

const Hero = () => {


    const images= [
        'https://www.tradefinex.org/assets/images/banner/create-pool_screen.jpg',
        'https://www.tradefinex.org/assets/images/banner/fxd-staking-aggregation_screen.jpg',
    ]

    const [image, setImage] =useState(0)

  return (
    <div className='md:flex md:px-[12%] px-[4%] md:py-[70px] py-[50px] w-full h-full item-center justify-between'>

        {/*content  */}
      <div className=' flex flex-col gap-[25px]'>
        <p className='md:text-[32px] text-[24px] text-[#494949] font-semibold md:w-[420px] md:leading-9 leading-8'>Empowering the Trade Finance Ecosystem through Smart Contract Standards</p>
        <p className='text-[15px] text-[#687377] md:w-[450px]'>TradeFinex Utilizes Open Source Smart Contract Technology for Trade Asset Pooling, Aggregation, and Distribution to Alternative Asset Investors.</p>

        {/* buttons */}
        <div className='flex gap-[5px]'>
            <button
                onClick={()=>setImage(0)} 
                className='md:px-[40px] px-[17px] md:py-[15px] py-[10px] border-[2px] border-[#007BFF] rounded-[5px] text-[12px] font-bold text-[#007BFF] bg-[#F6FBFF]'>CREATE POOL</button>
            
            <button
                onClick={()=>setImage(1)} 
                className='md:px-[40px] px-[17px] md:py-[15px] border-[2px] border-[#D6E9F8] rounded-[5px] text-[12px] font-bold text-[#454545] bg-[#e5e9ec00]'>AGGREGATED POOL DIRECTORY
            </button>
        </div>

        <button className='bg-[#EA212D] py-[15px] text-[16px] text-white font-semibold rounded-[5px]'>
            GET FXD
        </button>

      </div>

      {/* image */}
      <div className='relative'>
        <img src={images[image]} className="md:h-[420px] md:w-[650px] w-full" alt="" />
        <div className='py-[20px] px-[20px] bg-[#F5F8FC] md:absolute md:bottom-0' style={{ boxShadow: '6px -4px 6px rgba(0, 0, 0, 0.1)' }}>
            <p className='text-[20px] text-[#494949] font-semibold'>{image === 0? 'Create Pool' : 'Aggregated Pool Directory' }</p>
            <div className='md:flex gap-[35px] mt-[5px] '>
                <p className='text-[15px] text-[#687377] font-medium'>{ 
                    image === 0 ? 
                    'Create a regulated pool on the marketplace for improved cash flow and easy access to trade financing, strengthening buyer/supplier relationships.' : 
                    'FXD acts as a settlement layer, driving the system through smart contract-based obligations, while also digitizing and automating document distribution with financiers on a global trade distribution network.'}
                </p>
                <button className='md:w-[70%] w-full h-[46px] border-[1.5px] border-[#007BFF] rounded-[5px] text-[16px] font-bold text-[#007BFF] bg-[#F6FBFF]'>{
                image===0?
                'CREATE POOL':
                'VIEW POOLS'
                }</button>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
