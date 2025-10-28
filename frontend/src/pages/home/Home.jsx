import React, { useState, useEffect } from "react";
import AnimatedSection from "../../components/animate/AnimatedSection";
import { useTheme } from "../../theme-manager/ThemeContext";

const Home = () => {

  const { theme } = useTheme();

  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Crafting beautiful, high-performance websites tailored to your business needs.",
    },
    {
      icon: "📱",
      title: "Mobile App Solutions",
      description: "Building intuitive and engaging mobile applications for both iOS and Android platforms.",
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      description: "Streamlining your infrastructure with modern cloud solutions and DevOps practices.",
    },
  ];

  const features = [
    {
      icon: "🚀",
      title: "Performance First",
      description: "We build applications that are visually stunning and incredibly fast.",
    },
    {
      icon: "🔒",
      title: "Ironclad Security",
      description: "Security is a top priority. We integrate best practices to keep your data safe.",
    },
    {
      icon: "📈",
      title: "Scalable Architecture",
      description: "Our solutions grow with you, ensuring long-term success and reliability.",
    },
  ];

  const testimonials = [
    {
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      text: "Working with FST Team was a game-changer. Their expertise and dedication are second to none.",
      name: "Jane Doe, CEO of TechCorp",
    },
    {
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
      text: "The final product exceeded all our expectations. A truly professional and talented team.",
      name: "John Smith, Founder of Innovate Ltd.",
    },
  ];

  return (
    <div className="bg-base-100 text-base-content overflow-x-hidden overflow-y-hidden">
      {/* Hero Section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200)`,
        }}
      >
        <div className={`hero-overlay bg-opacity-40 `}></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <AnimatedSection delay={0} direction="left">
              <h1 className="mb-5 text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                Innovate. Create. Elevate.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200} direction="right">
              <p className="mb-5 text-xl font-light">
                FST Team is your dedicated partner in building the next generation of digital solutions.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <a
                href="/contact"
                className="btn btn-primary transition-transform duration-300 hover:scale-110"
              >
                Get Started
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">What We Do</h2>
            <p className="text-lg mt-2 text-base-content/70">
              We specialize in a wide range of modern technologies.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 150}>
              <div className="card bg-base-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="card-body items-center text-center">
                  <span className="text-5xl mb-4">{service.icon}</span>
                  <h3 className="card-title text-2xl font-semibold">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-base-200">
        <div className="container mx-auto px-6 py-20">
          <AnimatedSection delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">Why Partner With FST?</h2>
              <p className="text-lg mt-2 text-base-content/70">We deliver excellence and innovation at every step.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 150}>
                <div className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-primary text-primary-content text-3xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mt-6 mb-2">{feature.title}</h3>
                  <p className="text-base-content/70">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Trusted by Amazing Teams</h2>
            <p className="text-lg mt-2 text-base-content/70">Our clients' success is our greatest achievement.</p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 150}>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-16 rounded-full">
                    <img alt={testimonial.name} src={testimonial.image} />
                  </div>
                </div>
                <div className="chat-bubble bg-base-200">
                  {testimonial.text}
                  <div className="mt-2 font-bold text-sm">{testimonial.name}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <AnimatedSection>
        <div className="bg-primary text-primary-content">
          <div className="container mx-auto px-6 py-20 text-center">
            <AnimatedSection delay={0}>
              <h2 className="text-4xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Let's talk about your project and how we can help you achieve your goals.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <a
                href="/contact"
                className="btn btn-secondary btn-lg transition-transform duration-300 hover:scale-110"
              >
                Contact Us Today
              </a>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
