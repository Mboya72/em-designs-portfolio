import localFont from "next/font/local";
import Image from "next/image";
import React from "react";


const bubbleboddyNeue = localFont({
  src: "../../../public/fonts/BubbleboddyNeue-Bold Trial.ttf",
  display: "swap",
});
const Contact = () => {
  return (
    <div className=" flex flex-row bg-[url(/aboutback.png)] bg-cover bg-no-repeat h-[100vh] relative  w-[100vw]">
      <div className="mt-30 ml-20 ">
        <div className="flex flex-row">
          <div className="text-[#F7FBE6]">
            <h1 className={`${bubbleboddyNeue.className} text-8xl`}>GET IN </h1>
            <h1 className={`${bubbleboddyNeue.className} text-9xl`}>TOUCH </h1>
          </div>
          <div>
          <Image src="/in touch.png" alt="In Touch" width={210} height={210} className="mt-6 ml-5" />
          </div>
          <div className="w-[300px] h-[300px] ml-20  border bg-[#1B1B1B] border-[#656B76]">
          <Image src="/location.png" alt="Location" width={50} height={50} className="mt-4 ml-4" />
            <h2 className="ml-4 mt-2 font-medium text-xl text-[#AFDB00]">My Location</h2>
            <h3 className="ml-4 mt-1">Nairobi, Kenya</h3>
            <div className="mt-30 ml-4">
              <p className="text-[#AFDB00]">Directon</p>
            </div>
          </div>
          <div className="w-[300px] h-[300px] ml-7 border bg-[#1B1B1B] border-[#656B76]">
          <Image src="/worktime.png" alt="Work Time" width={50} height={50} className="mt-4 ml-4" />
            <h2 className="ml-4 mt-2 font-medium text-xl text-[#AFDB00]">Working Time</h2>
            <h3 className="ml-4 mt-1">Flexible Work Time</h3>
            <div className="mt-30 ml-4">
              <p className="text-[#AFDB00]">Details</p>
            </div>
          </div>
          <div className="w-[300px] h-[300px] ml-7 border bg-[#1B1B1B] border-[#656B76]">
          <Image src="/communication.png" alt="Communication" width={50} height={50} className="mt-4 ml-4" />
            <h2 className="ml-4 mt-2 font-medium text-xl text-[#AFDB00]">Communication</h2>
            <h3 className="ml-4 mt-1">+254 727 168 320</h3>
            <h3 className="ml-4 mt-1">elvindio72@gmail.com</h3>
            <div className="mt-23 ml-4">
              <p className="text-[#AFDB00]">Email</p>
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-row">
          <div className="text-[#F7FBE6] ">
            <h1 className={`${bubbleboddyNeue.className} text-8xl`}>CONTACT</h1>
            <h1 className={`${bubbleboddyNeue.className} text-9xl`}>ME</h1>
          </div>
          <div>
          <Image src="/contact.png" alt="Contact" width={210} height={210} className="h-[210px]" />
          </div>
          <div className="flex bg-[#1B1B1B] ml-36 border border-[#3E4042] w-[955px] h-[300px]">
            <div className="w-[450px] h-[300px] ml-4 mt-4">
              <input
                type="text"
                placeholder="Your Name/Company"
                className="bg-[#0C0C0C] py-2 pl-1 placeholder:text-[#F7FBE6] w-[450px]"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="bg-[#0C0C0C] mt-3 py-2 pl-1 placeholder:text-[#F7FBE6] w-[450px]"
              />
              <input
                type="text"
                placeholder="Message"
                className="bg-[#0C0C0C] mt-3 py-2 pl-1 placeholder:text-[#F7FBE6] w-[450px]"
              />
              <button className="text-black font-medium py-1 px-2 rounded-sm mt-7 bg-[#AFDB00]">Send Message</button>
            </div>
            <div className="flex w-[500px] h-[300px] ml-10 ">
            <p className="mt-60 font-extrabold text-xl text-red-400">Any Questions?</p>
            <Image src="/questionman.png" alt="Question Man" width={210} height={210} className="mt-15" />
            <p className="mt-60 font-extrabold text-xl text-yellow-300">Get in Touch</p>
            <Image src="/pointing worker.png" alt="Pointing Worker" width={210} height={210} className="h-[210px] mt-15" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
