import { Inter } from "next/font/google";
import "./globals.css";
import { Children } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";

// ນີ້ແມ່ນຕົວແປເອີ້ນໃຊ້ ຟອນທີ່ມີຊື່ວ່າ Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ກົມງົບປະມານແຫ່ງລັດ",
  description: "ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ໜ້າເວັບໄຊທາງການຂອງກົມງົບປະມານແຫ່ງລັດ, ກະຊວງການເງິນ",
  keyword: "ກະຊວງການເິງນ ກົມງົບປະມານແຫ່ງລັດ ຄັງເງິນແຫ່ງຊາດ ສາລະບານງົບປະມານ-ບັນຊີ ການຫັນເປັນທັນສະໄໝ ລະບົບ GFIS+ GFIS PLUS FMIS ",
  charset: "UTF-8",
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="lo">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body>
        <Header/>
        <Navbar/>
        <div>dfgd</div>
        <hr />
        <div className="body-container">
          <div className="left-right item-body"></div>
          <div className="item-body" id="children">
            <section>{children}</section>
          </div>
          <div className="left-right item-body"></div>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
