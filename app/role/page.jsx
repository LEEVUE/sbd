import { FaExpand } from "react-icons/fa6";
import Script from "next/script";
import { ReactDOM } from "react";

export default function about() {
    return (
        <>
            <h1 id="headtext">ພາລະບົດບາດ ຂອງກົມງົບປະມານແຫ່ງລັດ <FaExpand style={{verticalAlign:"sub"}}/></h1>
            <Script src="./test.js"/>
        </>
    )
}
