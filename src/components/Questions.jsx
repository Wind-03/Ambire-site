/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import Plus from "../assets/plus.svg"
import Minus from "../assets/minus.svg"
import questions from "./Data/QuestionsData"

function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className='w-[83%] mx-auto my-12'>
      <div className='accordion'>
      <button className='text-white mx-[48%] text-sm px-3 py-1 lg:text-lg rounded-full border-none lg:px-5 mt-20 lg:py-2 bg-[#8035FD]'>FAQ</button> 
      <h1 className='gradient-text font-medium text-2xl md:text-[2rem] lg:text-[3rem] lg:py-2 2xl:text-[4rem] 2xl:py-4 text-center mb-10'>Frequently Asked Questions</h1>
      {questions.map((item, index) => (
        <div key={index} className="faq-item text-[#7D7D7D] mx-auto bg-[#121520] mb-3 py-4 w-[95%] px-6 rounded-xl text-sm md:text-md md:px-12 lg:text-2xl ">
          <div className="flex justify-between">
            <span className='text-[#f9f9f9cb]'>{item.question}</span>
            <button onClick={() => handleClick(index)}>
              <img className={`spin ${activeIndex === index ? 'rotate' : ''}`} src={activeIndex === index ? Minus : Plus} alt="Toggle" />
              </button>
          </div>
          {activeIndex === index && <p className={`answer ${activeIndex === index ? 'open' : ''}`}>{item.answer}</p>}
        </div>
      ))}
    </div>
    </div>
  )
}

export default Questions