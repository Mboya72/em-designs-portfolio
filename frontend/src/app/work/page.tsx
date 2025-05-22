"use client";
import { useState } from "react";
import { Afacad } from "next/font/google";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const afacad = Afacad({
  subsets: ["latin"],
  weight: "700",
});

export default function WorksPage() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[url(/aboutback.png)] bg-cover bg-no-repeat px-4 lg:px-[13vw] pb-12 pt-12 lg:pt-20">
      {/* Fullscreen Image Modal */}
{fullscreenImage && (
  <div
    className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
    onClick={() => setFullscreenImage(null)}
  >
    <img
      src={`/${fullscreenImage}`}
      alt="fullscreen view"
      className="max-w-full max-h-full rounded-lg"
    />
  </div>
)}

      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center mb-10 gap-4">
        <h1 className={`text-5xl lg:text-9xl ${afacad.className}`}>
          My <span className="text-[#CCFF00]">Works</span>
        </h1>
        <Image
  src="/brick.png"
  alt="brick"
  width={100}
  height={100}
  className="h-[100px] lg:h-[100px]"
/>
      </div>

      {/* Content Sections */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Motion Design */}
        <div className="sm:w-full  w-[330px] bg-[#CCFF00] rounded-xl sm:mr-0 mr-12 sm:p-4 flex flex-col items-center gap-4">
          <p
            className={`text-black text-4xl lg:text-6xl font-bold ${afacad.className}`}
          >
            Motion Design
          </p>
          <video
            src="/Main Animation.mp4"
            controls
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg sm:w-full w-[300px] max-w-[400px]"
          />
          <video
            src="/main_1.mp4"
            controls
            muted
            loop
            autoPlay
            playsInline
            className="rounded-lg sm:w-full w-[300px] max-w-[400px]"
          />
          <p className="text-black text-[16px] text-center font-semibold">
          &quot;Motion design is where storytelling and technology meet.&quot;
          </p>
          <Link href={"/motiondesign"}></Link>{" "}
          <FaArrowCircleRight className="fill-black text-xl mr-2 mb-2 hover:drop-shadow-lg self-end" />
        </div>

        {/* Graphic Design & Others */}
        <div className="w-full lg:w-[530px] flex flex-col gap-6">
          {/* Graphic Design Card */}
          <div className="bg-[#CC5144] p-4 rounded-xl flex flex-col sm:flex-row sm:mr-0 mr-12 gap-4">
            <Image
              src="/Emma.png"
              alt="Emma"
              width={180}
              height={180}
              className="w-[280px] sm:w-[180px] h-auto rounded-md border border-slate-700 shadow-lg cursor-pointer"
              onClick={() => setFullscreenImage("Emma.png")}
            />
            <div>
              <p
                className={`text-[#CCFF00] text-4xl lg:text-[55px] font-bold ${afacad.className}`}
              >
                Graphic
              </p>
              <p
                className={`text-black text-4xl lg:text-[55px] font-bold ${afacad.className}`}
              >
                Design
              </p>
              <p className="text-black text-[16px] font-semibold mt-1">
              &quot;Design is intelligence made visible.&quot;
              </p>
              <Link href={"/graphicdesign"}>
                <FaArrowCircleRight className="fill-black text-xl mt-2 hover:drop-shadow-lg float-right" />
              </Link>
            </div>
          </div>

          {/* Art Works & Mobile UI */}
          <div className="flex flex-col sm:flex-row gap-4 sm:mr-0 mr-12">
            <div className="bg-[#0198FC] p-4 rounded-xl w-full sm:w-1/2">
              <p
                className={`text-black text-3xl lg:text-6xl font-bold ${afacad.className}`}
              >
                Art Works
              </p>

              <Image
                src="/art1.jpg"
                alt="Artwork"
                width={300}
                height={200}
                className="mt-2 rounded-md border-2 border-[#FCBC04] cursor-pointer w-full h-auto"
                onClick={() => setFullscreenImage("art1.jpg")}
              />
              <Link href={"/arts"}>
                <FaArrowCircleRight className="fill-black text-xl mt-2 float-right hover:drop-shadow-lg" />
              </Link>
            </div>
            <div className="bg-[#FCBC04] p-4 rounded-xl w-full sm:w-1/2">
              <p
                className={`text-black text-3xl lg:text-6xl font-bold ${afacad.className}`}
              >
                Mobile UI Design
              </p>

              <Image
                src="/32mobile.png"
                alt="Mobile UI"
                width={300}
                height={200}
                className="mt-2 rounded-md cursor-pointer w-full h-auto"
                onClick={() => setFullscreenImage("32mobile.png")}
              />
              <Link href={"/mobiledesign"}>
                {" "}
                <FaArrowCircleRight className="fill-black text-xl mt-2 float-right hover:drop-shadow-lg" />
              </Link>
            </div>
          </div>
        </div>

        {/* Web Design */}
        <div className="sm:w-full  w-[330px]  bg-[#8000FF] sm:mr-0  mr-20 p-4 rounded-xl">
          <p
            className={`text-[#CCFF00] text-2xl lg:text-[36px] font-bold ${afacad.className}`}
          >
            Web Design & Development
          </p>
          <Image
            src="/32-pc.png"
            alt="PC Site"
            width={400}
            height={250}
            className="mt-4 cursor-pointer w-[310px] sm:w-full h-auto"
            onClick={() => setFullscreenImage("32-pc.png")}
          />
          <Image
            src="/32-pc.png"
            alt="PC Site"
            width={400}
            height={250}
            className="mt-4 cursor-pointer w-[310px] sm:w-full h-auto"
            onClick={() => setFullscreenImage("32-pc.png")}
          />
          <Link href={"/Webdesign"}>
            <FaArrowCircleRight className="fill-black text-xl mt-2 hover:drop-shadow-lg float-right" />
          </Link>
        </div>
      </div>

      {/* Workman Image */}
      <Image
  src="/workman.png"
  alt="workman"
  width={200} // adjust to match your design
  height={500}
  className="hidden lg:block h-[500px] absolute bottom-0 left-4"
/>
    </div>
  );
}
