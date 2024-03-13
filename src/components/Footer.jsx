import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import Logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <section className='w-full bg-white py-24 p-4'>
        <div className='md:max-w-[1100px] m-auto grid md:grid-cols-5 max-[768px]:md:grid-cols-6 gap-8 max-w-[400px]'>
            <div className='col-span-1'>
                {/* <img src={Logo} alt='logo-footer' className='h-[75px]'/> */}
                <h3 className="font-bold text-2xl mt-10">Contact us</h3>
                <h3 className="py-2 text-[#363a3d]">call: +1 (305) 220-5200</h3>
                {/* <h3 className="py-2 text-[#60737a]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officia .</h3> */}
                <h3 className="py-2 text-[#363a3d]">Email: education@siriri.com</h3>

                <div className="flex gap-3 py-3">
                    <div className="p-4 rounded-xl bg-[#e9f8f3] cursor-pointer"><FaFacebook size={25}/></div>
                    <div className="p-4 rounded-xl bg-[#e9f8f3] cursor-pointer"><FaTwitter size={25}/></div>
                    <div className="p-4 rounded-xl bg-[#e9f8f3] cursor-pointer"><FaLinkedin size={25}/></div>
                </div>
            </div>    

                <div className='col-span-1'>
                    <h3 className="font-bold text-2xl mt-10">Explore</h3>
                    <ul className="py-3 text-[#60737a]">
                        <li className="py-2">Home</li>
                        <li className="py-2">About us</li>
                        <li className="py-2">Courses</li>
                        <li className="py-2">Contact us</li>
                    </ul>
                </div>

                <div className='col-span-1'>
                    <h3 className="font-bold text-2xl mt-10">Categories</h3>
                    <ul className="py-3 text-[#60737a]">
                        <li className="py-2">Design</li>
                        <li className="py-2">Development</li>
                        <li className="py-2">Marketing</li>
                        <li className="py-2">Finance</li>
                        <li className="py-2">Music</li>
                        <li className="py-2">Photography</li>
                    </ul>
                </div>

                <div className='col-span-2'>
                    <h3 className="font-bold text-2xl mt-10">Subscribe</h3>
                    <h3 className="py-2 text-[#60737a]">Subscribe to our weekly newsletter!</h3>
                    <form className='input-box-shadow flex justify-content-between items-center bg-transparent gap-2'>
                    <input type="text" className="my-2 w-full px-5 py-3 border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal text-neutral-700 outline-none placeholder:text-neutral-500" placeholder='Enter your email address here'/>
                    <button className='my-2 px-5 py-3 bg-[#208446] text-white'>Subscribe</button>
                </form>
                </div>
            </div>
    </section>
  )
}

export default Footer