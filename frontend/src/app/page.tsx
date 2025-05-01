
import React from 'react'

export default function Home() {
  return (
    <div className="w-full h-[100vh] overflow-hidden bg-[url(/background.png)] bg-cover bg-no-repeat">
      {/* Rest of the homepage content */}
      <div className="flex items-center">
        <div className="flex flex-col ml-1 mt-[10vh] sm:ml-[25vw] sm:mt-[50vh] justify-start items-start">
          <p className="text-5xl font-medium">Hi I'm</p>
          <p className="text-7xl font-semibold">Elvis Mboya</p>
          <p className="bg-slate-200 px-2 mt-3 text-xl font-semibold text-black rounded-full w-64 cursor-pointer">Software Developer</p>
          <p className="bg-slate-200 px-2 mt-3 text-xl font-semibold text-black rounded-full w-64 cursor-pointer">Graphics Designer</p>
          <p className="bg-slate-200 px-2 mt-3 text-xl font-semibold text-black rounded-full w-64 cursor-pointer">Web Designer</p>
          <p className="bg-slate-200 px-2 mt-3 text-xl font-semibold text-black rounded-full w-64 cursor-pointer">Paint & Pencil Artist</p>
          <button className="bg-[#CCFF00] mt-[30px] hover:bg-[#20479b] hover:text-slate-300 text-[17px] text-black font-bold py-1 px-2 rounded-md">
            Download Resume
          </button>
          <div className="mt-6 flex">
            <img src="/instagram.png" alt="Instagram" className="w-8 hover:scale-110 mr-6 cursor-pointer" />
            <img src="/linkedin.png" alt="LinkedIn" className="w-8 hover:scale-110 mr-6 cursor-pointer" />
            <img src="/whatsapp.png" alt="WhatsApp" className="w-8 hover:scale-110 cursor-pointer" />
          </div>
        </div>

        <div>
          <img src="/boy.png" alt="Boy Illustration" className="absolute bottom-0 h-[90vh] hidden lg:block" />
        </div>
      </div>
    </div>
  );
}



