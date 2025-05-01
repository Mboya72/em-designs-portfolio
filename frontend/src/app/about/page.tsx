import "../globals.css";
import { Afacad } from "next/font/google";

const afacad = Afacad({
  subsets: ["latin"],
  weight: "700",
});

export default function About() {
  return (
    <div className="flex">
      {/* Sidebar component, ensures sidebar appears on the About page too */}

      {/* Main content section */}
      <div className="flex-1 max-h-fit pt-18 max-w-[100vw]  mx-auto bg-[url(/aboutback.png)] bg-cover bg-no-repeat text-white">
        <div className="ml-[20vw] w-[65vw]">
          <div className=" flex flex-row">
            <img src="/aboutanime.png" alt="John" className="h-[400px]" />
            <div>
              <h1
                className={`text-[200px] h-[180px] text-gray-400 ${afacad.className} `}
              >
                About{" "}
              </h1>
              <h1
                className={`text-[200px] h-[180px] text-[#CCFF00] ${afacad.className} `}
              >
                Me
              </h1>
            </div>
          </div>
          <h2 className="mt-3 text-[25px] text-gray-400 font-medium">
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
          <h2 className="text-[#ccff00] text-3xl mt-6 font-semibold">
            Skills </h2>
          <div className="flex gap-3 mt-2">
            <img src="pr.png" alt="premier pro" className="h-11" />
            <img src="/ps.png" alt="photoshop" className="h-11" />
            <img src="ai.png" alt="illustator" className="h-11" />
            <img src="figma.png" alt="figma" className="h-11" />
            <img src="react.png" alt="react" className="h-11" />
            <img src="js.png" alt="javascript" className="h-11" />
            <img src="next.png" alt="next.js" className="h-11" />
            <img src="css.png" alt="css" className="h-11" />
            <img src="tailwind.png" alt="" className="h-11" />
            <img src="ae.png" alt="after effect" className="h-11" />
            <img src="id.png" alt="in design" className="h-11" />
            <img src="xd.png" alt="xd" className="h-11" />
            <img src="postgre.png" alt="postgre" className="h-11" />
          </div>
          <h2 className="text-[#ccff00] text-3xl mt-6 font-semibold">
            Fun Fact
          </h2>
          <p className="text-gray-400 text-[20px] ">
            I have the rare ability to balance the logical side of software
            development with the expressive power of traditional art. Coding is
            my language, but the canvas is where I tell stories.
          </p>
          <p className="text-[#CCFF00] mb-8 mt-3 text-[22px]">
            "Creativity is intelligence having fun." — Albert Einstein
          </p>
        </div>
      </div>
    </div>
  );
}
