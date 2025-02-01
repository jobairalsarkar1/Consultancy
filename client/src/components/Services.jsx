import { Link } from "react-router-dom";
import { services } from "../utils";

const Services = () => {
  return (
    <section className="max-container bg-[#f7f9f9] font-sans py-16">
      <div className="w-full">
        {/* <h2 className="head-text text-[#2d6a4f] mb-5 xl:mb-10 text-center text-4xl font-semibold">
          Our Services
        </h2> */}
        <div className="text-center">
          <h1
            className="head-text inline-block lg:text-4xl text-center text-[#2d6a4f] mb-5 xl:mb-10 font-semibold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            Our Services
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl flex flex-col transition duration-300"
            >
              <h3 className="text-xl xl:text-2xl text-center font-semibold text-[#333333] mb-6 flex-shrink-0 font-heading">
                {service.title}
              </h3>
              <img
                src={service.imgUrl}
                alt={service.title}
                className="w-full max-w-[300px] mx-auto mb-6 object-contain max-h-[220px] h-auto rounded-lg shadow-sm"
                loading="lazy"
              />
              <p className="text-[#333333] mb-6 text-lg text-justify leading-relaxed flex-grow font-sans">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="w-full text-lg text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-5 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-blue-500 hover:to-blue-700 hover:shadow-lg transition duration-300 mt-auto"
              >
                {service.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
