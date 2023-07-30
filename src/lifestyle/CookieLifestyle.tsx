import React, { useState } from "react";

// @ts-ignore
import blaadjes from "../assets/blaadjes.svg";
// @ts-ignore
import classes from "./CookieLifestyle.module.scss";
// @ts-ignore
import cookies from "../assets/cookies.svg";

const quotes = [
  "Wees altijd hard",
  "Wees basic",
  "Wees rond",
  "Wees een beetje salty",
  "Wees zoet",
  "Wees lekker",
  "Wees goedkoop, maar soms een beetje duur",
  "Wees gevuld met chocolate chips",
  "Heb geen ruggengraat",
  "Wees nooit brak, maar wel een beetje gebroken",
  "Maak mensen blij",
];

const CookieLifestyle = () => {
  const [quote, setQuote] = useState<number>(
    Math.floor(Math.random() * quotes.length)
  );

  return (
    <div className={classes.root}>
      <img src={cookies} alt="Image of cookies" />
      <div>
        <h1>Wees als een koekje</h1>
        <h2>{quotes[quote]}</h2>
      </div>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setQuote(Math.floor(Math.random() * quotes.length));
        }}
      >
        Meer quotes
      </a>
      <span>
        <img src={blaadjes} alt="" />
        Een initiatief van Dispuut BAGGER
      </span>
    </div>
  );
};

export default CookieLifestyle;
