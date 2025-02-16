import React from "react";
import TypewriterText from "../components/TypewriterText";
import { UserData } from "../data/UserData";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillCode,
} from "react-icons/ai";
import { FaLinkedinIn, FaDiscord,FaEnvelope } from "react-icons/fa";
import imagedeveloper from "../Assets/images/fawwaz_2.png";

function Home() {
  const socialMedia = UserData.socialMedia;

  const socialMediaIcons = {
    AiFillGithub: AiFillGithub,
    FaLinkedinIn: FaLinkedinIn,
    AiOutlineTwitter: AiOutlineTwitter,
    AiFillCode: AiFillCode,
    FaDiscord: FaDiscord,
    FaEnvelope: FaEnvelope,

  };

  const socialMediaColors = {
    github: "text-gray-800",
    linkedin: "text-blue-600",
    twitter: "text-blue-400",
    datacamp: "text-green-500",
    discord: "text-indigo-600",
    email: "text-red-600",

  };

  return (
    <div className="mb-28 h-auto w-full sm:mb-0 md:h-screen">
      <div className="mx-auto mt-40 flex w-[90%] flex-col items-center sm:flex-row lg:mt-32 lg:w-[80%] lg:justify-between  ">
        <div className="w-full">
          <h2 className="text-2xl font-semibold leading-tight text-gray-900 lg:text-3xl">
            Hello <span className="wave">👋</span>
          </h2>
          <h2 className="pt-2 text-2xl font-semibold leading-tight text-gray-900">
            I'm {UserData.name}
          </h2>
          <TypewriterText />

          <div className="mt-4 flex gap-8 lg:gap-0">
            {socialMedia.map((data, index) => {
              const IconComponent = socialMediaIcons[data.icon];
              return (
                <button
                  className={`flex items-center justify-center rounded-lg border-none bg-transparent hover:bg-white hover:bg-opacity-20 hover:opacity-80 hover:shadow-lg lg:h-12 lg:w-24 ${
                    socialMediaColors[data.socialMediaName]
                  }`}
                  key={index}
                  onClick={() => window.open(data.url)}
                >
                  <IconComponent className="icon text-6xl" />
                </button>
              );
            })}
            <button
              className={`flex items-center justify-center rounded-lg border-none bg-transparent hover:bg-white hover:bg-opacity-20 hover:opacity-80 hover:shadow-lg lg:h-12 lg:w-24 ${socialMediaColors.email}`}
              onClick={() => window.location.href = 'mailto:fawwazraza2024@gmail.com'}
            >
              <FaEnvelope className="icon text-6xl" />
            </button>
          </div>
        </div>

        <div className="relative mt-20 lg:mt-12 flex justify-center items-center ">
          <div
            className="rounded-full p-1 flex justify-center items-center "
            style={{
              border: "10px solid transparent",
              borderImage:
                "linear-gradient(45deg, #4285F4 25%, #34A853 25%, #34A853 50%, #FBBC05 50%, #FBBC05 75%, #EA4335 75%, #EA4335 100%)",
              borderImageSlice: 1,
              // borderRadius:"30%",
            }}
          >
            <img
              className="object-cover"
              style={{ 
                height: "450px",
                width: "800px",
                // borderradius: "50%",
                // color: "black",
                // backgroundcolor: "black",
              }}
              src={imagedeveloper}
              alt="Developer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
