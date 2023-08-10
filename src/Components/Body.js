import React from 'react'
import About from './About'
import Core from './Core'
import Motivate from './Motivate'
import HiringContainer from './HiringContainer'

const Body = () => {
  return (
    <div className='  flex justify-center items-center flex-col mt-10'>
      <Motivate/>
    <Core/>
      <About/>
      <HiringContainer/>
    </div>
  )
}

export default Body
