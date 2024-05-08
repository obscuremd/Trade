import Card from "../Components/InvoiceDigitization/Card"
import Video from "../Components/InvoiceDigitization/Video"
import Slider from "../Components/InvoiceDigitization/Slider";
import Questions from "../Components/InvoiceDigitization/Questions";

const Bond = () => {
  return (
    <div className="w-full">
      {/* header */}
      <div 
        style={{backgroundImage:'url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQj9S5JucGkqY5VDGJ9px0KpsH2607mII4JnqswQieU3FAVOtnY)'}} 
        className="w-full md:h-[250px] h-[200px] text-white text-[34px] md:pl-[14%] pl-[4%] pt-[8%]">
          <p>BOSS 101</p>
          <p className="text-[16px]">Create, Manage and Liquidate Bond Instruments On Blockchain.</p>
      </div>

      {/* first paragraph */}
      <div className="md:px-[10%] px-[4%] py-[5%] flex flex-col items-center">
        <p className="md:text-[32px] text-[25px] text-[#494949] text-center">Creating Global Bond Standard</p>
        <p className="md:text-[18px] text-[#687377] text-center">Connecting the Traditional Bond Market with BOSS 101 Standard.</p>

        <div className="flex flex-wrap gap-[30px] mt-[4%]">
          <Card 
            image="https://www.tradefinex.org/assets/banner-assets/images/innerpage-images/avoid-failure-risk-ico.png"
            header="Avoid Risks of Single-Point Failure"
            body="Bunk the fear of a single point of failure as blockchains don’t have one."/>
          <Card 
            image="https://www.tradefinex.org/assets/banner-assets/images/innerpage-images/easy-fast-integration-ico.png"
            header="Faster and more Transparent"
            body="Blockchain technology makes processes transparent and secure."/>
          <Card 
            image="https://www.tradefinex.org/assets/banner-assets/images/innerpage-images/process-automation-ico.png"
            header="Efficient Process and Automation"
            body="Enabling automatic and efficient bond settlement."/>
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

export default Bond
