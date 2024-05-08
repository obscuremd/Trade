import CheckIcon from '@mui/icons-material/Check';


const Video = () => {
  return (
    <div className="flex md:flex-row flex-col md:px-[10%] px-[4%] py-[8%] bg-[#F7F7F7] gap-[5%]">
          <div className="md:w-[50%]">
            <p className="text-[30px] text-[#494949]">How does it work?</p>
            <p className="text-[15px] text-[#687377] mt-[4%]">Invoice Factoring is an accepted form of working capital management solution. It does so by converting your unpaid invoices to cash. Invoice Factoring allows companies to instantly receive cash and helps customers live by friendly payment terms. Besides, it also allows investors (the factor) to earn some profits in terms of fees.</p>

            <div className="mt-[4%] flex flex-col md:gap-[5px] gap-[20px]">
              <p className="text-[14px] text-[#687377]">
                <CheckIcon sx={{fontSize:15}} className="text-[#EA212D] mr-2"/>InFactor is a platform for factoring Trade Instruments, mainly invoices.</p>

              <hr className="w-full h-[0.5px]" />
              
              <p className="text-[14px] text-[#687377]">
                <CheckIcon sx={{fontSize:15}} className="text-[#EA212D] mr-2"/>IBuilt-in XDC Wallet and smart contracts make invoice factoring easier, transparent, and secure.</p>
              
            </div>

            <button
                className='md:px-[40px] px-[17px] md:py-[15px] py-[10px] border-[2px] border-[#007BFF] rounded-[5px] text-[14px] font-bold text-[#007BFF] bg-[#F6FBFF]
                md:mt-[4%] mt-[10%]'>START POC</button>
          </div>

          <video src="https://youtu.be/M7W16RPfSE4" controls className="h-[300px] w-[550px]"></video>
      </div>
  )
}

export default Video