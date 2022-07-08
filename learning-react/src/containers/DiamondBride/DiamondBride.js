import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick/lib/slider'

import BDdata from './DiamondBride-dbData'
import BDcard from './DiamondBride-card'

import lightGreyPattern from '../../assets/img/light-grey-pattern.svg'



function DiamondBride() {
    var settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
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
            <Container className='text-center diamond-bride mt-4 mt-md-0'>
                <div> <img src={lightGreyPattern} alt="pattern" className='pattern m-auto ' /> </div>
                <h2 className='font-Vollkorn text-40 text-md-72 col-8 mx-auto text-brown'>The Diamond Bride.</h2>

                <div className='position-relative'>
                    <Slider {...settings}>
                        {BDdata.DiamondBride.map((data) => (<div className='DB-slide'><BDcard data = {data} /></div>))}
                    </Slider>
                </div>
            </Container>
        </>
    )
}

export default DiamondBride
