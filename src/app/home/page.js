"use client"
import React from 'react'
import styles from "styles/home.module.css"
import Carousel from './Carousel.js'
import Navbar from "../components/utils/Navbar.js";
import Footer from "../components/utils/Footer.js";

const slides = [
  "/images/image0.png",
  "/images/image1.png",
  "/images/image2.png",
  "/images/image 3.png"
]


function home() {
  return (
    <div>
      <main className="bg-white w-[100%] h-[100%]">
       <Navbar></Navbar>


       <div className={`my-10 md:my-16 mx-auto  w-[80%] items-center rounded-xl ${styles.back}`}>
            <div className={`${styles.welcome}`}>
                      <div className={`${styles.wt} md:leading-tight md:h-full`}>Welcome to<br className="md:mt-4"/><span className={`${styles.agri} `}>Future of Agri Trading</span> </div>
                      <div className={`${styles.dnks} flex justify-center items-center`}>Brought to you by DNKS AgriJod Technologies PVT LTD</div>
            </div>
            <div className={`${styles.truck}`}>
                <img src="/images/truck.png" alt="truck image" className={`${styles.truckimg} object-cover w-full h-full`}/>
            </div>
       </div>
       <div className={`${styles.getd} flex justify-center`}><div> Get discovered<span className="mx-9">|</span>Use the power of AI for your products</div></div>

       <div className={`${styles.join1}  flex justify-center my-12`}><a href='https://main.d3orhinag3f2ix.amplifyapp.com/'  className={``}><span className={`${styles.join} px-5 rounded-lg text-white cursor-pointer py-4`}>Join AgriJod Today</span></a></div>

       <div className={`${styles.one} mt-24 mb-8 flex justify-center`}>Discover the best</div>
        

       <div className="w-[70%] m-auto pb-20 ">
         <Carousel>
           {slides.map((s)=>(
            <img src={s} className="rounded-lg"/>
           ))}
         </Carousel>
       </div>



       <div className={`w-[70%] m-auto  ${styles.stats} mb-10`}>

          <div className={`${styles.stateNumbers} text-white`}>
              <div className={`${styles.ourStates} flex items-center`}>
                   Our stats
              </div>
              <div className={`${styles.ourContent}`}>
                  <div>11,233 MT <br/> Commodities solid</div>
                  <div>3,200 Sellers<br/> Connected</div>
                  <div>367 Markets <br/> Reached Pan India</div>
                  <div>₹ 760 Crore <br/> Commodities sold</div>
                  <div>₹ 220 Crore <br/> Escrow Settled</div>
                  <div>₹ 965 Warehouses <br/> Connected</div>
              </div>
              <div className={`${styles.empty1}`}></div>
          </div>

          <div className={`${styles.statePhoto} flex items-center`}>
               <img src="/images/image4.png" className="p-5"/>
          </div>
       </div>

       <div className={`w-[70%] m-auto ${styles.two} mb-10 mt-32`}>
          <div className="px-10 md:px-20 lg:px-20 flex justify-between h-full">
              <div><img src="/images/image5.png" className="md:p-3 lg:p-3 h-full"/></div>
              <div><img src="/images/image6.png" className="md:p-3 lg:p-3 h-full"/></div>
              <div><img src="/images/image7.png" className="md:p-3 lg:p-3 h-full"/></div>
          </div>
       </div>

       <div className=' flex justify-center my-12'><a href='https://main.d3orhinag3f2ix.amplifyapp.com/'  className={``}><span className={`${styles.join} px-5 rounded-lg text-white cursor-pointer py-4`}>Join AgriJod Today</span></a></div>
      
       <div className={`${styles.three}  w-[70%] m-auto mb-10 rounded-xl text-white mt-24`}>
          <div className={`${styles.four} flex flex-col justify-center ml-10 h-full gap-2 pt-4`}>
              <div className={`${styles.six} h-full`}>Get in touch with us</div>
              <div className={`${styles.seven} h-full`}>Our representative will get back soon</div>
              <div className={`${styles.eight} flex h-full`}><span><img src="/images/image8.png" className="h-full pb-6 w-full object-cover" /></span><span className="flex items-center pl-4 pb-6">scan to get the app</span></div>
          </div>
          <div className={`${styles.five} overflow-hidden`}>
              <div className={`${styles.nine} p-4 text-black`}>
                    <div className="flex flex-col justify-between pt-3 pb-3" >
                       <div><input type="text" placeholder="Enter your name" className={`${styles.eleven}`}/></div>
                       <div><input type="text" placeholder="Enter phone number" className={`${styles.eleven}`}/></div>
                    </div>
                    <div className="flex items-center top-0"><textarea type="text" placeholder="Anything specific you want to know" className={`${styles.thirteen}`}/></div>
              </div>
              <div className={`${styles.ten}  flex justify-end mb-5 mr-4`}>
                  <div className={` p-1 ${styles.twelve}`}> Get a callback</div>
              </div>
          </div>
       </div>

       <div className={`mt-14 mb-5 w-[70%] m-auto ${styles.partners}`}>Our Partners</div>
      
       <div className={`${styles.partners} flex gap-8 w-[70%] m-auto mb-36`}>
              <div><img src="/images/image 12.png" className="p-10 pl-0" alt=""/></div>
              <div><img src="/images/image 13.png" alt="" className="p-10"/></div>
              <div><img src="/images/image 14.png" alt="" className="p-10"/></div>
              <div><img src="/images/image 15.png" alt="" className="p-10 pr-0"/></div>
       </div>
       
        <Footer></Footer>
    </main>
    </div>
  )
}
export default home;
