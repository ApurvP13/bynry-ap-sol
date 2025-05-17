import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black  rounded-3xl font-sans text-slate-400 py-6  px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Creator Info */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wider">
            BYNRY Profile Task
          </h2>
          <p className="mt-2 text-sm max-w-xs leading-relaxed">
            Built by Apurv Pandey
          </p>
          <div className="mt-4 pt-6 text-left text-xs text-slate-500">
            © {new Date().getFullYear()} Bynry. All rights reserved.
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">
            Site Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/profiles" className="hover:text-white transition">
                Profiles
              </Link>
            </li>
            <li>
              <Link to="/admin" className="hover:text-white transition">
                Admin Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">
            Connect
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://github.com/apurvp13"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/apurv1306"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Watermark Text at Bottom */}
      <div className="mt-12 uppercase font-extrabold font-sans text-3xl md:text-9xl pt-6 text-center bg-gradient-to-b from-black via-zinc-950 to-blue-700 bg-clip-text text-transparent ">
        Bynry
      </div>
    </footer>
  );
}
