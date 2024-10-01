// import React from "react";
import MainContent from "../MainContent";
import Navbar from "../Navbar";
import ContactUs from "@/ContactUs";
import Footer from "@/Footer";

function Homepage() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <div id="Team-Gether-/#/contact">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
