import React from 'react'
import "./header.css"
import Image from 'next/image'
import logo from "/public/mof.png"

export default function Header() {
  return (
    <header>
        <Image
            src={logo}
            width={100}
            height={100}
            alt="logo"
        />
        <div className="sbd-label">
            <p className='sbd-lao'>ກົມງົບປະມານແຫ່ງລັດ</p>
            <p className='sbd-eng'>STATE BUDGET DEPARMENT</p>
        </div>
    </header>
  )
}
