import { Link } from "react-router-dom";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black px-4 py-8 text-center text-sm text-white ">
      <div className="mx-auto flex max-w-screen-md flex-col items-stretch justify-around gap-4 md:flex-row">
        <nav className="my-2">
          <h3 className="mb-2 text-3xl">Social Media Links</h3>
          <ul className="flex items-center justify-center gap-4">
            <li className="transition-colors duration-300 hover:text-gray-300">
              <a href="https://www.instagram.com/uwindsor_eng4.0/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size="1.75rem" />
              </a>
            </li>
            <li className="transition-colors duration-300 hover:text-gray-300">
              <a href="https://github.com/engineering4-0/website" target="_blank" rel="noopener noreferrer">
                <FaGithub size="1.75rem" />
              </a>
            </li>
            <li className="transition-colors duration-300 hover:text-gray-300">
              <a href="https://www.linkedin.com/company/engineering-4-0/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size="1.75rem" />
              </a>
            </li>

            <li className="transition-colors duration-300 hover:text-gray-300">
              <a href="https://discord.com/invite/Z8JnPSC5tD" target="_blank" rel="noopener noreferrer">
                <FaDiscord size="1.75rem" />
              </a>
            </li>
          </ul>
        </nav>
        <nav className="my-2">
          <h3 className="mb-2 text-3xl">Pages</h3>
          <ul className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
            <li className="hover:text-gray-300 hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-300 hover:underline">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-gray-300 hover:underline">
              <Link to="/events">Events</Link>
            </li>
            <li className="hover:text-gray-300 hover:underline">
              <Link to="/buddy">Buddy Program</Link>
            </li>
            <li className="hover:text-gray-300 hover:underline">
              <Link to="/members">Members</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mx-auto my-4 max-w-screen-sm">Copyrights &copy; 2024 &nbsp; Engineering Club 4.0</div>
    </footer>
  );
};

export default Footer;
