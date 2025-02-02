import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  About,
  ChooseUs,
  Services,
  Contact,
  Footer,
  StudyAbroadForm,
  WorkLiveAbroadForm,
  Widget,
} from "./components";
import {
  AboutUs,
  AdminPanel,
  Consultation,
  Home,
  JobDetails,
  Jobs,
  LiveAbroad,
  PrivacyPolicy,
  StudyAbroad,
  WorkAbroad,
} from "./pages";

const App = () => {
  const phoneNumber = "+880123456789";

  return (
    <Router>
      <main>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job-details/:jobId" element={<JobDetails />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/work-abroad" element={<WorkAbroad />} />
          <Route path="/live-abroad" element={<LiveAbroad />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/study-abroad/apply" element={<StudyAbroadForm />} />
          <Route
            path="/work-live-abroad/apply"
            element={<WorkLiveAbroadForm />}
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/admin-panel/*" element={<AdminPanel />} />
        </Routes>
        <Footer />
        <Widget phoneNumber={phoneNumber} />
      </main>
    </Router>
  );
};

export default App;
