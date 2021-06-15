import React from 'react'

import Image from "next/image"
const Footer= ()=>{
    return (
        <footer className="flex-col">
        <div>
          <div className="flex p-6">
            <div className="p-4">
              <Image
                src="/static/xyz_nav_logo.svg"
                alt=".xyz logo"
                width="218"
                height="83"
              />
            </div>

            <div className="flex justify-around">
              <a href="">Discord</a>
              <a href="">Email</a>
              <a href="">Telegram</a>
            </div>
          </div>
        </div>

        <div className="lg:flex flex-col sm:items-center lg:items-end p-6">
          <ul className="flex ">
            <li className="text-white text-lg p-4 text-left font-extrabold">
              <a href="#" className="nav-link">
                Company
              </a>
            </li>
            <li className="text-white text-lg p-4 text-left font-extrabold">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="text-white text-lg p-4 text-left font-extrabold">
              <a href="#" className="nav-link">
                Team
              </a>
            </li>
            <li className="text-white text-lg p-4 text-left font-extrabold">
              <a href="#" className="nav-link">
                Mission
              </a>
            </li>
          </ul>

          <div className="footer-emails">
            <ul className="nav flex-column ">
              <li className=" text-lg p-4 text-left">
                <h3 className="text-green-400 font-extrabold">Contact Us:</h3>
              </li>

              <li className="text-white text-lg p-4 text-left hidden">
                <a href="mailto:hello@tech.nology.xyz" className="nav-link">
                  hello@tech.nology.xyz
                </a>
              </li>

              <li className="text-white text-lg p-4 text-left hidden">
                <a href="mailto:solutions@tech.nology.xyz" className="nav-link">
                  solutions@tech.nology.xyz
                </a>
              </li>

              <li className="text-white text-lg p-4 text-left hidden">
                <a href="mailto:developer@tech.nology.xyz" className="nav-link">
                  developer@tech.nology.xyz
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:flex hidden">
            <ul className="flex-col justify-end block">
              <li className="text-white text-lg p-4 text-left">
                <a href="mailto:defi@tech.nology.xyz" className=" ">
                  defi@tech.nology.xyz
                </a>
              </li>
              <li className="text-white text-lg p-4 text-left">
                <a href="mailto:jobs@tech.nology.xyz" className="nav-link">
                  jobs@tech.nology.xyz
                </a>
              </li>
              <li className="text-white text-lg p-4 text-left">
                <a href="mailto:press@tech.nology.xyz" className="nav-link">
                  press@tech.nology.xyz
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    )
}

export default Footer