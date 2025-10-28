const About = () => {
  return (
    <div className="min-h-screen bg-neutral text-neutral-content flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-center text-lg mb-10">
        Here you can find out everything about us: our cars, our sub-teams and our milestones. Just click through!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">

        {/* Our Race Cars */}
        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
          <figure className="relative">
            <img
              src="/images/racecar.jpg"
              alt="Race car"
              className="object-cover w-full h-48 opacity-80"
            />
            <div className="absolute top-4 left-4 text-4xl">🏎️</div>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Our Race Cars</h2>
            <p>
              Our race cars are the result of cutting-edge engineering and meticulous design.
              Each car is built to perform at the highest level, combining speed, agility, and precision on the track.
            </p>
          </div>
        </div>

        {/* Our Team */}
        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
          <figure className="relative">
            <img
              src="/images/team.jpg"
              alt="Team"
              className="object-cover w-full h-48 opacity-80"
            />
            <div className="absolute top-4 left-4 text-4xl">👥</div>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Our Team</h2>
            <p>
              Our team is made up of passionate individuals dedicated to excellence in engineering and motorsport.
              Together, we combine diverse skills to build high-performance racecars and push the boundaries of innovation.
            </p>
          </div>
        </div>

        {/* Our History */}
        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
          <figure className="relative">
            <img
              src="/images/history.jpg"
              alt="History"
              className="object-cover w-full h-48 opacity-80"
            />
            <div className="absolute top-4 left-4 text-4xl">🕒</div>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Our History</h2>
            <p>
              Our team began with a shared passion for motorsport and innovation.
              Over the years, we’ve grown into a respected force in Formula Student,
              continuously advancing our engineering capabilities.
            </p>
          </div>
        </div>

        {/* Your Application */}
        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 ring-1 ring-sky-400">
          <figure className="relative">
            <img
              src="/images/application.jpg"
              alt="Application"
              className="object-cover w-full h-48 opacity-80"
            />
            <div className="absolute top-4 left-4 text-4xl">📋</div>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Your Application</h2>
            <p>
              Apply now to join our Formula Student team and showcase your engineering skills.
              Be part of a dynamic project that combines innovation, teamwork, and racing.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
