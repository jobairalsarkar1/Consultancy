import { about_cover } from "../assets";
import { FaUsers, FaHandshake, FaGraduationCap, FaGlobe } from "react-icons/fa"; // Icons for visual appeal
import { Helmet } from "react-helmet"; // Import React Helmet for SEO

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-[#f7f9f9] py-16">
      <Helmet>
        <title>About Us | Care2 Training Consultancy</title>
        <meta
          name="description"
          content="Care2 Training Consultancy provides expert guidance and personalized support to students seeking study abroad, work abroad, and relocation opportunities."
        />
        <meta
          name="keywords"
          content="study abroad, visa assistance, career guidance, immigration support, work abroad"
        />
        <meta
          property="og:title"
          content="About Us | Care2 Training Consultancy"
        />
        <meta
          property="og:description"
          content="We are committed to providing expert visa assistance and guiding students through every step of their study abroad journey."
        />
        <meta property="og:image" content={about_cover} />
        <meta
          property="og:url"
          content="https://www.care2consultancy.com/about"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="max-container mx-auto xl:mx-20 font-sans">
        <section className="text-center py-16 max-container">
          <h1
            className="head-text py-2 inline-block lg:text-5xl text-center text-[#2d6a4f] mb-4 font-semibold bg-gradient-to-r from-[#00BFFF] to-[#1E90FF] bg-clip-text text-transparent"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            About Care2 Training Consultancy
          </h1>
          <p className="text-xl max-w-4xl mx-auto mb-5">
            We are committed to providing expert visa assistance and guiding
            students through every step of their study abroad journey. Whether
            it's about academic programs, visa applications, or career
            opportunities, we are your trusted partner every step of the way.
          </p>
        </section>

        {/* Who We Are */}
        <div className="flex flex-col xl:flex-row items-center gap-6 lg:gap-12 mb-12 border rounded-lg bg-white p-8">
          <img
            src={about_cover}
            alt="Who We Are Illustration"
            className="w-full xl:w-1/3 h-64 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
          <div className="xl:w-2/3">
            <div className="text-start">
              <h2 className="text-3xl inline-block font-semibold mb-4 bg-gradient-to-r from-[#00BFFF] to-[#1E90FF] bg-clip-text text-transparent">
                Who We Are
              </h2>
            </div>
            <p className="text-gray-800 text-lg leading-relaxed text-justify">
              At <strong>Care2 Training Consultancy</strong>, we are a dedicated
              team of experts committed to providing seamless support for
              individuals looking to study, work, and live abroad. With years of
              experience in global education and immigration services, we
              simplify complex procedures like visa applications, education
              program placements, and career guidance. We pride ourselves on
              being a trusted partner who helps you make informed decisions and
              take confident steps toward your international future.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="flex flex-col xl:flex-row-reverse items-center gap-6 lg:gap-12 mb-12 border rounded-lg bg-white p-8">
          <img
            src={about_cover}
            alt="Our Mission Illustration"
            className="w-full xl:w-1/3 h-64 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
          <div className="xl:w-2/3">
            <div className="text-start">
              <h2 className="text-3xl inline-block font-semibold mb-4 bg-gradient-to-r from-[#00BFFF] to-[#1E90FF] bg-clip-text text-transparent">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-800 text-lg leading-relaxed text-justify">
              Our mission at <strong>Care2 Training Consultancy</strong> is to
              empower individuals by offering personalized, expert guidance
              throughout their journey to study, work, or live abroad. We aim to
              bridge the gap between aspirations and success by helping our
              clients navigate the complexities of education, visa processes,
              career opportunities, and relocation. We believe in making every
              client’s experience smooth, impactful, and successful, ensuring
              they achieve their goals with confidence and ease.
            </p>
          </div>
        </div>

        {/* Why Choose Us - With Icons */}
        <div className="bg-[#f4f8fa] px-12 pb-12 pt-8 mb-16 rounded-xl shadow-lg transition-shadow border duration-300">
          <div className="text-center">
            <h2 className="text-3xl inline-block font-semibold text-center mb-8 bg-gradient-to-r from-[#00BFFF] to-[#1E90FF] bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Personalized Support */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaUsers className="text-5xl text-[#1E90FF] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-[#2d6a4f] mb-2">
                Personalized Support
              </h3>
              <p className="text-gray-700">
                We offer one-on-one consultations to understand your unique
                needs and aspirations.
              </p>
            </div>
            {/* Trusted Partnerships */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaHandshake className="text-5xl text-[#1E90FF] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-[#2d6a4f] mb-2">
                Trusted Partnerships
              </h3>
              <p className="text-gray-700">
                We work closely with renowned global institutions and employers
                to create opportunities.
              </p>
            </div>
            {/* Expert Guidance */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaGraduationCap className="text-5xl text-[#1E90FF] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-[#2d6a4f] mb-2">
                Expert Guidance
              </h3>
              <p className="text-gray-700">
                Our team has years of experience in global education,
                immigration, and career placement.
              </p>
            </div>
            {/* Global Reach */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaGlobe className="text-5xl text-[#1E90FF] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-[#2d6a4f] mb-2">
                Global Reach
              </h3>
              <p className="text-gray-700">
                We have a wide network across multiple countries, connecting you
                with global opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="text-center">
          <div className="text-center">
            <h2 className="text-3xl inline-block font-semibold mb-8 bg-gradient-to-r from-[#00BFFF] to-[#1E90FF] bg-clip-text text-transparent">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Integrity */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaHandshake className="text-5xl text-[#1E90FF] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-[#2d6a4f] mb-4">
                Integrity
              </h3>
              <p className="text-gray-700">
                We uphold honesty, transparency, and ethical practices in
                everything we do.
              </p>
            </div>
            {/* Commitment */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaUsers className="text-5xl text-[#1E90FF] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-[#2d6a4f] mb-4">
                Commitment
              </h3>
              <p className="text-gray-700">
                We are dedicated to helping our clients succeed in their global
                ventures.
              </p>
            </div>
            {/* Excellence */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaGlobe className="text-5xl text-[#1E90FF] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-[#2d6a4f] mb-4">
                Excellence
              </h3>
              <p className="text-gray-700">
                We aim for the highest standards of service to ensure a
                successful journey for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
