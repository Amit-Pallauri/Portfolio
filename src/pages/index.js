import React, { useState, useEffect } from "react";
import HeroSection from "../screens/Hero/Index";
import Layout from "../components/Layout/Index";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServicesSection from "../screens/Services/Index";
import Logo from "../images/logo.png";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      <title>Amit Pallauri | Portfolio</title>;
      <meta name="description" content={"Portfolio of the Amit Pallauri"} />
      <link rel="icon" type="image/png" href={Logo} sizes="32x32" />
    </>
  );
};
