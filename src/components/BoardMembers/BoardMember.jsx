import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const BoardMember = (props) => {
  return (
    <div className="m-2 max-w-min rounded-xl border-2 border-slate-50 bg-[#ffffff80] px-10 py-6 text-center shadow-xl backdrop-blur-2xl">
      <img
        className="mx-auto mb-4 aspect-square h-36 w-36 rounded-full object-cover object-top"
        src={props.img}
        alt="Jese Avatar"
      />
      <h3 className="mb-1 text-3xl font-bold tracking-wide text-gray-900">
        <a href="/">{props.name}</a>
      </h3>
      <p>SEO & Marketing</p>
      <ul className="mt-4 flex items-center justify-center space-x-4">
        <li>
          <a href="/" className="text-[#f60078] hover:text-gray-900">
            <FaInstagram size="1.5rem" />
          </a>
        </li>
        <li>
          <a href="/" className="text-[#0077b5] hover:text-gray-900">
            <FaLinkedin size="1.5rem" />
          </a>
        </li>
        <li>
          <a href="/" className="text-gray-900 hover:text-gray-900">
            <FaGithub size="1.5rem" />
          </a>
        </li>
        <li>
          <a href="/" className="text-[#39569c] hover:text-gray-900">
            <FaFacebook size="1.5rem" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BoardMember;
