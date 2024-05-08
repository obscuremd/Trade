import Card from "../Components/CaseStudy/Card"

const CaseStudy = () => {

  const data = [
    {
      image: 'https://www.tradefinex.org/assets/images/case-study/thedigitalbanker1.jpg',
      text: 'oth Concludes Two Successful Supply Chain Financing Pilots in LatAm Funded By $FXD on XDC Network blockchain',
      date: 'December 26, 2023'
    },
    {
      image: 'https://www.tradefinex.org/assets/images/case-study/thedigitalbanker.jpg',
      text: 'InvoiceMate Celebrates Milestone with Successful Private Credit Pilot on XDC Network using TradeFinex Open Web3 Standard',
      date: 'December 22, 2023'
    },
    {
      image: 'https://www.tradefinex.org/assets/images/case-study/financeyahoo.jpg',
      text: 'STASIS Deployed the Largest Euro Stablecoin EURS on XDC Network to Boost Web3 Payments',
      date: 'December 12, 2022'
    },
    {
      image: 'https://www.tradefinex.org/assets/images/case-study/nasdaq.jpg',
      text: 'XDC Network: The Irreplaceable Backbone Of Modern Global Trade Finance',
      date: 'December 07, 2023'
    },
    {
      image: 'https://www.tradefinex.org/assets/images/case-study/gulfbusiness.jpg',
      text: "Dubai's DMCC digitises gold trading in partnership with ComTech Gold",
      date: 'November 22, 2022'
    },
    {
      image: 'https://www.tradefinex.org/assets/images/case-study/blockchainmagazine.jpg ',
      text: 'XDC Trade Network delivers Revolutionizing Trade Finance transaction with Electronic BL Conversion and Capital Provision.',
      date: 'October 31, 2023'
    },
    {
      image: 'https://www.tradefinex.org/assets/images/case-study/blockchainmagazine.jpg',
      text: 'XDC Trade Network delivers Revolutionizing Trade Finance transaction with Electronic BL Conversion and Capital Provision.',
      date: 'December 26, 2023'
    },
    {
      image: 'https://www.tradefinex.org/assets/images/case-study/coindesk.jpg',
      text: 'Tokenized U.S. Treasuries Arrive to XDC Network as Digital Bond Market Grows',
      date: 'August 29, 2023'
    },
  ]



  return (
    <div>
      <div 
        style={{backgroundImage:'url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQj9S5JucGkqY5VDGJ9px0KpsH2607mII4JnqswQieU3FAVOtnY)'}} 
        className="w-full md:h-[250px] h-[150px] text-white text-[34px] md:pl-[14%] pl-[4%] pt-[8%]">Case Study</div>

        <div className="pt-[5%] bg-[#F7F7F7] md:pl-[14%] px-[4%] gap-[30px] flex flex-wrap pb-[90px]">

          {data.map((item, index)=>(
              <Card 
              key={index}
              image={item.image}
              text={item.text}
              date={item.date}
              link="#"
              />
          ))}
          
        </div>
    </div>
  )
}

export default CaseStudy
