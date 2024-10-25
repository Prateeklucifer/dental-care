import AboutCmp from "./components/About";
import BlogsCmp from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutCmp />
      <BlogsCmp />
      <Contact />
      <Footer />
    </>
  );
}
