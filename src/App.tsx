import { BrowserRouter, Route, Routes } from "react-router-dom"
import Rwa from "./Screens/RWA"
import RWAYieldPool from "./Screens/RWAYieldPool"
import CaseStudy from "./Screens/CaseStudy"
import Navbar from "./Components/Navbar"
import Home from "./Screens/Home"
import InvoiceDigitization from "./Screens/InvoiceDigitization"
import Bond from "./Screens/Bond"
import FundMyDesign from "./Screens/FundMyDesign"
import Footer from "./Components/Footer"
import SignIn from "./Screens/SignIn"

const App = () => {

  

  return (
   <BrowserRouter>
   <Navbar/>
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/RWAYieldPool" element={<RWAYieldPool/>} />
      <Route path="/CaseStudy" element={<CaseStudy/>} />
      <Route path="/Rwa" element={<Rwa/>} />
      <Route path="/InvoiceDigitization" element={<InvoiceDigitization/>} />
      <Route path="/Bond" element={<Bond/>} />
      <Route path="/FundMyDesign" element={<FundMyDesign/>} />
      <Route path="/SignIn" element={<SignIn/>} />
    </Routes>
    <Footer/>
   </BrowserRouter>
  )
}

export default App
