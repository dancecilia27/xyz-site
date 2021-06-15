import React from 'react'
import Link from "next/link"
import Image from "next/image"
const navbar = () => {
    return (
        <div className=" bg-purple-800 flex justify-between items-center w-screen p-8">
        <a href="#" className="">
          <Image width="96" height="36" src="/static/xyz_nav_logo.svg" />
        </a>
        <nav className="flex space-x-8">
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
    )
}

export default navbar