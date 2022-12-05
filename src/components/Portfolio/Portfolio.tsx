import "./Portfolio.scss";
import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Loader from "react-loaders";

export type PortfolioDownload = {
  nameValue: string;
  descValue: string;
  urlValue: string;
  imageValue: string;
};

const Portfolio: React.FC = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [portfolio, setPortfolio] = useState<PortfolioDownload[]>([]);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    getPortfolio();
  }, []);

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, "portfolio"));

    const portfolios = querySnapshot.docs.map((doc) => doc.data());

    setPortfolio(portfolios as PortfolioDownload[]);
  };

  const renderPortfolio = (portfolio: PortfolioDownload[]) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div key={idx} className="image-box">
              <img
                src={port.imageValue}
                alt="portfolio"
                className="portfolio-image"
              />
              <div className="content">
                <p className="title">{port.nameValue}</p>
                <h4 className="description">{port.descValue}</h4>
                <button
                  className="btn"
                  onClick={() => window.open(port.urlValue)}
                >
                  View
                </button>
              </div>
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
        <p className="">
          As I do not have a commercial experience/projects yet, here you can
          see my training projects.
        </p>
        <div>{renderPortfolio(portfolio)}</div>
      </div>

      <Loader type="pacman" active />
    </>
  );
};

export default Portfolio;
