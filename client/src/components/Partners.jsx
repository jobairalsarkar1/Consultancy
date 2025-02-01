import {
  FaApple,
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
  FaFacebook,
} from "react-icons/fa";

const Partners = () => {
  // Data array for companies and their actual brand colors
  const partners = [
    {
      name: "Apple",
      icon: <FaApple className="text-[#A2AAAD] text-6xl mb-4" />,
    }, // Apple color
    {
      name: "Google",
      icon: <FaGoogle className="text-[#4285F4] text-6xl mb-4" />,
    }, // Google color
    {
      name: "Amazon",
      icon: <FaAmazon className="text-[#FF9900] text-6xl mb-4" />,
    }, // Amazon color
    {
      name: "Microsoft",
      icon: <FaMicrosoft className="text-[#F25022] text-6xl mb-4" />,
    }, // Microsoft color
    {
      name: "Facebook",
      icon: <FaFacebook className="text-[#1877F2] text-6xl mb-4" />,
    }, // Facebook color
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Employers</h2>
        <div className="flex justify-center gap-16 flex-wrap">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              {partner.icon}
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
