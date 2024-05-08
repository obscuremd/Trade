import React from 'react'

interface props {
  image: string
  header: string
  body: string
}

const Card: React.FC<props> = ({image, header, body}) => {
  return (
    <div className='md:w-[48%] md:h-full h-[200px] flex bg-[#F5F8FC] md:px-[2%] px-[5%] md:pt-[2%] pt-[5%] pb-[5%] gap-[4%]'>
        <img src={image} alt="" className='h-[50px] w-[50px] md:w-[90px] md:h-[90px]' />

        <div>
          <p className='text-[22px]'>{header}</p>
          <p className='text-[15px] text-[#687377]'>{body}</p>
        </div>
    </div>
  )
}

export default Card