"use client";
import Image from 'next/image'
import Logo from '@/public/images/Raju-Rental-Logo.png'
import { IoCallOutline } from "react-icons/io5";
import { useState } from 'react';

const Navbar = () => {
  const[isopen , Setisopen]=useState(false);
  return (
    <>
      <nav className="bg-transparent text-black p-2 w-full border-b-2 border-black  sticky">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image 
             src={Logo}
             alt="Raju Rentals Logo"
             className="w-16 h-16 rounded-full" />
             <div className='flex flex-col'>
          <h1 className="text-xl font-bold">Raju Rentals</h1>
          <p className="text-sm">Commercial Cars for rental</p>
          </div>
          </div>
          <div className="hidden md:flex space-x-10 font-semibold items-center">
            <ul className='space-x-10 font-semibold flex items-center'>
            <li>
            <a href="#home" className="hover:text-blue-300">Home</a>
            </li>
            <li>
            <a href="#our vehicals" className="hover:text-blue-300">Vehicals</a>
            </li>
            <li>
            <a href="#about" className="hover:text-blue-300">About</a>
            </li>
            <li>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
            </li>
            </ul>
            <button className="bg-yellow-400 px-4 py-2 rounded-md font-normal flex items-center gap-2">
              <IoCallOutline className="w-4 h-4" />
              Call Now
            </button>
           
          </div>
        
          <button
          onClick={()=>Setisopen(!isopen)}
          className="md:hidden text-3xl focus:outline-none"
        >
          ☰
        </button>
        </div>
        {isopen && (
          <>
          <div className="flex flex-col md:hidden space-x-10 font-semibold items-center">
            <ul className='space-x-10 font-semibold flex flex-col items-center'>
            <li>
            <a href="#home" className="hover:text-blue-300">Home</a>
            </li>
            <li>
            <a href="#our vehicals" className="hover:text-blue-300">Vehicals</a>
            </li>
            <li>
            <a href="#about" className="hover:text-blue-300">About</a>
            </li>
            <li>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
            </li>
            </ul>
            <a 
                href="tel:+917635969895"
              >
                <div className="bg-yellow-400 px-4 py-2 rounded-md font-normal flex items-center gap-2">
                <IoCallOutline className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-black text-sm mb-1">Call Us</div>
                </div>
              </a>
            {/* <a href="tel:+917635969895">
            <button className="bg-yellow-400 px-4 py-2 rounded-md font-normal flex items-center gap-2">
              
              Call Now
            </button>
            </a>
            */}
          </div>
          </>
        )}
      </nav>
    </>
  )
}

export default Navbar