import React,{useEffect} from "react";
import "./Footer.css";
import Aos from "aos"
import "aos/dist/aos.css"
import {
  BsLinkedin,
  BsGithub,
  BsGoogle,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
function Footer() {
  useEffect(() => {
    Aos.init({duration:2000});
   
  }, []);
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <footer data-aos="fade-right" className="pb-4 mb-4">
        <div className="row">
          <div className="col-md-4">
            <img src="images/logo.png" alt="" className="pt-5" />
            <a
              href="https://www.linkedin.com/in/salah-noursabah-50b264234/"
              className=" ic text-danger "
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/salahnoursabah"
              className=" ic ps-3 text-danger"
            >
              <BsGithub />
            </a>
            <a
              href="mailto:salahnoursabah5@gmail.com"
              className=" ic ps-3 text-danger"
            >
              <BsGoogle />
            </a>
          </div>

          <div className="col-md-4 pt-5 mt-1 Linkss ">
            <h4 className=" fw-bold ps-4 ms-5 text-danger">LINKS</h4>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="Home" className="nav-a active_link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="About" className="nav-a">
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Portfolio" className="nav-a">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Blog" className="nav-a">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Contact" className="nav-a">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h4 className="fw-bold text-danger">Contact Us</h4>
            <BsFillTelephoneFill className="text-danger" />{" "}
            <a
              href="tel:06 19 16 65 98"
              className="links text-decoration-none d-block "
            >
              +212 19 16 65 98
            </a>
            <BsGoogle className="text-danger" />
            <a
              href="mailto:salahnoursabah5@gmail.com"
              className=" links text-decoration-none d-block"
            >
              salahnoursabah5@gmail
            </a>
            <GrLocation className="text-danger" />{" "}
            <i className="links d-block">
              41 , rue de dax , Roches Noires , Casablanca , Maroc
            </i>
          </div>
        </div>

        <div className="row" style={{ height: "90px" }}></div>
        <p style={{ float :"bottom" }} className="text-dark  text-center pt-4">
          © 2022 , Salah Eddine Noursabah{" "}
        </p>
      </footer>
    </div>
  );
}
export default Footer;
