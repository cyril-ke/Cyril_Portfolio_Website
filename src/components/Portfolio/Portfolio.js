import React, { useEffect, useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { portfolioData, portfolioItem } from './data';

import './_Portfolio.scss';

const Portfolio = () => {
  const [item, setItem] = useState({ name: 'All' });
  const [portfolio, setPortfolio] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'All') {
      setPortfolio(portfolioData);
    } else {
      const newPortfolio = portfolioData.filter((portfolio) => {
        return portfolio.category === item.name;
      });
      setPortfolio(newPortfolio);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
    console.log(e.target.textContent, index);
  };

  return (
    <div className="portfolio_section" id="portfolio">
      <div className="container">
        <div className="portfolio_title">
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio_list">
          {portfolioItem.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? 'active-work' : ''
                } portfolio_item`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </div>
        <div className="portfolio_grid">
          {portfolio.map((item, index) => {
            return (
              <div className="portfolio_card">
                <img className="portfolio_img" src={item.image} alt="" />
                <h3 className="portfolio_card_title">{item.title}</h3>
                <a className="portfolio_button" href={item.liveDemoUrl}>
                  Live Demo
                  <BiChevronRight className="portfolio_button_icon" />
                </a>
                <a className="portfolio_button" href={item.codeUrl}>
                  Code
                  <BiChevronRight className="portfolio_button_icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
