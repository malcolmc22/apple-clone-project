import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
// npm install gsap @gsap/react to get gsap packages
const Hero = () => {
  // if the window is less than 760px it will be use smallherovideo, otherwise it will use herovideo
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  // making a function to check the width, and setting the video accordingly
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  // setting up our use effect so that it calls the handle function
  useEffect(() => {
    // listens for when the window is resized
    window.addEventListener("resize", handleVideoSrcSet);
    // to clean up event listeners return a function that removes them after
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to('#cta', {y: -50, opacity: 1, delay: 2})
  }, []);
  // dependcy array at the end
  return (
    <section className="nav-height relative w-full bg-black">
      {/* this pushes the highlights which means this section is taking full height of the screen */}
      <div className="flex-center h-5/6 w-full flex-col">
        {/* hero title dissapears after adding the classname becauser in our index we have hero-tile with set attributes */}
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="w-9/12 md:w-10/12">
          <video
            className="pointer-events-none"
            src={videoSrc}
            type="video/mp4"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          ></video>
        </div>
      </div>
      <div id="cta" className="flex translate-y-20 flex-col items-center opacity-0">
        <a href="#highlights" className="btn">Buy</a>
        <p className="text-xl font-normal">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
