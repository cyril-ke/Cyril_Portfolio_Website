import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { FaLine } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

import './_Contact.scss';

const Contact = () => {
  return (
    <div className="contact_section" id="contact">
      <div className="container">
        <div className="contact_title">
          <h1>Contact Me</h1>
        </div>
        <div className="contact_list">
          <div className="contact_card">
            <MdOutlineEmail className="contact_card_icon" />
            <a className="contact_card_content" href="/#">
              <h4>Email</h4>
              <h5>cernd206@mail.com</h5>
              <br /> Send a messages
            </a>
          </div>
          <div className="contact_card">
            <RiFacebookBoxFill className="contact_card_icon" />
            <a
              className="contact_card_content"
              href="https://www.facebook.com/profile.php?id=100002960453747"
              target="_blank"
              rel="noreferrer"
            >
              <h4>Messenger</h4>
              <h5>柯孝強</h5>
              <br /> Send a message
            </a>
          </div>
          <div className="contact_card">
            <FaLine className="contact_card_icon" />
            <a
              className="contact_card_content"
              href="https://line.me/ti/p/RS0-8YgvpP"
              target="_blank"
              rel="noreferrer"
            >
              <h4>Line App</h4>
              <h5>ID:mirumu0627</h5>
              <br />
              Send a message
            </a>
          </div>
          <div className="contact_card">
            <BsGithub className="contact_card_icon" />
            <a
              className="contact_card_content"
              href="https://github.com/cyril-ke"
              target="_blank"
              rel="noreferrer"
            >
              <h4>GitHub</h4>
              <h5>cyril-ke</h5>
              <br />
              Send a message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
