/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import '../App.css'; // Import CSS file with animation styles
import ImageOne from "../assets/01.svg";
import ImageTwo from "../assets/2.svg";
import Imagethree from "../assets/3.svg";

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
    <div className="ml-24" >
      <img src={ImageOne} alt="Image 1" />
      <div ref={imagesRef}>
      <img src={Imagethree} alt="Image 2" className="slide-in mt-10" />
      <img src={ImageTwo} alt="Image 3" className="slide-in mt-10" />
      </div>
      
    </div>
  );
}

export default ImageSlider;