import React, { useEffect, useState } from 'react'

function Carousel() {
 
  const slides=[{id:1,url:"/productimage/five.png"},{id:2,url:"/productimage/six.JPEG"},{id:3,url:"/productimage/four.png"}]
  const[activeIndex,setActiveIndex]=useState(0);



  useEffect(()=>{const interval=setInterval(()=>{setActiveIndex(
    activeIndex === slides.length-1 ? 0 : activeIndex + 1)
  },4000);
  return ()=>clearInterval(interval)}
 ,[activeIndex,slides.length])
    return (
        <div >
          {slides.map((s,key)=>
          <img  src={s.url} alt='img1' className={`${key === activeIndex ? `block` : `hidden`} w-full h-96`} /> )}
      
    </div>
    
    )




    
        
    
}

export default  Carousel
