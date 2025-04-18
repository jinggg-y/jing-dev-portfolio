'use client'

import { useEffect } from "react";

import AOS from "aos"
import "aos/dist/aos.css"; // Import AOS styles

import Image from "next/image";
import profile from "../public/profile.png"
import deloitte from "../public/deloitte.svg"
import dltx from "../public/dltx_logo.jpg"

import { AiFillLinkedin } from "react-icons/ai";
import { BiWinkSmile } from "react-icons/bi";


import AutoplayCarousel from "./components/AutoplayCarousel"
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      disable: function() {
        return window.innerWidth < 768; // Disable AOS on screens smaller than 768px (mobile)
      }
    });
  }, []);

  return (
    <main className="dark:bg-neutral-900">
      <section className="min-h-screen flex flex-col bg-gradient-to-t from-red-200 to-amber-50 dark:from-stone-900 dark:to-stone-700">
        <Navbar />

        <Hero />

        <div className="carousel-container overflow-hidden py-5 w-full h-full mt-auto"> <AutoplayCarousel /> </div>
      </section>

      {/* Expertise */}
      <section className="px-8 py-16 bg-rose-gray md:px-30 lg:px-80 dark:bg-neutral-900">
          <h2 className="text-center leading-12 text-rose-950 font-semibold py-6 dark:text-white" data-aos="fade-up">Deliver impactful solutions.</h2>
          <p className="text-center leading-7 mb-8 max-w-4xl mx-auto md:text-lg" data-aos="fade-up">Adept at software development, optimising workflows, and collaborating with cross-functional teams to deliver solutions. By aligning technology with business objectives, I drive digital transformation while maintaining compliance and security in an evolving IT landscape. Focusing on:</p>
          <div className="lg:grid lg:grid-cols-2">
          <div className="p-8">
            <h3 className="text-2xl py-2 text-rose-950 dark:text-white" data-aos="fade-up">Technology</h3>
            <p className="leading-7 md:text-lg" data-aos="fade-up">I have expertise in <span className="font-bold">AWS, Azure, and application delivery</span>, ensuring scalable and secure solutions. My technical skills in <span className="font-bold">web development, databases, Python, and Java</span> enable me to understand the tech stack and requirements, facilitating effective solution design. With my robust foundation in technology, I bridge the gap between businesses and technology, delivering optimised, efficient, and impactful solutions tailored to business needs.</p>
          </div>

          <div className="p-8">
            <h3 className="text-2xl text-rose-950 dark:text-white py-2" data-aos="fade-up">Software Development</h3>
            <p className="leading-7 md:text-lg" data-aos="fade-up">In software development, I design and build solutions that address complex business challenges through robust and scalable applications. I specialise in structured problem-solving and systematic analysis to deliver high-quality code. My expertise spans <span className="font-bold">full-stack development, user-centric design, and software delivery lifecycle management,</span> ensuring seamless deployment and measurable value creation.</p>
          </div>

          <div className="p-8">
            <h3 className="text-2xl text-rose-950 dark:text-white py-2" data-aos="fade-up">Stakeholder Engagement</h3>
            <p className="leading-7 md:text-lg" data-aos="fade-up">I collaborate with global and local clients across diverse industries to deliver value-driven solutions. By actively engaging with stakeholders, I ensure alignment between business needs and technology strategies, fostering<span className="font-bold"> seamless communication</span> and  <span className="font-bold">informed decision-making.</span> My approach emphasises <span className="font-bold">quality, collaboration, and user-centric outcomes,</span> ensuring that solutions meet both business objectives and end-user expectations while driving efficiency and innovation.</p>
          </div>

          <div className="p-8">
            <h3 className="text-2xl text-rose-950 dark:text-white py-2" data-aos="fade-up">Project Management</h3>
            <p className="leading-7 md:text-lg" data-aos="fade-up">With a strong foundation in <span className="font-bold"> Agile, Scrum, and Waterfall</span> methodologies, I have  engaged as PMO in multiple deliveries with cross-functional teams for global clients. I ensure timely and efficient execution while <span className="font-bold">maintaining stringent governance</span> and <span className="font-bold">security protocols</span>. My experience includes producing detailed reports, managing Jira tickets, and facilitating key stakeholder engagements to ensure alignment between business objectives and technology solutions.</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-8 py-16 md:px-30 lg:px-80">
        <h2 className="p-8 leading-12 dark:text-stone-400">I have <span className="font-semibold text-rose-950 dark:text-white"> experience</span> at:</h2>

        <div className="lg:flex">
          <div className="rounded-xl shadow-xl mx-8 mb-6 p-8 bg-white lg:w-150 dark:bg-stone-800 dark:border-1 dark:border-stone-700">
            <Image src={deloitte} width={150} height={150} className="bg-black px-4 py-3 rounded-lg mb-2" />
            <p className="py-3 font-semibold md:text-lg">Engineering Strategy & Architecture Advisory Analyst</p>
            <p className="pb-3 md:text-lg">Deloitte, Brisbane</p>
            <p className="pb-3 md:text-lg">Cloud and Engineering Practice</p>
          </div>
          <div className="rounded-xl shadow-xl mx-8 mb-6 p-8 bg-white lg:w-150 dark:bg-stone-800 dark:border-1 dark:border-stone-700">
            <Image src={dltx} width={150} height={100} />
            <p className="py-3 font-semibold md:text-lg">Junior Business Analyst</p>
            <p className="pb-3 md:text-lg">DLTx Labs</p>
            <p className="pb-3 md:text-lg">Blockchain and Fintech Industry</p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-8 py-16 bg-rose-gray md:px-30 lg:px-80 dark:bg-neutral-900">
        <h2 className="p-8 leading-12 dark:text-stone-400">I've been in <span className="font-semibold text-rose-950 dark:text-white"> various industries</span> and <span className="font-semibold text-rose-950 dark:text-white">domains</span>:</h2>

        <div className="lg:flex">
          <div className="rounded-xl shadow-xl mx-8 mb-6 p-8 bg-white lg:w-150 dark:bg-stone-800 dark:border-1 dark:border-stone-700">
            <p className="py-3 font-semibold text-lg md:text-xl dark:text-white">Healthcare Industry</p>
            <p className="pb-3 md:text-lg">Conducted due diligence and execution on data migration for a merge and acquisition in the highly regulated environment.</p>
          </div>
          <div className="rounded-xl shadow-xl mx-8 mb-6 p-8 bg-white lg:w-150 dark:bg-stone-800 dark:border-1 dark:border-stone-700">
            <p className="py-3 font-semibold text-lg md:text-xl dark:text-white">Blockchain and Fintech Industry</p>
            <p className="pb-3 md:text-lg">Performed agile deliveries across the Software Delivery Life Cycle (SDLC). Collaborated with various stakeholders for requirement elicitation and software quality assurance.</p>
          </div>
          <div className="rounded-xl shadow-xl mx-8 mb-6 p-8 bg-white lg:w-150 dark:bg-stone-800 dark:border-1 dark:border-stone-700">
            <p className="py-3 font-semibold text-lg md:text-xl dark:text-white">Public Sector</p>
            <p className="pb-3 md:text-lg">Delivered Statements of Work (SOW) and proposal presentation packs for M365 migration projects.</p>
          </div>
        </div>
      </section>

      <footer className="p-8 flex justify-end items-center bg-white dark:bg-black">
        <p>Designed and Developed by Jing Yang</p>
        <BiWinkSmile className="ml-2 text-xl"/>
      </footer>
    </main>
  );
}
