import "../globals.css";
import { Afacad } from "next/font/google";

const afacad = Afacad({
  subsets: ["latin"],
  weight: "700",
});

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[url(/aboutback.png)] bg-cover bg-no-repeat text-white">
      <div className="w-full max-w-[1400px] mr-25 lg:m-auto ml-2 py-10">
        <div className="flex lg:flex-row items-center lg:items-start gap-6">
          {/* Image */}
          <img
            src="/aboutanime.png"
            alt="John"
            className="h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-contain"
          />

          {/* Text Heading */}
          <div className=" text-left">
            <h1
              className={`text-[80px] sm:text-[100px] md:text-[140px] lg:text-[200px] text-gray-400 leading-none ${afacad.className}`}
            >
              About
            </h1>
            <h1
              className={`text-[100px] sm:text-[100px] md:text-[140px] lg:text-[200px] text-[#CCFF00] leading-none ${afacad.className}`}
            >
              Me
            </h1>
          </div>
        </div>

        {/* Description */}
        <h2 className="mt-6 text-base sm:text-lg md:text-xl lg:text-[25px] text-gray-400 font-medium leading-relaxed">
        I am a multifaceted creator with a deep passion for both the
            technical and artistic sides of design. As a software developer, web
            designer, graphic designer, motion designer, and traditional artist,
            I bring a unique blend of creativity and functionality to everything
            I do. Whether it's crafting seamless user experiences, creating
            stunning visuals, or building dynamic websites, I focus on
            delivering high-quality work that connects with people. I strive to
            continuously push the boundaries of creativity, blending technology
            and art to create truly engaging experiences.
        </h2>

        {/* Skills */}
        <h2 className="text-[#ccff00] text-2xl sm:text-3xl mt-8 font-semibold">
          Skills
        </h2>
        <div className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start">
          {[
            "pr.png", "ps.png", "ai.png", "figma.png", "react.png", "js.png",
            "next.png", "css.png", "tailwind.png", "ae.png", "id.png",
            "xd.png", "postgre.png",
          ].map((icon) => (
            <img key={icon} src={`/${icon}`} alt={icon} className="h-10 sm:h-11" />
          ))}
        </div>

        {/* Fun Fact */}
        <h2 className="text-[#ccff00] text-2xl sm:text-3xl mt-8 font-semibold">
          Fun Fact
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mt-2">
          I have the rare ability to balance the logical side of software
          development with the expressive power of traditional art. Coding is my
          language, but the canvas is where I tell stories.
        </p>
        <p className="text-[#CCFF00] mt-4 text-lg sm:text-xl font-medium italic">
          "Creativity is intelligence having fun." — Albert Einstein
        </p>
      </div>
    </div>
  );
}
