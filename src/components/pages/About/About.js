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
import {
  BsLinkedin,
  BsGithub,
  BsGoogle,
  BsFillTelephoneFill,
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    Aos.init({duration:2000});
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Link id="Home" to="/About"></Link>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img 
              data-aos="fade-right"
                src="images/About mee.png"
                alt=""
                className="Aboutimg  w-100 rounded-3"
              />
            </div>
            <div className="col-md-6 pt-5 mt-5">
              <h1 className="fw-bold">Pourquoi m'embauchez-vous ?</h1>
              <p className="w-100 mt-5">
               A la fin de ma derniere année au lycée j'ai décidé d'integrer le domaine de developpement
               alors je l'ai étudier à <b>3W ACADEMY</b> où j'ai apris plusieurs thechnologie , et maintenant
              Je suis un developpeur junior en full-stack , je maitraise les technologies suivantes : 
              <strong> (HTML , CSS , BOOTSTRAP , JAVASCRIPT et REACT)</strong> . 
               Et d'aprés les avis des proches , Je suis responsable , courageux , j'aime bien travailer en equipe .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5 pt-4">
            <div className="col-md-8">
              <h1 className="fw-bold">
                Faites savoir mes compétences d'expert
              </h1>
              <p>
         D'aprés mes études je suis capable de maitriser les technologie que j'ai apris pendant la formation 
         et voilà le pourcentage de chaque technologie : 
              </p>
              <strong className="fs-5"> HTML</strong>
              <div className="progress bg-light shadow-lg">
                <div
                data-aos='fade-right'
                  className="progress-bar  bg-danger"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <strong className="fs-5">CSS</strong>
              <div className="progress bg-light shadow-lg">
                <div
                data-aos='fade-right'
                  className="progress-bar1 bg-danger"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <strong className="fs-5">REACT</strong>
              <div className="progress bg-light shadow-lg">
                <div
                data-aos='fade-right'
                  className="progress-bar2  bg-danger"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <strong className="fs-5">JAVASCRIPT</strong>
              <div className="progress bg-light shadow-lg">
                <div
                data-aos='fade-right'
                  className="progress-bar3  bg-danger"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <strong className="fs-5">BOOTSTRAP</strong>
              <div className="progress bg-light shadow-lg">
                <div
                data-aos='fade-right'
                  className="progress-bar4  bg-danger"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-md-4">
              <img data-aos='fade-left'src="images/img8.webp" alt="" className="w-100  img8" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row pt-5 mt-5 ">
            <div   data-aos="fade-right" className=" text-white bg-danger lorem1 rounded-3      col-md-5">
              <p className="mt-3">
               j'ai travaillé sur 3 call center où j'avais des belles expériences
              et c'étaient à <strong>(SKM Marketing , Right Call Center Maroc et kontactel(à Tanger))</strong>
              </p>
            </div>
            <div className="pt-5 ps-5  col-md-2">
              <h1 className="h11 bg-danger text-center text-white animate__animated animate__bounceInDown ">
                1
              </h1>
            </div>
            <div className="col-md-5">
              <h4 className="fw-bold text-center pt-5">TELECONSEILLER</h4>
              <h6 className="fw-bold text-danger text-center">2021-2022</h6>
            </div>
          </div>
          <div className="row pt-5 mt-5">
            <div className="col-md-5">
              <h4 className="fw-bold text-center pt-5">CAMERAMAN</h4>
              <h6 className="fw-bold text-danger text-center">2020-2022</h6>
            </div>
            <div className="pt-5 ps-5  col-md-2">
              <h1 className="h11 bg-danger text-center text-white   animate__animated animate__bounceInDown">
                2
              </h1>
            </div>
            <div  data-aos="fade-left" className="  text-white bg-danger  lorem1 rounded-3  col-md-5">
              <p  className="mt-3">
                J'ai travaillé sur plusieurs projets{" "}
                <strong>(courts métrages,videos clips,des interview...)</strong>{" "}
                et j'avais une bonne expérience sur ce domaine que je l'aime
                beaucoup
              </p>
            </div>
          </div>
          <div className="row pt-5 mt-5">
            <div  data-aos="fade-right" className=" card text-white bg-danger  lorem1 rounded-3    col-md-5">
              <p  className="mt-3">
               Ce domaine je l'ai intégrer en 2019 et c'était ma premiere experience professionel ou j'ai apris plusieurs choses.
                           <strong>(Ma Meilleure Exprience)</strong>
              </p>
            </div>
            <div className="pt-5 ps-5  col-md-2">
              <h1 className="h11 bg-danger text-center text-white  animate__animated animate__bounceInDown">
                3
              </h1>
            </div>
            <div className="col-md-5">
              <h4 className="fw-bold text-center pt-5">PHOTOGRAPHE</h4>
              <h6 className="fw-bold text-danger text-center">2019-2022</h6>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-right" className="bg-danger suivant1 ">
        <div>
          <Link to="/Portfolio">
            <button className="topage1 btn btn-dark text-white rounded-3 border-0 p-1">
              Suivant <BsFillArrowRightCircleFill className="mb-1" />
            </button>
          </Link>
        </div>
        <div className="topage2">
          <Link to="/Home">
            {" "}
            <button className=" btn btn-dark text-white rounded-3 border-0 p-1 ">
              <BsFillArrowLeftCircleFill className="mb-1 me-1" />
              Précedent{" "}
            </button>
          </Link>
        </div>
       
   
      </section>
      <div className="container pt-5 mt-5 mb-3"></div>
    </>
  );
}

export default About;
