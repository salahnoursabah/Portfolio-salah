import React, { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"
import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsGithub,
  BsGoogle,
  BsFillTelephoneFill,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Footer from "../footer/Footer";
import { GrLocation } from "react-icons/gr";
import "./Portfolio.css";

function Portfolio() {
  useEffect(() => {
    Aos.init({duration:2000});
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Link id="Home" to="/Portfolio"></Link>
      <div className="sec">
        <div className="row1 ">
          <div className="container">
            <div className="row">
              <div className=" col1 col-md-6 pt-5 mt-5">
                <h1>
                  <span>P</span>O<span>RTFOLIO</span>
                </h1>
                <div className="lin">
                  <a
                    href="https://www.linkedin.com/in/salah-noursabah-50b264234/"
                    className="  text-white  "
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    href="https://github.com/salahnoursabah"
                    className="  ps-3 text-white"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="mailto:salahnoursabah5@gmail.com"
                    className="  ps-3 text-white"
                  >
                    <BsGoogle />
                  </a>
                </div>
              </div>
              <div className="col-md-6 pt-5  ">
                <img src="images/web.png" alt="" className="w-100 mb-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 mt-5">
          <h1 className="fw-bold text-danger text-center">MES PROJETS</h1>
          <p className="fw-bold text-derk text-center">
            Voici mes projets que je les fais depuis mon début de formation
          </p>
        </div>
        <div data-aos="fade-right" className="container  bg-light rounded-3  shadow-lg">
          <div className="row pt-5  ">
            <div className="col-md-4">
              <div className=" border-0">
                <div className=" ">
                  <img
                 data-aos="fade-right"
                    src="images/appvilla.png"
                    alt=""
                    className="trello rounded-3"
                  />
                </div>
              </div>
              <div className=" bar bg-danger rounded-3">
                <a
                  href="https://salahnoursabah.github.io/apvilla/"
                  target="_blank"
                  className=" text-decoration-none"
                >
                  <h4 className="fs-5 titre text-center fw-bold text-white     rounded-3  ">
                    Appvilla
                  </h4>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" border-0">
                <div className="">
                  <img
                   data-aos="fade-right"
                    src="images/todo1.png"
                    alt=""
                    className="trello  rounded-3"
                  />
                </div>
              </div>
              <div className=" bar  bg-danger rounded-3  ">
                <a
                  href="https://salahnoursabah.github.io/TO-DO-APP/"
                  target="_blank"
                  className=" text-decoration-none"
                >
                  <h4 className="fs-5 titre text-center fw-bold text-white  rounded-3  ">
                    TO-DO
                  </h4>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" border-0">
                <div className=" ">
                  <img
                   data-aos="fade-right"
                    src="images/green office.png"
                    alt=""
                    className="green  rounded-3"
                  />
                </div>
              </div>
              <div className=" bar  bg-danger rounded-3  ">
                <a
                  href="https://salahnoursabah.github.io/Green-office/"
                  target="_blank"
                  className=" text-decoration-none"
                >
                  <h4 className="fs-5 titre text-center fw-bold text-white  rounded-3  ">
                    Green
                  </h4>
                </a>
              </div>
            </div>
          </div>

          <div className="row   ps-2">
            <div className="col-md-4">
              <div className="border-0">
                <div className=" ">
                  <img
                   data-aos="fade-left"
                    src="images/trello.png"
                    alt=""
                    className="green  rounded-3"
                  />
                </div>
              </div>
              <div className=" bar bg-danger rounded-3  ">
                <a
                  href="https://salahnoursabah.github.io/trello-clone/"
                  target="_blank"
                  className=" text-decoration-none"
                >
                  <h4 className="titre fs-5 text-center fw-bold text-white  rounded-3  ">
                    Trello
                  </h4>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" border-0">
                <div className=" ">
                  <img
                  
                    data-aos="fade-left"
                    src="images/bootcamp.png"
                    alt=""
                    className="green  rounded-3"
                  />
                </div>
              </div>
              <div className=" bar  bg-danger rounded-3  ">
                <a
                  href="https://salahnoursabah.github.io/bootcamp-project/"
                  target="_blank"
                  className=" text-decoration-none"
                >
                  <h4 className="titre fs-5 text-center fw-bold text-white   rounded-3  ">
                    Bootcamp
                  </h4>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border-2 ">
                <div className=" ">
                  <img
                   data-aos="fade-left"
                    src="images/fish and ships.png"
                    alt=""
                    className="green  rounded-3"
                  />
                </div>
              </div>
              <div className=" bar bg-danger rounded-3 ">
                <a
                  href=" https://salahnoursabah.github.io/FISH/"
                  className=" text-decoration-none"
                >
                  <h4 className="fs-5 fish text-center fw-bold text-white    rounded-3  ">
                    Fish
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5 mt-5 mb-5">
        <hr />
      </div>
      <section data-aos='fade-right'className="bg-danger  suivant2 ">
        <div className="topage3 ">
          <Link to="/Blog">
            <button className="btn btn-dark text-white rounded-3 border-0  p-1">
              Suivant <BsFillArrowRightCircleFill className="mb-1" />
            </button>
          </Link>
        </div>
        <div className="topage4">
          <Link to="/About">
            <button className="btn btn-dark text-white rounded-3 border-0 p-1">
              <BsFillArrowLeftCircleFill className="mb-1 me-1" />
              Précedent{" "}
            </button>
          </Link>
        </div>
     
      </section>
    </>
  );
}
export default Portfolio;
