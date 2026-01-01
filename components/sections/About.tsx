export default function About() {
  return (
    <section className="min-h-screen bg-[#212842] text-[#F0E8D5] flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-14">
        {/* Left: Photo */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="/about_adrian.png"
            alt="Adrian portrait"
            className="
          w-[280px] h-[380px]
          md:w-[552px] md:h-[737px]
          object-cover
          rounded-2xl
          shadow-xl
  "
          />
        </div>

        {/* Right: Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>

          <p className="text-lg leading-relaxed mb-5">
            Hi, I’m <span className="font-semibold">Adrian,</span> passionate
            about quality assurance and exploring the world of DevOps. I enjoy
            ensuring that every feature works exactly as intended and helping
            teams deliver reliable, user-friendly products.
          </p>

          <p className="text-lg leading-relaxed mb-5">
            I’m currently working at{" "}
            <span className="font-semibold">LawAdvisor</span> as a{" "}
            <span className="font-semibold">
              Junior Quality Assurance Engineer
            </span>
            , where I focus on feature testing, identifying edge cases, and
            collaborating closely with developers to maintain high software
            quality. This hands-on experience has strengthened my understanding
            of the full development lifecycle.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Outside of work, I enjoy exploring new technology trends, keeping up
            with Formula 1 highlights, and exchanging ideas about automation,
            CI/CD, and cloud tools.
          </p>

          <p className="text-sm opacity-80">
            I’m always eager to collaborate, learn, and grow feel free to reach
            out if you’d like to connect!
          </p>
        </div>
      </div>
    </section>
  );
}
