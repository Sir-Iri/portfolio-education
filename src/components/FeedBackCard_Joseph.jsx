import React from 'react'
import avatar from '../assets/joseph.jpg'
import quotationMark from '../assets/quotationMark.png'

const FeedBackCard_Joseph = () => {
  return (
    <div className='bg-white p-8 border shadow-sm my-8 mx-2'>
        <div className='flex justify-between'>
            <div className='flex gap-4'>
                <img src={avatar} className='rounded-full h-15 w-12' alt="feedback" />
                <div>
                    <h1>Joseph Arias</h1>
                    <p>Frontend Developer</p>
                </div>
                <img src={quotationMark} alt="quote" className='h-8' />
            </div>
        </div>
        <div className='py-8'>
            <h3 className='text-lg'>From a frontend developer's perspective, this courses website stands out for its practical approach and comprehensive coverage of frontend development technologies. The course material was up-to-date, and the hands-on exercises helped me solidify my understanding of concepts like HTML, CSS, JavaScript, and frameworks like React and Vue.js. The platform's user-friendly interface made navigation seamless, and I appreciated the clear instructions provided by the instructors. Kudos to the team for creating such an invaluable resource for developers!</h3>
        </div>
    </div>
  )
}

export default FeedBackCard_Joseph