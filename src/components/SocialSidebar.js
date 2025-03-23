"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className="fixed top-1/2 left-5 transform -translate-y-1/2 space-y-4 text-green-400 font-mono">
      <Link href="https://github.com/VishalXDev" target="_blank" className="block p-2 bg-gray-900 rounded-lg border border-green-500 hover:bg-green-500 hover:text-black">
        <FaGithub size={24} />
      </Link>
      <Link href="https://www.linkedin.com/in/vishal-dwivedy" target="_blank" className="block p-2 bg-gray-900 rounded-lg border border-green-500 hover:bg-green-500 hover:text-black">
        <FaLinkedin size={24} />
      </Link>
      <Link href="https://twitter.com" target="_blank" className="block p-2 bg-gray-900 rounded-lg border border-green-500 hover:bg-green-500 hover:text-black">
        <FaTwitter size={24} />
      </Link>
    </div>
  );
}