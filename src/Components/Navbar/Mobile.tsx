import { useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Mobile = () => {

  const [visible, setVisible] = useState(false)


  return (
    <div className="absolute right-0 top-[12%] bg-white flex flex-col w-full pl-[4%] py-5 gap-[15px]">

              {/* Rwa */}
              <a href="https://portal.tradefinex.org/" target="_blank" rel="noopener noreferrer">
                <p>RWA Yield Pool</p>
              </a>

              
              {/* DropDown */}
              <div className="">
                <p onClick={()=>setVisible(!visible)} className='flex justify-between'>Origination Tools  <ArrowDropDownIcon/></p>

                {/* DropDown content */}
                {
                  visible &&
                  <div className=" bg-white">  
                    <Link to={'/InvoiceDigitization'}>
                      <p className="pt-7 pl-[2%]">Invoice Digitization</p>
                    </Link>
                    <Link to={'/Bond'}>
                      <p className="pt-7 pl-[2%]">Bond</p>
                    </Link>
                    <Link to={'/Rwa'}>
                      <p className="pt-7 pl-[2%]">RWA</p>
                    </Link>
                    <a href="https://www.tradefinex.org/publicv/funddesign" target="_blank" rel="noopener noreferrer">
                      <p className="pt-7 pl-[2%]">Fund My Design</p>
                    </a> 
                  </div>
                }
              </div>

              
              {/* Case study */}
              <Link to={'/CaseStudy'}>
                <p>Case Study</p>
              </Link>
                
              
              {/* contact us */}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3Lc8_vXhYAlp57h6nTkXFmRD2d2Ne258XYVAJ7IuT4YpFcw/viewform" target="_blank" rel="noopener noreferrer">Contact Us</a>
                
              
              {/* Rwa */}
              <Link to={'/Rwa'}>
                <p>RWA</p>
              </Link>
          </div> 
  )
}

export default Mobile