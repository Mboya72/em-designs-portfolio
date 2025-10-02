import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="w-full h-[100vh] overflow-hidden bg-[url(/background.png)] bg-cover bg-no-repeat">
      {/* Rest of the homepage content */}
      <div className="flex items-center">
        <div className="flex flex-col ml-1 mt-[30vh] sm:ml-[25vw] sm:mt-[50vh] justify-start items-start">
          <p className="text-5xl text-[#F7FBE6] font-medium">Hi I&apos;m</p>
          <p className="text-6xl sm:text-7xl text-[#F7FBE6] mb-5 font-semibold">
            Elvis Mboya
          </p>
          <p className="bg-[#F7FBE6] px-2 mt-3 text-xl font-semibold text-black rounded-full w-64 cursor-pointer">
            Software Developer
          </p>
          <p className="bg-[#F7FBE6] px-2 mt-3 text-xl font-semibold text-black rounded-full w-64 cursor-pointer">
            Graphics Designer
          </p>
          <p className="bg-[#F7FBE6] px-2 mt-3 text-xl font-semibold text-black rounded-full w-64 cursor-pointer">
            Web Designer
          </p>
          <p className="bg-[#F7FBE6] px-2 mt-3 text-xl font-semibold text-black rounded-full w-64 cursor-pointer">
            Paint & Pencil Artist
          </p>
          <a 
  href="/Elvis Mboya Resume 2025.pdf" 
  download="My_Resume.pdf"
  className="bg-[#CCFF00] mt-[30px] hover:bg-[#20479b] hover:text-slate-300 text-[17px] text-black font-bold py-1 px-2 rounded-md inline-block text-center"
>
  Download Resume
</a>
          <div className="mt-6 flex">
            <a
              href="https://instagram.com/elvindio72_arts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={32}
                height={32}
                className="w-8 hover:scale-110 mr-6 cursor-pointer"
              />
            </a>

            <a
              href="https://linkedin.com/in/elvis-mboya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={32}
                height={32}
                className="w-8 hover:scale-110 mr-6 cursor-pointer"
              />
            </a>

            <a
              href="https://wa.me/254741782335"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={32}
                height={32}
                className="w-8 hover:scale-110 mr-6 cursor-pointer"
              />
            </a>

            <a
              href="https://github.com/Mboya72"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.png"
                alt="GitHub"
                width={32}
                height={32}
                className="w-8 hover:scale-110 mr-6 cursor-pointer"
              />
            </a>
          </div>
        </div>

        <div>
          <Image
            src="/boy.png"
            alt="Boy Illustration"
            width={600}
            height={800}
            className="absolute bottom-0 h-[90vh] hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}
