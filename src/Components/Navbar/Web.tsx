import { useState } from 'react'
import { Link } from 'react-router-dom'

const Web = () => {

  const [visible, setVisible] = useState(false)


  return (
    <div className="flex h-full items-center gap-[15px]">

              {/* Rwa */}
              <a href="https://portal.tradefinex.org/" target="_blank" rel="noopener noreferrer">
                <p>RWA Yield Pool</p>
              </a>

                <hr className="h-[11px] bg-[#E7D4D4] w-[1px]"/>
              
              {/* DropDown */}
              <div className="">
                <p onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)}>Origination Tools</p>

                {/* DropDown content */}
                {
                  visible &&
                  <div className="border-[1px] z-20 absolute w-60 bg-white" onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)}>  
                    <Link to={'/InvoiceDigitization'}>
                      <p className="border-b-[1px] p-5">Invoice Digitization</p>
                    </Link>
                    <Link to={'/Bond'}>
                      <p className="border-b-[1px] p-5">Bond</p>
                    </Link>
                    <Link to={'/Rwa'}>
                      <p className="border-b-[1px] p-5">RWA</p>
                    </Link>
                    <a href="https://www.tradefinex.org/publicv/funddesign" target="_blank" rel="noopener noreferrer">
                      <p className="border-b-[1px] p-5">Fund My Design</p>
                    </a> 
                  </div>
                }
              </div>

                <hr className="h-[11px] bg-[#E7D4D4] w-[1px]"/>
              
              {/* Case study */}
              <Link to={'/CaseStudy'}>
                <p>Case Study</p>
              </Link>
                
                <hr className="h-[11px] bg-[#E7D4D4] w-[1px]"/>
              
              {/* contact us */}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3Lc8_vXhYAlp57h6nTkXFmRD2d2Ne258XYVAJ7IuT4YpFcw/viewform" target="_blank" rel="noopener noreferrer">Contact Us</a>
                
                <hr className="h-[11px] bg-[#E7D4D4] w-[1px]"/>
              
              {/* Rwa */}
              <Link to={'/Rwa'}>
                <p>RWA</p>
              </Link>
          </div> 
  )
}

export default Web