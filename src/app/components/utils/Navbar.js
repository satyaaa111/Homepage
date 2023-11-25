"use client"
import React from 'react'
import styles from "styles/nav.module.css"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars } from "react-icons/fa";



function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  
  

  return (
    <nav className={` items-center text-white pr-20 pl-8 ${styles.header}`}>
      <div className={`${styles.header1}`}><img src='/images/logo.png' className=''/></div>
      <div className={`${styles.emptynav}`}></div>
      <div>
        <ul className= {`${styles.header2} flex gap-12`}>
            <li className={`cursor-pointer ${pathname==='/'?'border-b-2':'opacity-70 hover:opacity-100'}`}><Link href='/'>Home</Link></li>
            <li className={`cursor-pointer ${pathname==='/warehouse'?'border-b-2 ':'opacity-70  hover:opacity-100'}`}> <Link href='/warehouse'>Warehouse</Link></li>
            <li className={`cursor-pointer ${pathname==='/browse'?'border-b-2':'opacity-70  hover:opacity-100'}`}><Link href='/browse'>Browse</Link></li>
            <li className={`cursor-pointer ${pathname==='/ai'?'border-b-2':'opacity-70  hover:opacity-100'}`}><Link href='/ai'>AI</Link></li>
            <li className={`cursor-pointer ${pathname==='/careers'?'border-b-2':'opacity-70  hover:opacity-100'}`}><Link href='/careers'>Careers</Link></li>
            <li className={`cursor-pointer ${pathname==='/login'?'border-b-2':'opacity-70  hover:opacity-100'}`}><Link href='/login'>login</Link></li>
        </ul>
        <div className={`${styles.toggleButton} text-3xl mr-0 pr-0`}>
             <FaBars></FaBars>
        </div>

        <div className={`${styles.dropdown}`}>
            <ul className= {``}>
                <li className={`cursor-pointer ${pathname==='/'?'underline underline-offset-2':'opacity-70'}`}><Link href='/'>Home</Link></li>
                <li className={`cursor-pointer ${pathname==='/warehouse'?'underline':'opacity-70'}`}> <Link href='/warehouse'>Warehouse</Link></li>
                <li className={`cursor-pointer ${pathname==='/browse'?'underline':'opacity-70'}`}><Link href='/browse'>Browse</Link></li>
                <li className={`cursor-pointer ${pathname==='/ai'?'underline':'opacity-70'}`}><Link href='/ai'>AI</Link></li>
                <li className={`cursor-pointer ${pathname==='/careers'?'underline':'opacity-70'}`}><Link href='/careers'>Careers</Link></li>
                <li className={`cursor-pointer ${pathname==='/login'?'underline':'opacity-70'}`}><Link href='/login'>login</Link></li>
            </ul>
        </div>
      </div>
      </nav>
  )
}

export default Navbar;
