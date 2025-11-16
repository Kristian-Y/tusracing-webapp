import AnimatedSection from "../../components/animate/AnimatedSection";
import { useTheme } from "../../theme-manager/ThemeContext";
import { useTranslation } from 'react-i18next';
import "./Home.css"

const Home = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const achievements = [
    {
      icon: "🏆",
      title: t('home.achievements.competition.title'),
      description: t('home.achievements.competition.description'),
      value: "1",
      label: t('home.achievements.competition.awardLabel')
    },
    {
      icon: "⚡",
      title: t('home.achievements.combustion.title'),
      description: t('home.achievements.combustion.description'),
      value: t('home.achievements.combustion.100'),
      label: t('home.achievements.combustion.100Label')
    },
    {
      icon: "🔧",
      title: t('home.achievements.engineering.title'),
      description: t('home.achievements.engineering.description'),
      value: t('home.achievements.engineering.hp'),
      label: t('home.achievements.engineering.hpLabel')
    },
  ];

  const teamValues = [
    {
      icon: "🎯",
      title: t('home.teamValues.precision.title'),
      description: t('home.teamValues.precision.description'),
    },
    {
      icon: "🤝",
      title: t('home.teamValues.teamwork.title'),
      description: t('home.teamValues.teamwork.description'),
    },
    {
      icon: "🚀",
      title: t('home.teamValues.innovation.title'),
      description: t('home.teamValues.innovation.description'),
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

  const TeamStrategyCard = ({ value, index }) => {
    return (
      <AnimatedSection key={value.title} delay={index * 150}>
        <div className="text-center group">
          <div className="relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6">
            <div className="absolute inset-0 bg-primary rounded-full opacity-20 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="relative bg-gradient-to-br from-primary to-primary-focus rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-primary-content text-3xl sm:text-4xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
              {value.icon}
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3">{value.title}</h3>
          <p className="text-sm sm:text-base text-base-content/70 leading-relaxed">
            {value.description}
          </p>
        </div>
      </AnimatedSection>
    );
  };

  const AchievementCard = ({ achievement, index }) => {
    return (
      <AnimatedSection key={achievement.title} delay={index * 150}>
        <div className="group relative bg-gradient-to-br from-base-200 to-base-300 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
          {/* Decorative circle */}
          <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-primary/10 rounded-full -mr-10 -mt-10 sm:-mr-12 sm:-mt-12 md:-mr-16 md:-mt-16 group-hover:scale-150 transition-transform duration-700"></div>

          <div className="relative z-10 flex flex-col flex-1">
            {/* Icon */}
            <div className="text-3xl sm:text-4xl md:text-6xl mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
              {achievement.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{achievement.title}</h3>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-base-content/70 mb-3 flex-1">{achievement.description}</p>

            {/* Value */}
            <div className="flex flex-row items-baseline justify-start gap-2 mt-auto">
              <span className="text-xl sm:text-2xl md:text-2xl font-black text-primary">{achievement.value}</span>
              <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-base-content/60">{achievement.label}</span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    );
  };


  const StatBarContent = ({ stat, index }) => {
    return (
      <AnimatedSection key={index} delay={index * 100} direction="up">
        <div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-black">{stat.value}</div>
          <div className="text-xs sm:text-sm uppercase tracking-wider opacity-90">{stat.label}</div>
        </div>
      </AnimatedSection>
    );
  };


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
              <p className="ribbon text-white font-bold text-sm sm:text-lg md:text-xl lg:text-2xl brightness-70 mb-2 mt-2">
                {t('home.subtitle')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={600} direction="up">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a href="/about/our-cars" className="btn btn-primary btn-md sm:btn-lg px-6 sm:px-8 shadow-2xl hover:scale-105 transition-transform duration-300">
                  {t('home.buttons.ourCars')}
                </a>
                <a href="/about/join-us" className="btn btn-md sm:btn-lg px-6 sm:px-8 hover:bg-accent/90 transition-all duration-300">
                  {t('home.buttons.joinTeam')}
                </a>
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
              { value: "3", label: t('home.stats.raceCars') },
              { value: "5+", label: t('home.stats.competitions') },
              { value: "3+", label: t('home.stats.continents') }
            ].map((stat, index) => (
              <StatBarContent key={index} stat={stat} index={index} />
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
            <AchievementCard key={achievement.title} achievement={achievement} index={index} />
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
              <TeamStrategyCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      {/* <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
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
      </div> */}

      {/* Final CTA Section */}
      <div className="relative bg-gradient-to-br from-primary to-primary-focus text-primary-content overflow-hidden pt-8">
        {/* Single wave cutout at the top */}
        <div className="home-wave-top">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,60 C150,20 350,100 500,60 C650,20 850,100 1000,60 C1150,20 1200,40 1200,60 L1200,0 L0,0 Z"
              fill="currentColor"
              stroke="none"
            ></path>
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary  to-bg-black/10"></div>
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
                href="/sponsors"
                className="btn bg-base-100 btn-md sm:btn-lg px-6 sm:px-10 font-bold"
              >
                {t('home.cta.becomeSponsor')}
              </a>
              <a
                href="/join-us"
                className="btn btn-primary btn-md sm:btn-lg px-6 sm:px-10 font-bold border-none hover:bg-accent/90/80 hover:text-primary-content"
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