"use client"
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "styles/home.module.css"

export default function Carousel({children: slides}){

    const tags = ['Start Browsing','Auction', 'AI based Transport', 'Find warehouse'];
    const [curr, setCurr]= useState(0);
    const prev = () => setCurr((curr)=> (curr ===0?slides.length-1: curr-1));
    const next = () => setCurr((curr)=> (curr===slides.length-1?0:curr+1));
    return(
     <div  className="overflow-hidden relative">
        <div className="flex transition ease-out duration-500" style={{transform: `translateX(-${curr * 100}%)`}}>{slides}</div>
        
        <div className="absolute flex top-0 h-[85%] lg:h-[90%] w-full justify-between items-center text-white px-3 md:px-4 text-xs lg:text-2xl lg:bottom-0 ">
        <button onClick={prev} className="bg-slate-400 text-opacity-50 bg-opacity-30 rounded-full   hover:bg-slate-800 hover:rounded-full p-2 hover:bg-opacity-80">
            <FaArrowLeftLong></FaArrowLeftLong>
        </button>
        <button onClick={next} className="bg-slate-400 text-opacity-50 bg-opacity-30 rounded-full  p-2 hover:bg-slate-800 hover:rounded-full hover:bg-opacity-80">
            <FaArrowRightLong></FaArrowRightLong>
        </button>
        </div>
        <div className="absolute bottom-20 right-0 left-0 ">
            <div className="flex items-center justify-center">
               {
                tags.map((line,index)=>(
                    <div className={`${index === curr ? 'visible' : 'hidden'} px-2 py-1 lg:px-3 lg:py-1 bg-white  rounded-lg text-center lg:text-2xl ${styles.carouselLines}`}>{line}</div>
                ))
               }
            </div>
        </div>

        <div className="relative right-0 left-0">
            <div className="flex items-center justify-center gap-2 py-6">
                {slides.map((_, i)=> (
                    <div className={`transition-all w-1 h-1 lg:w-3 lg:h-3 bg-green-600 rounded-full ${curr ===i? "text-2xl": "bg-opacity-50 bg-slate-500"}`}></div>
                ))}
            </div>

        </div>
     </div>
    )
}