import Image from "next/image";
import profile from "../public/profile.png"
import deloitte from "../public/deloitte.svg"
import dltx from "../public/dltx_logo.jpg"

import { AiFillLinkedin } from "react-icons/ai";

import AutoplayCarousel from "./components/AutoplayCarousel"
import DarkModeToggle from "./components/DarkModeToggle"

export default function Home() {
  return (
    <main className="dark:bg-neutral-900">
      <section className="min-h-screen flex flex-col bg-gradient-to-t from-red-200 to-amber-50 dark:from-stone-900 dark:to-stone-700">
        <nav className="p-5 flex justify-between md:px-9">
          <h1 className="text-2xl font-[marcellus] text-rose-950 font-bold dark:text-rose-500">JY</h1>
          <ul className="flex items-center">
            <li>
              <DarkModeToggle />
            </li>
            <li>
              <a className="bg-red-500 px-4 py-2 rounded-md ml-6 text-white" href="#">Resume</a>
            </li>
          </ul>
        </nav>

        <div className="px-5 md:px-30 lg:px-80 flex flex-col flex-grow">
          {/* hero */}
          <div className="text-center p-7">
            <div className="relative pt-5 mx-auto w-80 h-80 mb-3 bg-gradient-to-tr from-orange-200 rounded-t-full">
              {/*relative pt-2 mx-auto w-70 h-70 my-3 bg-gradient-to-tr from-orange-200 to-amber-50  bg-gradient-to-br from-red-200 to-amber-50 rounded-full */}
              <Image className="pt-4" src={profile} />
            </div>

            <h2 className="text-4xl py-5 mt-10 text-rose-900 font-bold md:text-5xl dark:text-white">
              I'm Jing Yang
              <a className="text-blue-900 text-3xl inline-block align-middle pl-2 md:text-4xl dark:text-blue-400" href="https://www.linkedin.com/in/jinggg">
                <AiFillLinkedin />
              </a>
            </h2>
            <h3 className="text-2xl text-neutral-700 leading-7.5 font-semibold md:text-3xl dark:text-stone-400">ICT Business Analysis.</h3>

            <p className="text-md pt-10 leading-7 md:text-lg max-w-2xl mx-auto">Passionate about technology transformation and digital solutions, I am bringing over 2 years of experience in business analysis and consulting.
            </p>
            <p className="text-md pt-4 leading-7 md:text-lg max-w-2xl mx-auto">Let's connect and make an impact!</p>
          </div>
          <div className="carousel-container overflow-hidden p-5 w-full h-full mt-auto"> <AutoplayCarousel /> </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="p-8 bg-rose-gray md:px-30 lg:px-80 dark:bg-neutral-900">
        <div className="text-center p-8">
          <h2 className="text-4xl leading-12 text-rose-950 font-semibold py-5 dark:text-white">Deliver impactful solutions.</h2>
          <p className="leading-7 mb-8 max-w-4xl mx-auto md:text-lg">By aligning technology with business objectives, I drive digital transformation, optimise processes, and enable organisations to achieve sustainable growth while maintaining compliance and security in an evolving IT landscape. Focusing on:</p>
          <h3 className="text-2xl py-2 text-neutral-700 hover:font-semibold dark:text-white">Technology.</h3>
          <h3 className="text-2xl py-2 text-neutral-700 hover:font-semibold dark:text-white">Consulting.</h3>
          <h3 className="text-2xl py-2 text-neutral-700 hover:font-semibold dark:text-white">Agile Delivery.</h3>
          <h3 className="text-2xl py-2 text-neutral-700 hover:font-semibold dark:text-white">Project Management.</h3>
          <h3 className="text-2xl py-2 text-neutral-700 hover:font-semibold dark:text-white mb-5">Stakeholder Engagement.</h3>
        </div>
      </section>

      {/* Experience */}
      <section className="px-8 py-12 md:px-30 lg:px-80">
        <h2 className="p-8 text-4xl leading-12 dark:text-stone-400">I've worked as a <span className="font-semibold text-rose-950 dark:text-white"> consultant</span> or a <span className="font-semibold text-rose-950 dark:text-white">business analyst</span> for:</h2>

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
      <section className="px-8 py-12 bg-rose-gray md:px-30 lg:px-80 dark:bg-neutral-900">
        <h2 className="p-8 text-4xl leading-12 dark:text-stone-400">I've been in <span className="font-semibold text-rose-950 dark:text-white"> various industries</span> and <span className="font-semibold text-rose-950 dark:text-white">domains</span>:</h2>

        <div className="lg:flex">
          <div className="rounded-xl shadow-xl mx-8 mb-6 p-8 bg-white lg:w-150 dark:bg-stone-800 dark:border-1 dark:border-stone-700">
            <p className="py-3 font-semibold md:text-lg">Healthcare Industry</p>
            <p className="pb-3 md:text-lg">Conducted due diligence and execution on data migration for a merge and acquisition in the highly regulated environment.</p>
          </div>
          <div className="rounded-xl shadow-xl mx-8 mb-6 p-8 bg-white lg:w-150 dark:bg-stone-800 dark:border-1 dark:border-stone-700">
            <p className="py-3 font-semibold md:text-lg">Blockchain and Fintech Industry</p>
            <p className="pb-3 md:text-lg">Performed agile deliveries across the Software Delivery Life Cycle (SDLC). Collaborated with various stakeholders for requirement elicitation and software quality assurance.</p>
          </div>
          <div className="rounded-xl shadow-xl mx-8 mb-6 p-8 bg-white lg:w-150 dark:bg-stone-800 dark:border-1 dark:border-stone-700">
            <p className="py-3 font-semibold md:text-lg">Public Sector</p>
            <p className="pb-3 md:text-lg">Delivered Statements of Work (SOW) and proposal presentation packs for M365 migration projects.</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="p-8">
            <h3 className="text-2xl py-2 text-rose-950 dark:text-white">Technology</h3>
            <p className="leading-7 md:text-lg">I have expertise in <span className="font-bold">AWS, Azure, and application delivery</span>, ensuring scalable and secure solutions. My programming skills in <span className="font-bold">Web development, SQL, Python, and Java</span> enable me to understand the tech stack and requirements, facili tating effective solution design. With a strong foundation in cloud computing and software development, I bridge the gap between business and technology, delivering optimised, efficient, and impactful solutions tailored to business needs.</p>
          </div>

          <div className="p-8">
            <h3 className="text-2xl text-rose-950 dark:text-white py-2">Consulting</h3>
            <p className="leading-7 md:text-lg">In IT consulting, I <span className="font-bold">analyse business challenges, assess technology landscapes, and provide strategic recommendations</span> for optimised solutions. I excel in <span className="font-bold">structural problem-solving and systematic analysis</span> to drive meaningful change. My expertise includes cloud adoption, application delivery, IT service management, and data migration, ensuring seamless implementation and value realisation.</p>
          </div>

          <div className="p-8">
            <h3 className="text-2xl text-rose-950 dark:text-white py-2">Stakeholder Engagement</h3>
            <p className="leading-7 md:text-lg">I collaborate with European and local clients across diverse industries, including healthcare, fintech, blockchain, and the public sector, to deliver value-driven solutions. By actively engaging with stakeholders, I ensure alignment between business needs and technology strategies, fostering<span className="font-bold"> seamless communication</span> and  <span className="font-bold">informed decision-making.</span> My approach emphasises <span className="font-bold">quality, collaboration, and user-centric outcomes,</span> ensuring that solutions meet both business objectives and end-user expectations while driving efficiency and innovation.</p>
          </div>
        </div>
      </section>



    </main>
  );
}
