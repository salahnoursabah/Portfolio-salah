import React,{useEffect} from "react";
import Aos from "aos"
import "aos/dist/aos.css"
import { Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "./Home.css";
import About from "../pages/About/About";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsGithub,
  BsGoogle,
  BsFillTelephoneFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import "animate.css";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";


function Home() {


    useEffect(() => {
      Aos.init({duration:2000});
      scroll.scrollToTop();
    }, []);

    return (
      <>
    
        <Link id="Home" to="/Home"></Link>
        <div className="container ">
          <section className="sec1">
            <div className="row  pt-2 ">
              <div className="col-md-6 pt-5 mt-5">
                <h4 className=" text1 pe-4 fs-3">I'm Salah Eddine Noursabah</h4>
                <div className="content container">
                  <h1>Web developer</h1>
                  <h1>Web developer</h1>
                </div>{" "}
                <br /> <br />
                <p className="fs-4 pe-5">I'm a Front-End developer web</p>
                <a
                  href=" https://salahnoursabah.github.io/mon-cv-salaheddine/"
                  target="_blank"
                >
                  <button className="btn btn-danger fw-bold rounded-2 mt-3">
                 Voir Le CV
                  </button>
                </a>
              </div>
              <div className="col-md-6">
                <img
                  src="Images/Image3.png"
                  alt=""
                  className=" img1 w-100 rounded-5 animate__animated animate__backInRight"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="container pt-5 mt-5 mb-3"></div>
        <section data-aos="fade-right" className="bg-danger   suivant ">
          <div>
            <Link to="/About">
              <button className=" topage bg-dark mt-3 text-white rounded-3 border-0 p-2">
                Suivant <BsFillArrowRightCircleFill className="mb-1" />
              </button>
            </Link>
          </div>
          {/* <a href="#Home" className="mb-5">
            <button className="bg-dark rounded-3 border-0 p-2 text-danger">
              Back To Top
            </button>
          </a> */}
        </section>
      </>
    );
  }


export default Home;
