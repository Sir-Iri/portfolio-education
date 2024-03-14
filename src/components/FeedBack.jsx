import React from 'react'
import Slider from 'react-slick'
import FeedBackCard_Jenny from './FeedBackCard_Jenny'
import FeedBackCard_Joseph from './FeedBackCard_Joseph'
import FeedBackCard_Sarah from './FeedBackCard_Sarah'
import FeedBackCard_David from './FeedBackCard_David'
import FeedBackCard_Alex from './FeedBackCard_Alex'

const FeedBack = () => {
    var settings = {
        dots:true,
        infinite:false,
        speed:500,
        slidesToShow:2,
        slidesToScroll:1,
        responsive:[
        {
            breakpoint:1024,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
                infinite:false,
                dots:true
            }
        },
        {
            breakpoint:600,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
                infinite:false,
                dots:true
            }
        },
        {
            breakpoint:400,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
                infinite:false,
                dots:true
            }
        },
        ]
    }
  return (
    <section className='w-full bg-white py-24 p-4'>
        <div className='md:max-w-[1100px] m-auto max-w-[400px]'>
        <h1 className='py-4 text-3xl font-bold'>Students <span className='text-[#20B486]'>Feed back</span></h1>
            <p className='text-[#6D737A] py-2'>Various versions have evolved over the years, sometimes by accident.</p>
            <Slider {...settings}>
                <FeedBackCard_Jenny/>
                <FeedBackCard_Joseph/>
                <FeedBackCard_Sarah/>
                <FeedBackCard_David/>
                <FeedBackCard_Alex/>
            </Slider>
        </div>
    </section>    
  )
}

export default FeedBack