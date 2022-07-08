import React from 'react'

export default function DiamondBrideCard({data}) {
    return (
        <>
            <div className='diamond-girl position-relative'>
                <div className='img-holder'>
                    <img src={data.image} />
                </div>
                <div className='content-holder col-10 col-md-9 text-white m-auto position-absolute bottom-0 pb-3 pb-md-4'>
                    <p className={'font-josefinSans text-16 text-md-20'} >{data.content}</p>
                    <a href='#' className='text-white text-20 text-md-28 font-weight-600 font-josefinSlab'>{data.linkExplore}</a>
                </div>
            </div>
        </>
    )
}

