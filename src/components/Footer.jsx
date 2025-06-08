import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaDiscord,FaFacebookF, FaXTwitter, FaReddit } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      
      <a href="https://github.com/Mkjerry-jr" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/manoj-kumar-k-27b338250"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
       <a
        href="mailto:mkjerry2004@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope size={24} />
      </a>
      <a
        href="https://www.reddit.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaReddit size={24} />
      </a>  
      
      <p>© Made by Manoj Kumar</p>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF size={24} />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://www.instagram.com/mkjerry_jr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://discord.com/users/mkjerry"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDiscord size={24} />
      </a>
      
    </footer>
    
  );
};

export default Footer;