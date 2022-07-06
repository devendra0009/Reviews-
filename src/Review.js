import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  let [index,setIndex]=useState(0)
  const {name,job,image,text}=people[index];
  const prevBtn=()=>{
    setIndex((index)=>{return index===0?people.length-1:index-1})
  }
  const nextBtn=()=>{
    setIndex((index)=>{return index===people.length-1?0:index+1})
  }
  const randBtn=()=>{
    setIndex(Math.floor(Math.random()*people.length))
  }
  return(
    <article className='review'>
       <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon"> <FaQuoteRight/> </span>
        </div>
         <h4 className="author">{name}</h4> 
         <p className="job">{job}</p> 
         <p className="info">{text}</p> 
         <div>
         <button className='prev-btn'
         onClick={prevBtn}> <FaChevronLeft/></button>
         <button className='next-btn' 
         onClick={nextBtn}><FaChevronRight/>
         </button>
         </div>
         <button className='random-btn'
         onClick={randBtn}>Surprise Me</button>
    </article>
    
  )
};

export default Review;
