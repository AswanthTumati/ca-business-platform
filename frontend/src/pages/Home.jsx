import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import TestimonialsPreview from "../components/home/TestimonialsPreview";
import CallToAction from "../components/home/CallToAction";

function Home() {
  return (
    <>
      <Hero />

      <AboutPreview />

      <ServicesPreview />

      <TestimonialsPreview />

      <CallToAction />
    </>
  );
}

export default Home;