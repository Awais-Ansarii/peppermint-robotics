import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-800 w-full flex items-center justify-between p-2'>
      <div>
        <img className='w-[200px] ' src='https://getpeppermint.co/wp-content/uploads/2017/05/Untitled-design-86-1.png' alt='logo'/>
      </div>
      <h1 className='font-bold text-4xl text-white  '>Careers</h1>
      <nav >
        <ul className='flex gap-5 text-lg text-white p-2'>
          <li>twitter</li>
          <li>linkedin</li>
          <li>utube</li>
          <li>gmail</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
