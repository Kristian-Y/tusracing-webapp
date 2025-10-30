import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone, FaTrophy, FaFlagCheckered, FaTools } from "react-icons/fa";
import AnimatedSection from "../animate/AnimatedSection";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-base-200 to-base-300 text-base-content overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      {/* Racing Track Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top Section with Team Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Team Info */}
          <AnimatedSection delay={0} direction="up">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-cen ter gap-3 mb-4">
                <img
                  src="/images/logo/logo-tus-racing-team-blue.png"
                  alt="TU Sofia Racing Team"
                  className="max-w-[250px]"
                />
              </div>
              <p className="text-base-content/80 mb-6 max-w-md text-center">
                Engineering excellence on wheels. We're TU Sofia's premier Formula Student racing team,
                pushing the boundaries of innovation and performance.
              </p>
              <div className="flex justify-around mb-6 w-full">
                <div className="flex items-center gap-2">
                  <FaTrophy className="text-accent text-lg" />
                  <span className="text-sm font-semibold">1 Award</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaTools className="text-primary text-lg" />
                  <span className="text-sm font-semibold">3 Cars Built</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection delay={150} direction="up">
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-bold mb-4 text-center">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3 w-full justify-items-center">
                <a href="/" className="link link-hover flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full"></span> Home
                </a>
                <a href="/about" className="link link-hover flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full"></span> About
                </a>
                <a href="/cars" className="link link-hover flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full"></span> Our Cars
                </a>
                <a href="/team" className="link link-hover flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full"></span> Team
                </a>
                <a href="/sponsors" className="link link-hover flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full"></span> Sponsors
                </a>
                <a href="/contact" className="link link-hover flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full"></span> Contact
                </a>
              </div>
            </div>
          </AnimatedSection>


          {/* Contact Info - Compact */}
          <AnimatedSection delay={300} direction="up">
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 justify-center">
                <FaEnvelope className="text-primary" />
                Get In Touch
              </h4>
              <div className="bg-base-100 rounded-xl p-4 shadow-lg w-full max-w-md space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <FaMapMarkerAlt className="text-primary text-lg" />
                  <div className="text-center">
                    <h5 className=" font-semibold">Headquarters</h5>
                    <p className="text-sm text-base-content/70">
                      Block 9 of the Technical University of Sofia<br />
                      8 Kliment Ohridski Blvd., 1756 Sofia, Bulgaria
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <FaEnvelope className="text-primary text-lg" />
                  <a href="mailto:info@fstteam.com" className="link link-hover text-center">
                    info@fstteam.com
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <FaPhone className="text-primary text-lg" />
                  <a href="tel:+35912345678" className="link link-hover text-center">
                    +359 123 456 78
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>

        {/* Full Width Map */}
        <AnimatedSection delay={450} direction="up">
          <div className="mb-16">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              Find Our Garage
            </h4>
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-xl border-2 border-base-300 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11574.844856976933!2d23.344489764056558!3d42.65905770510949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8426c28853ef%3A0x507b5ee6b85ffd1e!2sBlock%209%20of%20the%20Technical%20University!5e0!3m2!1sen!2sbg!4v1731674014136!5m2!1sen!2sbg"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Office Location"
              ></iframe>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom Bar */}
        <div className="border-t border-base-300 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-base-content/70">
                © {new Date().getFullYear()} FST Racing Team. All rights reserved.
              </p>
              <div className="flex gap-4 mt-2 justify-center md:justify-start">
                <a href="/terms" className="link link-hover text-xs">Terms of Use</a>
                <a href="/privacy" className="link link-hover text-xs">Privacy Policy</a>
                <a href="/cookies" className="link link-hover text-xs">Cookie Policy</a>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/tus_racingteam/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;