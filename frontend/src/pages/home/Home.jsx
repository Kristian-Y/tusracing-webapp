import AnimatedSection from "../../components/animate/AnimatedSection";
import { useTheme } from "../../theme-manager/ThemeContext";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const achievements = [
    {
      icon: "🏆",
      title: "Competition Excellence",
      description: "Multiple podium finishes in Formula Student competitions across Europe.",
      value: "1",
      label: "Award Won"
    },
    {
      icon: "⚡",
      title: "Combustion Innovation",
      description: "Pioneering combustion vehicle technology with cutting-edge battery systems.",
      value: "0-100",
      label: "Under 4s"
    },
    {
      icon: "🔧",
      title: "Engineering Mastery",
      description: "Custom-designed chassis and aerodynamics optimized for peak performance.",
      value: "300+",
      label: "HP Engine"
    },
  ];

  const teamValues = [
    {
      icon: "🎯",
      title: "Precision Engineering",
      description: "Every component is meticulously designed and tested for optimal performance.",
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Bringing together the brightest minds in automotive engineering.",
    },
    {
      icon: "🚀",
      title: "Innovation First",
      description: "Pushing boundaries with sustainable racing technology.",
    },
  ];

  const partners = [
    {
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      text: "FST's engineering prowess and attention to detail make them an outstanding partner in automotive innovation.",
      name: "Michael Chen, Technical Director at AutoTech",
    },
    {
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
      text: "Their commitment to excellence and sustainable racing technology is truly impressive.",
      name: "Sarah Williams, CEO of Green Motors",
    },
  ];

  return (
    <div className="bg-base-100 text-base-content overflow-x-hidden">
      {/* Hero Section with Parallax Effect */}
      <div
        className="hero min-h-[100vh] pt-8 sm:min-h-screen relative"
        style={{
          backgroundImage: `url('/images/cars/car-italy.jpg')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="hero-content text-center text-neutral-content relative z-10 px-4 py-8">
          <div
            className={`max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl backdrop-blur-sm shadow-2xl transition-colors duration-500
        ${theme === "darkTheme" ? "bg-black/50 text-white" : "bg-white/40 text-base-content"}
      `}
          >
            <AnimatedSection delay={0} direction="up">
              <div className="mb-4 sm:mb-6">
                <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-primary text-primary-content text-xs sm:text-sm font-bold rounded-full uppercase tracking-wider animate-pulse">
                  {t('home.since')}
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} direction="up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6">
                {t('home.titleLine1')}
                <br />
                <span className="text-primary">{t('home.titleLine2')}</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={400} direction="up">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 sm:mb-8">
                {t('home.subtitle')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={600} direction="up">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="btn btn-primary btn-md sm:btn-lg px-6 sm:px-8 shadow-2xl hover:scale-105 transition-transform duration-300">
                  {t('home.buttons.ourCars')}
                </button>
                <button className="btn btn-md sm:btn-lg px-6 sm:px-8 hover:bg-accent hover:text-base-100 transition-all duration-300">
                  {t('home.buttons.joinTeam')}
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-content py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {[
              { value: "20+", label: t('home.stats.teamMembers') },
              { value: "2", label: t('home.stats.raceCars') },
              { value: "5+", label: t('home.stats.competitions') },
              { value: "3", label: t('home.stats.continents') }
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

      {/* Achievements Section */}
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <AnimatedSection delay={0}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t('home.achievementsTitle')}</h2>
            <div className="w-16 sm:w-24 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto">
              {t('home.achievementsSubtitle')}
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <AnimatedSection key={achievement.title} delay={index * 150}>
              <div className="group relative bg-gradient-to-br from-base-200 to-base-300 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="text-4xl sm:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{achievement.title}</h3>
                  <p className="text-sm sm:text-base text-base-content/70 mb-4">{achievement.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-primary">{achievement.value}</span>
                    <span className="text-xs sm:text-sm uppercase tracking-wider text-base-content/60">{achievement.label}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Team Values Section */}
      <div className="bg-gradient-to-br from-base-200 to-base-100 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection delay={0}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t('home.coreValuesTitle')}</h2>
              <div className="w-16 sm:w-24 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto">
                {t('home.coreValuesSubtitle')}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {teamValues.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 150}>
                <div className="text-center group">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-primary rounded-full opacity-20 group-hover:scale-125 transition-transform duration-500"></div>
                    <div className="relative bg-gradient-to-br from-primary to-primary-focus rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-primary-content text-3xl sm:text-4xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-base-content/70 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <AnimatedSection delay={0}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t('home.partnersTitle')}</h2>
            <div className="w-16 sm:w-24 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto">
              {t('home.partnersSubtitle')}
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <AnimatedSection key={partner.name} delay={index * 150}>
              <div className="bg-base-200 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 sm:ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                      <img alt={partner.name} src={partner.image} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-3">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <p className="text-sm sm:text-base text-base-content/80 italic leading-relaxed">{partner.text}</p>
                    </div>
                    <div className="font-bold text-sm sm:text-base text-base-content">{partner.name}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative bg-gradient-to-br from-primary to-primary-focus text-primary-content overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center relative z-10">
          <AnimatedSection delay={0}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              {t('home.ctaTitle')}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto text-primary-content/90">
              {t('home.ctaDescription')}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="/contact"
                className="btn bg-base-100 btn-md sm:btn-lg px-6 sm:px-10 font-bold"
              >
                {t('home.cta.becomeSponsor')}
              </a>
              <a
                href="/join"
                className="btn btn-primary btn-md sm:btn-lg px-6 sm:px-10 font-bold border-none hover:bg-accent/80 hover:text-primary-content"
              >
                {t('home.cta.joinOurTeam')}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Home;