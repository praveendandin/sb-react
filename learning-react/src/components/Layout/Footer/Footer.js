import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './Footer-styles'
 import payPratnerImg from '../../../assets/img/payment-method.png'

import appStoreImage from '../../../assets/img/app-store-icon.png'
import playStoreImage from '../../../assets/img/playstore-icon.png'

import instIcon from '../../../assets/img/insta-icon.svg'
import fbIcon from '../../../assets/img/fb-icon.svg'
import twitIcon from '../../../assets/img/twitter-icon.svg'

import topArrowIcon from '../../../assets/img/top-arrow.svg'




class Footer extends React.Component {
    render() {
      return(
          <>
            <footer className={styles.footerMain}>
                <div className={styles.subscribeDownloadApp}>
                  <Container>
                    <div className='row'>
                      <div className='col-12 col-md-6 mb-4 mb-md-0'> 
                        <p className={styles.subscribeTitle}>Sign up to receive exclusive offers and news</p>
                        <div className={styles.subscribeForm}>
                          <input type='text' placeholder='Enter your email address ' />
                          <input  type='submit' value='Subscribe' />
                        </div>
                      </div>
                      <div className='col-12 col-md-6 text-right'>
                        <p className={styles.downloadTitle}>Download Our Tanishq App</p>
                        <div className={styles.appIconImage}>
                          <a href="#"><img src={appStoreImage} alt='download on app store' className='mr-md-5'/></a>
                          <a href='#'><img src={playStoreImage} alt='download on app play store' /></a>
                        </div>
                      </div>
                    </div>
                  </Container>
                </div>

                <div className={styles.footerLinksMain}>
                  <Container>
                    <div className='py-3 py-md-4'>
                      <div className='row d-none d-md-flex mt-md-4'>
                        <div className='col-md-3'>
                          <strong className={styles.footerLinkTitle}>Customer Service</strong>
                          <div className='footer-links'>
                            <ul>
                              <li> <a href='#'>HELP & CONTACT</a></li>
                              <li> <a href='#'>DELIVERY INFORMATION</a></li>
                              <li> <a href='#'>INTERNATIONAL SHIPPING</a></li>
                              <li> <a href='#'>RETURNS</a></li>
                              <li> <a href='#'>PAYMENT OPTIONS</a></li>
                              <li> <a href='#'>TRACK ORDER</a></li>
                              <li> <a href='#'>ENCIRCLE PROGRAM</a></li>
                              <li> <a href='#'>OFFER & CONTEST DETAILSa</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className='col-md-3'>
                          <strong className={styles.footerLinkTitle}>About Tanishq</strong>
                          <div className='footer-links'>
                            <ul>
                              <li> <a href='#'>CAREERS</a></li>
                              <li> <a href='#'>FIND A STORE</a></li>
                              <li> <a href='#'>BLOG</a></li>
                            </ul>
                          </div>
                          <div className='social-icons mt-md-4'>
                            <div className='pb-md-2'><strong className={styles.footerLinkTitle}>Follow us on</strong></div>
                            
                              <a href='#' ><img src={instIcon} alt='foloow us on Instagram' /></a>
                              <a href='#'><img src={twitIcon} alt='foloow us on Twitter' /></a>
                              <a href='#'><img src={fbIcon} alt='foloow us on facebook' /></a>
                            
                          </div>
                        </div>
                        <div className='col-md-6 payPartnerImg-holder'>
                            <div>  <img src={payPratnerImg} alt='payment partners' /></div>                          
                        </div>
                      </div>

                      {/* terms and conditions */}
                      <div className='text-14 terms-conditions col-md-8 mx-auto text-center py-3 py-md-4 position-relative'>
                         <span className='ftrNavIcon d-md-none'>
                           <a href="#"> <img src={topArrowIcon} alt='top arrow' /></a> 
                          </span>
                          <span className='text-uppercase d-block d-md-inline'>
                            <a href='#'>Terms and Conditions</a>
                            <a href='#'>Privacy Policy</a>
                          </span>
                          
                          <span className=''>
                            &copy; 2022 Titan Company Limited. All Rights Reserved.
                          </span>
                      </div>
                    </div>
                  </Container>
                </div>
            </footer>
          </>
        
      );
    }
  }


  export default Footer