import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardPoduct'
const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

     <HorizontalCardProduct category={"airpodes"} heading={"Tops airpodes"}/>
     <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/>

     <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
     <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
     <VerticalCardProduct category={"televisions"} heading={"Telivisons"}/>
     <VerticalCardProduct category={"camera"} heading={"Camera & Photography"}/>
     <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"}/>
     <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
     <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
     <VerticalCardProduct category={"trimmers"} heading={"Trimmer's"}/>
    









    </div>
  )
}

export default Home