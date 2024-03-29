import React, { useState, useEffect } from "react";
import HeroSection from "../screens/Hero/Index";
import Layout from "../components/Layout/Index";
import ServicesSection from "../screens/Services/Index";
import Logo from "../images/logo.png";
import { Toaster } from "react-hot-toast";
import SkillsSection from "../screens/Skills";
import ProjectsSection from "../screens/Projects";
import Clients from "../screens/Clients";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import "../styles/index.scss";
import Aos from "aos";

const IndexPage = () => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  return (
    <>
      <Layout>
        <HeroSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <Clients />
      </Layout>
      <Toaster />
    </>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      <title>Amit Pallauri | JS Developer </title>;
      <link rel="icon" type="image/png" href={Logo} sizes="32x32" />
      <meta property="og:locale" content="en_US" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta property="og:image" itemProp="image" content={"https://res.cloudinary.com/dk9ltkcb7/image/upload/v1679529719/scrren_3_hyfdg0.png"} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content="Amit Pallauri" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={"https://amitpallauri.com/"} />
      <meta property="og:title" content="Amit Pallauri | JS Developer" />
      <meta name="description" content="Turning complex problems into elegant solutions. Explore my portfolio and let's build something remarkable" />
      <meta name="keywords" content="portfolio, amit pallauri, full stack developer, react, node, mongo, javascript" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    </>
  );
};
