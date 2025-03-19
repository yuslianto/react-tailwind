import React from "react";

import HeroImage from "../assets/images/hero.svg";
import AboutImage from "../assets/images/about.svg";

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Belajar membuat website dengan{" "}
              <span className="text-sky-400 font-bold underline">React JS</span>{" "}
              dan{" "}
              <span className="text-sky-400 font-bold underline">
                Tailwind CSS
              </span>
            </h1>
            <p className="mb-7 text-base/8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              architecto soluta autem sed obcaecati rerum saepe asperiores omnis
              non? Quod modi dolore ex enim? Mollitia dicta officia nemo enim
              similique.
            </p>
            <a
              href="#"
              className="bg-sky-400 hover:bg-sky-500 text-white py-3 px-4 inline-flex items-center rounded-full shadow transition-all"
            >
              Tentang Saya <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="md:w-full w-[400px] md:m-0 mx-auto"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 pt-32 md:pt-20">
          <div className="box md:order-1 order-2">
            <img
              src={AboutImage}
              alt="About Image"
              className="md:w-[500px] w-[400px] mx-auto"
            />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Belajar membuat website dengan{" "}
              <span className="text-sky-400 font-bold underline">React JS</span>{" "}
              dan{" "}
              <span className="text-sky-400 font-bold underline">
                Tailwind CSS
              </span>
            </h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              architecto soluta autem sed obcaecati rerum saepe asperiores omnis
              non? Quod modi dolore ex enim? Mollitia dicta officia nemo enim
              similique.
            </p>
          </div>
        </div>

        {/* Layanan Section */}
        <div className="services pt-32">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Layanan
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, eius!
          </p>
          <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Services Name 1
              </h3>
              <p className="text-white text-base/loose">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                fuga veniam illum.
              </p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Services Name 2
              </h3>
              <p className="text-white text-base/loose">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                fuga veniam illum.
              </p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl text-white"></i>
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Services Name 3
              </h3>
              <p className="text-white text-base/loose">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                fuga veniam illum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
