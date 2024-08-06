import React from "react";
import { UserData } from "../data/UserData";

function Footer() {
  const currentYear = new Date().getFullYear();
  const { FooterLink } = UserData;

  const handleClick = (e) => {
    e.preventDefault();
    window.open(ensureAbsoluteUrl(FooterLink), '_blank', 'noopener,noreferrer');
  };

  // Function to ensure the URL is absolute
  const ensureAbsoluteUrl = (url) => {
    if (!/^https?:\/\//i.test(url)) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <div className="mb-2 flex items-center justify-center gap-2">
      <div className="font-poppins text-center text-xs">
       Credit to @RahulVijay  © Copyright <b>{currentYear}</b> Designed by
      </div>
      <a
        href={ensureAbsoluteUrl(FooterLink)}
        className="cursor-pointer text-sm font-bold tracking-wider"
        onClick={handleClick}
        rel="noopener noreferrer"
      >
        Fawwaz Raza
      </a>
    </div>
  );
}

export default Footer;
