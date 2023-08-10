import React from 'react'
import JobContainer from './JobContainer'
import { jobData } from '../data'
const HiringContainer = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-blue-600 font-semibold'>We are hiring</p>
      <h1 className='font-bold text-2xl m-2'>Current Openings</h1>
      <div className='flex flex-wrap w-[80%]  gap-10 justify-center items-center'>
      {
        jobData.map( (eachJob, i) =>{
          return (
            <JobContainer jobData={eachJob} key={i}/>
          )
        }

        )
        }
        </div>


      
    </div>
  )
}

export default HiringContainer
