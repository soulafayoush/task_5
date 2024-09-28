import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./components/Navbar/Navbar";

import Logo from "/assets/img/logo.png";
import { links } from "./data/navData";
import HeroSection from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import BestDeal from './components/BestDeal/BestDeal';
import Trend from './components/Trend/Trend';
import Banner from './components/Banner/Banner';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <NavBar logo={Logo} links={links} />
   <HeroSection/>
<Banner />
   <Trend />
<BestDeal />
   <Footer />
   
    </>
  )
}

export default App
