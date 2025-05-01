import './globals.css';
import Sidebar from '@/components/Sidebar';
import localFont from 'next/font/local';
import React from 'react';

const breakFont = localFont({
  src: '../../public/fonts/Break.ttf',
  display: 'swap',
});

export const metadata = {
  title: 'Elvis Mboya',
  description: 'Created by Elvis Mboya',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        {/* Sidebar: on top */}
        <Sidebar />

        {/* Top Bar: fixed but *under* sidebar */}
        <div className="fixed top-0 left-0 w-full z-40 border-b border-b-[#6C757D] h-[50px] flex items-center pr-[60px]">
          <div className="h-[51px] w-[51px] bg-slate-900 border-b border-b-[#ccff00] flex items-center justify-center">
            <img src="/em web logo.png" alt="Logo" className="h-[40px] w-auto" />
          </div>
          <p className={`mx-auto text-2xl font-bold ${breakFont.className}`}>EM DESIGNS</p>
        </div>

        {/* Page content */}
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
