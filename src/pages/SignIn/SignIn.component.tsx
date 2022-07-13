import React from "react";
import logoImg from "../../assets/svg/logoBlue.svg";
import googleLogo from "../../assets/svg/google.svg";
import facebookLogo from "../../assets/svg/facebook.svg";
// import bgImg1 from "../../assets/svg/siginBg1.svg";
import bgImg2 from "../../assets/images/siginBg2.png";
import "./SignIn.style.scss";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <section id="sign-up-in">
      <div className="bgImgs">
        <div>
          <h2>Join Ttrack Today</h2>
          <p>Let’s manage your project from now on !</p>
        </div>

        <img src={bgImg2} alt="notepads" />
      </div>
      <div className="container">
        <img src={logoImg} alt="logo" />
        <h3>Hello, Let’s Get Started</h3>
        <form>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              placeholder="Alogberachael@gmail.com"
            />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" id="password" />
          </label>

          <div>
            By signing up, you agree to <span>Ttrack terms of service</span> &
            acknowledge the <span>privacy policy</span>
          </div>

          <button type="submit">Get Started for free</button>
        </form>

        <p>OR</p>

        <button className="zero-auth">
          <img src={googleLogo} alt="google logo" /> Continue with Google
        </button>
        <button className="zero-auth">
          <img src={facebookLogo} alt="facebook logo" />
          Continue with Facebook
        </button>

        <p>
          Already have an account? <span>Sign In</span>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
