import { useState, useEffect } from "react";
import AnimatedSection from "../animate/AnimatedSection";
import { useTranslation } from "react-i18next";
import api from '../../api/axios';


// const galleryItems = [
//   {
//     name: "TU Sofia",
//     id: "item1",
//     imageUrl: "https://yt3.googleusercontent.com/ytc/AIdro_kda-9OExpUj3s6cgtwFnkgX2jLpw5AjpQs5IdTItF_bgg=s900-c-k-c0x00ffffff-no-rj",
//     href: "https://en.wikipedia.org/wiki/Sponsor_(commercial)",
//   },
//   {
//     name: "Bosch",
//     id: "item1",
//     imageUrl: "https://logos-world.net/wp-content/uploads/2020/08/Bosch-Logo.png",
//     href: "https://en.wikipedia.org/wiki/Sponsor_(commercial)",
//   },
//   {
//     name: "Porsche",
//     id: "item2",
//     imageUrl:
//       "https://di-uploads-pod3.dealerinspire.com/porscheoffremont/uploads/2018/09/porsche-logo.jpg",
//     href: "https://en.wikipedia.org/wiki/Sponsor_(commercial)",
//   },
//   {
//     name: "Ocean Serenity",
//     id: "item3",
//     imageUrl:
//       "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=320&h=160&fit=crop",
//     href: "https://en.wikipedia.org/wiki/Sponsor_(commercial)",
//   },
//   {
//     name: "Desert Dunes",
//     id: "item4",
//     imageUrl:
//       "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=320&h=160&fit=crop",
//     href: "https://en.wikipedia.org/wiki/Sponsor_(commercial)",
//   },
//   {
//     name: "Forest Path",
//     id: "item5",
//     imageUrl:
//       "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=320&h=160&fit=crop",
//     href: "https://en.wikipedia.org/wiki/Sponsor_(commercial)",
//   },
//   {
//     name: "Northern Lights",
//     id: "item6",
//     imageUrl:
//       "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=320&h=160&fit=crop",
//     href: "https://en.wikipedia.org/wiki/Sponsor_(commercial)",
//   },
// ];

const SponsorCarousel = () => {
  const { t, i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [sponsors, setSponsors] = useState([]);
  const scrollItems = [...sponsors, ...sponsors];

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await api.get('/sponsors');
        let fetchedSponsors = [];
        response.data.forEach(sponsor => {
            let newSponsor = {
              name: sponsor.name,
              id: sponsor.id,
              imageUrl: sponsor.logo,
              href: sponsor.link
            };
            fetchedSponsors.push(newSponsor);
        });
        setSponsors(fetchedSponsors);
        console.log('Fetched sponsors:', response.data);
      } catch (error) {
        console.error('Error fetching sponsors:', error);
      }
    };

    fetchSponsors();
  }, []);

  return (
    <>
      <div className="w-full h-1 bg-gradient-to-r from-primary via-accent to-primary relative z-[50]"></div>

      <div className="w-full pt-6 pb-3 bg-base-200">
        {/* Title + Button Section */}
        <div className="relative flex items-center justify-center mb-8 w-full">
          {/* Centered title */}
          <AnimatedSection delay={0} direction="up">
            <h2 className="text-3xl font-semibold text-base-content text-center">
              {t("footer-sponsors.title")}
            </h2>
          </AnimatedSection>

          {/* Right-aligned animated button (only visible on desktop) */}
          <div className="absolute right-4 hidden md:block">
            <AnimatedSection delay={100} direction="up">
              <a
                href="/sponsors"
                className="btn btn-sm rounded-full px-5 bg-primary text-primary-content hover:bg-accent/90 hover:text-accent-content transition-all"
              >
                {t("footer-sponsors.btn")}
              </a>
            </AnimatedSection>
          </div>
        </div>

        {/* Carousel Section */}
        <AnimatedSection delay={200} direction="up">
          <div
            className="relative overflow-hidden w-full mb-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Edge fade gradients */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-[5px] bg-gradient-to-r from-base-200 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-[5px] bg-gradient-to-l from-base-200 to-transparent z-10" />

            {/* Scrolling Track */}
            <div
              className={`flex gap-[12px] w-max animate-[scroll_30s_linear_infinite] ${
                isHovered ? "pause" : ""
              }`}
            >
              {scrollItems.map((item, i) => (
                <a
                  key={item.id + i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-60 bg-base-100 rounded-lg border-theme overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-[10px] shadow-theme mt-4"
                >
                  <div className="flex items-center justify-center bg-base-100 h-36 p-2">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-2 text-center bg-base-300">
                    <p className="text-base-content text-sm font-medium">
                      {item.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Mobile button (below carousel) */}
        <div className="flex justify-center md:hidden">
          <AnimatedSection delay={100} direction="up">
            <a
              href="/sponsors"
              className="btn rounded-full px-5 bg-primary text-primary-content hover:bg-accent/90 hover:text-accent-content transition-all"
            >
              {t("footer-sponsors.btn")}
            </a>
          </AnimatedSection>
        </div>

        {/* Keyframes + Theme Styling */}
        <style>
          {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .pause {
            animation-play-state: paused;
          }

          :root[data-theme="lightTheme"] .shadow-theme {
            box-shadow: 0 4px 8px rgba(0,0,0,0.15);
          }
          :root[data-theme="lightTheme"] .border-theme {
            border: 1px solid rgba(0,0,0,0.3);
          }
          [data-theme="darkTheme"] .shadow-theme {
            box-shadow: 0 4px 8px rgba(255,255,255,0.15);
          }
          [data-theme="darkTheme"] .border-theme {
            border: 1px solid rgba(255,255,255,0.3);
          }
        `}
        </style>
      </div>
    </>
  );
};

export default SponsorCarousel;
