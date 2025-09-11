import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/BannerSlider'
import BannerSlider from './component/BannerSlider'
import WeddingCrew from './component/WeddingCrew'
import WeddingFilm from './component/WeddingFilm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <BannerSlider></BannerSlider>
    <WeddingCrew></WeddingCrew>
    <WeddingFilm></WeddingFilm>
      
        
    </> )
}

export default App
