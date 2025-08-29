import React, { useState } from 'react'
import './NavBar.css'
// import logopic from '../Pics/Miraj Full Logo (2).svg'
import logopic from '../Pics/Group 1000008466.svg'
import { HashLink } from "react-router-hash-link";    

function NavBar() {

  const [activeStatus, setactiveStatus] = useState("home");
  const [toggle, settoggle] = useState(true);
  const [open, setopen] = useState(true);

  return (
    <div>
      <div className='container-fluid d-lg-block d-none'>
        <nav class="navbar navbar-div  navbar-expand-lg navbar-light">

          <div className="container-fluid">
            <div className="col-5 navbar-div2 ">

              <ul class="navbar-nav">
                <li class="nav-item">
                  <HashLink
                    class="nav-link navbar-text1 active"
                    to="#home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={600}
                  >
                    Home
                  </HashLink>
                </li>
                <li class="nav-item">
                  <HashLink
                    class="nav-link  navbar-text1 ml-0 ml-lg-3"
                    to="#about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={600}
                  >
                    About  Us
                  </HashLink>
                  
                </li>
              </ul>

            </div>

            <div className="col-2  navbar-img">
              <a class="navbar-brand" href="#">
                <img
                  // className="navbar-logo110"
                  src={logopic}
                  alt=""
                />
              </a>
            </div>

            <div className="col-5 navbar-div3">

              <ul class="navbar-nav ">
                <li class="nav-item ">
                  <HashLink
                    class="nav-link  navbar-text1"
                    to="#gallery"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={600}
                  >
                    Gallery
                  </HashLink>
                 
                </li>
                <li class="nav-item">
                  <HashLink
                    class="nav-link  navbar-text1 ml-0 ml-lg-3"
                    to="#contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={600}
                  >
                    Contact Us
                  </HashLink>
                  
                </li>
              </ul>

            </div>
          </div>

        </nav>
      </div>














      <div>

        <nav class="navbar mobile-navbar-div1 d-flex d-lg-none  ">
          <a
            class="navbar-brand"
            href="#"
          >
            <img src={logopic} className="ml-2 mt-1 " />
          </a>
          <button
            class="navbar-toggler mobile-nav-toogler"
            type="button"
            // data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => settoggle(!toggle)}
          >
            <svg
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H26.0344"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M2.06592 11.3569H21.398"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M2.06592 20.7959H15.1281"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </button>





          <div
            class={`${toggle
              ? "navbar-collapse mobile-navbar-div2"
              : "navbar-collapse mobile-navbar-div2 show"
              } `}
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mx-auto">
              <li
                className={`${activeStatus === "home"
                  ? "nav-item mobile-nav-item active home1"
                  : "nav-item mobile-nav-item home1"
                  }`}
              >
                <HashLink
                  class="nav-link"
                  to="#home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                   onClick={() => {
                    settoggle(!toggle);
                  }}
                >
                  Home
                </HashLink>
                
              </li>
              <li
                className={`${activeStatus === "about"
                  ? "nav-item mobile-nav-item active home1"
                  : "nav-item mobile-nav-item home1"
                  }`}
              >
                <HashLink
                  class="nav-link"
                  to="#about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                  onClick={() => {
                    settoggle(!toggle);
                  }}
                >
                  About Us
                </HashLink>
              </li>


              <li
                className={`${activeStatus === "career"
                  ? "nav-item mobile-nav-item active home1"
                  : "nav-item mobile-nav-item home1"
                  }`}
              >
                <HashLink
                  class="nav-link"
                  to="#gallery"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                  onClick={() => {
                    settoggle(!toggle);
                  }}
                >
                  Gallery
                </HashLink>
              </li>

              <li
                className={`${activeStatus === "contact"
                  ? "nav-item mobile-nav-item active home1"
                  : "nav-item mobile-nav-item home1"
                  }`}
              >
                <HashLink
                  class="nav-link"
                  to="#contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                  onClick={() => {
                    settoggle(!toggle);
                  }}
                >
                  Contact Us
                </HashLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>


    </div>
  )
}

export default NavBar
