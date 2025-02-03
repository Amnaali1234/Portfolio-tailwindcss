"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="pt-[80px] bg-gradient-to-r from-gray-900 to-gray-700">
      <section className="text-white py-16 px-6 md:px-20 max-w-screen-xl mx-auto">
        <div className="md:grid md:grid-cols-2 gap-8 items-center">
          <div className="relative w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 md:mb-0">
            <Image
              src="/images/profile.jpg"
              alt="profile image"
              className="object-cover w-full h-full"
              width={400}
              height={400}
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I’m a passionate frontend developer with a talent for translating
              creative ideas into clean, functional, and visually striking web
              experiences. With a solid foundation in HTML, CSS, and JavaScript,
              and expertise in modern libraries and frameworks like React and
              Next.js, I build interfaces that are not only beautiful but also
              intuitive and responsive. I thrive on tackling complex design
              challenges and continually learning the latest industry trends to
              enhance my craft. Let’s create something impactful together!
            </p>

            <div className="flex-row mt-8">
              <span className="mr-3 font-extrabold text-pink-500 border-b border-purple-500">
                Skills
              </span>
              <ul className="mt-4 space-y-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Next.js</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
