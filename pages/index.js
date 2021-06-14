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

      <div className="h-12 bg-purple-800 flex justify-between">
        <a href="#" className="">
          <Image width="96" height="36" src="/static/xyz_nav_logo.svg" />
        </a>
        <nav>
          <Link href="/about">About</Link>

          <Link href="/blog">Blog</Link>
          <a>Discord</a>
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

          <div className="bg-purple-900 ">
            <h3 className="text-5xl font-extrabold underline text-white text-bold flex justify-center items-center p-8">
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
            <h3 className="text-5xl font-extrabold text-white flex justify-center items-center bg-gray-800 p-8 w-full">LATEST CLIENTS</h3>
            <div className="bg-fractal-pattern bg-no-repeat bg-cover w-full">
              <div className="h-96">
                <a href="#" className="relative w-6 h-auto">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    sizes="100%"
                    src="/static/client_koI.svg"
                    
                  />
                </a>

                <a href="#" className="relative w-6 h-auto">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    sizes="100%"
                    src="/static/client_key.svg"
                    
                  />
                </a>
              </div>
              <a className="btn x-btn-became"></a>
            </div>
          </div>
        </div>
      </main>

      {/* <footer>
        <div>
          <Image
            src="/xyz_nav_logo.svg"
            alt=".xyz logo"
            width="218"
            height="83"
          />
          <div>
            <a href="">Discord</a>
            <a href="">Email</a>
            <a href="">Telegram</a>
          </div>
        </div>

        <br />

        <div class="info-links">
          <ul class="nav x-footer-contact about-links">
            <li class="nav-item">
              <a href="#" class="nav-link">
                Company
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Team
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Mission
              </a>
            </li>
          </ul>

          <div class="footer-emails">
            <ul class="nav flex-column x-footer-contact">
              <li class="nav-item">
                <h3 class="contact-title nav-link" style="color: #3acebc">
                  Contact Us
                </h3>
              </li>

              <li class="nav-item email">
                <a href="mailto:hello@tech.nology.xyz" class="nav-link">
                  hello@tech.nology.xyz
                </a>
              </li>

              <li class="nav-item email">
                <a href="mailto:solutions@tech.nology.xyz" class="nav-link">
                  solutions@tech.nology.xyz
                </a>
              </li>

              <li class="nav-item email">
                <a href="mailto:developer@tech.nology.xyz" class="nav-link">
                  developer@tech.nology.xyz
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-emails email">
            <ul class="nav flex-column x-footer-contact">
              <li class="nav-item">
                <a href="mailto:defi@tech.nology.xyz" class="nav-link">
                  defi@tech.nology.xyz
                </a>
              </li>
              <li class="nav-item">
                <a href="mailto:jobs@tech.nology.xyz" class="nav-link">
                  jobs@tech.nology.xyz
                </a>
              </li>
              <li class="nav-item">
                <a href="mailto:press@tech.nology.xyz" class="nav-link">
                  press@tech.nology.xyz
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
