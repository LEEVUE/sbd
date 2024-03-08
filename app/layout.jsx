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

export default function RootLayout({Component, pageProps, children }) {
  return (
    <html lang="lo">
      <head>

      </head>
      <body>
        <Header/>
        <Navbar/>
        <div className="body-container">
          <marquee id="myMarquee" behavior="" direction="left" style={{cursor: "pointer"}}>ດຳລັດ ວ່າດ້ວຍການສ້າງແຜນງົບປະມານ | ຄຳແນະນຳຈັດຕັ້ງປະຕິບັດແຜນງົບປະມານແຫ່ງລັດ ປະຈຳປີ 2024</marquee>
          <div className="item-body" id="children">
            <section>{children}</section>
          </div>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
