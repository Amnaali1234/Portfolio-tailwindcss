import HeroSection from "./components/Hero";
import NavBar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-gray-900 to-gray-700">
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
