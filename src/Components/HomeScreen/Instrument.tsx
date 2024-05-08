import InstrumentCard from "./InstrumentCard"

const Instrument = () => {
  return (
    <div className="md:px-[12%] px-[4%] py-[5%] flex flex-col items-center justify-center gap-12">
      <p className="md:text-[32px] text-[22px]">Instrument Support</p>
      <div className="flex flex-col md:flex-row gap-7">
        <InstrumentCard title={'Recievable (Invoice)'} description={'TradeFinex Network offers a Digitized and De-Centralized way to manage Invoices. The technology revolutionizes how transactions are validated, invoices are issued and payments are made.'} color={'#007BFF'} textColor={'#ffff'}/>
        
        <InstrumentCard title={'Letter of Credit'} description={'TradeFinex Network offers a De-Centralized way to manage letters of credit and electronic presentations. Buyers, sellers, banks and carriers can electronically exchange letters of credit, Electronic Bill of Lading (eBoL), insurance certificates and other trade documentation over a decentralized Blockchain network.'} color={'#F5F8FC'} textColor={'#687377'}/>
        
        <InstrumentCard title={'Guarantees'} description={'TradeFinex Network enables organizations to create and manage guarantees and bonds from multiple financial institutions with full control and visibility. This reduces the risk of potential fraud, errors and cost of credit and administration.'} color={'#007BFF'} textColor={'#ffff'}/>
        
        <InstrumentCard title={'Electronic Bill of Lading (eBoL)'} description={'TradeFinex pioneers smart contract standards in collaboration with governments, supply chains, and port authorities, enhancing global trade transparency, efficiency, and security through MLETR and XDC Network.'} color={'#F5F8FC'} textColor={'#687377'}/>
      </div>
    </div>
  )
}

export default Instrument
