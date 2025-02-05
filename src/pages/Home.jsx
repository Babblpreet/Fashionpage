import React from 'react'
import Banner from '../components/Home/Banner.jsx'
import Logosection from '../components/Home/Logosection.jsx'
import Categorysec from '../components/Home/Categorysec.jsx'
import BestSelling from '../components/Home/BestSelling.jsx'
import Grab from '../components/Home/Grab.jsx'
import Explorebycat from '../components/Home/Explorebycat.jsx'
import Offersec from "../components/Home/Offersec.jsx"
import Budgetdeals from '../components/Home/Budgetdeals.jsx'
import SellingData from '../components/json/Selling.json'
import DealOnSale from "../components/json/dealsonsale.json";




const Home = () => {
  return (
    <>
      <Banner />
      <Logosection />
      <Categorysec />
      <BestSelling heading={"Best Selling Products"} headname={"Products"} data={SellingData} />
      <Grab />
      <Explorebycat />
      <Offersec />
      <Budgetdeals />
      <BestSelling heading={"Deals On Sale"} headname={"Sale"} data={DealOnSale} bgNone={true} view={true}/>


    </>
  )
}

export default Home