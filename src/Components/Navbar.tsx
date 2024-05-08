import { useState } from "react"
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import Web from "./Navbar/Web";
import Mobile from "./Navbar/Mobile";


const Navbar = () => {


  const mobile = window.screen.width >= 768
  const [visible, setVisible] = useState(false)

  return (
    <div 
      className="w-screen md:h-[110px] md:px-[180px] px-[16px] py-[5%] flex justify-between items-center text-[#3C566B] text-[15px] border-b-[1px]"
      style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)' }}
      >
        {/* Logo */}
      <Link to={'/'}>    
        <img src="https://www.tradefinex.org/assets/images/icon/logo.png" alt="" className="w-[200px] md:w-[300px]"/>
      </Link>

      {
        mobile ?
          // {/* Content */}
          <Web/> 
        : 
        <div className="">
          <button onClick={()=>setVisible(!visible)}>
            < MenuIcon/>
          </button>
            {visible && <Mobile/>}
        </div>
      }
      
    </div>
  )
}

export default Navbar
