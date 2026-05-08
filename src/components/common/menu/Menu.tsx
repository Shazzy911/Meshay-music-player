"use client";

import React from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setMenuOpen } from '@/redux/slices/menuSlice';


const Menu = () => {

  const menuOpen = useAppSelector((state) => state.menuOpen);
    const dispatch = useAppDispatch()
  
  return ( 
    <span onClick={() => dispatch(setMenuOpen(!menuOpen))}><RiMenu3Fill /></span>
  )
}

export default Menu