import React from 'react'
import avatar from '../assets/jenny.jpg'
import quotationMark from '../assets/quotationMark.png'

const FeedBackCard_Jenny = () => {
  return (
    <div className='bg-white p-8 border shadow-sm my-8 mx-2'>
        <div className='flex justify-between'>
            <div className='flex gap-4'>
                <img src={avatar} className='rounded-full h-15 w-12' alt="feedback" />
                <div>
                    <h1>Jenny Wilson</h1>
                    <p>UI/UX Designer</p>
                </div>
                <img src={quotationMark} alt="quote" className='h-8' />
            </div>
        </div>
        <div className='py-8'>
            <h3 className='text-lg'>As a UI/UX designer, I found the courses offered by this platform incredibly insightful. The content was not only well-structured but also visually engaging, which made the learning experience enjoyable. The instructors provided valuable insights into design principles and industry best practices, helping me enhance my skills and stay updated with the latest trends. Highly recommend this platform to fellow designers!</h3>
        </div>
    </div>
  )
}

export default FeedBackCard_Jenny