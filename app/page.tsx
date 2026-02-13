"use client";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import About from "./components/About";
import Mission from "./components/Mission";
import ServicesAndProducts from "./components/ServicesAndProducts";
import CustomerReviews from "./components/CustomerReviews";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import ProcessTimeline from "./components/ProcessTimeline";
import Pricing from "./components/Pricing";
import ProjectShowcase from "./components/ProjectShowcase";
import LiveChat from "./components/LiveChat";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Hero />
      <Clients />
      <About />
      <ServicesAndProducts />
      <ProcessTimeline />
      <ProjectShowcase />
      <Mission />
      {/* <WhyChooseUs /> */}
      <CustomerReviews />
      <LiveChat />
      <Footer />
    </main>
  );
}
