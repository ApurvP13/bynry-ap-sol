import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mx-2 rounded-4xl bg-gradient-to-b from-black to-blue-700 text-white px-6 py-10 overflow-hidden">
      {/* Watermark */}
      <div
        className="absolute inset-0 flex justify-center items-center pointer-events-none select-none"
        style={{
          opacity: 0.05,
          fontSize: "10rem",
          fontWeight: "900",
          fontFamily: "sans-serif",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        Bynry
      </div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Nav */}
        <nav className="space-x-8 font-semibold text-lg">
          <Link to="/profiles" className="hover:text-blue-300 transition">
            Profiles
          </Link>
          <Link to="/admin" className="hover:text-blue-300 transition">
            Admin
          </Link>
        </nav>

        {/* Center Text */}
        <div className="text-center md:text-left space-y-1">
          <p>Created by Apurv Pandey</p>
          <p>© All rights reserved</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/apurvp13"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/apurv1306"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
