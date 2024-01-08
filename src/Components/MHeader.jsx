import React from 'react';
import Logo from '../Images/Logo.png';
import { HashLink as Link } from 'react-router-hash-link';

const MenuItem = ({ text, to }) => (
  <li className="relative group px-[13px] text-center">
    <Link smooth to={to}>
      {text}
      <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-beige group-hover:w-1/3 group-hover:transition-all"></span>
      <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-beige group-hover:w-1/3 group-hover:transition-all"></span>
    </Link>
  </li>
);

export default function MHeader() {
  return (
    <nav className='fixed z-50 top-0 font-semibold flex justify-center items-center text-beige text-xs pt-5 w-full'>
      <ul className='w-max py-[6px] flex items-center justify-center bg-coffee rounded-full shadow-xl'>
        <MenuItem text='Home' to='/#MHome' />
        <MenuItem text='Workshop' to='/#MWorkshop'/>
        <img src={Logo} className='h-[25px]' alt="Logo" />
        <MenuItem text='Menu' to='/#MMenu'/>
        <MenuItem text='About Us' to='/#MAbout'/>
      </ul>
    </nav>
  );
}
