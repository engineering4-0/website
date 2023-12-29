import React from 'react';

const HeroPhotos = (props) => {
  return (
    <div
      className={`${props.className} hidden lg:flex rounded-lg shadow-2xl shadow-gray-600  p-2 justify-self-center flex-col items-center overflow-clip`}
    >
      <img
        src={props.img}
        alt=""
        className="max-w-48 w-full bg-black aspect-square object-cover"
      />
      <caption className="max-w-40 text-center text-xs my-1">
        {props.caption ?? 'Engineering club 4.0 event'}
      </caption>
    </div>
  );
};

export default HeroPhotos;
