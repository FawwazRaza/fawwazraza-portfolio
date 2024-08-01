import React from "react";
import { UserData } from "../data/UserData";

function Contact() {
  const { FooterLink } = UserData;

  // Function to ensure the URL is absolute
  const ensureAbsoluteUrl = (url) => {
    if (!/^https?:\/\//i.test(url)) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <div className="mb-40 flex w-full items-center justify-center md:h-screen lg:mb-4">
      <div className="flex flex-col items-center justify-center ">
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
          className="h-[50px] w-[200px] border-2 border-black bg-transparent hover:bg-gray-900 hover:text-white hover:bg-opacity-90 transition duration-300 ease-in-out font-semibold"
        >
          Partner Up! 🤝
        </button>
      </div>
    </div>
  );
}

export default Contact;
