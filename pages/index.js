import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-purple-900">
      <Head>
        <title>.XYZ - Web3.0 & dApp development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" bg-purple-800 flex justify-between items-center w-screen p-8">
        <a href="#" className="">
          <Image width="96" height="36" src="/static/xyz_nav_logo.svg" />
        </a>
        <nav className="flex space-x-8">
          <div className="px-4 font-bold text-white text-4xl">
            <Link href="/about">About</Link>
          </div>

          <div className="px-4 font-bold text-white text-4xl">
            <Link href="/blog">Blog</Link>
          </div>

          <a className="px-4 font-bold text-white text-4xl">Discord</a>
        </nav>
      </div>

      <main className="container ">
        <div>
          <div className="w-screen h-screen bg-hero bg-no-repeat bg-cover flex items-center">
            <div>
              <h2 className="text-5xl font-extabold text-left bg-gray-900 bg-opacity-70 text-white">
                We build applications for Web 3.0
              </h2>
              <p className="font-medium text-xl text-left bg-gray-900 bg-opacity-70 text-white">
                Peer to peer application development doesn’t have to be
                complicated. Let our team of distributed systems experts build
                your vision.
              </p>
            </div>
          </div>

          <div className="bg-purple-900 w-screen">
            <h3 className="text-5xl font-extrabold underline text-white text-bold flex  w-full justify-center items-center p-8">
              WHAT DO YOU NEED?
            </h3>
            <div className="container flex justify-around p p-8">
              <div>
                <Image src="/static/X.png" width="160" height="160" />
                <p>Reliable Blockchain Developers</p>
              </div>
              <div>
                <Image src="/static/Y.png" width="160" height="160" />
                <p>dApp Product Development</p>
              </div>
              <div>
                <Image src="/static/Z.png" width="160" height="160" />
                <p>DeFi Advisory </p>
              </div>
            </div>
          </div>

          <div className="w-screen">
            <h3 className="text-5xl font-extrabold text-white flex justify-center items-center bg-gray-800 p-8 w-full">
              LATEST CLIENTS
            </h3>

            <div className="bg-fractal-pattern bg-no-repeat bg-cover bg-center w-full flex-col justify-center ">
              <div className=" w-full">
                <a href="#" className="relative w-6 h-auto">
                  <Image
                    width="640"
                    height="auto"
                    src="/static/client_koI.svg"
                  />
                </a>
              </div>

              <a className="relative">
                <Image width="640" height="auto" src="/static/btn-become.png" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div>
          <div className="flex">
            <div className="p-6">
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

        <div className="flex items-end p-6">
          <ul className="flex-col">
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
            <ul className="nav flex-column x-footer-contact">
              <li className=" text-lg p-4 text-left">
                <h3 className="text-green-400 font-extrabold">Contact Us:</h3>
              </li>

              <li className="text-white text-lg p-4 text-left">
                <a href="mailto:hello@tech.nology.xyz" className="nav-link">
                  hello@tech.nology.xyz
                </a>
              </li>

              <li className="text-white text-lg p-4 text-left">
                <a href="mailto:solutions@tech.nology.xyz" className="nav-link">
                  solutions@tech.nology.xyz
                </a>
              </li>

              <li className="text-white text-lg p-4 text-left">
                <a href="mailto:developer@tech.nology.xyz" className="nav-link">
                  developer@tech.nology.xyz
                </a>
              </li>
            </ul>
          </div>
          <div className="flex">
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
    </div>
  );
}
