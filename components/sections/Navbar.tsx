import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#212842] text-[#F0E8D5] fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center">
        <ul className="flex justify-center gap-8 text-sm">
          <li className="hover:text-white transition cursor-pointer">Home</li>
          <li className="hover:text-white transition cursor-pointer">About</li>
          <li className="hover:text-white transition cursor-pointer">
            Experience
          </li>
          <li className="hover:text-white transition cursor-pointer">
            Projects
          </li>
        </ul>
      </div>
    </nav>
  );
}
