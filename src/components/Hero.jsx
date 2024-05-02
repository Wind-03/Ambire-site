/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from "../assets/Logo.svg"
import '../App.css'
import left from "../assets/Left-bg.svg"
import right from "../assets/right-bg.svg"
import Details from "../assets/card-details-img.png"
import tilted from "../assets/tilted-image.png"
import banner from "../assets/Cookie banner.svg"
function Hero() {
  return (
    <div>
        <img src={left} alt="" className='absolute top-0 left-0 z-[-1]'/>
        <img src={right} alt="" className='absolute top-0 right-0 z-[-1]'/>
        <section className="navbar mx-auto text-white p-[3.2rem]">
            <nav className='w-[83%] mx-auto flex justify-between items-center backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white rounded-full px-8 py-2'> 
                <img src={Logo} alt="" />
                <ul className='flex text-gray-500 justify-between items-center gap-8 text-lg'>
                <li><a className="nav-link" href="/">Home</a></li>
                <li><a className="nav-link" href="/about">Mobile App</a></li>
                <li><a className="nav-link" href="/contact">Community</a></li>
                <li><a className="nav-link" href="/contact">Token+DAO</a></li>
                <li><a className="nav-link" href="/contact">Blog</a></li>
                <li><a className="nav-link" href="/contact">Help Center</a></li>
                </ul>
                <button className='bg-white font-semibold text-black rounded-full px-6 py-3'>Create Wallet</button>
            </nav>
        </section>
        <section className="main mt-12">
            <div className="main-text w-[50%] mx-auto text-center">
                <h1 className='text-white gradient-text text-[4rem] font-medium pb-6'>Have Total Control of your <span className=' gradient-text'>wallet with our platform</span></h1>
                <p className='text-white pb-6 w-[68%] mx-auto'>The first smart contract wallet alternative to Metamask to unlock the full power of Account Abstraction without any compromise on user experience.</p>
                <span className="flex ml-40 w-[70%] gap-7">
                    <button className='text-white backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white rounded-full px-6 py-3 text-lg'>Test Browser Extension</button>
                    <button className='text-white text-lg rounded-full px-10 py-2 bg-gradient-to-r from-[#FFBE69] from-30% via-[#D07494] via-50% to-[#AE60FF] to-100%'>Create Wallet</button>
                </span>
            </div>
            <div className='image-wrapper relative mt-10 mb-24 pb-[48rem] z-[1]'>
                <img src={Details} alt="" className='absolute left-[27rem] top-6 z-[1]'width={549}/>
                <img src={tilted} alt="" className='absolute left-[10rem]'width={1371} height={774} />
                <img src={banner} alt="" className='absolute top-[35.5rem] left-[9rem]' width={438}/>
            </div>
        </section>
        <div className="h-24 w-[70%] mx-auto -z-50 bg-[#A248FF] blur-3xl"></div>
    </div>
  )
}

export default Hero