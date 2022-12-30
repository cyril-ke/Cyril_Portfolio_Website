import React from 'react';
import './_About.scss';
import about_avatar from '../../images/about_avatar.png';

const About = () => {
  return (
    <div className="about_section" id="about">
      <div className="about_title">
        <h1>About Me</h1>
      </div>
      <div className="container grid">
        <img className="about_avatar" src={about_avatar} alt="" />
        <div className="about_description">
          <h1>柯孝強</h1>
          <p>
            <br />
            我是孝強，來自台中，畢業於國立高雄應用科技大學資工系，個性慢熟但活潑、善於與同儕、同事之間溝通並一起解決問題。曾有1年半醫療長照ERP系統專案管理經驗，近期剛從資策會前端工程師班結業，懂前端
            HTML、CSS、JS、Bootstrap、React，後端 Node.js 及資料庫 MySQL 並使用
            Axios 串接前後端 API 資料，版本控管 Git 搭配 GitHub，結訓專題使用
            React
            框架製作寵物票券的電商平台，負責網站內社群分享部分，包含社群貼文CRUD、社群留言等功能。
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
