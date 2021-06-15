import React from 'react'


const Footer= ()=>{
    return (
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
    )
}

export default Footer