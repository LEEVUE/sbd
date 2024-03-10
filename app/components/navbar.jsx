import Link from "next/link"
import "./navbar.css"

export default function Navbar() {
    return(
    <>
        <nav>
            <menu>
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
                    <li><Link href="/organization">ການເຄື່ອນໄຫວ</Link></li>
                    <li id="platform"><Link href="">ລະບົບ<span class="material-symbols-outlined">expand_more</span></Link>
                        <ul className="submenu">
                            <li><Link href="https://rtis.gov.la/gfisplus" target="_blank">ລະບົບ GFIS Plus</Link></li>
                            <li><Link href="#">ລະບົບ FMIS</Link></li>
                            <li><Link href="#">ລະບົບ E-Reading</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/organization">ໂຄງຮ່າງການຈັດຕັ້ງ</Link></li>
                    <li><Link href="">ຕິດຕໍ່</Link></li>
                </ul>
                <ul>
                    <li className="search-box">
                        <span id="icon-search" class="material-symbols-outlined">search</span>
                        <input type="search" name="search" id="search-field" placeholder="ຄົ້ນຫາ" />
                        <span id="let-search" class="material-symbols-outlined">east</span>
                    </li>
                    <div>ENG</div>
                </ul>
            </menu>
        </nav>
    </>
    )
}

