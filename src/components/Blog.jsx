/* eslint-disable no-unused-vars */
import React, {useRef} from 'react'
import Top from "../assets/blog-bottom.png"
import Bottom from "../assets/blog-bottom.svg"
import BG from "../assets/bg-vector.svg"
import BlogPosts from "./Data/BlogData"
import left from "../assets/arrow-left.svg"
import right from "../assets/arrow-right.svg"
function Blog() {
  const scrollContainer = useRef(null);

  const scroll = (scrollOffset) => {
    scrollContainer.current.scrollBy({
      top: 0,
      left: scrollOffset,
      behavior: 'smooth'
    });
  };
  return (
    <div className='mb-16'>
        <div className="bgblur relative">
          <span className='flex justify-center flex-col '>
            <button className='text-white text-lg rounded-full border-none px-5 mt-36 py-2 bg-[#8035FD] mx-auto'>Blog</button>
            <h1 className='gradient-text font-medium text-[4rem] text-center'>Latest from our blog</h1>
            {/* <div className="gradient-container absolute -z-10 h-48 w-[40%] opacity-10 border border-red-500 mx-auto flex left-[20rem]">
              <div className='bg-[#533388] h-full w-[30%] blur-2xl'></div>
              <div className='bg-[#762BF1] h-full w-[20%] blur-2xl'></div>
              <div className='bg-gradient-to-r from-[#A27CC3] from-0% via-[#D5AEF6] via-47% to-[#A265D5] to-100% h-full w-[50%] blur-2xl'></div>
            </div> */}
            <img src={BG} alt="" className='top-0 absolute -z-10'/>
            <img src={Top} alt="" className='mt-16 -z-10'/>
            <img src={Bottom} alt='' className='-z-10 absolute -bottom-12 w-full'/>
          </span>
          <div className="flex flex-col gap-y-10 -mt-12 ml-6 lg:flex-row lg:ml-36 lg:-mt-24 lg:gap-x-12 items-center">
            <div ref={scrollContainer} className="blog-items flex overflow-x-scroll gap-x-4 w-[89%] md:w-[75%] border border-red-500" style={{scrollbarWidth: 'none'}}>
              {BlogPosts.map((post, items) => (
                <div key={items} className="blog-card text-white h-[603px] bg-[#121520] w-[350px] rounded-lg">
                  <img src={post.imgSrc} alt="" className='image'/>
                  <p className='date ml-10 mt-12 bg-[#242133] border-white rounded-full w-fit h-fit self-center py-1 px-5'>{post.date}</p>
                  <h1 className='title mt-3 w-[75%] mx-auto text-2xl font-semibold'>{post.title}</h1>
                  <p className='text mt-2 w-[75%] mx-auto text-[#8B8B9A]'>{post.text}</p>
                  <a href={post.ctaLink} className='cta ml-12'>Read more</a>
                </div>
              ))}
            </div>
            <div className="flex gap-x-4">
              <button onClick={() => scroll(-366)} className="rounded-btn p-4"><img src={left} alt="" width={24} height={24}/></button>
              <button onClick={() => scroll(366)} className="rounded-btn p-4"><img src={right} alt="" width={24} height={24}/></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Blog