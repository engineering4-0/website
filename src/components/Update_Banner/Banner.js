import React from "react";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import "./banner.style.css";

const Banner = (props) => {
  const { message } = props;
  return (
    <div className="Banner">
      {message}{" "}
      {message === "Follow our social media platform for regular updates" ? (
        <span>
          <AiOutlineInstagram
            size="2em"
            fill="black"
            className="icons instagram"
            onClick={() =>
              (window.location.href = "https://www.instagram.com/eng4.0_uwin/")
            }
          />
          <AiFillLinkedin
            size="2em"
            fill="black"
            className="icons"
            onClick={() =>
              (window.location =
                "https://www.linkedin.com/company/engineering-4-0/")
            }
          />
          <FaDiscord
            size="2em"
            fill="black"
            className="icons"
            onClick={() => (window.location = "https://discord.gg/Z8JnPSC5tD")}
          />
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Banner;
