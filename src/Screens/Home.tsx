import Global from "../Components/HomeScreen/Global"
import Hero from "../Components/HomeScreen/Hero"
import Instrument from "../Components/HomeScreen/Instrument"
import Platforms from "../Components/HomeScreen/Platforms"
import Settlement from "../Components/HomeScreen/Settlement"
import What from "../Components/HomeScreen/What"
import Wto from "../Components/HomeScreen/Wto"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to={'/SignIn'}>
        <button className="self-end px-4 py-2 rounded-lg text-[#fff] bg-blue-500">login</button>
      </Link>
      <Hero/>
      <What/>
      <Instrument/>
      <Global/>
      <Platforms/>
      <Settlement/>
      <Wto/>
    </div>
  )
}

export default Home
