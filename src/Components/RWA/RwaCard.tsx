import React from 'react'


interface props {
    header: string
    text: string
    link: string
}

const RwaCard: React.FC<props> = ({header, text, link}) => {
  return (
    <div className='w-[43%] bg-[#FFFFFF] px-[2%] pt-[2%]'>
        {/* image */}
        <p className='text-[30px] text-[#494949]'>{header}</p>

        {/* content */}
        <div className='w-full  pt-[7%] pb-[5%]'>
            
            <p className='text-[15px] font-thin text-[#687377] tracking-[0.2px]'>{text}</p>
            
            <button
                className='md:px-[40px] px-[17px] md:py-[15px] py-[10px] border-[2px] border-[#007BFF] rounded-[5px] text-[14px] uppercase text-[#007BFF] bg-[#F6FBFF] mt-4'>{link}</button>
        </div>
    </div>
  )
}

export default RwaCard