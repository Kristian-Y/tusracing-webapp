import { FaArrowRight, FaHome, FaTachometerAlt, FaSearch } from "react-icons/fa";
import AnimatedSection from "../../components/animate/AnimatedSection";
import { useTheme } from "../../theme-manager/ThemeContext";
import { useState, useEffect } from "react";

const NotFound = () => {
  const { theme } = useTheme();
  const [speed, setSpeed] = useState(0);
  const [factIndex, setFactIndex] = useState(0);

  const f1Facts = [
    "F1 cars can accelerate from 0 to 100 mph in just 2.5 seconds",
    "An F1 steering wheel costs over $50,000 and has over 25 buttons",
    "F1 tires can reach temperatures of 120°C during a race",
    "F1 drivers lose about 3kg of body weight during a race",
    "An F1 car can drive upside down at 120mph due to downforce",
    "F1 engines can rev up to 20,000 RPM",
    "F1 teams can change all four tires in under 3 seconds",
    "F1 cars produce enough downforce to drive on a ceiling at 100mph",
    "F1 cars use carbon fiber brakes that can reach temperatures of 1,000°C",
    "F1 drivers experience G-forces of up to 6G during cornering",
    "An F1 car's front wing can produce more downforce than an entire road car",
    "F1 cars can go from 200 mph to a complete stop in just 4 seconds",
    "F1 teams use over 100 sensors on each car to collect data",
    "The fuel in an F1 car is so thin it would be illegal to use in a road car",
    "F1 drivers have heart rates of over 180 bpm during a race",
    "An F1 car's engine can't be started when cold - it needs to be pre-heated",
    "F1 cars are designed to be most efficient at high speeds, not low speeds",
    "The total cost of an F1 car is around $15 million",
    "F1 drivers can lose up to 3 liters of fluid during a race",
    "F1 tires are designed to last only about 100 miles before needing replacement"
  ];

  // Speed interval
  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(prev => {
        const change = Math.floor(Math.random() * 20) + 10; // 10-29
        const addOrRemove = Math.random() < 0.5; // 50% chance

        if (addOrRemove) {
          // increase
          return prev + change >= 300 ? 300 : prev + change;
        } else {
          // decrease only if speed > 150
          return prev > 150 ? Math.max(0, prev - change) : prev;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  // Fact interval
  useEffect(() => {
    const factInterval = setInterval(() => {
      setFactIndex(prev => (prev + 1) % f1Facts.length);
    }, 5000);
    return () => clearInterval(factInterval);
  }, [f1Facts.length]); // added dependency to satisfy ESLint

  return (
    <div className="w-full min-h-screen relative bg-base-100">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center pt-8"
        style={{
          backgroundImage: theme === "lightTheme"
            ? `linear-gradient(rgba(255,255,255,0.35), rgba(255,255,255,0.5)), url('https://media.richardmille.com/wp-content/uploads/2016/12/25122440/vignetteMCL25.jpg?dpr=1&width=2000')`
            : `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://media.richardmille.com/wp-content/uploads/2016/12/25122440/vignetteMCL25.jpg?dpr=1&width=2000')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0
        }}
      >
        {/* Status Badge */}
        <AnimatedSection direction="down" delay={100}>
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm animate-pulse">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider text-center">
                Pit Stop Required
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Revving 404 */}
        <AnimatedSection direction="up" delay={200}>
          <div className="relative mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-4 md:gap-8">
            <span className="text-5xl sm:text-7xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">4</span>

            {/* F1 Steering Wheel */}
            <div className="relative w-[25vw] max-w-[140px] min-w-[80px] aspect-[1.27]">
              <div className="relative w-full h-full animate-[rev_2s_infinite_ease-in-out]">
                <div className="absolute inset-0 bg-black rounded-2xl shadow-2xl border-2 border-gray-800">
                  {/* Top display */}
                  <div className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-[80%] h-[15%] bg-gray-900 rounded flex items-center justify-center">
                    <span className="text-primary p-2 text-[clamp(0.7rem,1.5vw,1rem)] font-bold">{speed} <span className="text-[10px]">km/h</span></span>
                  </div>

                  {/* Left buttons */}
                  <div className="absolute left-[8%] top-1/2 transform -translate-y-1/2 flex flex-col gap-[5%]">
                    <div className="w-[8%] h-[8%] bg-red-600 rounded-full"></div>
                    <div className="w-[8%] h-[8%] bg-yellow-500 rounded-full"></div>
                  </div>

                  {/* Right buttons */}
                  <div className="absolute right-[8%] top-1/2 transform -translate-y-1/2 flex flex-col gap-[5%]">
                    <div className="w-[8%] h-[8%] bg-green-600 rounded-full"></div>
                    <div className="w-[8%] h-[8%] bg-blue-600 rounded-full"></div>
                  </div>

                  {/* Center rotary */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45%] h-[30%] bg-gray-700 rounded-full border-2 border-gray-600"></div>

                  {/* Bottom display */}
                  <div className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2 w-[50%] h-[12%] bg-gray-900 rounded flex items-center justify-center">
                    <span className="text-accent text-[clamp(0.5rem,1.5vw,0.8rem)] font-bold">404</span>
                  </div>
                </div>

                {/* Paddle shifters */}
                <div className="absolute -left-[3%] top-1/2 transform -translate-y-1/2 w-[6%] h-[30%] bg-red-600 rounded-r"></div>
                <div className="absolute -right-[3%] top-1/2 transform -translate-y-1/2 w-[6%] h-[30%] bg-blue-600 rounded-l"></div>
              </div>
            </div>

            <span className="text-5xl sm:text-7xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">4</span>
          </div>
        </AnimatedSection>

        {/* Message */}
        <AnimatedSection direction="up" delay={300}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center text-base-content">Out of Track</h2>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={400}>
          <p className="text-base sm:text-lg md:text-xl text-base-content/90 max-w-2xl mx-auto text-center mb-6 sm:mb-8 px-2">
            Looks like you've gone off the racing line! This page might be in the garage for repairs or has been retired from the circuit.
          </p>
        </AnimatedSection>

        {/* F1 Fact Section */}
        <AnimatedSection direction="up" delay={500}>
          <div className="max-w-lg mx-auto mb-6 sm:mb-8 px-2">
            <div className="bg-base-200/70 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black/50 flex flex-col items-center text-center space-y-2">
              <div className="flex flex-row items-center gap-1 sm:gap-2">
                <FaTachometerAlt className="text-xl sm:text-2xl text-primary" />
                <h3 className="font-bold text-base sm:text-lg text-primary m-0">F1 Fact</h3>
              </div>

              <div className="flex items-center justify-center h-[3.5rem] sm:h-[4rem]">
                <p className="text-base-content/80 text-center text-sm sm:text-base italic leading-relaxed transition-opacity duration-300 opacity-100 overflow-hidden">
                  {f1Facts[factIndex]}
                </p>
              </div>

              <div className="flex justify-center gap-1 mt-2">
                {f1Facts.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${index === factIndex ? "bg-primary w-3 sm:w-6" : "bg-base-100"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Buttons */}
        <AnimatedSection direction="up" delay={600}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
            <a
              href="/"
              className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-content rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <FaHome className="relative z-10 text-sm sm:text-base" />
              <span className="relative z-10">Return to Pit Lane</span>
              <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform text-sm sm:text-base" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-focus to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-base-200/80 text-base-content rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:bg-base-300 border border-base-300 backdrop-blur-sm"
            >
              <FaSearch className="text-sm sm:text-base" />
              <span>Search Circuit</span>
            </button>
          </div>
        </AnimatedSection>
      </div>

      <style>
        {`
          @keyframes rev {
            0%, 100% { transform: rotate(-5deg) scale(1); }
            50% { transform: rotate(5deg) scale(1.05); }
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;
