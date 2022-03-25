import React from "react";
import ContactSection from "./contact-section";
import ContactForm from "./contact-form";
import Header from "../header";

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactForm />
      <ContactSection />
    </div>
  );
};

export default Contact;
