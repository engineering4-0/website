import React from "react";

const HeroPhotos = (props) => {
  return (
    <div
      className={`${props.className} hidden flex-col items-center justify-self-center overflow-clip rounded-lg bg-white p-2 shadow-2xl shadow-gray-600 lg:flex`}
    >
      <img src={props.img} alt="" className="aspect-square w-full max-w-48 rounded-sm object-cover" />
      <caption className="my-1 max-w-40 text-center text-xs">{props.caption ?? "Engineering club 4.0 event"}</caption>
    </div>
  );
};

export default HeroPhotos;
