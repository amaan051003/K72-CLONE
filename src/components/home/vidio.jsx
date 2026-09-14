import React from "react";
const Vidio = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/bgvideo.mp4"
      ></video>
    </div>
  );
};
export default Vidio;
