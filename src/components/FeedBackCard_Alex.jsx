import React from 'react'
import avatar from '../assets/alex.jpg'
import quotationMark from '../assets/quotationMark.png'

const FeedBackCard_Alex = () => {
  return (
    <div className='bg-white p-8 border shadow-sm my-8 mx-2'>
        <div className='flex justify-between'>
            <div className='flex gap-4'>
                <img src={avatar} className='rounded-full h-15 w-12' alt="feedback" />
                <div>
                    <h1>Alex Chen</h1>
                    <p>Cybersecurity Specialist</p>
                </div>
                <img src={quotationMark} alt="quote" className='h-8' />
            </div>
        </div>
        <div className='py-8'>
            <h3 className='text-lg'>Alex Chen, here. These courses are a must for anyone in cybersecurity. From network security to ethical hacking, they cover it all. The hands-on labs are invaluable for real-world practice. Highly recommended for professionals at any level!</h3>
        </div>
    </div>
  )
}

export default FeedBackCard_Alex