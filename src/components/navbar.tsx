import React from 'react'
import '../app/globals.css';


export default function Navbar() {
  return (
    <nav className="w-screen h-5 fixed z-10">
      <div className="w-2/4 float-left flex justify-start items-center"><p className="m-5 text-white text-lg font-bold">Architect.</p></div>
      <div className="w-2/4 float-left flex justify-end items-center"><p className="m-5 text-white">Menu</p></div>
    </nav>
  )
}
