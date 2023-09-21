import React from 'react'

function Hero() {
  return (
    <div className="flex">
    <div className='flex-1'>
      <h1 className='text-[80px]'>getlinked Tech</h1>
      <h1 className='text-[80px]'>Hackathon 1.0</h1>
      <p className='text-[20px]'>
        Participate in getlinked tech Hackathon 2023 stand a chance to win a
        Big prize
      </p>
      {/* <Button label='Subcribe'/> */}
    </div>
    <div  className='flex-1'>
      <h1>Igniting a Revolution in HR Innovation</h1>
      {/* <Image src={Hero} alt="Boy wearing Hd lens"  /> */}
    </div>
  </div>
  )
}

export default Hero