import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 portfolio. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="/">
            <img src="/images/download-1.png" alt="Facebook" className="w-6" />
          </Link>
          <Link href="/">
            <img
              src="/images/download-2.jpeg"
              alt="Instagram"
              className="w-6"
            />
          </Link>
          <Link href="/">
            <img src="/images/download-3.png" alt="Twitter" className="w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
