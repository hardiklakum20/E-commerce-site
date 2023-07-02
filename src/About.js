// import React,{useContext} from 'react'
import { useProductContex } from './Contexts/Productcontex';
import HeroSection from './componets/Body/HeroSection'
// import { AppContex } from './Contexts/Productcontex';

export const About = () => {

  const { myName } = useProductContex();

  const data = {
    name: "shopping ecommerce"
}
  return (
    <>
    {myName}
    <HeroSection myData={data}/>
    </>
  )
}
