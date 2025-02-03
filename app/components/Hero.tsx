import Image from "next/image";

export default function HeroSection() {
  return (
    <header className="w-full flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-white min-h-screen py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto">
        <div className="text-center md:text-left md:w-7/12 flex flex-col justify-center md:pr-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            Amna Ali
          </h1>
          <p className="text-white text-lg sm:text-xl mb-6">
            I'm a passionate Frontend Web Developer. I specialize in crafting
            responsive, intuitive, and visually stunning digital experiences.
            With a strong foundation in HTML, CSS, and JavaScript, I excel in
            transforming designs into functional and engaging web applications.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <button className="px-8 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-blue-400 transition-all duration-300 text-white mb-3 sm:mb-0">
              Hire Me
            </button>
            <button className="px-8 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-blue-400 transition-all duration-300 text-white">
              <span className="block px-6 py-2 rounded-full hover:bg-purple-500">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:w-5/12 flex justify-center md:justify-end">
          <div className="relative w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/images/profile.jpg"
              alt="imagge1"
              className="object-cover w-full h-full"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
