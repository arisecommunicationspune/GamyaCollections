import React, { useState } from "react";
import { Menu, X, Instagram, Facebook, MessageCircle, InstagramIcon, FacebookIcon } from "lucide-react";
import { Link, NavLink } from "react-router-dom"; // Import NavLink for active link styles
import { Button } from "./ui/button";

const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Necklaces", path: "/necklaces" },
  { title: "Earrings", path: "/earrings" },
  { title: "Anklets", path: "/anklets" },
  { title: "Contact", path: "/contact" },
];

const SocialIcons = ({ className }) => (
  <div className={`flex space-x-4 ${className}`}>
   
    <a
      href="https://wa.me/yournumber"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-900 hover:text-[#A63C15] transition-colors"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  </div>
);

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <nav className="bg-[#FFF8E9] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center py-8">
            <Link to="/" className="text-3xl font-bold my-8">
              <img src="/assets/Images/logo/gamya.png" alt="Logo" className="h-16" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8  m-auto">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#A63C15] font-bold" // Active link color
                    : "text-gray-900 font-bold hover:text-[#A63C15] transition-colors"
                }
              >
                {item.title}
              </NavLink>
            ))}
            {/* Social Icons for Desktop */}
            
          </div>

          {/* Hamburger Menu (Visible on Tablets & Mobile) */}
          <div className="lg:hidden">
            <button onClick={toggleSidebar} className="text-gray-900 hover:text-gray-600 focus:outline-none">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile & Tablets */}
      <div className={`fixed inset-0 z-40 flex lg:hidden transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        {/* Overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={closeSidebar}></div>

        {/* Sidebar */}
        <div className={`relative w-64 bg-white shadow-md transform transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          {/* Close Button */}
          <button onClick={closeSidebar} className="absolute top-4 right-4 text-gray-900 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>

          {/* Sidebar Menu */}
          <div className="mt-12 px-4 flex flex-col h-full">
            {/* Logo in Sidebar */}
            <div className="flex-shrink-0 flex items-center mb-8">
              <Link to="/" className="text-3xl font-bold text-gray-900">
                <img src="/assets/Images/logo/gamya.png" alt="Logo" className="h-16" />
              </Link>
            </div>

            
            <div className="mb-8">
              {/* <SocialIcons /> */}
              
            </div>

            {/* Navigation Items */}
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 text-[#A63C15] font-bold transition-colors" // Active link color for sidebar
                    : "block py-2 text-gray-900 hover:text-[#A63C15] font-bold transition-colors"
                }
              >
                {item.title}
              </NavLink>
            ))}

            {/* Spacer to push navigation links upwards */}
            <div className="flex-grow">
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
