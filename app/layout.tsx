import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CaProvider from "./components/Providers";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "800", "900"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <CaProvider>
          <Navbar />
          <ShoppingCart />
          {children}
          <Footer />
        </CaProvider>
      </body>
    </html>
  );
}
