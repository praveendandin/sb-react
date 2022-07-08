import React from 'react'
import PreviousArrowImg from '../../assets/img/previous-arrow.svg'

function PreviousArrow(props) {
    const {className, onClick} = props;
    return (
        <>
            <button className={className} onClick={onClick}>
                <img src={PreviousArrowImg} alt="previous arrow" />
            </button>
        </>
    )
}


export default PreviousArrow
