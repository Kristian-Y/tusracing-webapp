import { FaInstagram, FaEnvelope, FaWrench, FaCog, FaBolt, FaPaintBrush } from 'react-icons/fa';
import { useTheme } from "../../../theme-manager/ThemeContext";
import AnimatedSection from "../../../components/animate/AnimatedSection";

const Team = () => {
  const { theme } = useTheme();

  const departments = [
    {
      id: 1,
      name: "Chassis",
      icon: <FaWrench />,
      color: "primary",
      description: "Structural integrity and aerodynamic excellence",
      members: [
        {
          id: 1,
          name: "Alex Johnson",
          image: "https://picsum.photos/seed/chassis1/400/400.jpg",
          instagram: "#",
          email: "alex@racingteam.com"
        },
        {
          id: 2,
          name: "Maria Rodriguez",
          image: "https://picsum.photos/seed/chassis2/400/400.jpg",
          instagram: "#",
          email: "maria@racingteam.com"
        },
        {
          id: 3,
          name: "James Chen",
          image: "https://picsum.photos/seed/chassis3/400/400.jpg",
          instagram: "#",
          email: "james@racingteam.com"
        },
        {
          id: 4,
          name: "Sarah Williams",
          image: "https://picsum.photos/seed/chassis4/400/400.jpg",
          instagram: "#",
          email: "sarah@racingteam.com"
        },
        {
          id: 5,
          name: "Robert Taylor",
          image: "https://picsum.photos/seed/chassis5/400/400.jpg",
          instagram: "#",
          email: "robert@racingteam.com"
        }
      ]
    },
    {
      id: 2,
      name: "Engine",
      icon: <FaCog />,
      color: "secondary",
      description: "Powertrain performance and optimization",
      members: [
        {
          id: 6,
          name: "Sophie Turner",
          image: "https://picsum.photos/seed/engine1/400/400.jpg",
          instagram: "#",
          email: "sophie@racingteam.com"
        },
        {
          id: 7,
          name: "David Kim",
          image: "https://picsum.photos/seed/engine2/400/400.jpg",
          instagram: "#",
          email: "david@racingteam.com"
        },
        {
          id: 8,
          name: "Lisa Anderson",
          image: "https://picsum.photos/seed/engine3/400/400.jpg",
          instagram: "#",
          email: "lisa@racingteam.com"
        },
        {
          id: 9,
          name: "Mark Wilson",
          image: "https://picsum.photos/seed/engine4/400/400.jpg",
          instagram: "#",
          email: "mark@racingteam.com"
        }
      ]
    },
    {
      id: 3,
      name: "Electronics",
      icon: <FaBolt />,
      color: "accent",
      description: "Vehicle control systems and data acquisition",
      members: [
        {
          id: 10,
          name: "Emma Wilson",
          image: "https://picsum.photos/seed/electronics1/400/400.jpg",
          instagram: "#",
          email: "emma@racingteam.com"
        },
        {
          id: 11,
          name: "Michael Brown",
          image: "https://picsum.photos/seed/electronics2/400/400.jpg",
          instagram: "#",
          email: "michael@racingteam.com"
        },
        {
          id: 12,
          name: "Jennifer Lee",
          image: "https://picsum.photos/seed/electronics3/400/400.jpg",
          instagram: "#",
          email: "jennifer@racingteam.com"
        }
      ]
    },
    {
      id: 4,
      name: "Design",
      icon: <FaPaintBrush />,
      color: "info",
      description: "Aerodynamics and visual aesthetics",
      members: [
        {
          id: 13,
          name: "Olivia Martinez",
          image: "https://picsum.photos/seed/design1/400/400.jpg",
          instagram: "#",
          email: "olivia@racingteam.com"
        },
        {
          id: 14,
          name: "Lucas Anderson",
          image: "https://picsum.photos/seed/design2/400/400.jpg",
          instagram: "#",
          email: "lucas@racingteam.com"
        },
        {
          id: 15,
          name: "Nina Patel",
          image: "https://picsum.photos/seed/design3/400/400.jpg",
          instagram: "#",
          email: "nina@racingteam.com"
        },
        {
          id: 16,
          name: "Tom Harris",
          image: "https://picsum.photos/seed/design4/400/400.jpg",
          instagram: "#",
          email: "tom@racingteam.com"
        },
        {
          id: 17,
          name: "Grace Chen",
          image: "https://picsum.photos/seed/design5/400/400.jpg",
          instagram: "#",
          email: "grace@racingteam.com"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <AnimatedSection direction="up" delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  OUR TEAM
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent p-4">
                Meet Our Racing Team
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                Passionate students from diverse backgrounds working together to build championship-winning racing cars.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Team Stats Bar */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-content py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {[
              { value: "50+", label: "Team Members" },
              { value: "4", label: "Departments" },
              { value: "8", label: "Race Cars Built" },
              { value: "15+", label: "Awards Won" }
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100} direction="up">
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black">{stat.value}</div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider opacity-90">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Departments and Team Members */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {departments.map((department, deptIndex) => (
          <div key={department.id} className="mb-12 sm:mb-16">
            <AnimatedSection direction="up" delay={100 + deptIndex * 50}>
              <div className="text-center mb-6 sm:mb-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-${department.color}/10 text-${department.color} mb-3 sm:mb-4`}>
                  <div className="text-xl sm:text-2xl">{department.icon}</div>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{department.name}</h2>
                <p className="text-sm sm:text-base text-base-content/70 max-w-2xl mx-auto">{department.description}</p>
              </div>
            </AnimatedSection>

            <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 ${department.members.length < 5 ? 'max-w-4xl mx-auto' : ''}`}>
              {department.members.map((member, memberIndex) => (
                <AnimatedSection
                  key={member.id}
                  direction="up"
                  delay={200 + deptIndex * 50 + memberIndex * 30}
                >
                  <div className="group relative w-32 sm:w-36 md:w-40">
                    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-base-200">
                      <div className="aspect-square">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      
                      {/* Social Links Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <h3 className="text-white font-bold text-xs sm:text-sm mb-2 text-center px-2">{member.name}</h3>
                        <div className="flex gap-2">
                          <a 
                            href={member.instagram}
                            className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-pink-500 hover:scale-110 transition-all duration-300"
                            aria-label={`${member.name}'s Instagram`}
                          >
                            <FaInstagram className="text-sm sm:text-base" />
                          </a>
                          <a 
                            href={`mailto:${member.email}`}
                            className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-500 hover:scale-110 transition-all duration-300"
                            aria-label={`Email ${member.name}`}
                          >
                            <FaEnvelope className="text-xs sm:text-sm" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Name Below Card */}
                    <p className="text-center mt-2 text-xs sm:text-sm font-medium text-base-content/80 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Join Our Team CTA */}
      <div className="relative bg-gradient-to-br from-primary to-primary-focus text-primary-content overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center relative z-10">
          <AnimatedSection delay={0}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              Want to Join Our Team?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto text-primary-content/90">
              We're always looking for passionate students to join our racing team. Whether you're an engineer, designer, or business student, there's a place for you.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <a
              href="/join"
              className="btn bg-base-100 btn-md sm:btn-lg px-6 sm:px-10 font-bold text-primary hover:bg-accent hover:text-accent-content"
            >
              Apply Now
            </a>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Team;