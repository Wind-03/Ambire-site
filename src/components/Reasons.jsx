/* eslint-disable no-unused-vars */
import React from 'react'
import code from "../assets/code4arena.svg"
import ERC from "../assets/ERC.svg"
import open from "../assets/opensource.svg"
import whitepaper from "../assets/whitepaper.svg"   
import reviews from "../assets/reviews.svg"
import ImageSlider from './ImageSlider'
import one from "../assets/Group-one.svg"
import two from "../assets/Group-two.svg"
import three from "../assets/Group-3.svg"
import four from "../assets/Group-4.svg"
import five from "../assets/Group-5.svg"
import six from "../assets/Group-6.svg"
import seven from "../assets/Group-7.svg"
import eight from "../assets/Group-8.svg"
import Arbitrum from "../assets/Arbitrum.svg"
import nine from "../assets/Group9.svg"
function Reasons() {
  return (
    <div>
       <section className="test mt-20 mx-auto w-[83%] mb-24">
         <h1 className='text-white font-semibold text-4xl text-center'>Trusted by <span className='text-[#FFBE69]'>industry-leading</span> Teams</h1>
         <div className="logo-wrapper flex mx-auto w-[83%] flex-wrap justify-between my-16">
                <img src={code} alt="" />
                <img src={ERC} alt=""/>
                <img src={open} alt=""/>
                <img src={whitepaper} alt=""/>
                <img src={reviews} alt=""/>
         </div>
         <div className="my-28 mx-auto">
                <button className='text-white text-lg rounded-full px-5 ml-[45%] mb-6 py-2 bg-[#8035FD]'>Why choose Us</button>
                <h1 className='text-white font-semibold text-[3rem] text-center'><span className='text-[#FFBE69]'>Reasons To</span> Love Ambire</h1>
         </div>
        <ImageSlider/>
        </section>
        <section className="reasons mx-auto w-[83%] my-32">
            <h1 className='text-white text-center mx-auto text-6xl w-[70%] '>The first <span className='text-[#D1B8EB]'>chain-agnostic</span> smart contract wallet</h1>
            <p className='text-white text-center mt-4 text-sm'>Use a single address on all available networks. Swap crypto cross-chain seamlessly.</p>
            {/* <div className="flex mx-auto gap-x-5 w-[83%] mt-12 mb-3">
                <img src={one} alt="" className='bg-black py-16 px-[10.5rem] rounded-2xl 1'/>
                <img src={two} alt=""className='bg-black py-16 px-[10.5rem] rounded-2xl 2' />
                <img src={three} alt="" className='bg-black py-16 px-40 rounded-2xl 3'/>
            </div>
            <div className="flex mx-auto gap-x-4 w-[83%] mb-3">
                <img src={four} alt="" className='bg-black py-16 px-40 rounded-2xl 4'/>
                <img src={five} alt="" className='bg-black py-16 px-[10.2rem] rounded-2xl 5'/>
                <img src={six} alt="" className='bg-black py-16 px-[10.3rem] rounded-2xl 6'/>
            </div>
                <div className="flex mx-auto gap-x-6 w-[83%]">
                <img src={seven} alt="" className='bg-black py-10 px-[6.7rem] rounded-2xl 7'/>
                <img src={eight} alt="" className='bg-black py-10 px-[6.7rem] rounded-2xl 8'/>
                <img src={Arbitrum} alt="" className='bg-black py-10 px-[6.7rem] rounded-2xl 9'/>
                <img src={nine} alt="" className='bg-black py-10 px-[6.7rem] rounded-2xl 10'/>
                </div> */}

                <div className="flex justify-evenly gap-x-1 gap-y-4 flex-wrap mx-auto w-[86%] mt-12 mb-3">
                <img src={one} alt="" className='bg-[#121520] py-16 px-[14%] rounded-2xl 1'/>
                <img src={two} alt=""className='bg-[#121520] py-16 px-[14%] rounded-2xl 2' />
                <img src={three} alt="" className='bg-[#121520] py-16 px-[14%] rounded-2xl 3'/>
                <img src={four} alt="" className='bg-[#121520] py-16 px-[13.2%] rounded-2xl 4'/>
                <img src={five} alt="" className='bg-[#121520] py-16 px-[13.5%] rounded-2xl 5'/>
                <img src={six} alt="" className='bg-[#121520] py-16 px-[14%] rounded-2xl 6'/>
                <img src={seven} alt="" className='bg-[#121520] py-10 px-[10%] rounded-2xl 7'/>
                <img src={eight} alt="" className='bg-[#121520] py-10 px-[10%] rounded-2xl 8'/>
                <img src={Arbitrum} alt="" className='bg-[#121520] py-10 px-[10%] rounded-2xl 9'/>
                <img src={nine} alt="" className='bg-[#121520] py-10 px-[10%] rounded-2xl 10'/>
            </div>
        </section>
        

    </div>
  )
}

export default Reasons