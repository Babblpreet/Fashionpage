import React from 'react'
import Banner from '../components/Home/Banner.jsx'
import Logosection from '../components/Home/Logosection.jsx'
import Categorysec from '../components/Home/Categorysec.jsx'
import BestSelling from '../components/Home/BestSelling.jsx'
import Selling from '../components/json/Selling.json'



const Home = () => {
  return (
    <>
      <Banner />
      <Logosection />
      <Categorysec />
      {/* <BestSelling data={Selling}/> */}
      {/* <BestSelling data={flashsale}/> */}
    </>
  )
}

export default Home