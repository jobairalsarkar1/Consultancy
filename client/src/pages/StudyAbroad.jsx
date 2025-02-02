import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { countries, universities } from "../utils";
import { abroad_study } from "../assets";

const StudyAbroad = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Add SEO meta tags */}
      <Helmet>
        <title>
          Study Abroad with Expert Visa Assistance | Care2 Training Consultancy
        </title>
        <meta
          name="description"
          content="Explore study abroad opportunities with Care2 Training Consultancy. Get expert student visa assistance and start your journey to world-class education."
        />
        <meta
          name="keywords"
          content="study abroad, student visa, international education, study in USA, UK, Canada, Australia"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="hero relative h-auto lg:h-[550px] py-28 text-center text-white max-container flex flex-col items-center justify-center"
        aria-label="Study Abroad Hero Section"
      >
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center">
          <img
            src={abroad_study}
            alt="Study Abroad Background"
            className="w-full h-full object-cover opacity-70" // Apply opacity to the image only
            aria-hidden="true"
          />
        </div>

        {/* Text content */}
        <h1
          className="text-4xl z-10 lg:text-5xl xl:text-6xl font-extrabold mb-4 text-white font-heading"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          itemProp="headline"
        >
          Study Abroad, Shape Your Future!
        </h1>
        <p className="text-lg z-10 sm:text-2xl font-sans mb-6 px-6 sm:px-32 max-w-full sm:max-w-5xl mx-auto">
          Experience the world, broaden your horizons, and gain valuable skills
          by studying abroad. Let us guide you through the process with expert
          student visa assistance.
        </p>
        <Link
          to="/study-abroad/apply"
          className="mt-4 w-fit z-10 font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-blue-500 hover:to-blue-700 hover:shadow-lg transition duration-300"
          title="Start your study abroad journey now"
        >
          Let's Discuss Your Future
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
          Why Study Abroad?
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

      {/* Top Countries Section */}
      <section
        className="bg-white py-16 max-container"
        aria-label="Top Countries to Study Abroad"
      >
        <div className="text-center">
          <h2
            className="inline-block text-3xl lg:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text"
            itemProp="name"
          >
            Top Countries to Study Abroad
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country) => (
            <div
              key={country.name}
              className="country-card text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={`${country.image}`}
                alt={country.alt}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-xl mb-2">{country.name}</h3>
              <p>{country.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Study Abroad Universities Section */}
      <section
        className="py-16 max-container"
        aria-label="Top Universities Offering Study Abroad Programs"
      >
        <div className="text-center">
          <h2
            className="inline-block text-3xl lg:text-4xl  font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"
            itemProp="name"
          >
            Top Universities Offering Study Abroad Programs
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {universities.map((university, index) => (
            <div
              key={index}
              className="university-card flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={`${university.image}`}
                alt={university.alt}
                className="w-24 h-24 object-cover rounded-full mr-6"
              />
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  {university.name}
                </h3>
                <p>{university.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudyAbroad;
