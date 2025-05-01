"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHome, IoGameController } from "react-icons/io5";
import { FaFaceGrinBeam, FaBriefcase, FaPaintRoller } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Sidebar items with their respective routes
const sidebarItems = [
  { icon: <IoHome />, label: "Home", route: "/" },
  { icon: <FaFaceGrinBeam />, label: "About", route: "/about" },
  { icon: <FaBriefcase />, label: "Work", route: "/work" },
  { icon: <MdCall />, label: "Contact", route: "/contact" },
  { icon: <FaPaintRoller />, label: "Design", route: "/design" },
  { icon: <IoGameController />, label: "Games", route: "/games" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // 👈 Get current route

  return (
    <div
      className={`h-screen  bg-opacity-20 backdrop-blur-[70px] text-white font-medium p-3 transition-all duration-300 ease-in-out ${
        isOpen ? "w-[200px]" : "w-[60px]"
      } fixed top-0 right-0 z-50`}
    >
      {/* Toggle Button */}
      <div className="flex justify-between w-5 items-center border-b mt-[9px] border-b-[#ccff00] pb-3">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>

      {/* Sidebar Links */}
      <div className="mt-[25vh] flex flex-col gap-15 items-start">
        {sidebarItems.map((item, index) => {
          const isActive = pathname === item.route;

          return (
            <Link href={item.route} key={index}>
              <div
                className={`flex items-center gap-10 cursor-pointer text-[18px] transition-colors duration-200 ${
                  isActive ? "text-[#AFDB00]" : "text-[#F7FBE6] hover:text-[#AFDB00]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <div>{item.icon}</div>
                {isOpen && <span className="whitespace-nowrap">{item.label}</span>}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
