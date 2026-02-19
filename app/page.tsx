"use client";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import About from "./components/About";
import Mission from "./components/Mission";
import ServicesAndProducts from "./components/ServicesAndProducts";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import ProcessTimeline from "./components/ProcessTimeline";
import Pricing from "./components/Pricing";
import ProjectShowcase from "./components/ProjectShowcase";
import LiveChat from "./components/LiveChat";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><ProjectShowcase /></section>
      <section id="services"><ServicesAndProducts /></section>
      <section id="clients"><Clients /></section>
      <section id="process"><ProcessTimeline /></section>
      <section id="mission"><Mission /></section>
      <section id="testimonials"><CustomerReviews /></section>
      <LiveChat />
      <section id="contact"><Footer /></section>
    </main>
  );
}
