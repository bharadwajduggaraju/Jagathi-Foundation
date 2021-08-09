import React from "react";
import { Link } from "react-router-dom";
import { NavLinksType } from '../types/NavFooterTypes';

interface Props {
  navLinks: NavLinksType
}

const Navbar: React.FC<Props> = ({navLinks}) => {
  return (
    <nav className="flex justify-between items-center py-7 px-8">
      <Link to="/">
        <div className="flex items-center cursor-pointer">
          <img src="logo.svg" alt="Logo" className="w-11 h-11" />
          <h1 className="text-3xl px-3">Jagathi Foundation</h1>
        </div>
      </Link>
      <div className="item-center hidden lg:flex">
        {navLinks.map((link, key) => {
          return <Link to={`/${link === "Home" ? '' : link.toLowerCase()}`} key={key} className="px-5 text-lg cursor-pointer hover:underline">{link}</Link>
        })}
      </div>
      <div className="block lg:hidden">
        <img
          src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
          className="w-10"
          alt="Hamburgur"
        />
      </div>
    </nav>
  );
};

export default Navbar;
