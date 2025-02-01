import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Care2 Training Consultancy</title>
        <meta
          name="description"
          content="Read the privacy policy of Care2 Training Consultancy and learn how we collect, use, and protect your personal information."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://care2training.com/privacy-policy" />
      </Helmet>

      <section className="max-container min-h-screen mt-16">
        <div className="max-w-7xl mx-auto px-6 mt-5 mb-5">
          <div className="text-center mb-12">
            <h1
              className="head-text inline-block lg:text-4xl text-center text-[#2d6a4f] font-semibold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
            >
              Privacy & Policy
            </h1>
            <p className="text-xl text-gray-700 mt-2">
              Your privacy is important to us. Please read our privacy policy to
              learn how we handle your data.
            </p>
          </div>

          {/* Main content */}
          <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Introduction */}
            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2
                className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text mb-4"
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  lineHeight: "1.2",
                }}
              >
                Introduction
              </h2>
              <p className="text-lg text-gray-700">
                At Care2 Training Consultancy, we value your privacy and are
                committed to protecting your personal information. This policy
                outlines how we collect, use, and safeguard your data when you
                visit our website or use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2
                className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text mb-4"
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  lineHeight: "1.2",
                }}
              >
                Information We Collect
              </h2>
              <p className="text-lg text-gray-700">
                We collect information such as your name, email address, phone
                number, and other personal details necessary to provide our
                consultancy services. This information is collected through
                forms and user interactions on our website.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2
                className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text mb-4"
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  lineHeight: "1.2",
                }}
              >
                How We Use Your Information
              </h2>
              <p className="text-lg text-gray-700">
                The information we collect is used to communicate with you,
                provide relevant services, process applications, and improve
                your experience with Care2 Training Consultancy.
              </p>
            </section>

            {/* Data Protection */}
            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2
                className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text mb-4"
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  lineHeight: "1.2",
                }}
              >
                How We Protect Your Information
              </h2>
              <p className="text-lg text-gray-700">
                We take appropriate security measures to protect your personal
                data, including encryption and secure storage. We also regularly
                review our systems to ensure they are secure.
              </p>
            </section>

            {/* Your Rights */}
            <section className="bg-white p-6 rounded-lg shadow-lg">
              <h2
                className="text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text mb-4"
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  lineHeight: "1.2",
                }}
              >
                Your Rights
              </h2>
              <p className="text-lg text-gray-700">
                You have the right to access, update, or delete your personal
                data. You can contact us at any time to exercise these rights or
                if you have any concerns regarding your data.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
