import React from "react";
import Features from "./feature-section-2by2";
import HeroSection from "./hero-section";
import Stats from "./stats";
import LogoCloud from "./logo-cloud";
import Testimonials from "./testimonials";
import ContactForm from "../contact/contact-form";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <Stats />
      <Testimonials />
      <LogoCloud />
    </div>
  );
};

export default Home;
