import Hero from "../../components/Home/Hero";
import EventGallery from "../../components/Gallery/EventGallery";
import BoardMembers from "../../components/BoardMembers/BoardMembers";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="mb-14 mt-8 flex flex-col items-center">
        <BoardMembers />
        <Link to="/members" className="font-bold text-accent-600 hover:text-accent-500">
          <span className="hover:underline">
            View all our members
            <FaArrowRightLong className="ml-2 inline" />
          </span>
        </Link>
        <EventGallery />
      </div>
    </>
  );
};

export default HomePage;
