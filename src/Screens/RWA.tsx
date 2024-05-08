import RwaCard from "../Components/RWA/RwaCard"

RwaCard


const Rwa = () => {
  const data = [
    {
      header: 'Tradefinex RWA Yield Pool Listing',
      text: "Introducing TradeFinex RWA Yield Pool Listing, your premier gateway to Real World Asset (RWA) yield aggregation and listing, powered by the XDC Network and open smart contract standards by TradeFinex. At TradeFinex, we seamlessly bridge the gap between traditional finance and decentralized finance by offering a smart contract standars for institutions and accredited members to establish their own yield pools. Leverage the efficiency, transparency, and security of the XDC Network.TradeFinex not only help to simplifies the process of yield pool creation but also ensures liquidity and accessibility for accredited institution seeking to explore new avenues of generating returns. Start your journey with innovation today and unlock the power of decentralized finance to maximize your potential.",
      date: 'Apply for Lending Pool'
    },
    {
      header: 'ComTech Gold',
      text: "Comtech Gold has added another dimension to gold trading by issuing standardized digital gold backed by 100% physical gold. Built on XinFin XDC Network, an advanced blockchain, the project is also Shariah-compliant and certified by one of the renowned Shariah scholars groups in the United Arab Emirates.Digital gold can be transformed into physical gold anytime, resolving the storage and transfer-related issues associated with gold. Holders of CGO tokens own gold physically in the same proportion. Each token on Comtech Gold represents 1 gram of gold with prices hinged to the prevailing international gold rate. The tokens are fully backed by the gold bars identifiable through their bar numbers. These are standardized 1 kg bars of 999.9 purity.ComTech Gold's CGO token operates in compliance with robust regulations, aligning with esteemed entities such as DMCC, Brinks, and Transguard. This commitment to regulatory standards ensures the security and transparency of CGO transactions, fostering trust and reliability in the precious metals ecosystem.",
      date: 'Learn More'
    },
    {
      header: 'STASIS/EURS',
      text: 'STASIS, is a European fintech firm that serves as a bridge between traditional financial services and emerging Web 3 technologies. The company specializes in stablecoin applications and is dedicated to providing user-friendly tools for managing digital currencies. The collaboration between the banking giants, Standard Chartered and Deutsche Bank, in partnership with Stasis Euro, has set the stage for a new era in digital payments. Their successful proof-of-concept marks a pivotal moment in the world of financial technology and blockchain innovation. With this achievement, they have showcased the potential of the XDC ecosystem in enabling real-time digital transactions and swaps, thereby redefining the way we think about cross-border payments.STASIS EURO, or EURS is a legal euro stablecoin that mirrors the Euro on the blockchain, and all tokens are fully backed by 1:1 collateral reserves.The EURS Network, powered by EURS, is an integrated ecosystem encompassing various crypto exchanges, financial services and platforms and digital wallets.',
      date: 'Learn More'
    },
    {
      header: 'U.S. Treasury (USTY)',
      text: "'USTY is issued as a security token, a type of digital asset that represents ownership or investment in an underlying asset. In the case of USTY, the underlying asset is an ETF that seeks to track the investment results of an index composed of U.S. dollar-denominated government bonds issued by the U.S. Treasury.Unlike utility tokens, which primarily serve as access to a product or service, USTY is designed to comply with securities regulations and offer investors specific rights and protections. USTY falls under the jurisdiction of the Securities and Exchange Commission (SEC) in the United States.Yieldteq LLC, the 'Issuer' of USTY (also called the 'Company'), plays a crucial role in the process. The Issuer is the entity that creates and offers USTY to investors.",
      date: 'Learn More'
    },
  ]



  return (
    <div>
      <div 
        style={{backgroundImage:'url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQj9S5JucGkqY5VDGJ9px0KpsH2607mII4JnqswQieU3FAVOtnY)'}} 
        className="w-full h-[250px] text-white text-[34px] pl-[14%] pt-[8%]">
          <p>Real-World Assets (RWA)</p>
          <p className="text-[16px]">Unlocking Real-World Assets.</p>
      </div>

      <div className="flex flex-col items-center px-[14%] py-[4%] bg-[#F7F7F7]">
        <p className="text-[30px] text-[#494949]">XDC Network: A Hub for Real-World Asset Innovation</p>

        <p className="text-[18px] text-[#687377] text-center mt-[2%]">The XDC Network's embrace of RWA projects signifies its commitment to transforming traditional finance through blockchain technology.</p>
        <p className="text-[18px] text-[#687377] text-center mt-[2%]">Real-World Assets (RWA) represent a transformative bridge between traditional finance and the blockchain world, bringing tangible, real-world value into decentralized ecosystems. On the XDC Network, a blockchain renowned for its efficiency and versatility, several innovative RWA projects have emerged, each contributing to the ecosystem's growth and the integration of blockchain into real-world financial applications.</p>  
      </div>

        <div className="pt-[5%] bg-[#F7F7F7] pl-[14%] gap-[30px] flex flex-wrap pb-[90px]">

          {data.map((item, index)=>(
              <RwaCard 
              key={index}
              header={item.header}
              text={item.text}
              link={item.date}
              />
          ))}
          
        </div>
    </div>
  )
}

export default Rwa
