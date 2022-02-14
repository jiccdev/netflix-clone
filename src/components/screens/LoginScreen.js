import { useState } from 'react';

import SignInScreen from './SignInScreen';

import { MdArrowForwardIos } from 'react-icons/md';

import './LoginScreen.css';

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__content-top">
        <img
          className="loginScreen__content-top__netflix-logo"
          src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png"
          alt="Netflix-logo"
        />
        <div>
          {/* <button>Links Links</button> */}
          <button
            onClick={() => setSignIn(true)}
            className="loginScreen__content-top__login"
            href="#"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>

      {signIn ? (
        <SignInScreen />
      ) : (
        <div className="loginScreen__content-center">
          <h1 className="loginScreen__content-center__title">
            Películas y series ilimitadas y mucho más.
          </h1>
          <h2 className="loginScreen__content-center__h2">
            Disfruta donde quieras. Cancela cuando quieras.
          </h2>
          <p className="loginScreen__content-center__p">
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
            reiniciar tu membresía de Netflix.
          </p>

          <div className="loginScreen__input">
            <form className="loginScreen__input__form">
              <input
                type="email"
                placeholder="Email"
                className="loginScreen__getstart__input-email"
              />
              <button
                onClick={() => setSignIn(true)}
                className="loginScreen__getstart"
              >
                Comenzar
                <span>
                  <MdArrowForwardIos />
                </span>
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="loginScreen__content-bottom" />
    </div>
  );
};

export default LoginScreen;
