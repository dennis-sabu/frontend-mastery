import { useEffect } from "react";
import gsap from "gsap";

const Preloader = ({ onFinish }) => {
  useEffect(() => {
    // Animate "Loading..."
    gsap.fromTo(
      ".loader-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, repeat: -1, yoyo: true }
    );

    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      gsap.to(".preloader", {
        opacity: 0,
        duration: 0.1,
        onComplete: onFinish,
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  useEffect(() => {
    // Animate background color
    gsap.to(".preloader", {
      backgroundColor: ['#000000', '#1a1a1a', '#333333', '#1a1a1a', '#000000'],
      duration: 2,
      repeat: -1,
      ease: "none"
    });
  }, []);

  return (
    <div className="preloader fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50">
      <h1 className="loader-text text-white text-3xl font-bold">Loading...</h1>
    </div>
  );
};

export default Preloader;
