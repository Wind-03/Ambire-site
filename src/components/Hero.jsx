/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import Logo from "../assets/Logo.svg"
import '../App.css'
import left from "../assets/Left-bg.svg"
import right from "../assets/right-bg.svg"
import Details from "../assets/card-details-img.png"
import tilted from "../assets/tilted-image.png"
import banner from "../assets/Cookie banner.svg"
function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <div className='w-full'>
        <img src={left} alt="" className='absolute top-0 left-0 -z-10 '/>
        <img src={right} alt="" className='absolute top-0 right-0 -z-10'/>
        <section className="navbar mx-auto text-white p-[3.2rem]">
            <nav className='lg:max-xl:w-[95%] lg:w-[83%] mx-auto flex justify-between items-center backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white rounded-full px-8 py-2'> 
                <img src={Logo} alt="" className='lg:max-2xl:w-[72px]'/>
                <div className={`flex justify-between lg:gap-x-12 xl:gap-x-36 ${isOpen ? 'show' : ''} nav-links backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white`}>
                    <ul className='flex text-gray-500 justify-between items-center text-sm gap-6 lg:max-2xl:text-base lg:gap-8 2xl:text-lg'>
                    <li><a className="nav-link" href="/">Home</a></li>
                    <li><a className="nav-link" href="/about">Mobile App</a></li>
                    <li><a className="nav-link" href="/contact">Community</a></li>
                    <li><a className="nav-link" href="/contact">Token+DAO</a></li>
                    <li><a className="nav-link" href="/contact">Blog</a></li>
                    <li><a className="nav-link" href="/contact">Help Center</a></li>
                    </ul>
                    <button className='bg-white font-semibold text-black rounded-full py-1 px-3 lg:max-2xl:px-3 lg:max-2xl:py-1 2xl:px-6 2xl:py-3'>Create Wallet</button>
                </div>
                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span>&#9776;</span>
                </button>
            </nav>
        </section>
        <section className="main mt-12">
            <div className="main-text w-[85%] md:max-xl:w-[60%] xl:w-[50%] 2xl:w-[50%] mx-auto text-center">
                <h1 className='text-white gradient-text text-2xl md:text-4xl lg:max-xl:text-5xl xl:text-6xl 2xl:text-7xl font-medium pb-6'>Have Total Control of your <span className=' gradient-text'>wallet with our platform</span></h1>
                <p className='text-white pb-6 w-[99%] md:w-[80%] lg:w-[68%] mx-auto'>The first smart contract wallet alternative to Metamask to unlock the full power of Account Abstraction without any compromise on user experience.</p>
                <span className="flex  w-full ml-[5%] md:ml-[10%] lg:max-2xl:w-[80%] lg:max-2xl:ml-35  2xl:ml-40 2xl:w-[70%] gap-7">
                    <button className='text-white backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white rounded-full text-sm px-3 py-1 lg:px-6 lg:py-3 lg:text-lg'>Test Browser Extension</button>
                    <button className='text-white text-lg rounded-full px-5 py-1 lg:px-10 lg:py-2 bg-gradient-to-r from-[#FFBE69] from-30% via-[#D07494] via-50% to-[#AE60FF] to-100%'>Create Wallet</button>
                </span>
            </div>
            <div className='image-wrapper relative mt-10 mb-24 pb-[48rem] z-[1]'>
                <img src={Details} alt="" className='absolute left-[27rem] top-6 z-[1] w-[38%] h-fit'/>
                <img src={tilted} alt="" className='absolute left-[4rem] 2xl:left-[8rem] w-[90%] h-fit' />
                <img src={banner} alt="" className='absolute top-[35rem] left-[8rem] w-[32%] h-fit'/>
            </div>
        </section>
        <div className="h-24 w-[70%] mx-auto -z-50 bg-[#A248FF] blur-3xl"></div>
    </div>
  )
}

export default Hero