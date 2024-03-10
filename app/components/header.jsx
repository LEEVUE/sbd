import React from 'react'
import "./header.css"
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div className='header-container'>
        <Image
            src="/mof.png"
            width={80}
            height={80}
            alt="logo"
        />
        <div className="sbd-label">
            <p className='sbd-lao'>ກົມງົບປະມານແຫ່ງລັດ</p>
            <p className='sbd-eng'>STATE BUDGET DEPARMENT</p>
        </div>
      </div>
    </header>
  )
}
