import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#212842] text-[#F0E8D5] fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center">
        <ul className="flex justify-center gap-8 text-sm">
          <li>
            <Link href="#home" className="hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-white transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#experience" className="hover:text-white transition">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-white transition">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
