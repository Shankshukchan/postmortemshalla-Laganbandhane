import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen(true);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <section className="sticky top-0 left-0 w-full z-50">
      <nav className="w-full bg-[#FDF6EC] flex justify-between items-center px-6 md:px-12 shadow-md relative">
        <div className="w-[7rem] md:w-[8rem]">
          <img src="/images/Untitled_design-removebg-preview.png" alt="Logo" className="h-full w-full" />
        </div>
        {/* Desktop/Tablet Menu */}
        <div className="hidden lg:block">
          <ul className="flex justify-between items-center gap-8 text-[#6E1E1E] font-bold">
            <li><Link to="/" className="hover:text-[#D4AF37]">Home</Link></li>
            <li><Link to="/templates" className="hover:text-[#D4AF37]">Templates</Link></li>
            <li><Link to="/pricing" className="hover:text-[#D4AF37]">Pricing</Link></li>
            <li><Link to="/about-us" className="hover:text-[#D4AF37]">About Us</Link></li>
            <li><Link to="/contact-us" className="hover:text-[#D4AF37]">Contact Us</Link></li>
            <li>
              <a href="#">
                <div className="border h-[3rem] w-[3rem] md:h-[6rem] md:w-[6rem] rounded-full overflow-hidden bg-[#D4AF37] hover:shadow-lg shadow-[#D4AF37]/90">
                  <img src="/images/profile.jpg" alt="Profile" className="h-full w-full object-cover" />
                </div>
              </a>
            </li>
          </ul>
        </div>
        {/* Hamburger Icon (Tablet & Mobile) */}
        <button
          className="lg:hidden block z-40 relative"
          aria-label="Open Menu"
          onClick={handleMenuOpen}
        >
          <svg className="w-8 h-8 text-[#6E1E1E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Slide-in Mobile/Tablet Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#FDF6EC] flex flex-col items-center justify-center gap-8 text-[#6E1E1E] font-bold z-50 transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden shadow-2xl`}
        >
          <button
            className="absolute top-6 right-8 z-50"
            aria-label="Close Menu"
            onClick={handleMenuClose}
          >
            <svg className="w-8 h-8 text-[#6E1E1E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a href="#" className="hover:text-[#D4AF37]">Home</a>
          <a href="#" className="hover:text-[#D4AF37]">Templates</a>
          <a href="#" className="hover:text-[#D4AF37]">How it Works</a>
          <a href="#" className="hover:text-[#D4AF37]">Pricing</a>
          <a href="#" className="hover:text-[#D4AF37]">About Us</a>
          <a href="#" className="hover:text-[#D4AF37]">Contact</a>
          <a href="#">
            <div className="border h-[6rem] w-[6rem] rounded-full overflow-hidden mx-auto">
              <img src="/images/photo-1633332755192-727a05c4013d.jpeg" alt="Profile" className="h-full w-full object-cover" />
            </div>
          </a>
        </div>
        {/* Overlay for menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
            onClick={handleMenuClose}
          ></div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
