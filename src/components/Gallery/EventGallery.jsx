import Event1 from "./Event1.jpeg";
import Event4 from "./Event4.jpeg";
import Event6 from "./Event6.jpeg";
import Event7 from "./Event7.jpeg";
import Event8 from "./Event8.jpg";
import Event9 from "./Event9.jpg";
import Event10 from "./Event10.jpg";
import Event11 from "./Event11.jpg";

const EventGallery = () => {
  return (
    <>
      <h2 className="mb-8 mt-20 text-center text-5xl">Event Gallery</h2>
      <div className="mx-auto w-full max-w-md p-4 md:max-w-screen-sm lg:max-w-screen-lg">
        <div className="bento grid grid-flow-dense grid-cols-3 items-stretch gap-1.5 md:gap-3 lg:grid-cols-4">
          <div className="self-stretch overflow-hidden rounded-xl">
            <img
              src={Event10}
              alt=""
              className="aspect-square w-full max-w-sm scale-110 rounded-xl object-cover object-top"
            />
          </div>
          <div className="col-span-2 self-stretch overflow-hidden rounded-xl">
            <img
              src={Event11}
              alt=""
              className="aspect-video w-full max-w-lg -translate-y-3 rounded-xl object-cover object-center lg:-translate-y-6 lg:scale-110"
            />
          </div>
          <div className="self-stretch overflow-hidden rounded-xl">
            <img
              src={Event4}
              alt=""
              className="aspect-square w-full max-w-sm scale-110 rounded-xl object-cover object-top"
            />
          </div>
          <div className="col-span-2 col-start-1 self-stretch overflow-hidden rounded-xl lg:col-start-auto">
            <img
              src={Event1}
              alt=""
              className="aspect-square w-full -translate-y-6 scale-110 rounded-xl object-cover object-top lg:aspect-auto lg:-translate-y-10"
            />
          </div>

          <div className="self-stretch overflow-hidden rounded-xl">
            <img
              src={Event6}
              alt=""
              className="aspect-square w-full max-w-sm scale-110 rounded-xl object-cover object-top lg:-translate-x-2"
            />
          </div>
          <div className="col-start-3 row-span-2 self-stretch overflow-hidden rounded-xl lg:col-start-auto">
            <img src={Event9} alt="" className="w-full max-w-sm scale-110 rounded-xl object-cover object-center" />
          </div>
          <div className="self-stretch overflow-hidden rounded-xl">
            <img
              src={Event7}
              alt=""
              className="aspect-square w-full max-w-sm scale-110 rounded-xl object-cover object-top"
            />
          </div>
          <div className="col-span-2 self-stretch overflow-hidden rounded-xl lg:aspect-auto">
            <img
              src={Event8}
              alt=""
              className="w-full max-w-xl translate-y-2 scale-125 rounded-xl object-cover object-center md:object-top lg:w-auto lg:translate-y-0 lg:scale-110 lg:object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventGallery;