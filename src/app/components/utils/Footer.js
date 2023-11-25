"use client"
import React from 'react'
import styles from "styles/home.module.css"
import { FaGooglePlay } from "react-icons/fa6";
import { ImAppleinc } from "react-icons/im";


function Footer() {
  return (
    <footer>
            <div className={`${styles.foot}`}>
              <div className={`${styles.footerlogo} ml-5 pt-3 pb-10`}><img src="/images/logo.png" alt="logo"/></div>
              <div className={`${styles.footerdownload} ml-6`}>Download the agrijod app now</div>
              <div className="ml-6 flex gap-4 text-2xl pt-8">
                <a href='https://play.google.com/store/games?device=phone&hl=en_IN&gl=US'><div className="bg-white px-4 py-2 flex items-center rounded-lg cursor-pointer"><FaGooglePlay className="mr-2"></FaGooglePlay>Google Play</div></a>
                <a href='https://www.apple.com/in/app-store/'> <div className="bg-white px-4 py-2 flex items-center rounded-lg cursor-pointer"><ImAppleinc  className="mr-2"></ImAppleinc>App Store</div></a>
              </div>
               <div  className={`${styles.line} text-black bg-black  flex items-center mx-8 mt-10`}><hr></hr></div>
               <div className={`${styles.footerterms} ml-6 pt-24`}>Terms & Conditions <span>|</span> Privacy policy</div>
            </div>
         
       </footer>
  )
}

export default Footer;
