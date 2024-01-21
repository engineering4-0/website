import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const BoardMember = (props) => {
  return (
    <div className="w-full max-w-60 items-stretch rounded-lg bg-gray-50 shadow-xl lg:flex lg:max-w-md">
      <a href="/" className="w-full max-w-40">
        <img
          className="aspect-square h-full w-full rounded-lg object-cover object-top lg:rounded-none lg:rounded-l-lg"
          src={props.img}
          alt="Bonnie Avatar"
        />
      </a>
      <div className="flex flex-col items-center justify-evenly px-4 py-4 lg:items-start lg:py-2">
        <h3 className="text-3xl font-bold">
          <a href="/">{props.name}</a>
        </h3>
        <span className="text-sm font-bold">{props.role}</span>
        <p className="w-full text-center text-sm font-light lg:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, commodi!
        </p>
        <ul className="mt-2 flex gap-4">
          <li>
            <a href="/" className="text-[#0077b5] hover:text-gray-500">
              <FaLinkedin size="1.25rem" />
            </a>
          </li>
          <li>
            <a href="/" className="text-[#f60078] hover:text-gray-500">
              <FaInstagram size="1.25rem" />
            </a>
          </li>
          <li>
            <a href="/" className="text-[#39569c] hover:text-gray-500">
              <FaFacebook size="1.25rem" />
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-900 hover:text-gray-500">
              <FaGithub size="1.25rem" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    // <div className="m-2 flex w-full max-w-60 flex-col items-center justify-evenly rounded-xl border-2 border-slate-50 bg-[#ffffff80] px-10 py-6 text-center shadow-xl backdrop-blur-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:border-accent-600">
    //   <a href={props.linkedIn} target="_blank" rel="noreferrer noopener nofollow">
    //     <img
    //       className="mx-auto mb-4 aspect-square w-full max-w-36 rounded-full object-cover object-top"
    //       src={props.img}
    //       alt={props.name}
    //     />
    //     <h3 className="mb-1 text-3xl font-bold tracking-wide text-gray-900">{props.name}</h3>
    //   </a>
    //   <p>{props.role}</p>
    //   <ul className="mt-4 flex items-center justify-center space-x-4">
    //     {props.linkedIn && (
    //       <li>
    //         <a href={props.linkedIn} className="text-[#0077b5] hover:text-gray-500">
    //           <FaLinkedin size="1.5rem" />
    //         </a>
    //       </li>
    //     )}
    //     {props.instagram && (
    //       <li>
    //         <a href={props.instagram} className="text-[#f60078] hover:text-gray-500">
    //           <FaInstagram size="1.5rem" />
    //         </a>
    //       </li>
    //     )}
    //     {props.gitHub && (
    //       <li>
    //         <a href={props.gitHub} className="text-gray-900 hover:text-gray-500">
    //           <FaGithub size="1.5rem" />
    //         </a>
    //       </li>
    //     )}
    //     {props.facebook && (
    //       <li>
    //         <a href={props.facebook} className="text-[#39569c] hover:text-gray-500">
    //           <FaFacebook size="1.5rem" />
    //         </a>
    //       </li>
    //     )}
    //   </ul>
    // </div>
  );
};

export default BoardMember;
