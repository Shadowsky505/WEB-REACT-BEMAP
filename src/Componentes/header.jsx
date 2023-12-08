import React from 'react'
import logoBemap from "../assets/LogoBemap_1.png"

export const CompHeader = () => {
  return (
    <>
      <header className='bg-azulMarca py-3 rounded-b-2xl mx-10 shadow-xl shadow-slate-600'>
        <div className='grid grid-cols-2 place-content-evenly'>
          <div className='flex flex-wrap ms-5'>
            <a href="http://vpn.bemap.one" className='imgLogo mx-5'>
              <img src={logoBemap} alt="" />
            </a>
            <p className='text-white text-4xl font-bold font-russo customGroup1'>
            BEMAP
            </p>
          </div>
          <div className='flex items-center justify-center text-2xl'>
            <a href='#' className='text-white font-bold font-russo mx-8'>INICIO</a>
            <a href='#' className='text-white font-bold font-russo mx-8'>FORO</a>
            <a href='#' className='text-white font-bold font-russo mx-8'>APP</a>
            <a href='#' className='text-white font-bold font-russo mx-8'>BÚSQUEDAD</a>
          </div>
        </div>
      </header>
    </>
  )
}

