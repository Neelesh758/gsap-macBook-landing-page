import React, { useEffect, useRef } from 'react'

function Hero() {
  const videoRef = useRef();

  useEffect(()=>{
    if(videoRef.current) videoRef.current.playbackRate = 3
  },[])
  return (
    <section id='hero' className='lg:pt-[7vh]'>
      <div> 
        <h1 className='text-center'>MacBook Pro</h1>
        <img src="./title.png" alt="Macbook Title" />
      </div>
      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>
      <button>Buy</button>
      <br /> 
      <p>From $1599 or $133/mo for 12 Months</p>
    </section>
  )
}

export default Hero