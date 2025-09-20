import { useState } from 'react'
import '../App.css'
//import Navbar from '../component/Navbar'
import BannerSlider from '../component/HomeComponent/BannerSlider'
import WeddingCrew from '../component/HomeComponent/WeddingCrew'
import WeddingFilm from '../component/HomeComponent/WeddingFilm'
import WeddingLookSection from '../component/HomeComponent/WeddingLookSection'
import BestWeddingPhotographers from '../component/HomeComponent/BestWeddingPhotographers'
import OurTeamKolkata from '../component/HomeComponent/OurTeamKolkata'
import WhyChooseWeddingCrew from '../component/WhyChooseWeddingCrew'
import PlanMarriagePhotography from '../component/HomeComponent/PlanMarriagePhotography'
import OurClientSay from '../component/HomeComponent/OurClientSay'
import EternalEchoes from '../component/HomeComponent/ EternalEchoes'
import OtherPhotographyServices from '../component/HomeComponent/OtherPhotographyServices'
import PhotoTypeCounter from '../component/HomeComponent/PhotoTypeCounter'
import PreWeddingShoots from '../component/HomeComponent/PreWeddingShoots'
import FAQSection from '../component/HomeComponent/FAQSection'
import BlogSection from '../component/HomeComponent/BlogSection'
import Footer from '../component/HomeComponent/Footer'
import Navbar from '../component/HomeComponent/Navbar'



function Home() {
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
    <OtherPhotographyServices></OtherPhotographyServices>
    <PhotoTypeCounter></PhotoTypeCounter>
    <PreWeddingShoots></PreWeddingShoots>
    <FAQSection></FAQSection>
    <BlogSection></BlogSection>
    <Footer></Footer>
    
    
      
        
    </>
     )
}

export default Home;
