import React from 'react'
import Link from 'next/link'
import { IoIosArrowDown } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi"
import "./system.css"

export default function SystemComponent() {
  return (
    <>
    <div className="center-box">
        <div className="animated-border-box"></div>
        <li id="platform" className='animated'><Link href="/systems">ລະບົບ< IoIosArrowDown className="react-icon ico-expand" /></Link>
                <ul className="submenu">
                    <li><Link href="https://rtis.gov.la/gfisplus" target="_blank">ລະບົບ GFIS Plus <FiExternalLink className="react-icon" /></Link></li>
                    <li><Link href="#">ລະບົບ FMIS</Link></li>
                    <li><Link href="#">ລະບົບ E-Reading</Link></li>
                </ul>
        </li>
    </div>
    </>
  )
}

