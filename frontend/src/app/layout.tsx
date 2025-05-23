import './globals.css';
import Sidebar from '@/components/Sidebar';
import localFont from 'next/font/local';
import Image from 'next/image';
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
          <div className="h-[51px] w-[51px]  border-b border-b-[#ccff00] flex items-center justify-center">
          <Image
  src="/em web logo.png"
  alt="Logo"
  width={120} // or an appropriate width based on your design
  height={40} // or appropriate height
  className="h-[40px] w-auto"
/>
          </div>
          <p className={`mx-auto  text-[#F7FBE6] text-2xl font-bold ${breakFont.className}`}>EM DESIGNS</p>
        </div>

        {/* Page content */}
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
