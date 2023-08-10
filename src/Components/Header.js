import React from 'react'
import {BsTwitter} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';
import {CgMail} from 'react-icons/cg';


const Header = () => {
  return (
    <div className='bg-gray-800 w-full flex flex-wrap items-center justify-between p-2'>
      <div>
        <img className='w-[200px] ' src='https://getpeppermint.co/wp-content/uploads/2017/05/Untitled-design-86-1.png' alt='logo'/>
      </div>
      <h1 className='font-bold text-4xl text-white cursor-pointer '>Careers</h1>
      <nav >
        <ul className='flex flex-wrap gap-10 text-lg text-white p-2'>
          <li className='w-[30px] h-[30px] hover:bg-white hover:text-gray-600 p-2 rounded-full cursor-pointer'><BsTwitter/></li>
          <li className='w-[30px] h-[30px] hover:bg-white hover:text-gray-600 p-2 rounded-full cursor-pointer'><BsLinkedin/></li>
          <li className='w-[30px] h-[30px] hover:bg-white hover:text-gray-600 p-2 rounded-full cursor-pointer'><BsYoutube/></li>
          <li className='w-[30px] h-[30px] hover:bg-white hover:text-gray-600 p-2 rounded-full cursor-pointer'><CgMail/></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
