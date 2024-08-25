'use client'; // Add this at the top of your file
import { Inter } from 'next/font/google';
import './globals.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importing Bootstrap Icons CSS

import { FilterProvider } from '../context/FilterContext';
import { CartProvider } from '../context/CartContext';

import CustomNavBar from '@/components/CustomNavBar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FilterProvider>
          <CartProvider>
            <div>

              <div className='page-body'>
                <header>
                  <CustomNavBar />
                </header>
                <main className="container-fluid py-4">{children}</main>
              </div>

              <footer className="footer text-white text-center py-4">
                <div className="container">
                  <div className="row">
                    <div className="col-md-2">
                      <p>Column 1</p>
                    </div>
                    <div className="col-md-2">
                      <p>Column 2</p>
                    </div>
                    <div className="col-md-2">
                      <p>Column 3</p>
                    </div>
                    <div className="col-md-2">
                      <p>Column 4</p>
                    </div>
                    <div className="col-md-2">
                      <p>Column 5</p>
                    </div>
                    <div className="col-md-2">
                      <p>Column 6</p>
                    </div>
                  </div>
                </div>
              </footer>

            </div>
          </CartProvider>
        </FilterProvider>
      </body>
    </html>
  );
}     
