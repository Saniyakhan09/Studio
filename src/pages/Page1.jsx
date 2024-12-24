import React, { useRef, useState } from 'react'
// import TiltText from '../Components/TiltText'
// import Page1Bottom from '../Components/Page1Bottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Page1 = () => {
  const tiltRef = useRef(null)
  const[XVal,setXVal]= useState(0)
  const[YVal,setYVal]= useState(0)
  

  const move = (e)=>{
    setXVal((e.clientX-tiltRef.current.getBoundingClientRect().x -tiltRef.current.getBoundingClientRect().width/2)/20 )
    setYVal(-(e.clientY-tiltRef.current.getBoundingClientRect().y -tiltRef.current.getBoundingClientRect().height/2)/20 )

  // tiltRef.current.style.transform = `rotateX(${YVal}deg) rotateY(${XVal}deg)`;

  }

  useGSAP(function(){
    gsap.to(tiltRef.current,{
      transform:`rotateX(${YVal}deg) rotateY(${XVal}deg)`,
          duration:3,
          ease:'elastic.out(1,0.3)'
    
    })
  },[XVal,YVal])
  return (
    <>
    <div onMouseMove={(e)=>{
      move(e)
    }}
     className=' h-screen relative bg-white  px-8 py-8'>
      <div id='page1-in'  className=' relative h-full w-full shadow-md  shadow-gray-600 rounded-3xl'>
      <video 
    autoPlay 
    loop 
    muted 
    className="absolute top-0 left-0 w-full h-full object-cover rounded-[25px]"
>
    {/* // className="absolute top-0 left-0 w-full h-full object-cover" */}
    <source src="/src/assets/file.mp4" type="video/mp4" />
</video>
        {/* <img className='flex absolute z-10' src="img10.jpeg" alt="" /> */}
      <img className='p-4 absolute' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="" />
      </div>
      <div className='flex absolute top-56 left-16 p-12 pl-28 font-semibold '>
    <div  id='tilt-div' ref={tiltRef} className=''>   
        <h3 className='text-white text-6xl'>Hi, I’m <span className='text-gray-600 font-bold '> Saniya,</span></h3>
         {/* <h1 className='text-white text-9xl'>DESIGNER</h1>
         <h3 className='text-white'>TO HIRE</h3> */}
         <p className='text-white text-2xl mt-6'>a passionate Full Stack Developer and Electrical Engineer <br /> eager to create dynamic, user-friendly applications <br /> and solve real-world problems through technology.</p>
      </div>
    </div>
{/* <Page1Bottom/> */}
    </div>   
    </>
  )
}

export default Page1
