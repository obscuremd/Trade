
const Questions = () => {
  return (
    <div className="w-full flex flex-col items-center py-[5%] bg-[#F7F7F7] gap-[40px]">
          <p className="md:text-[32px] text-[22px] text-[#494949]">Still Have Any Questions ?</p>

          <div className="w-full flex flex-col md:flex-row gap-[50px] px-[14%] justify-between items-center">

            <a 
              href="https://docs.tradefinex.org/FinIns/Invoices/" 
              target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center  md:max-w-[50%]">
              <img src="https://www.tradefinex.org/assets/banner-assets/images/innerpage-images/help-icon.png" alt="" />
              <p className="text-[22px] text-[#494949]">Help Center</p>
              <p className="text-[15px] text-[#687377] text-center">Let us know your Question or feedback</p>
            </a>

            <a 
              href="https://docs.tradefinex.org/FinIns/Invoices/" 
              target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center  md:max-w-[50%]">
              <img src="https://www.tradefinex.org/assets/banner-assets/images/innerpage-images/faqs-icon.png" alt="" />
              <p className="text-[22px] text-[#494949]">FAQs</p>
              <p className="text-[15px] text-[#687377] text-center">General or Technical: Ask your questions here!</p>
            </a>

            <a 
              href="https://docs.tradefinex.org/FinIns/Invoices/" 
              target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center  md:max-w-[50%]">
              <img src="https://www.tradefinex.org/assets/banner-assets/images/innerpage-images/techdoc-icon.png" alt="" />
              <p className="text-[22px] text-[#494949]">Technical Documents</p>
              <p className="text-[15px] text-[#687377] text-center">Find a technical resource, API link, example code, and release note here.</p>
            </a>

          </div>
        </div>
  )
}

export default Questions