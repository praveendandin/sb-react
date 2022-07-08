import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick/";
import styles from "../../components/Carousel/CarouselStyles";
import Card from "../../components/Card/Card";
import CardData from "../../components/Card/Carddata";
import NextArrow from "../../components/Carousel/NextArrow";
import PreviousArrow from "../../components/Carousel/PreviousArrow";
import GreyPattern from '../../assets/img/dark-grey-pattren.svg'

export default function BridesWords() {
    var settings = {
        dors: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
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
        <section className="bg-light bride-words-main pt-3 pt-md-5 pb-3 pb-md-5">
            <Container className="text-center">
                <img src={GreyPattern} alt='pattern' className='pattern' />
                <h2 className="font-Vollkorn text-32 text-md-56 text-brown mt-3 mt-md-4 mb-3 mb-md-4">In the words of our real Rivaah brides.</h2>
                <p className="font-NotoSans text-16 text-md-22 font-weight-300 mb-3 mb-md-5">Rivaah portrays the medley of communities and cultures that form the legacy we revere and share through marriage. Take a look at what our brides have to say as we feel heartened by the faith they put in our jewellery to do right by their traditions on their beautiful wedding day.</p>
               
                <Slider {...settings}>
                    {CardData.bridsWords.map((data) => (<div className={styles.SliderItems}> <Card data = {data} /> </div>) )}
                </Slider>
                
            </Container>
      </section>
    </>
  );
}
