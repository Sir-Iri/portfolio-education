import React from 'react'
import avatar from '../assets/david.jpg'
import quotationMark from '../assets/quotationMark.png'

const FeedBackCard_David = () => {
  return (
    <div className='bg-white p-8 border shadow-sm my-8 mx-2'>
        <div className='flex justify-between'>
            <div className='flex gap-4'>
                <img src={avatar} className='rounded-full h-15 w-12' alt="feedback" />
                <div>
                    <h1>David Thompson</h1>
                    <p>Digital Marketer</p>
                </div>
                <img src={quotationMark} alt="quote" className='h-8' />
            </div>
        </div>
        <div className='py-8'>
            <h3 className='text-lg'>These courses are a game-changer for any marketer. The instructors cover everything from SEO to social media with clarity and depth. The practical exercises kept me engaged and I've seen a real impact on my campaigns. Highly recommend!</h3>
        </div>
    </div>
  )
}

export default FeedBackCard_David