
import React from 'react'
import {FaFacebookSquare,FaTwitter,FaInstagramSquare,FaWhatsappSquare} from 'react-icons/fa'
import './App.css';

function Footer() {
    return (

        <div className='sm:flex flex-row gap-x-20  max-xs:flex-col px-4 text-sm  bg-slate-500 text-zinc-300'>
           <div className='sm:p-5 xs:px-0'>
           <img src='../productimage/logo-removebg-preview.png' className='sm:-mt-14 -ml-8 -mb-12 w-32 h-32 max-xs:mt-2' />
            <p>collection</p>
            <p>Men & Women's clothes,Jewlery,</p>
            <p>Electronics and Much More</p>
           </div>
            <div >
            <p className='text-lg mt-5'>About us</p>
            <p className='font-bold mt-2'>Telephone :<span>+932 556 778</span></p>
            <p className='font-bold'>E-mail :<span>alphshop77@gmail.com</span></p>
            </div> 
         <div className='flex flex-row pt-2 sm:pl-9 space-x-4 mt-3 ml-3 '>
        <FaFacebookSquare size={16} />
          <FaInstagramSquare size={16}/>
            <FaTwitter size={16}/>
              <FaWhatsappSquare size={16} />
            
            
              </div>
        </div>
      
       
    )
}

export default Footer

