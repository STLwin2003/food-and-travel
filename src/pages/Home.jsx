import Navbar from "../components/Navbar";
import Recent from "../components/home/Recent";
import ContactUs from "../components/home/ContactUs";
import Footer from "../components/Footer";
import AboutUs from "../components/home/AboutUs";
import Banner from "../components/home/Banner";
import Collections from "../components/home/Collections";
import RatingItem from "../components/home/RatingItem";
import Local from "../components/home/Local";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <RatingItem />
      <Collections />
      <Local />
      <Recent />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
};
export default Home;
