import { useTheme } from "../../theme-manager/ThemeContext";
const About = () => {
  const { theme } = useTheme();
  return (
    <div className="mt-14 min-h-screen bg-neutral text-neutral-content flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-center text-lg mb-10">
        Here you can find out everything about us: our cars, our sub-teams and
        our milestones. Just click through!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
        {/* Our Race Cars */}
        <div className="card bg-base-300/30 shadow-xl hover:shadow-2xl transition-all duration-300">
          <figure className="relative">
            <img
              src="/images/cars/car-on-track.jpg"
              alt="Race car"
              className={`object-cover w-full h-48 ${
                theme === "darkTheme" ? "opacity-80" : ""
              }`}
            />
            <img
              src="/images/icons/about-us/racecar.png"
              alt="Racecar icon"
              className="absolute top-4 left-4 w-10 h-10"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">Our Race Cars</h2>
            <hr />
            <p>
              Our race cars are the result of cutting-edge engineering and
              meticulous design. Each car is built to perform at the highest
              level, combining speed, agility, and precision on the track.
            </p>
          </div>
        </div>

        {/* Our Team */}
        <div className="card bg-base-300/30 shadow-xl hover:shadow-2xl transition-all duration-300">
          <figure className="relative">
            <img
              src="/images/team/team-photo.jpg"
              alt="Team"
              className={`object-cover w-full h-48 ${
                theme === "darkTheme" ? "opacity-80" : ""
              }`}
            />
            <img
              src="/images/icons/about-us/team.png"
              alt="Team icon"
              className="absolute top-4 left-4 w-10 h-10"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl ">Our Team</h2>
            <hr />
            <p>
              Our team is made up of passionate individuals dedicated to
              excellence in engineering and motorsport. Together, we combine
              diverse skills to build high-performance racecars and push the
              boundaries of innovation.
            </p>
          </div>
        </div>

        {/* Our History */}
        <div className="card bg-base-300/30 shadow-xl hover:shadow-2xl transition-all duration-300">
          <figure className="relative">
            <img
              src="/images/cars/car-testing.jpg"
              alt="History"
              className={`object-cover w-full h-48 ${
                theme === "darkTheme" ? "opacity-80" : ""
              }`}
            />
            <img
              src="/images/icons/about-us/history.png"
              alt="History icon"
              className="absolute top-4 left-4 w-10 h-10"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl ">Our History</h2>
            <hr />
            <p>
              Our team began with a shared passion for motorsport and
              innovation. Over the years, we’ve grown into a respected force in
              Formula Student, continuously advancing our engineering
              capabilities.
            </p>
          </div>
        </div>

        {/* Your Application */}
        <div className="card bg-base-300/30 shadow-xl hover:shadow-2xl transition-all duration-300 ">
          <figure className="relative">
            <img
              src="/images/cars/join-team.jpg"
              alt="Application"
              className={`object-cover w-full h-48 ${
                theme === "darkTheme" ? "opacity-80" : ""
              }`}
            />
            <img
              src="/images/icons/about-us/application.png"
              alt="Application icon"
              className="absolute top-4 left-4 w-10 h-10"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl">Your Application</h2>
            <hr />
            <p>
              Apply now to join our Formula Student team and showcase your
              engineering skills. Be part of a dynamic project that combines
              innovation, teamwork, and racing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
