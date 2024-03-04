import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Navbar from "./components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "eshopdesign.com",
  description:
    "A designed website made with love and to prove my frontend ability ! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="./icon.png" sizes="24" />
        <div>
          <Info />
          <Navbar />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
