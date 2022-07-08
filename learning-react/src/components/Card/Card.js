import React from 'react'
import cardStyles from './CardStyles'


export default function Card({
    data 
}) {
    return (
        <>
            <div className={cardStyles.cardMainDiv}>
                <div className={cardStyles.cardItems}>
                    <img src={data.image} alt='Bride girl' />
                </div>

                <div className={cardStyles.cardTitleItems}>
                    <p className='font-josefinSans text-brown text-24 mt-3 font-weight-500 text-center'>{data.name}</p>
                </div>
                {/* newset faces of Rivaah cards */}
                <div className={cardStyles.cardButton}>
                    <a href='#'>{data.linkButton}</a>
                </div>
            </div>
        </>        
    )
}


