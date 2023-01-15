import React from 'react'
import Header from './header/Header';
import Specials from './specials/Specials';
import Squares from './squares/Squares';
import Diches from './dishes/Dishes';

const Home = () => {
  return (
    <div>
      <Header />
      <Squares />
      <Specials />
      <Diches />
    </div>
  )
}

export default Home