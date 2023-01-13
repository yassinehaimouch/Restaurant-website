import React from 'react'
import Header from './header/Header';
import Specials from './specials/Specials';
import Squares from './squares/Squares';


const Home = () => {
  return (
    <div>
      <Header />
      <Squares />
      <Specials />
    </div>
  )
}

export default Home