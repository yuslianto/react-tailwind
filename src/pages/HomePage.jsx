import React from "react";

import HeroImage from "../assets/images/hero.svg";
import AboutImage from "../assets/images/about.svg";
import Proyek1 from "../assets/images/proyek-1.webp";
import Proyek2 from "../assets/images/proyek-2.webp";
import Proyek3 from "../assets/images/proyek-3.webp";
import Proyek4 from "../assets/images/proyek-4.webp";
import Proyek5 from "../assets/images/proyek-5.webp";

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
        <div
          className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 pt-32 md:pt-20"
          id="about"
        >
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
        <div className="services pt-32" id="services">
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

        {/* Proyek Section */}
        <div className="proyek pt-32" id="proyek">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Proyek
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, eius!
          </p>
          <div className="proyek-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-white rounded-md shadow p-2">
              <img src={Proyek1} alt="Proyek 1" className="w-full h-[200px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 1</h3>
              <p className="text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                itaque porro? Saepe possimus quo neque!
              </p>
            </div>
            <div className="box bg-white rounded-md shadow p-2">
              <img src={Proyek2} alt="Proyek 2" className="w-full h-[200px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 2</h3>
              <p className="text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                itaque porro? Saepe possimus quo neque!
              </p>
            </div>
            <div className="box bg-white rounded-md shadow p-2">
              <img src={Proyek3} alt="Proyek 3" className="w-full h-[200px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 3</h3>
              <p className="text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                itaque porro? Saepe possimus quo neque!
              </p>
            </div>
            <div className="box bg-white rounded-md shadow p-2">
              <img src={Proyek4} alt="Proyek 4" className="w-full h-[200px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 4</h3>
              <p className="text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                itaque porro? Saepe possimus quo neque!
              </p>
            </div>
            <div className="box bg-white rounded-md shadow p-2">
              <img src={Proyek5} alt="Proyek 5" className="w-full h-[200px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 5</h3>
              <p className="text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                itaque porro? Saepe possimus quo neque!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
