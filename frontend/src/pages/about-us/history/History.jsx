import React, { useState, useEffect } from 'react';
import { FaTrophy, FaFlag, FaQuoteLeft, FaPlay, FaPause } from 'react-icons/fa';
import { useTheme } from "../../../theme-manager/ThemeContext";
import AnimatedSection from "../../../components/animate/AnimatedSection";
import { useTranslation } from 'react-i18next';

const History = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [activeYear, setActiveYear] = useState(2018);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play timeline
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveYear(prev => {
          if (prev >= 2023) return 2018;
          return prev + 1;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const timelineEvents = [
    {
      year: 2018,
      title: t('history.events.2018.title'),
      description: t('history.events.2018.description'),
      image: "https://picsum.photos/seed/history2018/800/600.jpg",
      achievements: [
        t('history.events.2018.achievements.0'),
        t('history.events.2018.achievements.1'),
        t('history.events.2018.achievements.2')
      ]
    },
    {
      year: 2019,
      title: t('history.events.2019.title'),
      description: t('history.events.2019.description'),
      image: "https://picsum.photos/seed/history2019/800/600.jpg",
      achievements: [
        t('history.events.2019.achievements.0'),
        t('history.events.2019.achievements.1'),
        t('history.events.2019.achievements.2')
      ]
    },
    {
      year: 2020,
      title: t('history.events.2020.title'),
      description: t('history.events.2020.description'),
      image: "https://picsum.photos/seed/history2020/800/600.jpg",
      achievements: [
        t('history.events.2020.achievements.0'),
        t('history.events.2020.achievements.1'),
        t('history.events.2020.achievements.2')
      ]
    },
    {
      year: 2021,
      title: t('history.events.2021.title'),
      description: t('history.events.2021.description'),
      image: "https://picsum.photos/seed/history2021/800/600.jpg",
      achievements: [
        t('history.events.2021.achievements.0'),
        t('history.events.2021.achievements.1'),
        t('history.events.2021.achievements.2')
      ]
    },
    {
      year: 2022,
      title: t('history.events.2022.title'),
      description: t('history.events.2022.description'),
      image: "https://picsum.photos/seed/history2022/800/600.jpg",
      achievements: [
        t('history.events.2022.achievements.0'),
        t('history.events.2022.achievements.1'),
        t('history.events.2022.achievements.2')
      ]
    },
    {
      year: 2023,
      title: t('history.events.2023.title'),
      description: t('history.events.2023.description'),
      image: "https://picsum.photos/seed/history2023/800/600.jpg",
      achievements: [
        t('history.events.2023.achievements.0'),
        t('history.events.2023.achievements.1'),
        t('history.events.2023.achievements.2')
      ]
    }
  ];

  const testimonials = [
    {
      name: t('history.testimonials.0.name'),
      role: t('history.testimonials.0.role'),
      quote: t('history.testimonials.0.quote'),
      image: "https://picsum.photos/seed/alumni1/200/200.jpg"
    },
    {
      name: t('history.testimonials.1.name'),
      role: t('history.testimonials.1.role'),
      quote: t('history.testimonials.1.quote'),
      image: "https://picsum.photos/seed/alumni2/200/200.jpg"
    },
    {
      name: t('history.testimonials.2.name'),
      role: t('history.testimonials.2.role'),
      quote: t('history.testimonials.2.quote'),
      image: "https://picsum.photos/seed/alumni3/200/200.jpg"
    }
  ];

  return (
    <div className="min-h-[100vh] pt-14 bg-base-100 relative overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="relative container mt-6 mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center ">
          <AnimatedSection direction="up" delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  {t('history.badge')}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent p-4">
                {t('history.heroTitle')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                {t('history.heroDescription')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ================= TIMELINE SECTION ================= */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <AnimatedSection direction="up" delay={100}>
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('history.timelineTitle')}</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              {t('history.timelineDescription')}
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Year Selector */}
          <div className="lg:w-1/4">
            <div className="sticky top-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{t('history.yearsLabel')}</h3>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="btn btn-circle btn-sm btn-primary"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
              </div>
              <div className="space-y-2">
                {timelineEvents.map((event) => (
                  <button
                    key={event.year}
                    onClick={() => setActiveYear(event.year)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      activeYear === event.year
                        ? 'bg-primary text-primary-content shadow-lg'
                        : 'bg-base-200 hover:bg-base-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <FaFlag className="mr-3" />
                      <span className="font-bold">{event.year}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="lg:w-3/4">
            <AnimatedSection key={activeYear} direction="right" delay={200}>
              <div className="card bg-base-200 shadow-xl overflow-hidden">
                <div className="h-64 sm:h-80">
                  <img
                    src={timelineEvents.find(e => e.year === activeYear).image}
                    alt={timelineEvents.find(e => e.year === activeYear).title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="card-body p-6">
                  <h3 className="card-title text-2xl font-bold mb-2">
                    {timelineEvents.find(e => e.year === activeYear).title}
                  </h3>
                  <p className="text-base-content/80 mb-4">
                    {timelineEvents.find(e => e.year === activeYear).description}
                  </p>
                  <div className="divider"></div>
                  <h4 className="font-bold text-lg mb-3">{t('history.keyAchievementsTitle')}</h4>
                  <ul className="space-y-2">
                    {timelineEvents.find(e => e.year === activeYear).achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <FaTrophy className="text-primary mr-2 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;