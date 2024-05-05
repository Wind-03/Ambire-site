/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from "../assets/Logo.svg"
import Github from "../assets/Github.svg"
import Twitter from "../assets/Twitter.svg"
import Telegram from "../assets/Telegram.svg"
import Discord from "../assets/Discord.svg"
import Reddit from "../assets/Reddit.svg"
import Facebook from "../assets/Facebook.svg"

function Footer() {
  return (
    <div className='bg-[#090D1B] mt-32'>
        <div className="footer-container w-[83%] mx-auto py-12">
            <nav className='mx-auto flex justify-between items-center'> 
                    <img src={Logo} alt="" />
                    <ul className='hidden text-[#CCCCCC] justify-between items-center gap-8 text-md hidden-part lg:flex'>
                    <li><a className="nav-link" href="/">Home</a></li>
                    <li><a className="nav-link" href="/about">Mobile App</a></li>
                    <li><a className="nav-link" href="/contact">Community</a></li>
                    <li><a className="nav-link" href="/contact">Token+DAO</a></li>
                    <li><a className="nav-link" href="/contact">Blog</a></li>
                    <li><a className="nav-link" href="/contact">Help Center</a></li>
                    </ul>
            </nav> 
            <div className='border-[0.5px] border-b-[#24273C] my-10'></div>
            <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-[3%] 2xl:gap-x-56">
                <div className="footer-items text-[#9094A2] flex flex-col md:flex-wrap gap-x-[6.5rem] md:flex-row">
                    <div className="products">
                        <h1>Products</h1>
                        <p>Web Wallet</p>
                        <p>Mobile App</p>
                        <p>Token + DAO</p>
                        <p>Why smart Tokens</p>
                        <div className='border border-b-[#24273C] my-8'></div>
                        <p>AdEx</p>
                        <p className='text-[#FFBE69] mt-4'>Request a feature</p>
                    </div>
                    <div className="company">
                        <h1>Company</h1>
                        <p>About Us</p>
                        <p>Media Kit</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="resources">
                        <h1>Resources</h1>
                        <p>Blog</p>
                        <p>Help Center</p>
                    </div>
                    <div className="legal">
                        <h1>Legal</h1>
                        <p>Terms & Conditions</p>
                        <p>Cookie Policy</p>
                    </div>
                </div>
                <div className="footer-form">
                    <h1 className='text-xl text-white'>Sign up for Ambire news</h1>
                    <p className='mt-4 text-white'>Email Address</p>
                    <input type="text" placeholder='toluwani@gmail.com' className='placeholder:text-sm bg-[#080B18] mt-4 rounded-full border py-2 pl-4 pr-20 border-[#2F354C]'/><br />
                    <button className='text-white px-28 lg:w-full mt-8 font-semibold text-center text-sm rounded-full py-2 bg-gradient-to-r from-[#FFBE69] from-0% via-[#D07494] via-50% to-[#AE60FF] to-100%'>Subscribe</button>
                    <h1 className='mt-16 text-white text-lg'>Follow Us:</h1>
                    <div className="logo-container flex gap-x-4 font-semibold mt-4">
                        <a href=""><img src={Github} alt="" /></a>
                        <a href=""><img src={Twitter} alt="" /></a>
                        <a href=""><img src={Telegram} alt="" /></a>
                        <a href=""><img src={Discord} alt="" /></a>
                        <a href=""><img src={Reddit} alt="" /></a>
                        <a href=""><img src={Facebook} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className='border-[0.5px] border-b-[#24273C] mt-28'></div>
            <div className="flex mt-6 text-white justify-between">
                <p>©2024 Ambire. All Right Reserved</p>
                <p>Designed by TechenePro</p>
            </div>
        </div>
    </div>
  )
}

export default Footer