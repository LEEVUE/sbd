import Link from "next/link"
import "./navbar.css"

export default function Navbar() {
    return(
    <>
        <nav>
            <ul className="menu">
                <li><Link href="/">ໜ້າທຳອິດ</Link></li>
                <li><Link href="/legal">ພາລະບົດບາດ</Link></li>
                <li className="legal"><Link href="">ນິຕິກຳ<span class="material-symbols-outlined">expand_more</span></Link>
                    <ul className="submenu">
                        <li><Link href="#">ກົດໝາຍ ແລະ ນິຕິກຳລຸ່ມກົດໝາຍ</Link></li>
                        <li><Link href="#">ສາລະບານງົບປະມານ-ບັນຊີ</Link></li>
                        <li><Link href="#">Dropdown 3</Link></li>
                    </ul>
                </li>
                <li id="platform"><Link href="">ລະບົບ</Link></li>
                <li><Link href="/organization">ໂຄງຮ່າງການຈັດຕັ້ງ</Link></li>
                <li><Link href="">ຕິດຕໍ່</Link></li>
            </ul>
        </nav>
    </>
    )
}

