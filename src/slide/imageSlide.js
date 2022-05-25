import React, { useState, useEffect} from "react";
import { Fade } from "react-slideshow-image";
import ReactDOM from "react-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";


import "../css/slide.css"
import Slider from "react-slick";
import { SliderData } from "./sliderData";


 const ImageSlider = ({slides}) => {
  
 


  const [current, setCurrent] = useState(0);
  const length = slides.length

  setInterval(() => {
    nextSlide();
  }, 50000);

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current +1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1);
  };

 


  

  if(!Array.isArray(slides) || slides.length <= 0){
    return null;
  }

  return(
     <section className="slide">
       <MdKeyboardArrowLeft className="left-arrow" onClick={prevSlide} />
       <MdKeyboardArrowRight className="right-arrow" onClick={nextSlide} />

       {SliderData.map((slide, index) => {
         return(
           <div className={index === current ? 'slideactive' : 'slide'} key={index} >
             {index === current && (<img src={slide.Image} alt="travel imag" className="img-slide" />)}
           
           </div>
         )
       } )}
     </section>
   );
 };

 export default ImageSlider