import React from 'react';
import './_Home.scss';
import avatar from '../../images/avatar.png';

const home = () => {
  return (
    <div className="home_section" id="home">
      <div className="container grid">
        <div className="home_avatar_box">
          <img className="home_avatar" src={avatar} alt="" />
        </div>
        <div className="home_description">
          <h2>Hi! This is Cyril.</h2>
          <h2>I'm a newbie Front-end engineer.</h2>
        </div>
        <a className="scrollDown" href="#about">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="text">
            Scroll down
            <div />
          </div>
        </a>
      </div>
    </div>
  );
};
export default home;
