
import React from "react";
import { UserData } from "../data/UserData";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillCode,
} from "react-icons/ai";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  const { FooterLink, socialMedia } = UserData;

  const socialMediaIcons = {
    AiFillGithub: AiFillGithub,
    FaLinkedinIn: FaLinkedinIn,
    AiOutlineTwitter: AiOutlineTwitter,
    AiFillCode: AiFillCode,
    FaDiscord: FaDiscord,
  };

  const socialMediaColors = {
    github: "text-gray-800",
    linkedin: "text-blue-600",
    twitter: "text-blue-400",
    datacamp: "text-green-500",
    discord: "text-indigo-600",
    email: "text-red-500",
  };

  // Function to ensure the URL is absolute
  const ensureAbsoluteUrl = (url) => {
    if (!/^https?:\/\//i.test(url)) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <div className="mb-40 flex w-full items-center justify-center md:h-screen lg:mb-4">
      <div className="flex flex-col items-center justify-center px-4">
        <h2 className="pb-6 pt-12 text-center text-3xl font-bold tracking-wider text-gray-900 lg:text-5xl">
          Let's Collaborate
        </h2>
        <p className="font-poppins mx-auto px-2 pb-6 text-center text-sm tracking-wider text-gray-900 lg:w-[50%]">
          Ready to innovate? I'm always eager to discuss new projects, creative 
          ideas, or potential collaborations. My inbox is open for opportunities 
          that could shape the future of technology.
        </p>

        <button
          onClick={() => {
            window.open(ensureAbsoluteUrl(FooterLink), '_blank', 'noopener,noreferrer');
          }}
          className="h-[50px] w-[200px] border-2 border-black bg-transparent hover:bg-gray-900 hover:text-white hover:bg-opacity-90 transition duration-300 ease-in-out font-semibold mb-6"
        >
          Partner Up! 🤝
        </button>

        <div className="mt-4 flex flex-wrap gap-4 justify-center">
          {socialMedia.map((data, index) => {
            const IconComponent = socialMediaIcons[data.icon];
            return (
              <button
                className={`flex items-center justify-center rounded-lg border-none bg-transparent hover:bg-white hover:bg-opacity-20 hover:opacity-80 hover:shadow-lg h-12 w-12 ${
                  socialMediaColors[data.socialMediaName]
                }`}
                key={index}
                onClick={() => window.open(data.url)}
              >
                <IconComponent className="icon text-3xl" />
              </button>
            );
          })}
          <button
            className={`flex items-center justify-center rounded-lg border-none bg-transparent hover:bg-white hover:bg-opacity-20 hover:opacity-80 hover:shadow-lg h-12 w-12 ${
              socialMediaColors.email
            }`}
            onClick={() => window.location.href = 'mailto:fawwazraza2024@gmail.com'}
          >
            <MdEmail className="icon text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
