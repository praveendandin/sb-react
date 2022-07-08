import React from 'react'
import { Container } from 'react-bootstrap'

function AdorningTradition() {
    return (
        <>
            <Container>
                <section className='text-center py-3 py-md-5'>

                    <h2 className='font-Vollkorn text-32 text-md-60 text-brown col-9 col-md-7 m-auto'>Adorning traditions at every wedding.</h2>
                    <p className='font-NotoSans text-16 text-md-24 font-weight-300 col-10 col-md-9 m-auto'>An ode to those beautiful traditions that celebrate love, as their magic gets captured in every jewel we craft.</p>
                    <div className='jewlTrasion-video py-3 py-md-5 '>
                        <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="728" src="https://www.youtube.com/embed/Y4P6FQax2jk" title="YouTube video player" width="100%"></iframe>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default AdorningTradition
