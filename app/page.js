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
import DarkModeHandler from "./components/DarkModeHandler"
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

        {/* <nav className="p-5 flex justify-between md:px-9">
          <h1 className="text-2xl font-[marcellus] text-rose-950 font-bold dark:text-rose-500">JY</h1>
          <ul className="flex items-center">
            <li>
              <DarkModeHandler />
            </li>
            <li>
              <a className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md ml-6 text-white" href="jingyang-cv.pdf" download>Resume</a>
            </li>
          </ul>
        </nav> */}

        <div className="px-5 md:px-30 flex flex-col flex-grow">
          {/* hero */}
          <div className="text-center p-7">
            <div className="relative mx-auto w-60 h-60 mb-3 bg-gradient-to-tr from-orange-200 rounded-t-full md:w-80 md:h-80">
              <Image className="pt-4" src={profile} />
            </div>

            <h2 className="text-3xl py-5 mt-10 text-rose-900 font-bold md:text-4xl  lg:text-5xl dark:text-white">
              I'm Jing Yang
              <a className="text-blue-900 hover:text-blue-700 text-2xl inline-block align-middle pl-2 lg:text-4xl dark:text-blue-400" href="https://www.linkedin.com/in/jinggg">
                <AiFillLinkedin />
              </a>
            </h2>
            <h3 className="text-2xl text-neutral-700 leading-7.5 font-semibold lg:text-3xl dark:text-red-200">ICT Business Analysis.</h3>

            <p className="text-md pt-10 leading-7 max-w-2xl mx-auto lg:text-lg" data-aos="flip-up" data-aos-duration="1000">Passionate about technology transformation and digital solutions, I am bringing over 2 years of experience in business analysis and consulting. <span className="hidden sm:inline">With hands-on experience in Agile and Waterfall methodologies, cloud adoption, data migration, and process optimisation, I excel in delivering high-quality, outcome-orientated solutions that drive efficiency, innovation, and business success.</span>
            </p>
            <p className="text-md pt-4 leading-7 lg:text-lg max-w-2xl mx-auto" data-aos="flip-up" data-aos-duration="1000">Let's connect and make an impact!</p>
          </div>
        </div>
        <div className="carousel-container overflow-hidden py-5 w-full h-full mt-auto"> <AutoplayCarousel /> </div>
      </section>

      {/* Expertise */}
      <section className="px-8 py-16 bg-rose-gray md:px-30 lg:px-80 dark:bg-neutral-900">
          <h2 className="text-center leading-12 text-rose-950 font-semibold py-6 dark:text-white" data-aos="fade-up">Deliver impactful solutions.</h2>
          <p className="text-center leading-7 mb-8 max-w-4xl mx-auto md:text-lg" data-aos="fade-up">By aligning technology with business objectives, I drive digital transformation, optimise processes, and enable organisations to achieve sustainable growth while maintaining compliance and security in an evolving IT landscape. Focusing on:</p>
          <div className="lg:grid lg:grid-cols-2">
          <div className="p-8">
            <h3 className="text-2xl py-2 text-rose-950 dark:text-white" data-aos="fade-up">Technology</h3>
            <p className="leading-7 md:text-lg" data-aos="fade-up">I have expertise in <span className="font-bold">AWS, Azure, and application delivery</span>, ensuring scalable and secure solutions. My technical skills in <span className="font-bold">web development, databases, Python, and Java</span> enable me to understand the tech stack and requirements, facilitating effective solution design. With my robust foundation in technology, I bridge the gap between businesses and technology, delivering optimised, efficient, and impactful solutions tailored to business needs.</p>
          </div>

          <div className="p-8">
            <h3 className="text-2xl text-rose-950 dark:text-white py-2" data-aos="fade-up">Consulting</h3>
            <p className="leading-7 md:text-lg" data-aos="fade-up">In IT consulting, I <span className="font-bold">analyse business challenges, assess technology landscapes, and provide strategic recommendations</span> for optimised solutions. I excel in <span className="font-bold">structural problem-solving </span> and <span className="font-bold"> systematic analysis</span> to drive meaningful change. My expertise includes cloud adoption, application delivery, IT service management, and data migration, ensuring seamless implementation and value realisation.</p>
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
        <h2 className="p-8 leading-12 dark:text-stone-400">I've worked as a <span className="font-semibold text-rose-950 dark:text-white"> consultant</span> or a <span className="font-semibold text-rose-950 dark:text-white">business analyst</span> for:</h2>

        <div className="lg:flex">
          <div className="rounded-xl shadow-xl mx-8 mb-6 p-8 bg-white lg:w-150 dark:bg-stone-800 dark:border-1 dark:border-stone-700">
            <Image src={deloitte} width={150} height={150} className="bg-black px-4 py-3 rounded-lg mb-2" />
            <p className="py-3 font-semibold md:text-lg">Engineering Strategy & Architecture Advisory Analyst</p>
            <p className="pb-3 md:text-lg">Cloud and Engineering Practice</p>
          </div>
          <div className="rounded-xl shadow-xl mx-8 mb-6 p-8 bg-white lg:w-150 dark:bg-stone-800 dark:border-1 dark:border-stone-700">
            <Image src={dltx} width={150} height={100} />
            <p className="py-3 font-semibold md:text-lg">Junior Business Analyst</p>
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
