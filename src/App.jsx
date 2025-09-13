import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import BannerSlider from './component/BannerSlider'
import WeddingCrew from './component/WeddingCrew'
import WeddingFilm from './component/WeddingFilm'
import WeddingLookSection from './component/WeddingLookSection'
import BestWeddingPhotographers from './component/BestWeddingPhotographers'
import OurTeamKolkata from './component/OurTeamKolkata'
import WhyChooseWeddingCrew from './component/WhyChooseWeddingCrew'
import PlanMarriagePhotography from './component/PlanMarriagePhotography'
import OurClientSay from './component/OurClientSay'
import EternalEchoes from './component/ EternalEchoes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <BannerSlider></BannerSlider>
    <WeddingCrew></WeddingCrew>
    <WeddingFilm></WeddingFilm>
    <WeddingLookSection></WeddingLookSection>
    <BestWeddingPhotographers></BestWeddingPhotographers>
    <OurTeamKolkata></OurTeamKolkata>
    <WhyChooseWeddingCrew></WhyChooseWeddingCrew>
    <PlanMarriagePhotography></PlanMarriagePhotography>
    <OurClientSay></OurClientSay>
    <EternalEchoes></EternalEchoes> 
      
        
    </>
     )
}

export default App
