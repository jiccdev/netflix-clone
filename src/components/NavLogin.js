import React from 'react';

import './NavLogin.css';

const NavLogin = () => {
  return (
    <nav className="nav">
      <img
        className="nav__logo"
        src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png"
        alt="Netflix Logo"
      ></img>
      <div className="nav__navbar-nav">
        <a href="h" className="nav-link">
          Idioma
        </a>

        <a href="h" className="nav-link">
          Iniciar Sesion
        </a>
      </div>
    </nav>
  );
};

export default NavLogin;
