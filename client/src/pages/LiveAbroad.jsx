import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaGlobe,
  FaHandshake,
  FaUserGraduate,
  FaCheckCircle,
  FaPassport,
  FaDollarSign,
  FaLanguage,
  FaGavel,
  FaUser,
} from "react-icons/fa";

const LiveAbroad = () => {
  return (
    <div className="min-h-screen mt-20">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Live Abroad with Expert Assistance | Care2 Training Consultancy
        </title>
        <meta
          name="description"
          content="Get expert relocation assistance and live abroad with Care2 Training Consultancy. Experience seamless relocation services and cultural integration."
        />
        <meta
          name="keywords"
          content="live abroad, relocation assistance, cultural integration, housing support, international living"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="hero bg-cover bg-center h-auto lg:h-[400px] py-20 text-center text-white max-container flex flex-col items-center justify-center"
        style={{ backgroundImage: "url(https://placehold.co/1500x600)" }}
        aria-label="Live Abroad Hero Section"
      >
        <h1
          className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent font-heading"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          itemProp="headline"
        >
          Experience Seamless Living Abroad
        </h1>
        <p className="text-lg sm:text-xl font-sans mb-6 px-6 sm:px-32 max-w-full sm:max-w-4xl mx-auto">
          Care2 Training Consultancy offers end-to-end relocation services to
          help you settle abroad with ease.
        </p>
        <Link
          to="/work-live-abroad/apply"
          className="mt-4 w-fit font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-blue-500 hover:to-blue-700 hover:shadow-lg transition duration-300"
          title="Start your journey to live abroad now"
        >
          Get Started Today!
        </Link>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-white max-container">
        <div className="text-center mb-5 mt-5">
          <h2 className="inline-block text-3xl sm:text-4xl  font-extrabold mb-8 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            {/* <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent"> */}
            Our Specialized Services for Living Abroad
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: FaPassport,
              title: "Visa Assistance",
              desc: "We provide expert help to secure the appropriate visa for your destination.",
            },
            {
              icon: FaHome,
              title: "Accommodation Search",
              desc: "We assist with finding accommodation in your new country.",
            },
            {
              icon: FaDollarSign,
              title: "Banking & Finance",
              desc: "Set up your banking and manage finances abroad with ease.",
            },
            {
              icon: FaLanguage,
              title: "Language & Culture",
              desc: "Get language courses and cultural immersion experiences.",
            },
            {
              icon: FaGavel,
              title: "Legal Support",
              desc: "Ensure all your paperwork and legal matters are handled professionally.",
            },
            {
              icon: FaUser,
              title: "Social & Networking",
              desc: "Join expat communities and expand your social network abroad.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <service.icon className="text-teal-500 text-4xl w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 max-container bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="inline-block text-3xl sm:text-4xl  font-extrabold mb-8 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Hear from Our Happy Expats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Emily Johnson",
                role: "Teacher, Australia",
                quote:
                  "Care2 Training Consultancy helped me navigate the challenges of living in Australia. I couldn't be happier!",
              },
              {
                name: "Michael Brown",
                role: "Engineer, Germany",
                quote:
                  "From visa assistance to housing, Care2 made my relocation seamless.",
              },
              {
                name: "Sophie Miller",
                role: "Entrepreneur, Canada",
                quote:
                  "I am now living and working in Canada, thanks to the amazing team at Care2.",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
              >
                <p className="font-serif text-gray-600">"{story.quote}"</p>
                <p className="mt-4 font-semibold">{story.name}</p>
                <p className="text-sm text-gray-500">{story.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveAbroad;
