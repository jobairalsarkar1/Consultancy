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
import { abroad_live } from "../assets";

const LiveAbroad = () => {
  return (
    <div className="min-h-screen">
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
        className="hero relative h-auto lg:h-[550px] py-28 text-center text-white max-container flex flex-col items-center justify-center"
        // style={{ backgroundImage: "url(https://placehold.co/1500x600)" }}
        aria-label="Live Abroad Hero Section"
      >
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center">
          <img
            src={abroad_live}
            alt="Study Abroad Background"
            className="w-full h-full object-cover opacity-100" // Apply opacity to the image only
            aria-hidden="true"
          />
        </div>
        <h1
          className="text-4xl z-10 lg:text-5xl xl:text-6xl font-extrabold mb-4 text-white font-heading"
          // className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent font-heading"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          itemProp="headline"
        >
          Experience Seamless Living Abroad
        </h1>
        <p className="text-lg z-10 sm:text-2xl font-sans mb-6 px-6 sm:px-32 max-w-full sm:max-w-5xl mx-auto">
          {/* <p className="text-lg sm:text-2xl font-sans mb-6 px-6 sm:px-32 max-w-full sm:max-w-4xl mx-auto"> */}
          Care2 Training Consultancy offers end-to-end relocation services to
          help you settle abroad with ease.
        </p>
        <Link
          to="/work-live-abroad/apply"
          className="mt-4 w-fit z-10 font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-blue-500 hover:to-blue-700 hover:shadow-lg transition duration-300"
          // className="mt-4 w-fit font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-blue-500 hover:to-blue-700 hover:shadow-lg transition duration-300"
          title="Start your journey to live abroad now"
        >
          Get Started Today!
        </Link>
      </section>

      {/* Motivation Section */}
      <section
        className="text-center py-16 max-container"
        aria-label="Why Study Abroad Section"
      >
        <h2
          className="inline-block text-3xl lg:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"
          itemProp="name"
        >
          Why Live Abroad?
        </h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-6">
          Studying abroad offers countless benefits, from learning new languages
          and cultures to expanding your global network. Whether you're aiming
          to enhance your education or gain hands-on experience in a foreign
          country, studying abroad can open doors to a world of opportunities.
          Plus, Care2 Training Consultancy is here to provide you with expert
          assistance in obtaining your student visa.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <img
              src="https://placehold.co/150x150"
              alt="Cultural Exchange"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">Cultural Exchange</h3>
            <p className="text-sm">
              Immerse yourself in a new culture and make lifelong memories.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <img
              src="https://placehold.co/150x150"
              alt="Quality Education"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">
              World-Class Education
            </h3>
            <p className="text-sm">
              Study at top-ranked universities and gain international
              qualifications.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <img
              src="https://placehold.co/150x150"
              alt="Networking"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">Global Networking</h3>
            <p className="text-sm">
              Build professional relationships with peers and experts worldwide.
            </p>
          </div>
        </div>
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
