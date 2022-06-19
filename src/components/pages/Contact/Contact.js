import React, { useEffect, useState } from "react";
import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import "./contact.css";
import {
  BsLinkedin,
  BsGithub,
  BsGoogle,
  BsFillTelephoneFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    scroll.scrollToTop();
  }, [])

  function submit(e) {
    e.preventDefault();
    if (name.length > 2) {
      emailjs.send(
        "service_thqas18",
        "template_heojggi",
        {
          from_name: name,
          from_email: email,
          from_subject: subject,
          from_message: message,
        },
        "UFm8UhHBZ5FfPMj0h"
      );

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      toast("Votre message a été envoyé avec succès", {
        duration: 5000,
        position: "bottom-right",
        icon: "✅",
      });
    } else {
      setError("Nom est obligatoire");
    }
  }

  function change(e) {
    const name = e.target.name;

    if (name === "name") {
      setName(e.target.value);
    } else if (name === "email") {
      setEmail(e.target.value);
    } else if (name === "subject") {
      setSubject(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  }
  return (
    <>
      <Toaster />
      <Link id="Home" to="/Contact"></Link>
      <div className="gradient ">
        <section>
          <div className="container">
            <h1 className="text-white fw-bold"></h1>
          </div>
        </section>
        <div className="container">
          <div className="row ">
            <h1 className="text-center my-3 fw-bold text-white mt-5">
              Envoyez vos messages
            </h1>
            <div className="col-md-5 my-5">
              <div>
                <div className="">
                  <form onSubmit={submit}>
                    <div className="colon mb-3">
                      <label
                        htmlFor="name"
                        className=" shad4 pe-3  text-white  fw-bold"
                      >
                        Nom complet
                      </label>
                      <input
                        type="text"
                        className="  shad form-control w-100 rounded-5  animate__animated animate__fadeIn"
                        value={name}
                        id="name"
                        name="name"
                        placeholder="Entrez votre Nom complet"
                        onChange={change}
                      />
                      <span className="text-danger">{error}</span>
                    </div>
                    <div className="form-group mb-3">
                      <label
                        htmlFor="email"
                        className=" shad1 pb-2 pe-3 text-white fw-bold"
                      >
                        Adresse e-mail
                      </label>
                      <input
                        type="email"
                        className=" shad1 form-control w-100 rounded-5 animate__animated animate__fadeIn "
                        value={email}
                        id="email"
                        name="email"
                        placeholder="Entre votre Email "
                        onChange={change}
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label
                        htmlFor="subject"
                        className=" shad3 pe-4 text-white fw-bold"
                      >
                        Sujet
                      </label>
                      <input
                        type="text"
                        className=" shad3 form-control w-100 rounded-5 animate__animated animate__fadeIn "
                        value={subject}
                        id="subject"
                        name="subject"
                        placeholder="Le sujet"
                        onChange={change}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label
                        htmlFor="message"
                        className=" shad3 pe-3 text-white fw-bold"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={6}
                        value={message}
                        className=" shad3 form-control w-100 rounded-5 animate__animated animate__fadeIn "
                        placeholder="Votre message"
                        onChange={change}
                      ></textarea>
                    </div>
                    <div className="form-group mb-3">
                      <button className="envoie btn btn-dark rounded-5  ">
                        Envoyez le message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="start pe-5 me-2 ">
                <span className="end1 fw-bold text-danger">C</span>
                <span className="middle1">ontact</span>
                <span className="middle2">
                  <i className="fas fa-code"></i>
                </span>
                <span className="end2">Me</span>
              </h1>
              <img
                src="images/mail.webp"
                alt=""
                className="im1 w-100  rounded-5  "
              />
            </div>
          </div>
        </div>
        <div className="container"></div>
      </div>
      <section data-aos='fade-right' className="bg-danger  suivant4 ">
        <div className="topage7">
          <Link to="/Blog">
            <button className="bg-dark text-white rounded-3 border-0 p-2">
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
