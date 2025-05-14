"use client";
import localFont from "next/font/local";
import React, { useState } from "react";
import { sendEmail } from "../../../lib/resend";
import Image from "next/image";

const bubbleboddyNeue = localFont({
  src: "../../../public/fonts/BubbleboddyNeue-Bold Trial.ttf",
  display: "swap",
});

const Contact = () => {
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      setAlert({ message: "Invalid input", type: "error" });
      return;
    }

    const res = await sendEmail({
      to: "elvismboyadesigns@gmail.com",
      subject: `New message from ${name}`,
      name,
      email,
      message,
    });

    if (res.success) {
      setAlert({ message: "Message sent successfully!", type: "success" });
      form.reset();
    } else {
      setAlert({ message: "Failed to send message.", type: "error" });
      console.error(res.error);
    }

    setTimeout(() => setAlert(null), 4000);
  }

  return (
    <div className="bg-[url(/aboutback.png)] bg-cover bg-no-repeat min-h-screen w-full px-4 py-10">
      <div className="max-w-screen-2xl mt-10 mr-15 sm:mr-20 sm:ml-30 ml-7">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div>
            <h1 className={`${bubbleboddyNeue.className} text-5xl lg:text-8xl`}>
              GET IN
            </h1>
            <h1 className={`${bubbleboddyNeue.className} text-6xl lg:text-9xl`}>
              TOUCH
            </h1>
          </div>

          <div>
            <Image
              src="/in touch.png"
              alt=""
              width={210}
              height={210}
              className="h-[150px] lg:h-[210px] mt-6 ml-5"
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {[
              {
                icon: "/location.png",
                title: "My Location",
                text: "Nairobi, Kenya",
              },
              {
                icon: "/worktime.png",
                title: "Working Time",
                text: "Flexible Work Time\nMonday - Friday",
              },
              {
                icon: "/communication.png",
                title: "Communication",
                text: "+254 727 168 320\nelvindio72@gmail.com",
              },
            ].map(({ icon, title, text }, i) => (
              <div
                key={i}
                className="w-full sm:w-[280px] h-[260px] border bg-[#1B1B1B] border-[#656B76] p-4"
              >
                <Image
                  src={icon}
                  alt={title}
                  width={40}
                  height={40}
                  className="h-[40px]"
                />
                <h2 className="text-[#AFDB00] text-xl mt-2 font-medium">
                  {title}
                </h2>
                {text.split("\n").map((line, j) => (
                  <h3 key={j} className="text-white mt-1">
                    {line}
                  </h3>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-20 flex flex-col lg:flex-row gap-10">
          <div>
            <h1 className={`${bubbleboddyNeue.className} text-5xl lg:text-8xl`}>
              CONTACT
            </h1>
            <h1 className={`${bubbleboddyNeue.className} text-6xl lg:text-9xl`}>
              ME
            </h1>
            <Image
              src="/contact.png"
              alt=""
              width={210}
              height={210}
              className="h-[150px] lg:h-[210px] mt-4"
            />
          </div>

          <div className="flex flex-col md:flex-row bg-[#1B1B1B] border border-[#3E4042] w-full max-w-5xl p-6">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full max-w-md"
            >
              {alert && (
                <div
                  className={`mb-4 px-4 py-2 rounded text-sm font-semibold transition-all duration-300 ${
                    alert.type === "success"
                      ? "bg-green-600 text-white animate-fade-in"
                      : "bg-red-600 text-white animate-fade-in"
                  }`}
                >
                  {alert.message}
                </div>
              )}

              <input
                type="text"
                name="name"
                placeholder="Your Name/Company"
                className="bg-[#0C0C0C] py-2 px-2 placeholder:text-white text-white w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-[#0C0C0C] mt-3 py-2 px-2 placeholder:text-white text-white w-full"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="bg-[#0C0C0C] mt-3 py-2 px-2 placeholder:text-white text-white w-full h-[100px]"
                required
              />
              <button
                type="submit"
                className="text-black font-medium py-2 px-4 rounded-sm mt-4 
                  bg-[#AFDB00]/80 hover:bg-[#c7f000] active:bg-[#97b800] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>

            <div className="flex flex-col items-center justify-center w-full mt-8 md:mt-0">
              <p className="text-red-400 font-bold text-lg mb-2">
                Any Questions?
              </p>
              <Image
                src="/questionman.png"
                alt=""
                width={150}
                height={150}
                className="h-[120px] md:h-[150px]"
              />
              <p className="text-yellow-300 font-bold text-lg mt-4">
                Get in Touch
              </p>
              <Image
                src="/pointing worker.png"
                alt=""
                width={150}
                height={150}
                className="h-[120px] md:h-[150px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
