import React from 'react'
import { Container } from 'react-bootstrap'
import CardData from '../../components/Card/Carddata'
import Card from '../../components/Card/Card'
import icon from '../../assets/img/explore-icon.svg'
import GreyPattern from '../../assets/img/dark-grey-pattren.svg'
import lightGreyPattern from '../../assets/img/light-grey-pattern.svg'

export default function RivaahNewestFaces() {
    return (
        <>
            <section className='new-face text-center py-md-5 py-4'>
                <Container>
                    <img src={GreyPattern} alt='pattern' className='pattern meet-face-pattern' />
                    <h2 className='font-Vollkorn text-32 text-md-60 text-brown col-9 col-md-12 mx-auto mt-md-4'>Meet the newest faces of Rivaah</h2>
                    <p className='font-NotoSans text-16 text-md-22 font-weight-300 col-11 mx-auto pt-2 pt-md-3'>All eyes on them. Their charm, their grace. Their love for their culture. Their unparalleled vision. Their effervescent spirit that brings light to every room. Their brilliance that shines through with utmost radiance. Every aspect of their personality, special. Our real brides are simply mesmerising. And when we got the chance to bring their dream vision, dream wedding ensemble to life, we celebrated it in all its glory.</p>
                    <p className='font-NotoSans text-16 text-md-22 font-weight-300 py-3 py-md-5'>Tanishq celebrates Real Brides across India!</p>
                    
                    <div className='newFace-card  position-relative'>
                        <div className='d-flex justify-content-center'>{CardData.facesOfRivaah.map((data) => ( <Card data = {data} />))}</div>
                    </div>

                    <div className='explore-face text-center font-josefinSlab px-2 mt-5 text-center'>
                        <img src={lightGreyPattern} alt="pattern" className='pattern d-none m-auto d-md-block' />
                        <a href='#'  className='position-relative d-flex align-items-center my-3 mx-auto justify-content-between text-20 text-md-38'> <span>Explore more faces</span> <i className='explore-Icon'><img src={icon} alt='asdfsdf' /></i></a>                        
                        <img src={lightGreyPattern} alt="pattern" className='pattern d-none m-auto d-md-block' />
                    </div>

                </Container>
            </section>
        </>
    )
}


