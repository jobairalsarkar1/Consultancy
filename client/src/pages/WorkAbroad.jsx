import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaFileAlt,
  FaComments,
  FaUsers,
  FaGlobe,
  FaCheckCircle,
} from "react-icons/fa";
import { abroad_work } from "../assets";

const WorkAbroad = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Work Abroad with Expert Assistance | Care2 Training Consultancy
        </title>
        <meta
          name="description"
          content="Get expert job placement assistance and work abroad with Care2 Training Consultancy. Unlock global career opportunities today."
        />
        <meta
          name="keywords"
          content="work abroad, job placement, international career, global jobs, resume building, interview coaching"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="hero relative h-[500px] lg:h-[550px] pt-36 sm:pt-30 text-center text-white max-container flex flex-col items-center justify-center"
        aria-label="Work Abroad Hero Section"
      >
        {/* Background image */}
        {/* <div className="absolute inset-0 w-full h-full bg-cover bg-center">
          <img
            src={abroad_work}
            alt="Study Abroad Background"
            className="w-full h-full object-cover opacity-100" // Apply opacity to the image only
            aria-hidden="true"
          />
        </div> */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 opacity-100`}
            style={{
              backgroundImage: `url(${abroad_work})`,
              // filter: fade ? "blur(0px)" : "blur(10px)",
              filter: "blur(2px)",
              transition: "opacity 1s ease-in-out, filter 0.5s ease-in-out",
            }}
          ></div>
        </div>

        <h1
          className="text-4xl z-10 lg:text-5xl xl:text-6xl font-extrabold mb-4 mt-10 text-white font-heading"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          itemProp="headline"
        >
          Unlock Global Career Opportunities
        </h1>
        <p className="text-lg z-10 sm:text-2xl font-sans mb-6 px-6 sm:px-32 max-w-full sm:max-w-5xl mx-auto">
          Care2 Training Consultancy offers expert guidance to help you work
          abroad and grow your career globally.
        </p>
        <Link
          to="/work-live-abroad/apply"
          className="mt-4 w-fit z-10 font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-blue-500 hover:to-blue-700 hover:shadow-lg transition duration-300"
          title="Start your study abroad journey now"
        >
          Let’s Get You There !
        </Link>
      </section>

      {/* Motivation Section */}
      <section
        className="text-center py-16 max-container"
        aria-label="Why Study Abroad Section"
      >
        <h2
          className="inline-block text-3xl lg:text-4xl font-extrabold mt-3 mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"
          itemProp="name"
        >
          Why Work Abroad?
        </h2>
        <p className="text-lg md:text-xl max-w-7xl mx-auto mb-6">
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
      <section className="py-16 max-container text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto text-center">
          <h2 className="inline-block text-3xl lg:text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Our Expert Services for Your Career Growth
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaBriefcase,
                title: "Job Placement Assistance",
                desc: "We connect you with top employers abroad for exciting career opportunities.",
              },
              {
                icon: FaFileAlt,
                title: "Resume Building",
                desc: "Craft a standout resume tailored for international job markets.",
              },
              {
                icon: FaComments,
                title: "Interview Coaching",
                desc: "One-on-one coaching to help you excel in global job interviews.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
              >
                <service.icon className="text-blue-600 text-4xl w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="text-center bg-gray-100 py-16 max-container">
        <div className="container mx-auto text-center">
          <h2 className="inline-block text-3xl lg:text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaUsers,
                title: "Expert Guidance",
                desc: "Years of experience in global job placement and visa support.",
              },
              {
                icon: FaGlobe,
                title: "Global Network",
                desc: "Connections with top employers worldwide for job opportunities.",
              },
              {
                icon: FaCheckCircle,
                title: "Proven Success",
                desc: "Hundreds of professionals have successfully built their careers abroad with us.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
              >
                <feature.icon className="text-blue-600 text-4xl w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      {/* <section className="text-center py-16 max-container bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="inline-block text-3xl lg:text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "Software Engineer, Germany",
                quote:
                  "Thanks to Care2 Training Consultancy, I secured a job in Germany and started my career!",
              },
              {
                name: "Jane Smith",
                role: "Marketing Manager, Singapore",
                quote:
                  "The interview coaching I received was fantastic! I now work in Singapore.",
              },
              {
                name: "Michael Lee",
                role: "Graphic Designer, Canada",
                quote:
                  "Care2 helped me create the perfect resume. Now I'm working in Canada!",
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
      </section> */}
    </div>
  );
};

export default WorkAbroad;
