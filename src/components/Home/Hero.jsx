import React from "react";
import Members from "./Members";
import HeroPhotos from "./HeroPhotos";

import event1 from "../Gallery/Event1.jpeg";
import event2 from "../Gallery/Event5.jpeg";
import event3 from "../Gallery/Event7.jpeg";
import event4 from "../Gallery/Event11.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-height grid place-items-center overflow-hidden bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] px-10 [background-size:16px_16px] lg:grid-cols-5 lg:grid-rows-2">
      {/* adds dotted background to hero section */}
      <div className="bg-height absolute inset-0 -z-10 w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container z-20 col-span-3 col-start-2 col-end-5 row-span-2 mx-auto flex flex-col items-center justify-center gap-10 py-10">
        <div className="flex max-w-2xl flex-col items-center text-center 2xl:max-w-3xl">
          <h1 className="mb-4 text-5xl font-bold uppercase text-accent-900 md:text-6xl lg:text-7xl 2xl:text-8xl">
            Student-run, Applied Science Club!
          </h1>
          <p className="max-w-2xl">
            Engineering 4.0 is a student-run organization dedicated to supporting and providing a platform for all
            engineers and tech enthusiasts of the{" "}
            <a
              href="https://www.uwindsor.ca/"
              target="_blank"
              rel="noreferrer noopener nofollow"
              className="font-bold transition-colors duration-300 ease-in-out hover:text-accent-500"
            >
              University of Windsor
            </a>
            !
          </p>
        </div>
        <Link to="/members">
          <Members />
        </Link>
        <div className="flex items-center justify-evenly gap-4 text-sm sm:items-stretch sm:text-base">
          <a href="/" className="btn-accent ">
            Join us!
          </a>
          <a href="https://linktr.ee/uwindsor_eng4.0" target="_blank" rel="noreferrer" className="btn-primary">
            Learn More
          </a>
        </div>
      </div>
      <HeroPhotos className="col-start-1 row-start-1 -rotate-[45deg] justify-self-end" img={event1} />
      <HeroPhotos className="rotate-[25deg] justify-self-end" img={event2} />
      <HeroPhotos className="-rotate-12 justify-self-start" img={event3} />
      <HeroPhotos className="rotate-[4deg] justify-self-start" img={event4} />
    </div>
  );
};

export default Hero;
