import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-white shadow mt-20" id="social-link">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4">
          &copy; Copyright by <span className="font-bold">Yuslianto</span>
        </p>
        <div className="social-footer flex items-center sm:gap-7 gap-2">
          <i className="ri-facebook-circle-fill text-2xl"></i>
          <i className="ri-instagram-fill text-2xl"></i>
          <i className="ri-github-fill text-2xl"></i>
          <i className="ri-youtube-fill text-2xl"></i>
          <i className="ri-twitter-fill text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
