import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick/'

import GLdata from './Glories-data'
import GLCard from './GloriesLegaciesCard'

import pattern from '../../assets/img/pattren.svg'

import NextArrow from '../../components/Carousel/NextArrow'
import PreviousArrow from '../../components/Carousel/PreviousArrow'

export default function GloriesLegacies() {
    var settings = {
        dors: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
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
            <Container className='text-center pt-4 pt-md-5'>
                <span>
                    <img src={pattern} alt='gold pattern' className='pattern' />
                </span>
                <h2 className='font-Vollkorn text-32 text-md-60 text-brown text-brown mx-auto col-md-9'>Glorious legacies captured in our karigari.</h2>
                <p className='font-NotoSans text-16 text-md-22 font-weight-300 mb-4 mb-md-5 pb-4 pb-md-5'>Every piece of jewellery is accompanied by a rich history of craft, tales and symbolism that holds a special place at the heart of every culture. Rivaah reveres every tradition and it is captured in every piece we craft lovingly. Tap to read more.</p>

                <div className='frame-parent GL-context-main position-relative'>
                    <span className="frame-bdrTL"></span>
                    <span className="frame-bdrTR"></span>
                    <span className="frame-bdrBL"></span>
                    <span className="frame-bdrBR"></span>
                    
                    <div className='frameMain-div GL-context position-relative'>
                        <Slider {...settings}>
                            {GLdata.legacyFrame1.map((data) => (<div className='GL-slide'><GLCard data = {data} /></div>))}
                        </Slider>
                    </div>
                </div>
            </Container>
        </>
    )
}


