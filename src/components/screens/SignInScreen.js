import { useRef } from 'react';

import './SignInScreen.css';

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {};

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="SignInScreen">
      <div className="SignInScreen__contents">
        <h2>Iniciar Sesión</h2>
        <form onSubmit="" className="SignInScreen__contents__form">
          <div className="SignInScreen__contents__form__input">
            <input
              ref={emailRef}
              type="email"
              placeholder="Email o Número de Teléfono "
            />
          </div>
          <div className="SignInScreen__contents__form__input">
            <input
              ref={passwordRef}
              type="password"
              placeholder="Contrasena "
            />
          </div>
          <div className="SignInScreen__contents__form__subs">
            <p className="SignInScreen__contents__form__subs__p">
              ¿Primera vez en Netflix?{' '}
              <a href="home" onClick={register}>
                Suscríbete ya
              </a>
              .
            </p>
            <p className="SignInScreen__contents__form__subs">
              Esta página está protegida por Google reCAPTCHA para comprobar que
              no eres un robot. <a href="a">Más info</a>.
            </p>
          </div>

          <div className="SignInScreen__contents__form__input-submit">
            <input type="submit" onClick={signIn} value="Iniciar Sesión" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInScreen;
