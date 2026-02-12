"use client";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import About from "./components/About";
import Ourproduct from "./components/Ourproduct";
import Mission from "./components/Mission";
import Services from "./components/Services";
import Ourprocess from "./components/Ourprocess";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Hero />
      <Clients />
      <About />
      <Services />
      <Ourprocess />
      <Mission />
      <Ourproduct />

    </main>
  );
}
