import { Link } from "react-router-dom";
import { services } from "../utils";

const Services = () => {
  return (
    <section className="max-container bg-[#f7f9f9] font-sans py-16">
      {/* <div className="w-full text-center mb-12"> */}
      <h1 className="head-text lg:text-4xl text-start text-[#2d6a4f] mb-5 py-2 font-semibold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
        Our Services
      </h1>
      {/* </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 flex flex-col"
          >
            <div className="relative mb-6 flex-grow">
              <img
                src={service.imgUrl}
                alt={service.title}
                className="w-full h-64 object-cover rounded-xl shadow-md mx-auto"
                loading="lazy"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#00000099] via-transparent to-transparent rounded-xl"></div>
            </div>
            <h3 className="text-xl font-semibold text-[#333333] mb-4">
              {service.title}
            </h3>
            <p className="text-[#333333] text-base mb-6 flex-grow">
              {service.description}
            </p>
            <Link
              to={service.link}
              className="inline-block text-lg text-center bg-gradient-to-r from-blue-400 to-blue-500 text-white py-3 px-5 rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-blue-500 hover:to-blue-400 transition duration-300 mt-auto"
            >
              {service.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
