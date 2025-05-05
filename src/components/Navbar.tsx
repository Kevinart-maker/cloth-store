import { useState } from 'react'
import { PiShoppingCartSimpleFill } from "react-icons/pi";

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false)
    
    
  return (
    <nav className="flex items-center justify-between p-2 py-5 md:px-8 px-4">
      <h1 className="md:text-4xl text-2xl font-bold text-[var(--primary-color)]">Golf le Fleur</h1>

        <div className="flex items-center md:flex-row-reverse md:gap-[3rem] gap-4">
            <PiShoppingCartSimpleFill/>
            <div className="md:hidden flex flex-col cursor-pointer gap-1 z-[100]" onClick={() => setIsOpen(!isOpen)}>
                <span className={`h-[1.3px] bg-[var(--primary-color)] ${isOpen ? 'w-[1.5rem] rotate-45' : 'w-[1.5rem]'}`}></span>
                <span className={`w-[1.5rem] h-[1.3px] bg-[var(--primary-color)] ${isOpen ? 'hidden' : ''}`}></span>
                <span className={`self-end h-[1.3px] bg-[var(--primary-color)] ${isOpen ? 'w-[1.5rem] rotate-[-45deg] translate-y-[-0.3rem]' : 'w-[1.2rem]'}`}></span>
            </div>
            <div className='md:flex gap-4 text-sm hidden'>
              <span>Collections</span>
              <span>Brands</span>
              <span>About Us</span>
              <span>Contact Us</span>
            </div>
        </div>

      <div className={`${isOpen ? 'flex flex-col' : 'hidden'} z-50 shadow-md cursor-pointer text-sm fixed bottom-0 blurry w-[100%] right-0 top-0`}>
        <ul className='md:bg-[var(--primary-color)] absolute right-0 top-0 md:w-[40%] w-[100%] h-[100vh] flex flex-col items-center pt-[5rem] gap-4 text-white'>
            <li className='hover:scale-110'>Collections</li>
            <li className='hover:scale-110'>Brands</li>
            <li className='hover:scale-110'>About Us</li>
            <li className='hover:scale-110'>Contact Us</li>
        </ul>
      </div>
    </nav>
  )
}
