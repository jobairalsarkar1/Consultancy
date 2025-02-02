import { Helmet } from "react-helmet";
import {
  About,
  ChooseUs,
  Services,
  Contact,
  Hero,
  Reviews,
  Marquee,
} from "../components";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Care2 Training Consultancy</title>
        <meta name="description" content="Home Care2 Training Consultancy." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Hero />
      <About />
      <Services />
      <ChooseUs />
      <Reviews />
      <Contact />
      <Marquee />
    </>
  );
};

export default Home;
