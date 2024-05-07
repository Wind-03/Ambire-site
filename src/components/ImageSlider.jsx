/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import '../App.css'; // Import CSS file with animation styles
import ImageOne from "../assets/01.svg";
import ImageTwo from "../assets/2.svg";
import Imagethree from "../assets/3.svg";
import formOne from "../assets/Form-one.svg"
import formTwo from "../assets/form-two.svg"
import three from "../assets/featureThree.svg"
import frame from "../assets/Frame 64.svg"

const ImageSlider = () => {
  const imagesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const images = imagesRef.current.querySelectorAll('.slide-in');
      images.forEach((image, index) => {
        const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
        const imageBottom = image.offsetTop + image.height;
        const isHalfShown = slideInAt >= image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          image.classList.add('active');
        } else {
          image.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col gap-y-8" >
      {/* <img src={ImageOne} alt="Image 1" />
      <div ref={imagesRef}>
      <img src={Imagethree} alt="Image 2" className="slide-in mt-10" />
      <img src={ImageTwo} alt="Image 3" className="slide-in mt-10" />
      </div> */}
      <div className="flex flex-col gap-y-4 justify-between bg-cover bg-top-left md:bg-right text-white w-[75%] md:flex-row mx-auto bg-[url('./assets/bg-image.svg')] bg-no-repeat md:bg-contain bg-[#121521] rounded-3xl lg:bg-right py-4 xl:pt-20">
        <div className="text ml-[5%] w-[90%] md:w-[50%] xl:w-[45%] lg:pl-16 order-last md:order-1">
          <p className='text-[#FFCA85] pb-2'>$WALLET DAO</p>
          <h1 className=' font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl pb-3 w-[70%]'>Your Wallet, Your Rules</h1>
          <p className='pb-6 lg:pb-10 w-[95%] lg:w-[80%] text-gray-200 text-base'>The development of Ambire Wallet is governed by $WALLET holders in the WalletDAO. And the best part is that $WALLET is distributed to the community of Ambire Wallet.</p>
          <button className='text-white border-[0.5px] border-[#56585F] rounded-full text-sm xl:px-12 lg:py-[2px] px-6 py-3 lg:text-lg'>Test Browser Extension</button>
        </div>
        <img src={frame} alt="" className='w-[95%] mx-auto md:-ml-12 md:w-[35%] md:mr-6 lg:mr-12 order-1 md:order-last' />
      </div>
      <div className="flex flex-col gap-y-4 justify-between bg-cover bg-top-center py-8 md:py-0 text-white md:flex-row w-[75%] mx-auto bg-[url('./assets/bg-image.svg')] md:bg-[url('./assets/bg-imag-two.svg')] bg-no-repeat md:bg-contain bg-[#121521] rounded-3xl md:bg-left xl:pt-20">
        <img src={formTwo} alt="" className='w-[95%] mx-auto md:w-[40%] md:ml-[5%]'/>
        <div className="text ml-[5%] w-[90%] md:w-[70%] xl:w-[45%] lg:pl-16 lg:-mt-0 lg:mr-6 xl:-mt-10">
          <p className='text-[#FFCA85] pb-2'>META TRANSACTIONS</p>
          <h1 className='font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl pb-3 w-[70%'>Optimised For Speed and Performance</h1>
          <p className='pb-6 lg:pb-10 full md:w-[90%] text-gray-200 text-base md:text-sm'>Save time with transaction batching and securely skip token approvals. Test and perfect complex transactions confidently and precisely in a risk-free environment. 
          Check your future account balance before you execute your transactions and optimize your transfer costs.</p>
          <button className='text-white border-[0.5px] border-[#56585F] rounded-full text-sm xl:px-12 lg:py-[2px] px-6 py-3 lg:text-lg'>Test Browser Extension</button>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 justify-between bg-cover bg-bottom-center md:bg-right text-white md:flex-row w-[75%] mx-auto bg-[url('./assets/bg-image.svg')] bg-no-repeat md:bg-contain bg-[#121521] rounded-3xl lg:bg-right py-8 xl:pt-20">
        <div className="text ml-[5%] w-[90%] md:ml-[10%] md:w-[50%] xl:w-[45%] lg:ml-0 lg:pl-16 order-last md:order-1">
          <p className='text-[#FFCA85] pb-2'>$WALLET DAO</p>
          <h1 className='font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl pb-3 w-[70%]'>Your Wallet, Your Rules</h1>
          <p className='pb-6 lg:pb-10 w-[95%] lg:w-[80%] text-gray-200 text-base'>The development of Ambire Wallet is governed by $WALLET holders in the WalletDAO. And the best part is that $WALLET is distributed to the community of Ambire Wallet.</p>
          <button className='text-white border-[0.5px] border-[#56585F] rounded-full text-sm xl:px-12 lg:py-[2px] px-6 py-3 lg:text-lg'>Test Browser Extension</button>
        </div>
        <img src={three} alt="" className='w-[90%] mx-auto md:w-[35%] md:mr-6 lg:mr-12 order-1 md:order-last' />
      </div>
    </div>
  );
}

export default ImageSlider;