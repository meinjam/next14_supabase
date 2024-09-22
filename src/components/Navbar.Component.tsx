import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-primary py-4 text-white'>
      <div className='container flex items-center justify-between'>
        <div>
          <Link prefetch href='/' className='text-2xl'>
            Website
          </Link>
        </div>
        <menu className='flex items-center gap-x-10'>
          <li>
            <Link prefetch href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link prefetch href='/tasks'>
              Tasks
            </Link>
          </li>
          {/* <li>
            <Link href='/profile'>Profile</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li> */}
        </menu>
      </div>
    </nav>
  );
};

export default Navbar;
