import React from 'react'

export default function GloriesLegaciesCard({data}) {
    return (
        <>
            <div className='d-none d-md-block position-relative'>
                <div className='position-relative'>
                    <div className='d-flex d-md-flex gl-card-main py-4'>
                        <div>
                            <div className='pt-4 pb-4 pr-2'><img src={data.frameImg1} alt='image' /></div>
                            <div className='pr-2'><img src={data.frameImg3} alt='image' /></div>
                        </div>
                        <div>
                            <div className='pt-4 px-4'><img src={data.frameImg2} alt='image' /></div>
                        </div>
                        <div>
                            <div className='pt-4 pb-4 pl-2'><img src={data.frameImg4} alt='image' /></div>
                            <div className='pl-2'><img src={data.frameImg5} alt='image' /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-md-none  position-relative'>
                <div className='position-relative'>
                    <div className='d-flex d-md-flex gl-card-main py-4'>
                        <div>
                            <div className='pt-4 pb-4 pr-2'><img src={data.frameImg1} alt='image' /></div>
                            <div className='pr-2'><img src={data.frameImg3} alt='image' /></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}


