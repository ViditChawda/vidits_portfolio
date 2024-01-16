'use client'
import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Hamburger({ setIsActive, isActive }: { setIsActive: Function, isActive: boolean }) {

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='md:hidden' onClick={() => setIsActive(!isActive)}>
      {isActive ?
        <IoMdClose className='text-2xl' />
        :
        <RxHamburgerMenu className='text-2xl' />
      }
    </div>
  );
}
