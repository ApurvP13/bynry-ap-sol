import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black font-sans px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-zinc-700 bg-clip-text text-transparent"
      >
        Bynry
      </Link>

      {/* Nav Links */}
      <nav className="space-x-8 text-white font-medium text-lg">
        <Link to="/profiles" className="hover:text-blue-500 transition">
          Profiles
        </Link>
        <Link to="/admin" className="hover:text-blue-500 transition">
          Admin
        </Link>
      </nav>
    </header>
  );
}
