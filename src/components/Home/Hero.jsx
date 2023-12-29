import React from 'react';
import Members from './Members';
import HeroPhotos from './HeroPhotos';

import event1 from '../Gallery/Event1.jpeg';
import event2 from '../Gallery/Event2.jpeg';
import event3 from '../Gallery/Event3.jpeg';
import event4 from '../Gallery/Event4.jpeg';

const Hero = () => {
  return (
    <div className="h-svh grid lg:grid-cols-5 lg:grid-rows-2 place-items-center px-10 overflow-hidden">
      <div className="container row-span-2 col-start-2 col-end-5 col-span-3 flex flex-col items-center justify-center gap-10 mx-auto py-10">
        <div className="text-center max-w-2xl">
          <h1 className="font-bold uppercase mb-4 text-4xl md:text-5xl lg:text-6xl tracking-tighter">
            Student-run, Applied Science Club!
          </h1>
          <p>
            Engineering 4.0 is a student-run organization dedicated to
            supporting and providing a platform for all engineers and tech
            enthusiasts of the{' '}
            <span className="font-bold">University of Windsor</span>!
          </p>
        </div>
        <Members />
        <div className="flex gap-4 items-stretch justify-evenly">
          <a href="/" className="btn-accent">
            Join us
          </a>
          <a href="/" className="btn-primary">
            Learn More
          </a>
        </div>
      </div>
      <HeroPhotos className="-rotate-[205deg] justify-self-end" img={event1} />
      <HeroPhotos className="-rotate-12 justify-self-start" img={event2} />
      <HeroPhotos className="-rotate-[50deg] justify-self-start" img={event3} />
      <HeroPhotos
        className="col-start-1 row-start-1 rotate-[25deg] justify-self-end"
        img={event4}
      />
    </div>
  );
};

export default Hero;
