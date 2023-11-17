import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
import './banner.style.css';

const Banner = (props) => {
  const { message } = props;
  return (
    <div className="Banner">
      {message}{' '}
      {message === 'Follow our social media platform for regular updates' ? (
        <span>
          <a
            href="https://www.instagram.com/uwindsor_eng4.0/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram
              size="2em"
              fill="black"
              className="icons instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/engineering-4-0/"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin size="2em" fill="black" className="icons" />
          </a>
          <a
            href="https://discord.gg/Z8JnPSC5tD"
            rel="noreferrer"
            target="_blank"
          >
            <FaDiscord size="2em" fill="black" className="icons" />
          </a>
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

export default Banner;
