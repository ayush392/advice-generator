import React, { useEffect, useState } from "react";
import divider from "../assets/pattern-divider-desktop.svg";
import divider_sm from "../assets/pattern-divider-mobile.svg";
import dice from "../assets/icon-dice.svg";

function Card() {
  const [advice, setAdvice] = useState({});

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const json = await res.json();
    setAdvice(json?.slip);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <div className="card flex col">
        <p className="mb-3">ADVICE #{advice.id}</p>
        <h1 className="mb-3">{advice.advice}</h1>
        <img className="img1 mb-3" src={divider} alt="divider" />
        <img className="img2 mb-3" src={divider_sm} alt="divider" />
        <button className="btn dice" onClick={getAdvice}>
          <img src={dice} className="m-1" alt="dice" />
        </button>
      </div>
    </>
  );
}

export default Card;
