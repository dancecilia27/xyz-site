import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./componets/navbar";
import Footer from "./componets/footer";
export default function Home() {
  return (
    <div className="bg-purple-900">
      <Navbar />
      <Head>
        <title>.XYZ - Web3.0 & dApp development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container ">
        <div>
          <div className="w-screen h-screen bg-hero bg-no-repeat bg-cover flex items-center">
            <div>
              <h2 className="text-5xl font-extabold text-left text-white p-8 sm:bg-transparent lg:bg-gray-900 lg:bg-opacity-70 ">
                We build applications for Web 3.0
              </h2>
              <p className="font-medium text-xl text-left bg-gray-900 bg-opacity-70 text-white p-8">
                Peer to peer application development doesn’t have to be
                complicated. Let our team of distributed systems experts build
                your vision.
              </p>
            </div>
          </div>

          <div className="bg-purple-900 w-screen">
            <h3 className="lg:text-5xl sm:text-2xl font-extrabold underline text-white text-bold flex  w-full justify-center items-center p-8">
              WHAT DO YOU NEED?
            </h3>
            <div className="sm:flex-col lg:flex lg:flex-row items-center justify-around  p-8">
              <div className="lg:flex-col items-center justify-center w-full">
                <div className="flex justify-center">
                <Image src="/static/X.png" width="160" height="160" />
                </div>
                
                <p className="text-white text-bold text-lg text-center">
                  Reliable Blockchain Developers
                </p>
              </div>
              <div className="flex-col items-center justify-center w-full">
              <div className="flex justify-center">
                <Image src="/static/Y.png" width="160" height="160" />
              </div>
                <p className="text-white text-bold text-lg text-center">
                  dApp Product Development
                </p>
              </div>
              <div className="flex-col items-center justify-center w-full ">
                <div className="flex justify-center">
                  <Image src="/static/Z.png" width="160" height="160" />
                </div>
                
                <p className="text-white text-bold text-lg text-center">DeFi Advisory </p>
              </div>
            </div>
          </div>

          <div className="w-screen">
            <h3 className="lg:text-5xl sm:text-2xl font-extrabold text-white flex justify-center items-center bg-gray-800 p-8 w-full">
              LATEST CLIENTS
            </h3>

            <div className="bg-fractal-pattern bg-no-repeat bg-cover bg-center flex-col justify-center items-center ">
              <div className="w-full ">

                <a href="#" className=" w-6 h-auto m-auto ">
                  <Image
                    width="540"
                    height="auto"
                    src="/static/client_koI.svg"
                   
                  />
                </a>
              </div>

              <a className="relative">
                <Image width="540" height="auto" src="/static/btn-become.png" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
