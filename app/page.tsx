"use client";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import About from "./components/About";
import Ourproduct from "./components/Ourproduct";
import Mission from "./components/Mission";
import Services from "./components/Services";
import CustomerReviews from "./components/CustomerReviews";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Hero />
      <Clients />
      <About />
      <Services />
      <Mission />
      <Ourproduct />
      <WhyChooseUs />
      <CustomerReviews />
      <Footer />
    </main>
  );
}
