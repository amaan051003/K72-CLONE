import React from "react";

const Vidio = () => {
  return (
    <div>
      <video
        className="h-full w-full"
        autoPlay
        loop
        muted
        src="/bgvideo.mp4"
      ></video>
    </div>
  );
};

export default Vidio;
