export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F0E8D5] text-[#212842] overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto px-6 flex flex-col-reverse md:flex-row items-center relative">
        {/* Left: Text Content - z-10 ensures text stays above the background */}
        <div className="flex-1 text-center md:text-left md:pr-16 z-10 py-12">
          <h4 className="mb-2 font-medium">
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
              href="mailto:your-email@example.com"
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
              href="https://github.com/yourusername"
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
              href="https://linkedin.com/in/yourusername"
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

        {/* Right: Background Image - Fixed the "Cut-off" */}
        <div className="flex-1 w-full h-[300px] md:h-[600px] relative">
          <img
            src="/background.png"
            alt="Background Gradient"
            // scale-125 and -left-10 allow the image to bleed past its container
            // mask-image creates a soft fade on the left so there is no "line"
            className="absolute inset-0 w-full h-full object-cover object-center scale-110 md:scale-125 md:-right-20"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 20%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 20%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
