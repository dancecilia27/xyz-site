import React from "react";

import Image from "next/image";
const Footer = () => {
  return (
    <footer className="flex-col bg-gradient-to-r from-purple-500 via-black to-green-400 ">
      <div className="lg:flex lg:flex-row sm:flex-col sm:items-center p-6">
        <div className="p-4  flex justify-center flex-grow-0 flex-shrink-0 relative">
          <Image
            src="/static/xyz_nav_logo.svg"
            alt=".xyz logo"
            width="218"
            height="83"
          />
        </div>

        <div className="flex justify-around">
          <a className="p-4" href="">
            <Image width="52" height="46" src="/static/Icon_Discord.svg" />
          </a>
          <a className="p-4" href=""> <Image width="52" height="46" src="/static/Icon_Mail.svg" /></a>
          <a  className="p-4" href=""> <Image width="52" height="46" src="/static/Icon_Telegram.svg" /></a>
        </div>
      </div>

      <div className="lg:flex lg:flex-row flex-col sm:items-center lg:items-end p-6">
        <ul className="flex lg:flex-col ">
          <li className="text-white lg:text-lg text-sm p-4 text-left lg:font-extrabold">
            <a href="#" className="nav-link">
              Company
            </a>
          </li>
          <li className="text-white lg:text-lg text-sm p-4 text-left lg:font-extrabold">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li className="text-white lg:text-lg text-sm p-4 text-left lg:font-extrabold">
            <a href="#" className="nav-link">
              Team
            </a>
          </li>
          <li className="text-white lg:text-lg text-sm p-4 text-left lg:font-extrabold">
            <a href="#" className="nav-link">
              Mission
            </a>
          </li>
        </ul>

        <div className="lg:flex-col">
          <ul className=" lg:flex-col flex justify-center">
            <li className="text-lg p-4 text-left">
              <h3 className="text-green-400 font-extrabold ">Contact Us</h3>
            </li>

            <li className="text-white text-lg p-4 text-left hidden lg:list-item">
              <a href="mailto:hello@tech.nology.xyz" className="nav-link">
                hello@tech.nology.xyz
              </a>
            </li>

            <li className="text-white text-lg p-4 text-left hidden lg:list-item">
              <a href="mailto:solutions@tech.nology.xyz" className="nav-link">
                solutions@tech.nology.xyz
              </a>
            </li>

            <li className="text-white text-lg p-4 text-left hidden lg:list-item">
              <a href="mailto:developer@tech.nology.xyz" className="nav-link">
                developer@tech.nology.xyz
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:flex hidden lg:visible">
          <ul className="flex-col justify-end block">
            <li className="text-white text-lg p-4 text-left hidden lg:list-item">
              <a href="mailto:defi@tech.nology.xyz" className=" ">
                defi@tech.nology.xyz
              </a>
            </li>
            <li className="text-white text-lg p-4 text-left hidden lg:list-item">
              <a href="mailto:jobs@tech.nology.xyz" className="nav-link">
                jobs@tech.nology.xyz
              </a>
            </li>
            <li className="text-white text-lg p-4 text-left hidden lg:list-item">
              <a href="mailto:press@tech.nology.xyz" className="nav-link">
                press@tech.nology.xyz
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
