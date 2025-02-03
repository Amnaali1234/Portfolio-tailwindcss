import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md p-4 flex justify-between items-center fixed w-full top-0 z-10">
      <h1 className="text-3xl font-extrabold text-white">Amna's Portfolio</h1>
      <div className="space-x-6">
        <Link
          href="/"
          className="text-blue-500 font-semibold hover:text-blue-700"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-blue-500 font-semibold hover:text-blue-700"
        >
          About
        </Link>
        <Link
          href="/services"
          className="text-blue-500 font-semibold hover:text-blue-700"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="text-blue-500 font-semibold hover:text-blue-700"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
