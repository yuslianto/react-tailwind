import React, { useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClik = () => {
    setShow(!show);
    console.log('testing', show);
  };

  let menuActive = show ? 'left-0' : '-left-full';
  return (
    <div className="navbar fixed w-full transition-all py-4">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="text-2xl font-bold">Logo</h1>
          </div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:shadow-none md:p-0 md:m-0 md:transition-none gap-8 fixed left-0 top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 text-white transition-all ${menuActive}`}
          >
            <li className='flex items-center gap-3'>
              <i className="ri-home-2-line text-3xl md:hidden block"></i>
              <a href="" className="font-medium opacity-75">
                Beranda
              </a>
            </li>
            <li className='flex items-center gap-3'>
              <i className="ri-customer-service-2-line text-3xl md:hidden block"></i>
              <a href="" className="font-medium opacity-75">
                Tentang Kami
              </a>
            </li>
            <li className='flex items-center gap-3'>
              <i className="ri-settings-2-line text-3xl md:hidden block"></i>
              <a href="" className="font-medium opacity-75">
                Layanan
              </a>
            </li>
            <li className='flex items-center gap-3'>
              <i className="ri-image-line text-3xl md:hidden block"></i>
              <a href="" className="font-medium opacity-75">
                Proyek
              </a>
            </li>
            <li className='flex items-center gap-3'>
              <i className="ri-contacts-book-2-line text-3xl md:hidden block"></i>
              <a href="" className="font-medium opacity-75">
                Kontak
              </a>
            </li>
          </ul>
          <div className="social flex items-center gap-2">
            <a
              href=""
              className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-600 transition-all"
            >
              Social Media
            </a>
            <i
              className="ri-menu-3-line text-3xl md:hidden block"
              onClick={handleClik}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
