import React from "react";
import phoneImg from "./images/phone.svg";
//context
import { useGlobalContext } from "./context";

//
const Hero = () => {
  //access to context (grab func from context)
  //to close Submenu
  const { closeSubmenu } = useGlobalContext();
  return (
    <section
      className="hero"
      //if mouse came from Navbar to Heroe => close Submenu
      onMouseOver={closeSubmenu}
    >
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept
            payments, send payouts, and manage their businesses online.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
