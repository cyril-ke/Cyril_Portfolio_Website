import React from 'react';
import ohdogcatFinal from '../../images/ohdocatFinal.png';
import ohdogcatMid from '../../images/ohdogcatMid.png';
import selfIntro from '../../images/SelfIntroduction.png';
import { BiChevronRight } from 'react-icons/bi';

import './_Portfolio.scss';

const Portfolio = () => {
  return (
    <div className="portfolio_section" id="portfolio">
      <div className="container">
        <div className="portfolio_title">
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio_list">
          <li className="portfolio_item">All</li>
          <li className="portfolio_item">Web</li>
          <li className="portfolio_item">Layout</li>
          <li className="portfolio_item">UI</li>
        </div>
        <div className="portfolio_grid">
          <div className="portfolio_card">
            <img className="portfolio_img" src={selfIntro} alt="" />
            <h3 className="portfolio_card_title">Cyril's Portfolio Website</h3>
            <a className="portfolio_button" href="/#">
              Live Demo
              <BiChevronRight className="portfolio_button_icon" />
            </a>
            <a className="portfolio_button" href="/#">
              Code
              <BiChevronRight className="portfolio_button_icon" />
            </a>
          </div>
          <div className="portfolio_card">
            <img className="portfolio_img" src={ohdogcatFinal} alt="" />
            <h3 className="portfolio_card_title">Oh!DogCat 寵物票券平台</h3>
            <a className="portfolio_button" href="/#">
              Live Demo
              <BiChevronRight className="portfolio_button_icon" />
            </a>
            <a className="portfolio_button" href="/#">
              Code
              <BiChevronRight className="portfolio_button_icon" />
            </a>
          </div>
          <div className="portfolio_card">
            <img className="portfolio_img" src={ohdogcatMid} alt="" />
            <h3 className="portfolio_card_title">Oh!DogCat 後台訂單系統</h3>
            <a className="portfolio_button" href="/#">
              Live Demo
              <BiChevronRight className="portfolio_button_icon" />
            </a>
            <a className="portfolio_button" href="/#">
              Code
              <BiChevronRight className="portfolio_button_icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
