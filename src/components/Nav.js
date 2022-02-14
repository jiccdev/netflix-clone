import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => window.removeEventListener('scroll', transitionNavbar);
  }, []);

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <div>
          <img
            className="nav__logo"
            src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png"
            alt="Netflix-logo"
          />
        </div>

        <div>
          <Link to="youraccount">Your account</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
