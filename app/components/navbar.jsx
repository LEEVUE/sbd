import Link from "next/link"
import "./navbar.css"
import Image from "next/image"
import { IoIosArrowDown } from "react-icons/io";
import SystemsComponent from "./platform/systems";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
    return(
    <>
        <nav>
            <menu>
                <ul className="menu">
                    <li><Link href="/">ໜ້າທຳອິດ</Link></li>
                    <li><Link href="/role">ພາລະບົດບາດ</Link></li>
                    <li className="legal"><Link href="/legal">ນິຕິກຳ< IoIosArrowDown className="react-icon ico-expand" /></Link>
                        <ul className="submenu">
                            <li><Link href="#">ກົດໝາຍ ແລະ ນິຕິກຳລຸ່ມກົດໝາຍ</Link></li>
                            <li><Link href="#">ສາລະບານງົບປະມານ-ບັນຊີ</Link></li>
                            <li><Link href="#">Dropdown 3</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/organization">ການເຄື່ອນໄຫວ</Link></li>
                    <li><Link href="/organization">ໂຄງຮ່າງການຈັດຕັ້ງ</Link></li>
                    <SystemsComponent/>
                    <li><Link href="">ຕິດຕໍ່ພົວພັນ</Link></li>
                </ul>
                <ul>
                    <li className="search-box">
                        <input type="search" name="search" id="search-field" placeholder="ຄົ້ນຫາ" /><FiSearch className="ico-search"/>
                    </li>
                    <Link href="/" className="lang-container">
                        <Image src="/LAO.svg" width={26} height={20} alt="My SVG" />
                        <div>LAO</div>
                    </Link>
                    <Link href="/en" className="lang-container">
                        <Image src="/ENG.svg" width={25} height={25} alt="My SVG" />
                        <div>ENG</div>
                    </Link>
                </ul>
            </menu>
        </nav>
    </>
    )
}

