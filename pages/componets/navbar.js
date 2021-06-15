import React from "react";
import Link from "next/link";
import Image from "next/image";
const navbar = () => {
  return (
    <div className="w-screen bg-purple-800 flex justify-between items-center p-8">

      <a href="#" className="">
        <Image width="96" height="36" src="/static/xyz_nav_logo.svg" />
      </a>

      <button
        className="md:visible text-white text-4xl lg:hidden"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample06"
        aria-controls="navbarsExample06"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>&#9776;</span>
      </button>

      
      <nav className="flex space-x-8  hidden">
        <div className="px-4 font-bold text-white text-4xl hover:bg-purple-700 rounded-xl">
          <Link href="/about">About</Link>
        </div>

        <div className="px-4 font-bold text-white text-4xl hover:bg-purple-700 rounded-xl">
          <Link href="/blog">Blog</Link>
        </div>

        <a className="px-4 font-bold text-white text-4xl hover:bg-purple-700 rounded-xl">
          Discord
        </a>
      </nav>
    </div>
  );
};

export default navbar;
