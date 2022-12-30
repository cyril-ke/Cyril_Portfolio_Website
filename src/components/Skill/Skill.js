import React from 'react';
import { BiMedal } from 'react-icons/bi';
import './_Skill.scss';

const Skill = () => {
  return (
    <div className="skill_section" id="skill">
      <div className="container">
        <div className="skill_title">
          <h1>What Skills I Have</h1>
        </div>
        <div className="skill_container">
          <div className="skill_frontend">
            <h3>Frontend Development</h3>
            <div className="skill_content">
              <div className="skill_item">
                <BiMedal />
                <div>
                  <p>HTML</p>
                  <span>basic</span>
                </div>
              </div>
              <div className="skill_item">
                <BiMedal />
                <div>
                  <p>CSS</p>
                  <span>basic</span>
                </div>
              </div>
              <div className="skill_item">
                <BiMedal />
                <div>
                  <p>Javascript</p>
                  <span>basic</span>
                </div>
              </div>
              <div className="skill_item">
                <BiMedal />
                <div>
                  <p>React</p>
                  <span>basic</span>
                </div>
              </div>
              <div className="skill_item">
                <BiMedal />
                <div>
                  <p>Bootstrap</p>
                  <span>basic</span>
                </div>
              </div>
            </div>
          </div>
          <div className="skill_backend">
            <h3>Backend Development & Other</h3>
            <div className="skill_content">
              <div className="skill_item">
                <BiMedal />
                <div>
                  <p>PHP</p>
                  <span>basic</span>
                </div>
              </div>
              <div className="skill_item">
                <BiMedal />
                <div>
                  <p>Node.js</p>
                  <span>basic</span>
                </div>
              </div>
              <div className="skill_item">
                <BiMedal />
                <div>
                  <p>Python</p>
                  <span>basic</span>
                </div>
              </div>
              <div className="skill_item">
                <BiMedal />
                <div>
                  <p>MySQL</p>
                  <span>basic</span>
                </div>
              </div>
              <div className="skill_item">
                <BiMedal />
                <div>
                  <p>Git</p>
                  <span>basic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill;
