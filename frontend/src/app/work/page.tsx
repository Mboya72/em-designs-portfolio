"use client";
import { useState } from "react";
import { Afacad } from "next/font/google";
import { FaArrowCircleRight } from "react-icons/fa";

const afacad = Afacad({
  subsets: ["latin"],
  weight: "700",
});

export default function WorksPage() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <div className="flex flex-row h-[100vh]  max-w-[100vw] bg-[url(/aboutback.png)] bg-cover bg-no-repeat relative">
      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setFullscreenImage(null)}
        >
          <img
            src={fullscreenImage}
            alt="fullscreen view"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}

      {/* Main Content */}
      <div>
        <img
          src="workman.png"
          alt="man"
          className="h-[500px] absolute bottom-0"
        />
      </div>

      <div className="mt-15 ml-[13vw]">
        <div className="flex flex-row mb-3 items-center">
          <h1 className={`text-9xl ${afacad.className}`}>
            My <span className="text-[#CCFF00]">Works</span>
          </h1>
          <img src="brick.png" alt="" className="h-[70px]" />
        </div>

        <div className="flex flex-row w-[75vw] gap-5 h-[665px]">
          {/* Motion Design */}
          <div className="w-[530px] rounded-xl bg-[#CCFF00] flex gap-3 flex-col items-center mx-auto p-4">
            <p
              className={`text-black ml-3 mb-2 font-bold ${afacad.className} text-6xl`}
            >
              Motion Design
            </p>
            <video
              src="/Main Animation.mp4"
              width="400"
              controls
              autoPlay
              className="rounded-lg"
            />
            <video
              src="/main_1.mp4"
              width="400"
              controls
              autoPlay
              className="rounded-lg"
            />
            <p className="text-black text-[17px] font-semibold">
              "Motion design is where storytelling and technology meet."
            </p>
            <FaArrowCircleRight className="fill-black place-self-end text-[20px] hover:drop-shadow-lg" />
          </div>

          {/* Graphic Design & Others */}
          <div className="w-[530px] h-[700px]">
            <div className="h-[300px] rounded-xl flex bg-[#CC5144] p-4">
              <div>
                <img
                  src="Emma.png"
                  alt="Emma"
                  className="h-[27vh] cursor-pointer rounded-sm border border-slate-700 shadow-2xl"
                  onClick={() => setFullscreenImage("Emma.png")}
                />
              </div>
              <div>
                <div>
                  <p
                    className={`text-[#CCFF00] text-[80px] h-[75px] font-bold ${afacad.className} ml-2`}
                  >
                    Graphic
                  </p>
                  <p
                    className={`text-black h-[100px] text-[80px] font-bold ${afacad.className} ml-2`}
                  >
                    Design
                  </p>
                </div>
                <p
                  className={`text-black text-[17px] font-semibold mb-2 ml-2`}
                >
                  “Design is intelligence made visible.”
                </p>
                <FaArrowCircleRight className="fill-black mt-5 text-[20px] place-self-end hover:drop-shadow-lg float-right" />
              </div>
            </div>
            <div className="flex mt-5 gap-5 h-[330px] flex-row">
              <div className="w-[255px] rounded-xl bg-[#0198FC] p-4">
                <p
                  className={`text-black text-6xl font-bold ${afacad.className}`}
                >
                  Art Works
                </p>
                <FaArrowCircleRight className="fill-black mt-5 text-[20px] place-self-end hover:drop-shadow-lg float-right" />
                <img
                  src="art1.jpg"
                  alt="Artwork"
                  className="h-45 border-2 border-[#FCBC04] rounded-md cursor-pointer"
                  onClick={() => setFullscreenImage("art1.jpg")}
                />
              </div>
              <div className="w-[255px] rounded-xl bg-[#FCBC04] p-4">
                <p
                  className={`text-black text-6xl font-bold ${afacad.className}`}
                >
                  Mobile UI Design
                </p>
                <FaArrowCircleRight className="fill-black mt-5 text-[20px] place-self-end hover:drop-shadow-lg float-right" />
                <img
                  src="32mobile.png"
                  alt="Mobile UI"
                  className="h-50 rounded-md cursor-pointer"
                  onClick={() => setFullscreenImage("32mobile.png")}
                />
              </div>
            </div>
          </div>

          {/* Web Design */}
          <div className="w-[530px] rounded-xl block bg-[#8000FF] p-4">
            <p
              className={`text-[#CCFF00] text-[36px] font-bold ${afacad.className}`}
            >
              Web Design & Development
            </p>
            <img
              src="32-pc.png"
              alt="PC Site"
              className="cursor-pointer "
              onClick={() => setFullscreenImage("32-pc.png")}
            />
              <img
              src="32-pc.png"
              alt="PC Site"
              className="cursor-pointer mt-4 "
              onClick={() => setFullscreenImage("32-pc.png")}
            />
            {/* <img
              src="nike-site.png"
              alt="Nike Site"
              className="mt-4 cursor-pointer "
              onClick={() => setFullscreenImage("nike-site.png")}
            /> */}
            <FaArrowCircleRight className="fill-black mt-2 text-[20px] place-self-end hover:drop-shadow-lg float-right" />
          </div>
        </div>
      </div>
    </div>
  );
}
