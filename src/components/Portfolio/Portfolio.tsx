import "./Portfolio.scss";

import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import portfolioData from "../../assets/data/portfolio.json";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  type PortfolioProps = {
    cover: string;
    title: string;
    description: string;
    url: string;
  };

  const renderPortfolio = (portfolio: PortfolioProps[]) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div key={idx} className="image-box">
              <img
                src={port.cover}
                alt="portfolio"
                className="portfolio-image"
                // width="600"
                // height="300px"
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            strArray={"Portfolio".split("")}
            idx={15}
            letterClass={letterClass}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
    </>
  );
};

export default Portfolio;