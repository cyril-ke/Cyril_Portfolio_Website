import React from 'react';
import './_HomeA.scss';
import avatar from '../../images/avatar.png';

const HomeA = () => {
  return (
    <div className="homeA_section" id="home">
      <div className="container grid">
        <div className="homeA_avatar_box">
          <img className="homeA_avatar" src={avatar} alt="" />
        </div>
        <div className="homeA_description">
          <h2>Hi! This is Cyril.</h2>
          <h2>I'm a newbie Front-end engineer.</h2>
        </div>
        <a className="scrollDown" href="#about">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="text">
            Scroll down
            <div />
          </div>
        </a>
      </div>
    </div>
  );
};
export default HomeA;
