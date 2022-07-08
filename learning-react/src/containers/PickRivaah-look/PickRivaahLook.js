import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './PickPinRivaah-styles'
import pickRivaahImg from '../../assets/img/pick-rivaah-look.jpg'
import pinRivaahImg from '../../assets/img/pin-rivaah-look.jpg'
import instaIcon from '../../assets/img/insta-icon2.png'
import pinIcon from '../../assets/img/pintrest-icon.png'



export default function PickRivaahLook() {
    return (
        <>
            <Container>
                <div className={styles.pickPinMain}>
                    <div className={styles.pickPinCardMain}>
                        <img src={pickRivaahImg}  alt="Pick your Rivaah Look "/>
                        <div className={styles.pickPinCardBottom}>
                            <span className={styles.socialIcon}> <img src={instaIcon} alt='insta iocn' /> </span>
                            <p className={styles.pickPinText}>Pick your Rivaah look</p>
                            <a href='#' className={styles.link}>Explore More</a>
                        </div>
                    </div>

                    <div className={styles.pickPinCardMain}>
                        <img src={pinRivaahImg}  alt="Pick your Rivaah Look "/>
                        <div className={styles.pickPinCardBottom}>
                            <span className={styles.socialIcon}> <img src={pinIcon} alt='pin iocn' /> </span>
                            <p className={styles.pickPinText}>Pick your Rivaah look</p>
                            <a href='#' className={styles.link}>Explore More</a>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
