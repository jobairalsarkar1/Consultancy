import { about_cover } from "../assets";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="max-container font-sans mt-10">
      <div className="flex flex-col xl:flex-row gap-8">
        {/* About us Image */}
        <div className="flex w-full xl:w-[40%] h-[280px] xl:h-auto lg:rounded-lg p-4 bg-white z-10 overflow-hidden lg:shadow-lg">
          <img
            src={about_cover}
            alt="Illustration of Care2 customer service"
            className="rounded-lg w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* About Us content container */}
        <div className="flex flex-col w-full xl:w-[60%] h-auto xl:h-auto px-7 py-5 bg-white">
          <h2 className="head-text mb-5 block text-start bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
            About Us
          </h2>

          <p className="text-gray-800 mb-4 leading-relaxed text-justify">
            At Care2 Training Consultancy, we help individuals pursue their
            dreams of studying, working, and living abroad. With years of
            experience, we provide expert guidance on visa applications, study
            abroad programs, and international career opportunities.
          </p>
          <p className="text-gray-800 mb-4 leading-relaxed text-justify">
            Our dedicated team offers personalized support to students,
            professionals, and those looking to relocate. We’re here to assist
            you every step of the way, ensuring a smooth process tailored to
            your goals.
          </p>
          <p className="text-gray-800 mb-4 leading-relaxed text-justify">
            With in-depth knowledge of visa processes, educational pathways, and
            job markets, we provide trusted advice to help you achieve your
            global ambitions. Let us make your journey abroad as successful as
            possible.
          </p>

          {/* CTA Button to About Us Page */}
          <div className="mt-2">
            <Link
              to="/about-us"
              className="inline-block text-center text-lg  px-6 py-3 text-white bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg hover:bg-gradient-to-l hover:from-blue-400 hover:to-blue-500 transition duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
