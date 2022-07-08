import React from 'react'
import styles from './RivaahLinksStyles'
import { Container } from 'react-bootstrap'
import pattern from '../../assets/img/pattren.svg'

export default function RivaahLinkItems() {
    return (
        <>
            
            <div className={styles.rivaahMainParent}>
                <Container className='position-relative'>
                    <ul className={styles.rivaahMainMenu}>
                        <li><a href='#'>RIVAAH</a></li>
                        <li><a href='#'>POLKI</a></li>
                        <li><a href='#'>BRIDAL JEWELLERY</a></li>
                        <li><a href='#'>OCCASIONS</a></li>
                    </ul>
                </Container>
            </div>

            <Container>
                <div className='text-center mb-md-5 mb-3 mt-md-5'>
                    <img src={pattern}  alt="asdfnslkd" className='pattern'/>
                    <h1 className={styles.rivaahHeading}>
                        <span className='d-block font-weight-300'>Rooted in nature. Celebrated with love.</span>
                        <strong className='font-weight-400 text-brown'> Rivaah. A jewel for every tradition.</strong>
                    </h1>
                    <img src={pattern}  alt="asdfnslkd" className='pattern'/>
                </div>
            </Container>
            
        </>        
    )
}

