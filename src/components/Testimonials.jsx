/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import TOP from "../assets/Side traction.png"
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css"
import testimonials from './Data/TestimonialData'

function Testimonials() {
  return (
    <div className='relative mb-48'>
        {/* <div className="h-full w-[15%] mx-auto z-10 bg-[#080B18] blur-[100px] opacity-100 absolute top-72 left-0"></div>
        <div className="h-full w-[15%] mx-auto z-10 bg-[#080B18] blur-[100px] opacity-100 absolute top-72 right-0"></div> */}
        <img src={TOP} alt="" className='absolute top-0 -z-10 left-48' />
        <div className="text ml-[15%] ">
        <button className='text-white text-lg rounded-full border-none px-5 mt-20 py-2 bg-[#8035FD] '>What they said</button>
        <h1 className='gradient-text font-medium text-[4rem]'>They love Ambire Wallet</h1>
        </div>
            <Marquee speed={50} autoFill loop={0} fade={true} className="motion-reduce:overflow-auto" innerClassName="motion-reduce:animate-none motion-reduce:first:hidden">
                <div className="flex gap-5 mx-auto mt-36">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex flex-col gap-5">
                                <div className='bg-[#121520] py-4 px-4 text-white mx-auto rounded-lg w-80'>
                                    <span className="flex justify-between">
                                        <span className="flex gap-x-3">
                                            <img src={testimonial.pfp} alt="" />
                                            <span>
                                                <p>{testimonial.name}</p>
                                                <p>{testimonial.handle}</p>
                                            </span>
                                        </span>
                                        <img src={testimonial.twitter} alt="" />
                                    </span>
                                    <br />
                                    <h2 className=''>{testimonial.message}</h2>
                                    {testimonial.image && <img src={testimonial.image} alt="" />}
                                    <br />
                                    <p>{testimonial.time}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </Marquee>
    </div>
  )
}

export default Testimonials