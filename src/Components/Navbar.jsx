// Navbar.jsx

import React, { useState } from 'react';
import Logo from '../Images/Logo.jpg';

const MenuItem = ({ link, text }) => (
  <li className="mx-6 relative group">
    <a href={link}>{text}</a>
    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-coffee group-hover:w-1/2 group-hover:transition-all"></span>
    <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-coffee group-hover:w-1/2 group-hover:transition-all"></span>
  </li>
);

export default function Navbar() {

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <nav className='fixed font-bold text-beige text-2xl w-full z-10'>
      <ul className='px-12 py-4 flex flex-row items-center bg-coffee gap-10 shadow-3xl'>
        <MenuItem link='' text='Home'/>
        <MenuItem link='' text='Workshop'/>
        <MenuItem link='' text='Menu' />
        <MenuItem link='' text='About Us' />
      </ul>
    </nav>
  );
}
