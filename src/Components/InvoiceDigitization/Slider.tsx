import { useState } from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Slider = () => {

    const [index, setIndex]= useState(0)

    const images =[
        'https://www.tradefinex.org/assets/banner-assets/images/innerpage-images/infactor-screen-3.png',
        'https://www.tradefinex.org/assets/banner-assets/images/innerpage-images/infactor-screen-4.png',
        'https://www.tradefinex.org/assets/banner-assets/images/innerpage-images/infactor-screen-1.png',
        'https://www.tradefinex.org/assets/banner-assets/images/innerpage-images/infactor-screen-2.png'
    ]

    const handleLeft = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleRight = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };



  return (
    <div className="flex flex-col items-center pt-[4%] px-[4%]">
          <p className="md:text-[32px] text-[22px] text-[#494949]">Get an overview</p>
          <p className="md:text-[18px] text-[px] text-[#687377] text-center">Connect to financiers in a whole new, effective and efficient way.</p>


          <div className="flex items-center md:mt-[5%] mt-[10%]">
            <button onClick={handleLeft}>
              <ArrowCircleLeftIcon fontSize="large"/>
            </button>

              <img src={images[index]} alt="" className='md:w-[760px] w-[260px]' />
            
            <button onClick={handleRight}>
              <ArrowCircleRightIcon fontSize="large"/>
            </button>
          </div>
        </div>
  )
}

export default Slider