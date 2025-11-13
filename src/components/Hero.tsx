import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 2;

    // const attemptPlay = () => {
    //   video.play().catch(() => {});
    // };

    // if (video.readyState >= 2) {
    //   attemptPlay();
    // } else {
    //   video.addEventListener("loadeddata", attemptPlay, { once: true });
    // }

    // return () => {
    //   video.removeEventListener("loadeddata", attemptPlay);
    // };
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Title" />
      </div>

      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        muted
        playsInline
        controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
        disablePictureInPicture
        preload="auto"
        className="pointer-events-none"
      />

      <button
        onClick={() => {
          /* TODO: Implement buy handler */
        }}
        aria-label="Buy MacBook Pro"
      >
        Buy
      </button>

      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
};
export default Hero;
