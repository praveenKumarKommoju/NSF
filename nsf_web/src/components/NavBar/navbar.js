'use client';

import { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PrimaryButton from '../PrimaryButton';
// import IconButton from '@mui/material/IconButton';
// import Icon from '@mui/material/Icon';
// import Image from 'next/image';

const Navbar=()=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-4 py-3 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center mx-10">
        <div className='flex items-end gap-6'>
   <img src="/logo.svg" alt={'logo'} className='h-48'/>
   <div className='flex flex-col justify-end'>
        <Link href="/" className="text-3xl font-bold text-primary">
          Niranthar Seva Foundation
        </Link>
        <div className='text-textPrimary text-end'>We are with you, why don't you join us..!!</div>
        </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />
    }
        </button>

        {/* Links */}
        <ul className="hidden md:flex gap-6 text-primary font-medium items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contactus">Contact</Link></li>
          <li><PrimaryButton /></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-2 px-4 space-y-2 text-black font-medium mt-4">
          <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link href="/contactus" onClick={toggleMenu}>Contact</Link></li>
          <li><PrimaryButton/></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar
