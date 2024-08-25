"use client"; // Add this at the top of your file
import { Inter } from "next/font/google";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Importing Bootstrap Icons CSS

import { FilterProvider } from "../context/FilterContext";
import { CartProvider } from "../context/CartContext";

import CustomNavBar from "@/components/CustomNavBar";
import CustomFooter from "../components/footer/CustomFooter";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FilterProvider>
          <CartProvider>
            <div>
              <div className="page-body">
                <header>
                  <CustomNavBar />
                </header>
                <main className="container-fluid py-4">{children}</main>
              </div>
              <CustomFooter />
            </div>
          </CartProvider>
        </FilterProvider>
      </body>
    </html>
  );
}
