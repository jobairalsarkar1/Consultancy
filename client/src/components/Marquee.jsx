import { useEffect, useRef } from "react";

const logos = [
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg",
    alt: "Facebook",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/disney.svg",
    alt: "Disney",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg",
    alt: "Airbnb",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/apple.svg",
    alt: "Apple",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/spark.svg",
    alt: "Spark",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg",
    alt: "Samsung",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/quora.svg",
    alt: "Quora",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/sass.svg",
    alt: "Sass",
  },
];

const Marquee = () => {
  const logosRef = useRef();

  useEffect(() => {
    const ul = logosRef.current;
    ul.insertAdjacentHTML("afterend", ul.outerHTML);
    ul.nextSibling.setAttribute("aria-hidden", "true");
  }, []);

  return (
    <section className="relative max-container mb-5 flex flex-col justify-center bg-slate-900 overflow-hidden">
      <div className="text-center">
        <h1
          className="head-text inline-block lg:text-4xl text-center text-[#2d6a4f] mb-5 font-semibold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          Our Partners
        </h1>
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="text-center">
          <div className="w-full inline-flex gap-5 flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul
              ref={logosRef}
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              {logos.map((logo, index) => (
                <li key={index}>
                  <img src={logo.src} alt={logo.alt} className="w-28 h-16" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
