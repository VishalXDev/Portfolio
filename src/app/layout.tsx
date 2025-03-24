"use client";
import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import "../app/globals.css";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-mono flex flex-col">
        <Navbar />
        <SocialSidebar />
        <main className="flex-grow container mx-auto px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
