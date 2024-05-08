import React from "react";


interface BodyProps {
    header: string;
    par: string;
    btn: string;
  }

const Settlement = () => {

    const Body: React.FC<BodyProps> =({header, par, btn})=>{
        return(
            <div className="flex flex-col gap-[20px] items-start">
                <p className="text-[#687377] text-[22px] font-semibold">{header}</p>
                <p className="text-[#687377] text-[15px]">{par}</p>
                <button className="text-[#007BFF] text-[15px] uppercase px-[20px] py-[10px] border-[2px] border-[#007BFF] font-semibold rounded-md hover:bg-[#007BFF] hover:text-white hover:underline">{btn}</button>
            </div>
        )
    }


  return (
    <div className="py-[70px] md:px-[14%] px-[7%] flex flex-col items-center gap-[50px] bg-[#F7F7F7]">
        <p className="md:text-[32px] text-[22px] text-[#494949]">For Settlement</p>
        <div className="flex md:gap-[60px] gap-[20px] flex-col md:flex-row">
            <Body 
                header={'Stable Coin Deployment'}
                par={'FXD is an XDC Based Stablecoin, representing a stable-price currency issued and developed by Fathom.fi - DAO'}
                btn={'get fxd'}/>

            <hr className="md:h-[140px] md:w-[2px] bg-[#C5C8CF]"/>

            <Body 
                header={'SAbout XDC Liquidity'}
                par={'Explore XDC as a protocol for an instant global settlement and counterparty risk mitigation for Trade Finance'}
                btn={'learn more'}/>
        </div>
    </div>
  )
}

export default Settlement