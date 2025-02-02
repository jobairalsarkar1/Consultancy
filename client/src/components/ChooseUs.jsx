import { useEffect, useState } from "react";
import { MdCheckCircle, MdArrowDropDown } from "react-icons/md";
import { FaPlus, FaPercent } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { benefits } from "../utils";

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 1000;
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);
    }
  }, [inView, value]);

  return (
    <h2 ref={ref} className="text-2xl sm:text-4xl font-bold text-white">
      {count}
    </h2>
  );
};

const ChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-container bg-[#f7f9f9] py-12 px-8">
      <h1 className="head-text lg:text-4xl text-start text-[#2d6a4f] mb-8 py-2 font-semibold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
        Why Choose Care2 Training Consultancy?
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between">
        {/* Benefits List with Accordion */}
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-lg text-gray-700">
              <div
                className="flex items-center justify-between cursor-pointer p-5 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300"
                onClick={() => handleToggle(index)}
              >
                <div className="flex items-center space-x-4">
                  <MdCheckCircle
                    className="h-7 w-7 text-green-500"
                    aria-label="check icon"
                  />
                  <span className="text-xl sm:text-2xl font-sans font-medium text-gray-800">
                    {benefit.question}
                  </span>
                </div>
                <MdArrowDropDown
                  className={`w-7 h-7 text-gray-600 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`transition-all duration-500 ease-out overflow-hidden ${
                  activeIndex === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="mt-3 pl-10 text-gray-600">{benefit.answer}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Achievements/Statistics */}
        <div className="grid grid-cols-2 gap-6">
          <div className="sm:row-span-2 bg-gradient-to-r from-blue-600 to-blue-800 p-10 rounded-xl shadow-lg text-center flex flex-col items-center justify-center">
            <span className="flex items-center justify-center text-white">
              <AnimatedNumber value={2000} />
              <FaPlus className="w-6 h-6 ml-2" />
            </span>
            <p className="text-xl sm:text-2xl font-semibold text-white">
              Total Clients
            </p>
          </div>
          <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-8 rounded-lg shadow-md text-center flex flex-col items-center justify-center">
            <span className="flex items-center justify-center text-white">
              <AnimatedNumber value={98} />
              <FaPercent className="w-6 h-6 ml-2" />
            </span>
            <p className="text-xl sm:text-2xl font-semibold text-white">
              Success Rate
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1 bg-gradient-to-r from-black to-gray-800 p-8 rounded-lg shadow-md text-center flex flex-col items-center justify-center">
            <span className="flex items-center justify-center text-white">
              <AnimatedNumber value={10} />
              <FaPlus className="w-6 h-6 ml-2" />
            </span>
            <p className="text-xl sm:text-2xl font-semibold text-white">
              Experience (Years)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
