import React from 'react'
import avatar from '../assets/sarah.jpg'
import quotationMark from '../assets/quotationMark.png'

const FeedBackCard_Sarah = () => {
  return (
    <div className='bg-white p-8 border shadow-sm my-8 mx-2'>
        <div className='flex justify-between'>
            <div className='flex gap-4'>
                <img src={avatar} className='rounded-full h-15 w-12' alt="feedback" />
                <div>
                    <h1>Sarah Patel</h1>
                    <p>Data Scientist</p>
                </div>
                <img src={quotationMark} alt="quote" className='h-8' />
            </div>
        </div>
        <div className='py-8'>
            <h3 className='text-lg'> I was impressed by the range of topics covered, from fundamental concepts to advanced techniques in data analysis and machine learning. The instructors provided real-world examples and practical exercises that allowed me to apply what I learned to my own projects. This courses website has become my go-to resource for staying ahead in the rapidly evolving field of data science.</h3>
        </div>
    </div>
  )
}

export default FeedBackCard_Sarah