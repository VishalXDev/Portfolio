"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className="fixed top-1/2 left-5 transform -translate-y-1/2 space-y-4 text-gray-900 font-sans">
      <Link href="https://github.com/VishalXDev" target="_blank" className="block p-2 bg-gray-100 rounded-lg hover:bg-gray-300">
        <FaGithub size={24} />
      </Link>
      <Link href="https://www.linkedin.com/in/vishal-dwivedy" target="_blank" className="block p-2 bg-gray-100 rounded-lg hover:bg-gray-300">
        <FaLinkedin size={24} />
      </Link>
      <Link href="https://twitter.com" target="_blank" className="block p-2 bg-gray-100 rounded-lg hover:bg-gray-300">
        <FaTwitter size={24} />
      </Link>
    </div>
  );
}
