import React from 'react'


interface props {
    image: string
    text: string
    date: string
    link: string
}

const Card: React.FC<props> = ({image, text, date, link}) => {
  return (
    <div className='w-[370px]'>
        {/* image */}
        <img src={image} alt="" className='h-[230px] w-full border-b-[0.5px]'/>

        {/* content */}
        <div className='w-full px-[5%] bg-[#FFFFFF] pt-[7%] pb-[5%]'>
            
            <p className='text-[15px] text-[#282C3F] max-h-[50px]'>{text}</p>
            
            <div className='flex justify-between mt-[90px]'>
                <p className='text-[14px] text-[#999999]'>{date}</p>

                <a href={link} className='text-[14px] text-[#1DA1F2]'>READ MORE</a>
            </div>
        </div>
    </div>
  )
}

export default Card