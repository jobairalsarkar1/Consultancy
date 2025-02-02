import { abroad_study, abroad_work, abroad_live } from "../assets";
import { Helmet } from "react-helmet";

const Consultation = () => {
  return (
    <section className="max-container min-h-screen bg-[#f7f9f9] font-sans py-16 px-6 mt-20">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Consultation Services | Care2 Training Consultancy</title>
        <meta
          name="description"
          content="Explore Care2 Training Consultancy's expert consultation services for study abroad, work abroad, and immigration services. Get guidance for your overseas opportunities."
        />
        <meta
          name="keywords"
          content="study abroad, work abroad, immigration services, consultancy services, visa assistance, relocation services, career guidance"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Consultation Services | Care2 Training Consultancy"
        />
        <meta
          property="og:description"
          content="Get expert consultation for studying, working, and relocating abroad with Care2 Training Consultancy."
        />
      </Helmet>

      <div className="text-center">
        <h1
          className="head-text inline-block lg:text-5xl text-center text-[#2d6a4f] mb-7 mt-5 font-semibold bg-gradient-to-r from-[#1d86ef] to-[#0f53db] bg-clip-text text-transparent"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          Our Consultation Services
        </h1>
      </div>

      <div className="space-y-12">
        {/* Study Abroad */}
        <article
          className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden p-6 lg:p-8 hover:shadow-2xl transition duration-300"
          aria-labelledby="study-abroad-title"
        >
          <img
            src={abroad_study}
            alt="Study abroad guidance at Care2 Training Consultancy"
            className="w-full lg:w-[40%] h-72 object-cover rounded-lg"
            loading="lazy"
          />
          <div className="flex flex-col justify-center py-6 lg:p-8 w-full lg:w-[60%]">
            <div className="text-start">
              <h2
                id="study-abroad-title"
                className="inline-block text-2xl font-semibold bg-gradient-to-r from-[#1d86ef] to-[#0f53db] bg-clip-text text-transparent mb-2"
              >
                Study Abroad Consultation
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Care2 Training Consultancy</strong> provides expert
              guidance for students aspiring to study in top universities
              worldwide. Our team helps with{" "}
              <strong>university selection</strong>,{" "}
              <strong>application processes</strong>,{" "}
              <strong>visa support</strong>, and{" "}
              <strong>scholarship opportunities</strong> to make international
              education accessible.
            </p>
            <p className="text-gray-700 mt-2 leading-relaxed">
              We specialize in placements in{" "}
              <strong>USA, Canada, UK, and Australia</strong>, ensuring a smooth
              academic transition. Our expert counselors assist with{" "}
              <strong>course selection</strong>,{" "}
              <strong>personal statement writing</strong>, and{" "}
              <strong>interview preparation</strong>.
            </p>
            <a
              href="/study-abroad"
              className="mt-4 w-fit bg-gradient-to-r from-[#1d86ef] to-[#0f53db] text-white py-2 px-6 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-[#1d86ef] hover:to-[#0f53db] hover:shadow-lg transition duration-300"
              aria-label="Learn more about study abroad consultation"
            >
              Explore Study Abroad Services
            </a>
          </div>
        </article>

        {/* Work Abroad */}
        <article
          className="flex flex-col lg:flex-row-reverse items-center bg-white shadow-lg rounded-xl overflow-hidden p-6 lg:p-8 hover:shadow-2xl transition duration-300"
          aria-labelledby="work-abroad-title"
        >
          <img
            src={abroad_work}
            alt="Work abroad job placement services at Care2 Training Consultancy"
            className="w-full lg:w-[40%] h-64 object-cover rounded-lg"
            loading="lazy"
          />
          <div className="flex flex-col justify-center py-6 lg:p-8 w-full lg:w-[60%]">
            <div className="text-start">
              <h2
                id="work-abroad-title"
                className="text-2xl inline-block font-semibold bg-gradient-to-r from-[#1d86ef] to-[#0f53db] bg-clip-text text-transparent mb-2"
              >
                Work Abroad Assistance
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Looking for a career opportunity overseas?{" "}
              <strong>Care2 Training Consultancy</strong> offers tailored
              support to professionals seeking jobs in{" "}
              <strong>high-demand global industries</strong>. We assist with{" "}
              <strong>resume building</strong>,{" "}
              <strong>interview coaching</strong>,<strong> work visas</strong>,
              and <strong>job placements</strong>.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Our strong network with <strong>global recruiters</strong>{" "}
              connects skilled professionals to employers in fields such as{" "}
              <strong>IT, healthcare, engineering, and finance</strong>.
            </p>
            <a
              href="/work-abroad"
              className="mt-6 w-fit bg-gradient-to-r from-[#1d86ef] to-[#0f53db] text-white py-2 px-6 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-[#1d86ef] hover:to-[#0f53db] hover:shadow-lg transition duration-300"
              aria-label="Learn more about work abroad services"
            >
              Discover Work Abroad Opportunities
            </a>
          </div>
        </article>

        {/* Live Abroad */}
        <article
          className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden p-6 lg:p-8 hover:shadow-2xl transition duration-300"
          aria-labelledby="live-abroad-title"
        >
          <img
            src={abroad_live}
            alt="Relocation and immigration services at Care2 Training Consultancy"
            className="w-full lg:w-[40%] h-64 object-cover rounded-lg"
            loading="lazy"
          />
          <div className="flex flex-col justify-center py-6 lg:p-8 w-full lg:w-[60%]">
            <div className="text-start">
              <h2
                id="live-abroad-title"
                className="text-2xl inline-block font-semibold bg-gradient-to-r from-[#1d86ef] to-[#0f53db] bg-clip-text text-transparent mb-2"
              >
                Relocation & Immigration Services
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Planning to relocate permanently? Our{" "}
              <strong>immigration experts</strong> at{" "}
              <strong>Care2 Training Consultancy</strong> assist individuals and
              families with <strong>residency applications</strong>,{" "}
              <strong>visa extensions</strong>, and{" "}
              <strong>permanent settlement planning</strong>.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              We provide comprehensive guidance on{" "}
              <strong>legal procedures</strong>,{" "}
              <strong>housing assistance</strong>, and{" "}
              <strong>cultural adaptation</strong>—ensuring a smooth transition
              to your new home.
            </p>
            <a
              href="/live-abroad"
              className="mt-6 w-fit bg-gradient-to-r from-[#1d86ef] to-[#0f53db] text-white py-2 px-6 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-[#1d86ef] hover:to-[#0f53db] hover:shadow-lg transition duration-300"
              aria-label="Learn more about relocation and immigration services"
            >
              Get Immigration & Relocation Help
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Consultation;
