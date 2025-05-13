import Image from "next/image";
import "../globals.css";
import { Afacad } from "next/font/google";

const afacad = Afacad({
  subsets: ["latin"],
  weight: "700",
});

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[url(/aboutback.png)] bg-cover bg-no-repeat text-white">
      {/* Main content section */}
      <div className="flex-1 max-w-[100vw] mx-auto px-4 py-12 lg:py-16">
        <div className="w-full lg:w-[75vw]">
          {/* Header Section */}
          <div className="flex flex-row lg:flex-row items-center lg:items-start sm:gap-6 gap-1">
            <Image src="/aboutanime.png" alt="John" className="h-[250px] lg:h-[400px]" />
            <div>
              <h1
                className={`text-[75px] sm:text-[120px] lg:text-[200px] text-gray-400 leading-none ${afacad.className}`}
              >
                About
              </h1>
              <h1
                className={`text-[80px] sm:text-[120px] lg:text-[200px] text-[#CCFF00] leading-none ${afacad.className}`}
              >
                Me
              </h1>
            </div>
          </div>

          {/* Bio Section */}
          <h2 className="mt-6 text-[18px] sm:text-[20px] lg:text-[25px] text-gray-400 font-medium mr-13 ">
            I am a multifaceted creator with a deep passion for both the technical and artistic
            sides of design. As a software developer, web designer, graphic designer, motion
            designer, and traditional artist, I bring a unique blend of creativity and functionality
            to everything I do. Whether it's crafting seamless user experiences, creating stunning
            visuals, or building dynamic websites, I focus on delivering high-quality work that
            connects with people. I strive to continuously push the boundaries of creativity,
            blending technology and art to create truly engaging experiences.
          </h2>

          {/* Skills Section */}
          <h2 className="text-[#ccff00] text-2xl sm:text-3xl mt-6 font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-3 mt-3 mr-7">
            {[
              "pr", "ps", "ai", "figma", "react", "js", "next", "css", "tailwind", "ae", "id", "xd", "postgre",
            ].map((icon, i) => (
              <Image key={i} src={`/${icon}.png`} alt={icon} className="h-10 sm:h-11" />
            ))}
          </div>

          {/* Fun Fact Section */}
          <h2 className="text-[#ccff00] text-2xl sm:text-3xl mt-6 font-semibold">Fun Fact</h2>
          <p className="text-gray-400 text-[16px] mr-12 sm:text-[18px] lg:text-[20px] mt-1">
            I have the rare ability to balance the logical side of software development with the
            expressive power of traditional art. Coding is my language, but the canvas is where I
            tell stories.
          </p>
          <p className="text-[#CCFF00] mb-8 mt-3 text-[18px] mr-12 sm:text-[20px] lg:text-[22px] italic">
            "Creativity is intelligence having fun." — Albert Einstein
          </p>
        </div>
      </div>
    </div>
  );
}
