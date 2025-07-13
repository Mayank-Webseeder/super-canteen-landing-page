'use client';
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import About from "@/Components/About";
import Works from "@/Components/Works";
import GetInTouch from "@/Components/GetInTouch";
import Store from "@/Components/Store";


export default function Home() {
  return (
    <>
    <div className="min-h-screen w-full flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Works />
        <Store />
        <GetInTouch />
      </main> 
      <Footer/>
    </div>
    </>
  );
}
