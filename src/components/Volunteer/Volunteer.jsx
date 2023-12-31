import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Volunteer = (props) => {
  return (
    <div className="m-2 flex w-full max-w-48 flex-col items-center justify-evenly gap-2 rounded-xl border-2 border-slate-50 bg-[#ffffff80] px-6 py-4 text-center shadow-xl backdrop-blur-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:border-accent-600">
      <a href={props.linkedIn} target="_blank" rel="noreferrer noopener nofollow">
        <img
          className="mx-auto mb-2 aspect-square w-full max-w-28 rounded-full object-cover object-top"
          src={props.img}
          alt={props.name}
        />
        <h3 className="text-2xl font-bold tracking-wide text-gray-900">{props.name}</h3>
      </a>
      <p className="text-sm">{props.role}</p>
      <ul className="flex items-center justify-center">
        {props.linkedIn && (
          <li>
            <a href={props.linkedIn} className="text-[#0077b5] hover:text-gray-500">
              <FaLinkedin size="1.5rem" />
            </a>
          </li>
        )}
        {props.instagram && (
          <li>
            <a href={props.instagram} className="text-[#f60078] hover:text-gray-500">
              <FaInstagram size="1.5rem" />
            </a>
          </li>
        )}
        {props.gitHub && (
          <li>
            <a href={props.gitHub} className="text-gray-900 hover:text-gray-500">
              <FaGithub size="1.5rem" />
            </a>
          </li>
        )}
        {props.facebook && (
          <li>
            <a href={props.facebook} className="text-[#39569c] hover:text-gray-500">
              <FaFacebook size="1.5rem" />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Volunteer;
