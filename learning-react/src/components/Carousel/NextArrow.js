import React from 'react'
import NextArrowImg from '../../assets/img/next-arrow.svg'

function NextArrow(props) {
    const {className, onClick} = props;
    return (
        <>
            <button className={className} onClick={onClick}>
                <img src={NextArrowImg} alt="next arrow" />
            </button>
        </>
    )
}

export default NextArrow
