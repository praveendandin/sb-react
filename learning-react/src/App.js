import React from 'react';
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import './styles/_slick.css'
import './styles/_slickTheme.css'
import './App.css';
import Carousel from './components/Carousel/Carousel';
import RivaahMenu from './components/RivaahLinks/RivaahLinkItems'
import AdorningTradition from './containers/WeddingTradition/AdorningTradition';
import RivaahNewestFaces from './containers/NewestFaces/RivaahNewestFaces';
import GloriesLegacies from './containers/GloriesLegacies/GloriesLegacies';
import DiamondBride from './containers/DiamondBride/DiamondBride';
import BridesWords from './containers/BridesWords/BridesWords';
import PickRivaahLook from './containers/PickRivaah-look/PickRivaahLook';

function App() {
  return (
    <>
      <RivaahMenu />
      <section className='rivaah-slider py-md-5 py-3 bg-light'><Carousel /></section>
      <AdorningTradition />
      <RivaahNewestFaces />
      <GloriesLegacies />
      <DiamondBride />
      <BridesWords />
      <PickRivaahLook />
    </>
  );
}

export default App;
