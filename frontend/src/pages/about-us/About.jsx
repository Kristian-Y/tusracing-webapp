import { useTheme } from "../../theme-manager/ThemeContext";
import AnimatedSection from "../../components/animate/AnimatedSection";

const About = () => {
  const { theme } = useTheme();

  const aboutCards = [
    {
      id: 1,
      title: "Our Race Cars",
      description: "Our race cars are the result of cutting-edge engineering and meticulous design. Each car is built to perform at the highest level, combining speed, agility, and precision on the track.",
      image: "/images/cars/car-on-track.jpg",
      icon: "/images/icons/about-us/racecar.png",
      color: "primary",
      link: "/cars"
    },
    {
      id: 2,
      title: "Our Team",
      description: "Our team is made up of passionate individuals dedicated to excellence in engineering and motorsport. Together, we combine diverse skills to build high-performance racecars.",
      image: "/images/team/team-photo.jpg",
      icon: "/images/icons/about-us/team.png",
      color: "accent",
      link: "/team"
    },
    {
      id: 3,
      title: "Our History",
      description: "Our team began with a shared passion for motorsport and innovation. Over the years, we've grown into a respected force in Formula Student.",
      image: "/images/cars/car-testing.jpg",
      icon: "/images/icons/about-us/history.png",
      color: "secondary",
      link: "/history"
    },
    {
      id: 4,
      title: "Join Us",
      description: "Apply now to join our Formula Student team and showcase your engineering skills. Be part of a dynamic project that combines innovation, teamwork, and racing.",
      image: "/images/cars/join-team.jpg",
      icon: "/images/icons/about-us/application.png",
      color: "primary",
      link: "/join"
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 py-24">
          <AnimatedSection direction="up" delay={100}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  ABOUT FST RACING
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent p-4">
                Discover Our Journey
              </h1>
              <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                Explore the heart of TU Sofia Racing Team - from our cutting-edge race cars
                to the passionate individuals who make it all possible.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Cards Grid Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {aboutCards.map((card, index) => (
            <AnimatedSection key={card.id} direction="up" delay={200 + index * 100}>
              {/* === SOLUTION 1 START === */}
              {/* This outer div handles ONLY the hover animation */}
              <div className="transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl rounded-2xl">
                {/* This inner div is the visual card with the border-radius */}
                <div className="group relative h-full bg-base-200 rounded-2xl overflow-hidden shadow-lg">
                  {/* Image Container with Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base-200 via-transparent to-transparent"></div>

                    {/* Icon Badge */}
                    <div className={`absolute top-6 left-6 bg-${card.color}/90 backdrop-blur-xl p-3 rounded-xl shadow-lg`}>
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="w-8 h-8"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-base-content">
                      {card.title}
                    </h3>
                    <div className={`w-20 h-1 bg-${card.color} mb-4 rounded-full`}></div>
                    <p className="text-base-content/70 leading-relaxed mb-6">
                      {card.description}
                    </p>

                    {/* CTA Button */}
                    <div className="flex items-center justify-between">
                      <a
                        href={card.link}
                        className={`inline-flex items-center gap-2 text-${card.color} font-semibold hover:gap-3 transition-all duration-300`}
                      >
                        <span>Explore</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>

                      {/* Decorative Element */}
                      <div className={`w-12 h-12 bg-${card.color}/10 rounded-full flex items-center justify-center group-hover:bg-${card.color}/20 transition-colors duration-300`}>
                        <div className={`w-6 h-6 bg-${card.color} rounded-full`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
              {/* === SOLUTION 1 END === */}
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-content py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="up" delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "50+", label: "Team Members" },
                { number: "8", label: "Race Cars" },
                { number: "15+", label: "Awards" },
                { number: "10", label: "Years" }
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl md:text-5xl font-black">{stat.number}</div>
                  <div className="text-sm uppercase tracking-wider opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection direction="up" delay={200}>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Be Part of Our Story?
            </h2>
            <p className="text-lg text-base-content/70 mb-8">
              Join us in our pursuit of engineering excellence and racing innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/join" className="btn btn-primary btn-lg px-8">
                Join the Team
              </a>
              <a href="/contact" className="btn btn-outline btn-primary btn-lg px-8">
                Contact Us
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;