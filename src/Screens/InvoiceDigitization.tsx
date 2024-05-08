import Card from "../Components/InvoiceDigitization/Card"
import Video from "../Components/InvoiceDigitization/Video"
import Slider from "../Components/InvoiceDigitization/Slider";
import Questions from "../Components/InvoiceDigitization/Questions";

const InvoiceDigitization = () => {

  

  return (
    <div className="w-full">
      {/* header */}
      <div 
        style={{backgroundImage:'url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQj9S5JucGkqY5VDGJ9px0KpsH2607mII4JnqswQieU3FAVOtnY)'}} 
        className="w-full md:h-[250px] h-[200px] text-white text-[34px] md:pl-[14%] pl-[4%] pt-[8%]">
          <p>Invoice Digitization</p>
          <p className="text-[16px]">Factoring Your Unpaid Invoices Becomes Easy, Transparent and Secure Using Blockchain Technology.</p>
      </div>

      {/* first paragraph */}
      <div className="md:px-[10%] px-[4%] py-[8%] flex flex-col items-center">
        <p className="md:text-[32px] text-[25px] text-[#494949] text-center">Get More Financing Options to Your Unpaid Invoice!</p>
        <p className="md:text-[18px] text-[#687377] text-center">Leverage the power of blockchain and make your financial instruments liquid and interoperable.</p>

        <div className="flex flex-wrap gap-[30px] mt-[4%]">
          <Card 
            image="https://www.tradefinex.org/assets/banner-assets/images/innerpage-images/iso20022-standard-ico.png"
            header="Built on ISO20022 standard"
            body="Invoice Factoring is built on ISO 20022 Standard, the interoperable messaging standard for the private and hybrid state."/>
          <Card 
            image="https://www.tradefinex.org/assets/banner-assets/images/innerpage-images/easy-fast-integration-ico.png"
            header="Easy and Fast Integration Using API"
            body="Easy integration with a click. Easy plugin available for QuickBooks users."/>
            <div className='w-[48%] flex bg-[#ffffff] px-[2%] pt-[2%] pb-[5%] gap-[4%]'></div>
          <Card 
            image="https://www.tradefinex.org/assets/banner-assets/images/innerpage-images/leverage-annual-market-ico.png"
            header="Leverage USD 5 Trillion Annual Market"
            body="Connect to your financier in a whole new way. Get access to more financing options."/>
          <Card 
            image="https://www.tradefinex.org/assets/banner-assets/images/innerpage-images/power-smart-contract-ico.png"
            header="Leverage the Power of Smart Contract"
            body="Automate repayment and settlement cycle using the power of blockchain."/>
        </div>


        </div>
        
        {/* video */}
        <Video/>

        {/* silder */}
        <Slider/>

        {/* questions */}
        <Questions/>
        
    </div>
  )
}

export default InvoiceDigitization
