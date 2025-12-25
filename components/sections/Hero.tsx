export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F0E8D5] text-[#212842] overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto px-6 flex flex-col-reverse md:flex-row items-center relative">
        {/* Left: Text Content - z-10 ensures text stays above the background */}
        <div className="flex-1 text-center md:text-left md:pr-16 z-10 py-12">
          <h4 className="mb-2 font-medium -ml-4 md:-ml-8">
            Junior Software Quality Assurance Engineer
          </h4>

          <h1 className="text-6xl md:text-7xl font-bold mb-4 drop-shadow-md">
            Hello, I Am Adrian Paulo
          </h1>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center md:justify-start gap-6 mb-6">
            <a
              href="#projects"
              className="bg-[#F0E8D5] border border-[#212842] text-[#212842] px-6 py-3 font-light hover:bg-[#212842] hover:text-[#F0E8D5] transition"
            >
              See My Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-[#212842] text-[#F0E8D5] border border-[#F0E8D5] px-6 py-3 font-light hover:bg-[#F0E8D5] hover:text-[#212842] hover:border-[#212842] transition"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-6">
            <a
              href="mailto:adrianpaulodonesclavel@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/email.png"
                alt="Email"
                className="w-10 h-auto hover:scale-110 transition"
              />
            </a>
            <a
              href="https://github.com/adclavel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/github.png"
                alt="GitHub"
                className="w-10 h-auto hover:scale-110 transition"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/adrianclavel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="w-10 h-auto hover:scale-110 transition"
              />
            </a>
          </div>
        </div>

        {/* Container */}
        <div className="flex-1 w-full h-[300px] md:h-[600px] relative">
          {/* 1. Spinning Background Blob */}
          <img
            src="/background.png"
            alt="Background Gradient"
            className="
      absolute 
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      w-full md:w-[130%] 
      max-w-none 
      h-auto 
      object-contain 
      z-0
      pointer-events-none
      animate-[spin_20s_linear_infinite]
    "
          />

          {/* 2. Adrian Image - Positioned Slightly Lower */}
          <img
            src="/adrian.png"
            alt="Adrian"
            className="
    absolute 
    /* Changed from top-1/2 (50%) to 55% to lower it slightly */
    top-[55%] 
    left-1/2 
    -translate-x-1/2 
    -translate-y-1/2
    
    !w-[300px] md:!w-[600px] 
    !max-w-none 
    h-auto 
    object-contain
    
    z-10 
    pointer-events-none
  "
          />

          {/* 3. Content Layer */}
          <div className="relative z-20">{/* Your Content Here */}</div>
        </div>
      </div>
    </section>
  );
}
