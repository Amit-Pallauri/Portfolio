import React, { useEffect, useState } from "react";
import "./style.scss";
import DoubleArrowIcon from "../../images/double-arrow.png";
import HambarIcon from "../../images/hambar.png";
import Logo from "../../images/logo.png";
import { navigate } from "gatsby";
import Offcanvas from "react-bootstrap/Offcanvas";
import loadable from "@loadable/component";
import { showToast } from "../../utils/showToast";
const Icofont = loadable(() => import("react-icofont"));

const Header = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const header = document.querySelector(".header-container");
      window.addEventListener("scroll", function () {
        if (window.pageYOffset >= 5) {
          header.classList.add("header-fixed");
          let navbarheight = header.offsetHeight;
          document.body.style.paddingTop = navbarheight + "px";
        } else {
          header.classList.remove("header-fixed");
          document.body.style.paddingTop = "0";
        }
      });
    }
  }, []);

  const slideToSection = (section) => navigate(section);
  const handleToggle = () => setShow(!show);

  return (
    <>
      <section className={`header-container`}>
        <div className="container custom-container">
          <div className="row">
            <div className="col-2">
              <div className="logo-container">
                <img src={Logo} alt="" onClick={() => slideToSection("/")} />
              </div>
            </div>
            <div className="col-7 mob-hide">
              <ul className="items">
                <li onClick={() => slideToSection("/")}>Home</li>
                <li onClick={() => slideToSection(`/#services`)}>Service</li>
                <li onClick={() => showToast("Coming soon . . .")}>Blogs</li>
                <li onClick={() => showToast("Coming soon . . .")}>Projects</li>
                <li onClick={() => showToast("Coming soon . . .")}>Contact</li>
              </ul>
            </div>
            <div className="col-3 mob-hide">
              <div className="btn-container">
                <a className="hire-me-btn link-tag" href="https://www.linkedin.com/in/amit-pallauri-18146a163/" target={"_blank"}>
                  <p>Hire me</p>
                  <img src={DoubleArrowIcon} alt="" />
                </a>
              </div>
            </div>
            <div className="col-9 hambar-icon">
              <img src={HambarIcon} alt="" onClick={handleToggle} />
            </div>
          </div>
        </div>

        <Offcanvas show={show} onHide={handleToggle} placement="end" className="canvas-container">
          <Offcanvas.Header className="canvas-header" closeButton>
            {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body className="canvas-body">
            <ul className="items" onClick={handleToggle}>
              <li onClick={() => slideToSection("/")}>HOME</li>
              <li onClick={() => slideToSection(`/#services`)}>SERVICE</li>
              <li onClick={() => showToast("Coming soon . . .")}>BLOGS</li>
              <li onClick={() => showToast("Coming soon . . .")}>PROJECTS</li>
              <li onClick={() => showToast("Coming soon . . .")}>CONTACT</li>
            </ul>
            <div className="socials">
              <div className="round-icon">
                <a className="link-tag" href="https://www.linkedin.com/in/amit-pallauri-18146a163/" target={"_blank"}>
                  <Icofont icon="icofont-linkedin" className="icon" />
                </a>
              </div>
              <div className="round-icon no-drop">
                <Icofont icon="icofont-twitter" className="icon" />
              </div>
              <div className="round-icon no-drop">
                <Icofont icon="icofont-youtube" className="icon" />
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </section>
    </>
  );
};

export default Header;
