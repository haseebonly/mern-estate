import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-weap">
            <span className="text-slate-500">Coder</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form
          action=""
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="text-slate-700 sm:inline hover:underline hidden cursor-pointer">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="text-slate-700 sm:inline hover:underline hidden cursor-pointer">
              About
            </li>
          </Link>
          <Link to={"/signin"}>
            {" "}
            <li className="text-slate-700  cursor-pointer">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
