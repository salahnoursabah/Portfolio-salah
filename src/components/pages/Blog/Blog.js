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
import "./Blog.css";
import {
  BsLinkedin,
  BsGithub,
  BsGoogle,
  BsFillTelephoneFill,
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import "animate.css";
function Blog() {

  useEffect(() => {
    Aos.init({duration:2000});
    scroll.scrollToTop();
  }, []);
  return (
    <>
      <Link id="Home" to="/Blog"></Link>
      <div className="div1 container">
        <div className="row pt-5">
          <div className="">
            <img src="images/blog.png" alt="" />
          </div>
          <div className="col-md-5 pt-5">
            <img
            data-aos='fade-right'
              src="images/html.png"
              alt=""
              className=" w-50 imagehtml"
            />
          </div>
          <div className="col-md-2 pt-5 mt-5">
         
          </div>
        
            <div className="html col-md-5 mt- py-2 ">
              <img
                data-aos='fade-left'
                src="images/ecran.png"
                alt=""
                className="ECRAN"
              />
              <div data-aos='fade-left' className="HTML   py-3 px-4">
                <strong className="  str1  pt-5">
                  L'HTML est un langage informatique utilisé sur l'internet. Ce
                  langage est utilisé pour créer des pages web. L'acronyme
                  signifie HyperText Markup Language, ce qui signifie en
                  français "langage de balisage d'hypertexte". Cette
                  signification porte bien son nom puisqu'effectivement ce
                  langage permet de réaliser de l'hypertexte à base d'une
                  structure de balisage.
                </strong>
              </div>
            </div>
        
        </div>
        <div className="row pt-5">
          <div className="col-md-5 pt-5 mt-5">
            <img
             data-aos='fade-right'
              src="images/css.png"
              alt=""
              className=" w-50 crclcss"
            />
          </div>

          <div className="col-md-2 ">
          
           
          </div>

         
            <div className="col-md-5  mt-5 py-4 ">
              <img
               data-aos='fade-left'
                src="images/ecran.png"
                alt=""
                className="ECRAN "
              />
              <div data-aos='fade-left' className="css py-3 px-4">
                <strong>
                  Le CSS pour Cascading Style Sheets, est un langage
                  informatique utilisé sur Internet pour la mise en forme de
                  fichiers et de pages HTML. On le traduit en français par
                  feuilles de style en cascade.
                </strong>
              </div>
            </div>
       
        </div>
        <div className="row pt-5">
          <div className="col-md-5">
            <img
             data-aos='fade-right'
              src="images/bootstrap.png"
              alt=""
              className=" w-50 crclboot"
            />
          </div>

          <div className="col-md-2 pt-5 mt-5">
       
          </div>
         
            <div className="col-md-5   ">
              <img
               data-aos='fade-left'
                src="images/ecran.png"
                alt=""
                className="ECRAN "
              />
              <div data-aos='fade-left' className="boot  ">
                <strong className="w-25">
                  Bootstrap est un framework développé par l'équipe du réseau
                  social Twitter. Proposé en open source (sous licence MIT), ce
                  framework utilisant les langages HTML, CSS et JavaScript
                  fournit aux développeurs des outils pour créer un site
                  facilement. Ce framework est pensé pour développer des sites
                  avec un design responsive, qui s'adapte à tout type d'écran,
                  et en priorité pour les smartphones. Il fournit des outils
                  avec des styles déjà en place pour des typographies, des
                  boutons, des interfaces de navigation et bien d'autres encore.
                
                </strong>
              </div>
            </div>
         
        </div>
        <div className="row pt-5">
          <div className="col-md-5 pt-5 mt-5">
            <img
             data-aos='fade-right'
              src="images/java.png"
              alt=""
              className="w-50  crcljava"
            />
          </div>
          <div className="col-md-2 pt-5 mt-5">
         
          </div>

         
            <div className="col-md-5  mt-4 py-4 ">
              <img
               data-aos='fade-left'
                src="images/ecran.png"
                alt=""
                className="ECRAN "
              />
              <div data-aos='fade-left' className="px-2 java  ">
                <strong>
                  JavaScript désigne un langage de développement informatique,
                  et plus précisément un langage de script orienté objet. On le
                  retrouve principalement dans les pages Internet. Il permet,
                  entre autres, d'introduire sur une page web ou HTML des
                  petites animations ou des effets.
                </strong>
              </div>
            </div>
        
        </div>
        <div className="row mb-5 pb-5 pt-5">
          <div className="col-md-5 pt-5 mt-5">
            <img
             data-aos='fade-right'
              src="images/react.png"
              alt=""
              className="w-50  crclreact"
            />
          </div>
          <div className="col-md-2 pt-5 mt-5">
        
          </div>
        
            <div className="col-md-5  mt-4 py-4">
              <img
               data-aos='fade-left'
                src="images/ecran.png"
                alt=""
                className="ECRAN"
              />
              <div data-aos='fade-left' className="px-2 react  ">
                <strong>
                  React (également connu sous le nom de React.js ou ReactJS) est
                  une bibliothèque JavaScript frontale à code source ouvert
                  permettant de créer des interfaces utilisateur ou des
                  composants d'interface utilisateur. Elle est maintenue par
                  Facebook et une communauté de développeurs individuels et
                  d'entreprises.
                </strong>
              </div>
            </div>
       
        </div>
      </div>
      <section  data-aos='fade-right' className="bg-danger suivant3 ">
      <div className="topage5 ">
        <Link to="/Contact">
          <button className="btn btn-dark text-white rounded-3 border-0  p-1">
            Suivant <BsFillArrowRightCircleFill className="mb-1" />
          </button>
        </Link>
      </div>
        <div className="topage6">
          <Link to="/Portfolio">
            <button className="btn btn-dark text-white rounded-3 border-0 p-1">
              <BsFillArrowLeftCircleFill className="mb-1 me-1" />
              Précedent{" "}
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
export default Blog;
