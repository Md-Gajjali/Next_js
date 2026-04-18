import React from 'react'

const Navbar = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex justify-between items-center py-4 px-2'>
            <div>
                <h2 className='text-3xl font-bold text-blue-200'>Hello World</h2>
            </div>
            <ul className='flex gap-5 text-2xl'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <div>
                <button className='text-2xl px-5 py-3 rounded-sm bg-blue-400'>Click</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
