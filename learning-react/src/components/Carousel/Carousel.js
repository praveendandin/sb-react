import React from "react";
import Slider from "react-slick/";
import Card from "../Card/Card";
import styles from './CarouselStyles'
import { Container } from "react-bootstrap";

import CardData from '../Card/Carddata'
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";


export default function Carousel() {
  var settings = {
    
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ]
  };
  
  return (
    <>
      <Container>
        <Slider className={styles.sliderMain} {...settings}>        
            {CardData.homeCard.map((data) => (<div className={styles.SliderItems}> <Card data = {data} /> </div>) )}
        </Slider>
      </Container>
    </>
  );
}
