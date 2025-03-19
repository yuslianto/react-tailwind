import React from 'react';

import HeroImage from '../assets/images/hero.svg';

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Belajar membuat website dengan{' '}
              <span className="text-sky-400 font-bold underline">React JS</span>{' '}
              dan{' '}
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
      </div>
    </div>
  );
};

export default HomePage;
