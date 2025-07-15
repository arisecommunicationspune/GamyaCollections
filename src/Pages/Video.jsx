import React from "react";

const Video = () => {
  const images = {
    video1: "/video/1.mp4",
    video2: "/video/2.mp4",
    video3: "/video/3.mp4",
    video4: "/video/4.mp4",
    video5: "/video/5.mp4",
  };

  return (
    <div className="container- m-auto py-14 flex flex-col justify-center items-center h-auto px-9 md:px-8 lg:px-16 overflow-hidden gap-4">
      <h2 className="text-4xl font-serif text-amber-900 mb-3">Video</h2>
      <div className="flex flex-col md:flex-row gap-4 max-w-7xl">
        <div className="flex justify-center  px-10 sm:px-0">
          <video
            src={images.video1}
            controls
            autoPlay
            muted
            loop
            className="w-full  md:w-full h-[400px] rounded-lg "
          />
        </div>
        <div className="flex justify-center  px-10 sm:px-0">
          <video
            src={images.video2}
            controls
            autoPlay
            muted
            loop
            className="w-full  md:w-full h-[400px] rounded-lg "
          />
        </div>
        <div className="flex justify-center  px-10 sm:px-0">
          <video
            src={images.video3}
            controls
            autoPlay
            muted
            loop
            className="w-full  md:w-full h-[400px] rounded-lg "
          />
        </div>
        <div className="flex justify-center  px-10 sm:px-0">
          <video
            src={images.video4}
            controls
            autoPlay
            muted
            loop
            className="w-full md:w-full sm:h-[400px] rounded-lg "
          />
        </div>
        <div className="flex justify-center  px-10 sm:px-0">
          <video
            src={images.video5}
            controls
            autoPlay
            muted
            loop
            className="w-full md:w-full sm:h-[400px] rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
