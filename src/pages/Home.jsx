import React from 'react'
import Banner from '../components/Home/Banner.jsx'
import Logosection from '../components/Home/Logosection.jsx'
import Categorysec from '../components/Home/Categorysec.jsx'
import BestSelling from '../components/Home/BestSelling.jsx'
import Grab from '../components/Home/Grab.jsx'
import Explorebycat from '../components/Home/Explorebycat.jsx'
import Offersec from "../components/Home/Offersec.jsx";
import Budgetdeals from '../components/Home/Budgetdeals.jsx'




const Home = () => {
  return (
    <>
      <Banner />
      <Logosection />
      <Categorysec />
      <BestSelling />
      <Grab />
      <Explorebycat />
      <Offersec />
      <Budgetdeals />
    </>
  )
}

export default Home