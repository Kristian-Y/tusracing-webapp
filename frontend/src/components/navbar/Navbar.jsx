import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../theme-manager/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentLang = i18n?.language || "en";
  const targetLang = currentLang.startsWith("bg") ? "en" : "bg";
  const toggleLanguage = () => i18n.changeLanguage(targetLang);

  const navItems = [
    { name: t("navbar.about"), href: "/about" },
    { name: t("navbar.gallery"), href: "/gallery" },
    { name: t("navbar.contacts"), href: "/contacts" },
    { name: t("navbar.sponsors"), href: "/sponsors" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  return (
    <nav
      className={`w-full fixed top-0 z-50 backdrop-blur-md transition-colors duration-500 ${
        theme === "darkTheme"
          ? "bg-base-200/60 shadow-[0_2px_15px_rgba(255,255,255,0.15)]"
          : "bg-base-100/90 shadow-[0_2px_15px_rgba(0,0,0,0.25)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* Logo */}
        <img
          src="/images/logo/logo-tus-racing-team-blue.png"
          alt="TU Sofia Racing Team"
          className="sm:w-[160px] w-[120px] object-contain cursor-pointer"
          onClick={() => (window.location.href = "/")}
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 items-center text-center">
            {navItems.map((item) => (
              <li key={item.name} className="active:scale-90 duration-300">
                <a
                  href={item.href}
                  className="relative group font-medium text-base-content transition-all hover:text-primary text-center"
                >
                  <span>{item.name}</span>
                  <span className="absolute left-0 -bottom-1 block w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Language Toggle */}
          <button
            aria-label="Switch language"
            onClick={toggleLanguage}
            className="ml-2 inline-block w-8 h-5 rounded-md overflow-hidden p-[2px] bg-transparent border-0 cursor-pointer transition-all duration-300 ease-in-out hover:brightness-75 focus:outline-none"
            title={targetLang === "bg" ? "Български" : "English"}
          >
            <img
              src={
                targetLang === "bg"
                  ? "/images/icons/languages/BG-bg.png"
                  : "/images/icons/languages/UK-en.png"
              }
              alt={targetLang}
              className="w-full h-full object-cover block"
            />
          </button>

          {/* Theme Toggle */}
          <label className="flex cursor-pointer gap-2 items-center">
            <input
              type="checkbox"
              className="toggle theme-controller"
              checked={theme === "darkTheme"}
              onChange={toggleTheme}
            />
            {theme === "lightTheme" ? (
              <svg
                width="20"
                height="20"
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
                width="20"
                height="20"
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
        </div>

        {/* Hamburger */}
        <div className="md:hidden z-50">
          <button
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none text-base-content"
          >
            <span
              className={`absolute block h-[2px] w-6 bg-current rounded transition-transform duration-300 ease-in-out origin-center ${
                isMenuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            ></span>
            <span
              className={`absolute block h-[2px] w-6 bg-current rounded transition-all duration-300 ease-in-out origin-center ${
                isMenuOpen ? "opacity-0 scale-50" : "opacity-100 scale-100"
              }`}
            ></span>
            <span
              className={`absolute block h-[2px] w-6 bg-current rounded transition-transform duration-300 ease-in-out origin-center ${
                isMenuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 left-0 w-full h-screen z-40 flex flex-col items-center justify-center px-6 transition-all duration-500 ease-in-out ${
          theme === "darkTheme" ? "bg-base-100" : "bg-base-100"
        } ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
      >
        <div className="flex flex-col items-center mb-10 gap-4">
          <img
            src="/images/logo/logo-tus-racing-team-blue.png"
            alt="TU Sofia Racing Team"
            className="w-[160px] sm:w-[180px] object-contain mb-2 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          />
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-base-content text-center">
            TU Sofia Racing Team
          </h1>
        </div>

        <ul className="flex flex-col items-center gap-6 text-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-lg font-medium text-base-content hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}

          <li className="mt-4">
            <button
              aria-label="Switch language"
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="inline-flex w-8 h-5 rounded-md overflow-hidden p-[2px] bg-transparent border-0 cursor-pointer transition-all duration-300 ease-in-out hover:brightness-75 focus:outline-none"
              title={targetLang === "bg" ? "Български" : "English"}
            >
              <img
                src={
                  targetLang === "bg"
                    ? "/images/icons/languages/BG-bg.png"
                    : "/images/icons/languages/UK-en.png"
                }
                alt={targetLang}
                className="w-full h-full object-cover block"
              />
            </button>
          </li>

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
