"use client";

import { abel } from "@/components/lib/fonts";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  const soundPool = useRef<HTMLAudioElement[]>([]);

  // Create the Audio objects only after the component mounts
  useEffect(() => {
    const sounds = [
      "/sounds/f1-1.mp3",
      "/sounds/f1-2.mp3",
      "/sounds/f1-3.mp3",
      "/sounds/f1-4.mp3",
      "/sounds/f1-5.mp3",
    ].map((src) => {
      const audio = new Audio(src);
      audio.volume = 0.4;
      return audio;
    });

    soundPool.current = sounds;
  }, []);

  const playRandomSound = () => {
    if (soundPool.current.length === 0) return; // prevent error if not ready
    const audio =
      soundPool.current[Math.floor(Math.random() * soundPool.current.length)];
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <section className="min-h-screen bg-[#F0E8D5] text-[#212842] relative">
      <div className="max-w-[1400px] mx-auto px-8 py-20 flex flex-col md:flex-row gap-16 w-full">
        {/* LEFT: Sticky Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="sticky top-24 self-start z-10 flex flex-col items-start gap-4">
            <motion.img
              src="/about_adrian.png"
              alt="Adrian portrait"
              className="w-[280px] h-[380px] md:w-[552px] md:h-[737px] object-cover rounded-[5px] shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        </div>

        {/* DIVIDEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEER*/}

        {/* Right: Content */}
        <div className="flex-1 text-center md:text-left z-10">
          {/* ABOUT */}
          {/* ABOUT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h2
              id="about"
              className={`scroll-mt-24 text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${abel.className} text-left`}
            >
              About Me...
            </h2>

            <p className="text-lg leading-relaxed font-thin mb-5 text-left">
              Hi, I’m Adrian, passionate about quality assurance and improving
              software reliability. I enjoy testing features, identifying
              issues, and helping create smooth user experiences.
            </p>

            <p className="text-lg leading-relaxed font-thin mb-5 text-left">
              I’m currently working at{" "}
              <a
                href="https://lawadvisor.ventures/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative font-semibold text-current transition-colors duration-300
                hover:text-[#37398B]
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-[#37398B]
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                LawAdvisor
              </a>{" "}
              as a{" "}
              <span className="font-thin">
                Junior Quality Assurance Engineer
              </span>
              , where I focus on feature testing, identifying edge cases, and
              collaborating closely with developers to maintain high software
              quality.
            </p>

            <p className="text-lg leading-relaxed font-thin mb-10 text-left">
              Outside of work, I enjoy building things through coding, exploring
              new technology trends, and keeping up with{" "}
              <span
                onClick={playRandomSound}
                style={{ cursor: "url('/f1-cursor-v1.png') 32 0, pointer" }}
                className="relative font-semibold transition-colors duration-300
                        hover:text-[#37398B]
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[1.5px] after:w-0
                        after:bg-[#37398B]
                        after:transition-all after:duration-300
                        hover:after:w-full"
              >
                Formula 1
              </span>{" "}
              every race weekend. I also enjoy exchanging ideas about automation
            </p>
          </motion.div>

          {/* EXPERIENCE */}
          <motion.h2
            id="experience"
            className={`scroll-mt-32 text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${abel.className} text-left`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>

          {/* EXPERIENCE ITEM 1 */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <a
              href="https://lawadvisor.ventures/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-6 
       p-4 rounded-[10px] transition-colors duration-300 
       bg-transparent hover:bg-[#276DA4]/[0.07] group"
            >
              {/* DATE */}
              <div className="flex justify-start mb-2 md:mb-0">
                <span className="text-sm opacity-70 whitespace-nowrap pt-1 text-left">
                  August 2025 – Present
                </span>
              </div>

              {/* CONTENT */}
              <div className="text-left">
                <h4 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#37398B]">
                  Junior Software Quality Assurance Engineer
                </h4>
                <p className="opacity-80 mb-3">Law Advisor Ventures Ltd</p>
                <p className="leading-relaxed max-w-3xl">
                  Managed Jira and Xray for test management and defect tracking.
                  Performed manual, sanity, and smoke testing, executed smoke
                  automation using Selenium (Java), and validated APIs via
                  Swagger UI.
                </p>

                {/* TOOL BADGES */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    Manual Testing
                  </span>
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    Sanity Testing
                  </span>
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    Smoke Automation Testing
                  </span>
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    API Testing
                  </span>
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    Selenium (Java)
                  </span>
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    Swagger UI
                  </span>
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    Jira Xray
                  </span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* EXPERIENCE ITEM 2 */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="https://lawadvisor.ventures/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-6 
       p-4 rounded-[10px] transition-colors duration-300 
       bg-transparent hover:bg-[#276DA4]/[0.07] group"
            >
              {/* DATE */}
              <div className="flex justify-start mb-2 md:mb-0">
                <span className="text-sm opacity-70 whitespace-nowrap pt-1 text-left">
                  April – July 2025
                </span>
              </div>

              {/* CONTENT */}
              <div className="text-left">
                <h4 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#37398B]">
                  Software Quality Assurance Intern
                </h4>
                <p className="opacity-80 mb-3">Law Advisor Ventures Ltd</p>
                <p className="leading-relaxed max-w-3xl">
                  Managed Jira and Xray tickets for efficient issue tracking and
                  test documentation. Created and executed detailed test cases,
                  performed ticket verification for version releases, and gained
                  hands-on experience with Selenium IDE for automating core
                  functionalities.
                </p>

                {/* TOOL BADGES */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    Ticket Verification
                  </span>
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    Sanity Testing
                  </span>
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    Selenium IDE
                  </span>
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    Jira Xray
                  </span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* PROJECTS */}
          <motion.h2
            id="projects"
            className={`scroll-mt-32 text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${abel.className} text-left`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>

          {/* Project 1 */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <a
              href="https://www.youtube.com/watch?v=psHWHZ-DZZw"
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-6 p-4 rounded-[10px] transition-colors duration-300 bg-transparent hover:bg-[#276DA4]/[0.07] group"
            >
              {/* IMAGE - MOBILE BOTTOM */}
              <div className="order-2 md:order-1 flex justify-start mt-4 md:mt-0">
                <img
                  src="/xposeAI.png"
                  alt="XposeAI"
                  className="w-full md:w-[140px] h-auto md:h-[80px] object-cover rounded-md border-2 border-gray-400/40 transition-colors duration-300 group-hover:border-gray-300/80"
                />
              </div>

              {/* CONTENT */}
              <div className="order-1 md:order-2 text-left md:text-left">
                <h4 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#37398B] text-left">
                  XposeAI
                </h4>
                <p className="opacity-80 mb-2 text-left">Thesis Project</p>
                <p className="leading-relaxed max-w-3xl text-left">
                  XposeAI is an AI-powered image tampering detection system that
                  identifies whether an image is real or manipulated using Error
                  Level Analysis (ELA) and a Convolutional Neural Network (CNN).
                  To improve transparency, it integrates SHAP to generate
                  interpretable heatmaps highlighting areas that influenced the
                  model’s decision.
                </p>

                {/* TOOL BADGES */}
                <div className="flex flex-wrap gap-3 mt-4 justify-start">
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    Python
                  </span>
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    CNN
                  </span>
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    ELA
                  </span>
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    SHAP
                  </span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="https://drive.google.com/drive/folders/1iWzwbDTGrlDsRDWm5Ys65dRDZkLTUX_R"
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-6 p-4 rounded-[10px] transition-colors duration-300 bg-transparent hover:bg-[#276DA4]/[0.07] group"
            >
              {/* IMAGE - MOBILE BOTTOM */}
              <div className="order-2 md:order-1 flex justify-start mt-4 md:mt-0">
                <img
                  src="/eagles.png"
                  alt="Eagle’s Leisurewear"
                  className="w-full md:w-[140px] h-auto md:h-[80px] object-cover rounded-md border-2 border-gray-400/40 transition-colors duration-300 group-hover:border-gray-300/80"
                />
              </div>

              {/* CONTENT */}
              <div className="order-1 md:order-2 text-left md:text-left">
                <h4 className="text-xl font-semibold transition-colors duration-300 group-hover:text-[#37398B] text-left">
                  Eagle’s Leisurewear E-Commerce System
                </h4>
                <p className="opacity-80 mb-2 text-left">School Project</p>
                <p className="leading-relaxed max-w-3xl text-left">
                  This school project involved developing an e-commerce system
                  for Eagle’s Leisurewear to enable seamless online ordering and
                  efficient stock management for administrators. The frontend
                  was built using HTML, CSS, and JavaScript, while the backend
                  used PHP and MySQL.
                </p>

                {/* TOOL BADGES */}
                <div className="flex flex-wrap gap-3 mt-4 justify-start">
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    HTML
                  </span>
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    CSS
                  </span>
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    JavaScript
                  </span>
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    PHP
                  </span>
                  <span className="h-5 px-3 flex items-center justify-center rounded-[20px] bg-[#37398B] text-[#F0E8D5] text-xs">
                    MySQL
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
