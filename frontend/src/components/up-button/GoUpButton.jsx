'use client'

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./goUpButton.css";

const GoUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowButton(true); // show the button
      } else {
        setShowButton(false); // hide the button
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

  return (
    <a
      onClick={scrollToTop}
      className={`go-up-btn ${showButton ? "show" : ""}`}
    >
      <FaArrowUp className="arrow" />
    </a>
  );
};

export default GoUpButton;
