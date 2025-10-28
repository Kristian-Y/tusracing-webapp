import React, { useState, useEffect } from "react";
import { useTheme } from "../../theme-manager/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Formula Student", href: "/formula-student" },
    { name: "Gallery", href: "/gallery" },
    { name: "Sponsors", href: "/sponsors" },
  ];

  // Auto close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  return (
    <nav
      className={`w-full fixed top-0 z-50 backdrop-blur-md shadow-md transition-colors duration-500
        ${theme === "darkTheme" ? "bg-blue-600/30" : "bg-white/90"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className={`text-2xl font-bold tracking-wide transition-transform duration-300 ${theme === "lightTheme" ? "text-blue-600" : "text-white"
            }`}
        >
          FST Team
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="relative group font-medium text-base-content transition-colors duration-300 hover:text-primary"
                >
                  <span>{item.name}</span>
                  <span className="absolute left-0 -bottom-1 block w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <label className="flex cursor-pointer gap-2 items-center">
            <input
              type="checkbox"
              className="toggle theme-controller"
              checked={theme === "darkTheme"}
              onChange={toggleTheme}
            />
            {theme === "lightTheme" ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </label>
        </div>

        {/* Hamburger */}
        <div className="md:hidden z-50">
          <button
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
          >
            {/* Top bar */}
            <span
              className={`absolute block h-[2px] w-6 bg-current rounded transition-transform duration-300 ease-in-out origin-center
        ${isMenuOpen ? "rotate-45" : "-translate-y-2"}
      `}
            ></span>

            {/* Middle bar */}
            <span
              className={`absolute block h-[2px] w-6 bg-current rounded transition-all duration-300 ease-in-out origin-center
        ${isMenuOpen ? "opacity-0 scale-50" : "opacity-100 scale-100"}
      `}
            ></span>

            {/* Bottom bar */}
            <span
              className={`absolute block h-[2px] w-6 bg-current rounded transition-transform duration-300 ease-in-out origin-center
        ${isMenuOpen ? "-rotate-45" : "translate-y-2"}
      `}
            ></span>
          </button>
        </div>


      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 left-0 w-full h-screen z-40 flex flex-col items-center justify-center px-6 transition-all duration-500 ease-in-out
    ${theme === "darkTheme" ? "bg-blue-950 text-white" : "bg-white text-gray-900"}
    ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
  `}
      >
        {/* Logo Section */}
        <div className="flex flex-row items-center mb-10 gap-4">
          <img
            src="/logo.png" // <-- Replace with your logo path
            alt="FST Racing Logo"
            className="w-16 h-16 object-contain mb-2 sm:w-20 sm:h-20"
          />
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
            FST Racing
          </h1>
        </div>

        {/* Navigation Items */}
        <ul className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Theme Toggle */}
          <li className="mt-6">
            <label className="flex cursor-pointer gap-4 items-center">
              <input
                type="checkbox"
                className="toggle toggle-lg theme-controller"
                checked={theme === "darkTheme"}
                onChange={toggleTheme}
              />
              {theme === "lightTheme" ? (
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
              ) : (
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </label>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
