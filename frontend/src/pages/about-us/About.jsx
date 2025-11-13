import { useTheme } from "../../theme-manager/ThemeContext";
import AnimatedSection from "../../components/animate/AnimatedSection";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const aboutCards = [
    { id: 1, key: 'ourRaceCars', image: "/images/cars/car-on-track.jpg", icon: "/images/icons/about-us/racecar.png", color: 'primary', link: "/about/our-cars" },
    { id: 2, key: 'ourTeam', image: "/images/team/team-photo.jpg", icon: "/images/icons/about-us/team.png", color: 'primary', link: "/about/our-team" },
    { id: 3, key: 'ourHistory', image: "/images/cars/car-testing.jpg", icon: "/images/icons/about-us/history.png", color: 'primary', link: "/about/our-history" },
    { id: 4, key: 'joinUs', image: "/images/cars/join-team.jpg", icon: "/images/icons/about-us/application.png", color: 'accent', link: "/about/join-us" },
  ];

  return (
    <div className="min-h-[100vh] pt-8 bg-base-100">
      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 py-24 text-center min-h-[100vh] sm:min-h-fit">
          <AnimatedSection direction="up" delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  {t('about.badge')}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent p-4">
                {t('about.heroTitle')}
              </h1>
              <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                {t('about.heroDescription')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ================= CARDS SECTION ================= */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {aboutCards.map((card, index) => (
            <AnimatedSection key={card.id} direction="up" delay={200 + index * 100}>
              <div className="group relative h-full bg-base-200 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={t(`about.cards.${card.key}.title`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                  {/* Icon */}
                  <div
                    className={`absolute top-6 left-6 bg-${card.color}/90 backdrop-blur-xl p-3 rounded-xl shadow-lg`}
                  >
                    <img src={card.icon} alt={card.title} className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-base-content">
                    {t(`about.cards.${card.key}.title`)}
                  </h3>
                  <div className={`w-20 h-1 bg-${card.color} mb-4 rounded-full`}></div>
                  <p className="text-base-content/70 leading-relaxed mb-6">
                    {t(`about.cards.${card.key}.description`)}
                  </p>

                  {/* CTA Button */}
                  <div className="flex items-center justify-between">
                    <a
                      href={card.link}
                      className={`inline-flex items-center gap-2 text-${card.color} font-semibold hover:gap-3 transition-all duration-300`}
                    >
                      <span>{t(`about.cards.${card.key}.cta`)}</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>

                    {/* Decorative Element */}
                    <div
                      className={`w-12 h-12 bg-${card.color}/10 rounded-full flex items-center justify-center group-hover:bg-${card.color}/20 transition-colors duration-300`}
                    >
                      <div className={`w-6 h-6 bg-${card.color} rounded-full`}></div>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* ================= CTA SECTION ================= */}
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection direction="up" delay={200}>
            <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.ctaTitle')}
            </h2>
            <p className="text-lg text-base-content/70 mb-8">
              {t('about.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/about/join-us" className="btn btn-primary btn-lg px-8">
                {t('about.ctaButtons.joinTheTeam')}
              </a>
              <a
                href="/contacts"
                className="btn btn-outline text-primary-content bg-accent hover:bg-accent/90 btn-lg px-8 hover:text-primary-content"
              >
                {t('about.ctaButtons.contactUs')}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;