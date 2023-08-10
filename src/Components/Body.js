import React from 'react'
import About from './About'
import Core from './Core'
import Motivate from './Motivate'

const Body = () => {
  return (
    <div className='  flex justify-center items-center flex-col mt-10'>
      <Motivate/>
    <Core/>
      <About/>
    </div>
  )
}

export default Body
