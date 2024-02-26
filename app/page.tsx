
// "use client";
// import React from "react";
// import { BackgroundBeams } from "./components/ui/background-beams";
// import { TextGenerateEffect } from "./components/ui/text-generate-effect";
// import { HoverEffect } from "./components/ui/card-hover-effect";

// export default function Home() {

//   const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;

//   const projects = [
//     {
//       title: "Stripe",
//       description:
//         "A technology company that builds economic infrastructure for the internet.",
//       link: "https://stripe.com",
//     },
//     {
//       title: "Netflix",
//       description:
//         "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//       link: "https://netflix.com",
//     },
//     {
//       title: "Google",
//       description:
//         "A multinational technology company that specializes in Internet-related services and products.",
//       link: "https://google.com",
//     },
//     {
//       title: "Meta",
//       description:
//         "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//       link: "https://meta.com",
//     },
//     {
//       title: "Amazon",
//       description:
//         "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//       link: "https://amazon.com",
//     },
//     {
//       title: "Microsoft",
//       description:
//         "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//       link: "https://microsoft.com",
//     },
//   ];

//   return (
//     <div>
//       <div className="h-[90rem] w-full rounded-md bg-neutral-900 relative flex flex-col items-center justify-center antialiased">
//         <div className="max-w-2xl mx-auto p-4">
//           <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
//             Hi! I am Jayanth
//           </h1>
//           <p></p>
//           <div className="text-white max-w-lg mx-auto my-2 text-sm text-center relative z-10">
//             <TextGenerateEffect words={words} />
//           </div>

//         </div>
//         <BackgroundBeams />
//         <div>
//           View my projects
//         </div>
//         <div className="max-w-5xl mx-auto px-8">
//           <HoverEffect items={projects} />
//         </div>
//       </div>
//     </div>

//   )
// }

"use client";
import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { HoverEffect } from "./components/ui/card-hover-effect";

export default function Home() {

  const words = `I am quite good at designing and building Things. \n
  Be it a full-stack webapp , desktop app or a  mobile app`
  const projects = [
    {
      title: "Mediclino",
      description:
        "A full-stack software created to manipulate the automated medicine dispenser machines developed by the startup mediclino",
      link: "/projects/mediclino",
    },
    {
      title: "Sentini Mobile App",
      description:
        "A Mobile app created for the company sentini flopipes to manage their distribution network",
      link: "/projects/sentiniapp",
    },
    {
      title: "Sentini Admin Console",
      description:
        "A full-stack web-app created to completely control and customize the sentini mobile app",
      link: "/projects/sentiniadminconsole",
    },
    {
      title: "Pharmacy software",
      description:
        "A pharmacy software for a hospital pharmacy. This software can be used to manage all the pharmacy needs of a patient who gets admitted to the hospital",
      link: "/projects/pharmacy",
    },
    // {
    //   title: "Amazon",
    //   description:
    //     "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    //   link: "https://amazon.com",
    // },
    // {
    //   title: "Microsoft",
    //   description:
    //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    //   link: "https://microsoft.com",
    // },
  ];

  return (
    <div>
      <div className="min-h-screen w-full rounded-md bg-neutral-900 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4 pt-[14rem]">
          <h1 className=" pb-4 relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Hi! I am Jayanth
          </h1>
          <div className="text-white max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            <TextGenerateEffect words={words} />
          </div>
        </div>
        <BackgroundBeams />
        <div className="text-white mt-8 mb-4 text-center">View my projects</div>
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  )
}
