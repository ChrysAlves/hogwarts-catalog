import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/hogwarts-logo.avif';

export const Navbar = ({ navClasses }: { navClasses: string }) => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    const commonClasses = "text-lg font-bold capitalize transition-colors duration-200";
    if (isActive) {
      return `${commonClasses} text-hp-gold`;
    }
    return `${commonClasses} text-white hover:text-hp-gold`;
  };

  return (
    <nav className={navClasses}>
      <div className="logo-container">
        <NavLink to="/">
          <img src={logo} alt="Hogwarts Logo" className="h-[50px] w-auto" />
        </NavLink>
      </div>
      <ul className="list-none flex gap-8 m-0 p-0">
        <li>
          <NavLink to="/" className={getNavLinkClass} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/students" className={getNavLinkClass}>
            Students
          </NavLink>
        </li>
        <li>
          <NavLink to="/spells" className={getNavLinkClass}>
            Spells
          </NavLink>
        </li>
        <li>
          <NavLink to="/houses" className={getNavLinkClass}>
            Houses
          </NavLink>
        </li>
        <li>
          <NavLink to="/staff" className={getNavLinkClass}>
            Staff
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};