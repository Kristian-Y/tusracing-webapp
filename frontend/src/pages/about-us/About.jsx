import { useTheme } from "../../theme-manager/ThemeContext";
import AnimatedSection from "../../components/animate/AnimatedSection";

const About = () => {
  const { theme } = useTheme();

  return (
    <div className=" min-h-screen bg-neutral text-neutral-content flex flex-col items-center justify-center px-4 py-10">
      
      {/* Intro text */}
      <AnimatedSection direction="up" delay={100}>
        <h2 className="text-center text-lg mb-10 max-w-3xl">
          Here you can find out everything about us: our cars, our sub-teams and
          our milestones. Just click through!
        </h2>
      </AnimatedSection>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        
        {/* Our Race Cars */}
        <AnimatedSection direction="up" delay={200}>
          {/* FIX: Added h-full to make the card stretch to the height of the tallest card in the row */}
          <div className="card h-full bg-base-300/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <figure className="relative">
              <img
                src="/images/cars/car-on-track.jpg"
                alt="Race car"
                className={`object-cover w-full h-48 ${theme === "darkTheme" ? "opacity-80" : ""}`}
              />
              <img
                src="/images/icons/about-us/racecar.png"
                alt="Racecar icon"
                className="absolute top-4 left-4 w-10 h-10"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">Our Race Cars</h2>
              <hr className={`my-2 h-[2px] border-0 ${theme === "darkTheme" ? "bg-white" : "bg-black"}`} />
              <p>
                Our race cars are the result of cutting-edge engineering and
                meticulous design. Each car is built to perform at the highest
                level, combining speed, agility, and precision on the track.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Team */}
        <AnimatedSection direction="up" delay={300}>
          {/* FIX: Added h-full */}
          <div className="card h-full bg-base-300/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <figure className="relative">
              <img
                src="/images/team/team-photo.jpg"
                alt="Team"
                className={`object-cover w-full h-48 ${theme === "darkTheme" ? "opacity-80" : ""}`}
              />
              <img
                src="/images/icons/about-us/team.png"
                alt="Team icon"
                className="absolute top-4 left-4 w-10 h-10"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">Our Team</h2>
              <hr className={`my-2 h-[2px] border-0 ${theme === "darkTheme" ? "bg-white" : "bg-black"}`} />
              <p>
                Our team is made up of passionate individuals dedicated to
                excellence in engineering and motorsport. Together, we combine
                diverse skills to build high-performance racecars and push the
                boundaries of innovation.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Our History */}
        <AnimatedSection direction="up" delay={400}>
          {/* FIX: Added h-full */}
          <div className="card h-full bg-base-300/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <figure className="relative">
              <img
                src="/images/cars/car-testing.jpg"
                alt="History"
                className={`object-cover w-full h-48 ${theme === "darkTheme" ? "opacity-80" : ""}`}
              />
              <img
                src="/images/icons/about-us/history.png"
                alt="History icon"
                className="absolute top-4 left-4 w-10 h-10"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">Our History</h2>
              <hr className={`my-2 h-[2px] border-0 ${theme === "darkTheme" ? "bg-white" : "bg-black"}`} />
              <p>
                Our team began with a shared passion for motorsport and
                innovation. Over the years, we’ve grown into a respected force in
                Formula Student, continuously advancing our engineering
                capabilities.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Your Application */}
        <AnimatedSection direction="up" delay={500}>
          {/* FIX: Added h-full */}
          <div className="card h-full bg-base-300/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <figure className="relative">
              <img
                src="/images/cars/join-team.jpg"
                alt="Application"
                className={`object-cover w-full h-48 ${theme === "darkTheme" ? "opacity-80" : ""}`}
              />
              <img
                src="/images/icons/about-us/application.png"
                alt="Application icon"
                className="absolute top-4 left-4 w-10 h-10"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">Your Application</h2>
              <hr className={`my-2 h-[2px] border-0 ${theme === "darkTheme" ? "bg-white" : "bg-black"}`} />
              <p>
                Apply now to join our Formula Student team and showcase your
                engineering skills. Be part of a dynamic project that combines
                innovation, teamwork, and racing.
              </p>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default About;