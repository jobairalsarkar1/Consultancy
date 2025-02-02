import { Link } from "react-scroll";
import { abroad_study, abroad_live, abroad_work } from "../assets";
import { useEffect, useState, useMemo } from "react";

const Hero = () => {
  const images = useMemo(() => [abroad_study, abroad_live, abroad_work], []);
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out effect

      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true); // Start fade-in effect
      }, 1000); // 1s fade transition
    }, 4000); // Image stays for 3s + 1s transition (total 4s per image)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center px-8 sm:px-16 md:px-24 lg:pl-32 xl:pl-36">
      {/* Background Images with Smooth Fade Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            fade ? "opacity-100" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            filter: fade ? "blur(0px)" : "blur(10px)",
            transition: "opacity 1s ease-in-out, filter 0.5s ease-in-out",
          }}
        ></div>
      </div>

      {/* Dark Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content (Left Aligned with More Padding) */}
      <div className="relative text-white max-w-5xl z-10">
        {/* <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent font-heading"> */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-6 text-blue-100 font-heading">
          Start Your Global Journey with Expert Guidance
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-4xl font-sans leading-relaxed text-blue-100">
          <strong>Care2 Training Consultancy</strong> provides expert support to
          help you study, work, or live abroad with confidence and ease.
        </p>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="lg:mt-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-500 font-semibold py-4 px-10 rounded-lg text-lg transition-all cursor-pointer"
          aria-label="Get in touch with Care2 Training Consultancy"
        >
          Get in Touch Today
        </Link>
      </div>
    </section>
  );
};

export default Hero;
