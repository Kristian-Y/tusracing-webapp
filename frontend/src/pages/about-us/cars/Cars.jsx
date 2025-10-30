import { FaCar, FaTachometerAlt, FaWeight, FaCogs, FaGasPump, FaTrophy } from 'react-icons/fa';
import { GiCarWheel, GiSteeringWheel, GiRaceCar } from 'react-icons/gi';
import { PiEngine } from "react-icons/pi";
import { BsSpeedometer2, BsFuelPump } from 'react-icons/bs';
import { useTheme } from "../../../theme-manager/ThemeContext";
import AnimatedSection from "../../../components/animate/AnimatedSection";


const Cars = () => {
  const { theme } = useTheme();

  const carsData = [
    {
      id: 1,
      name: "Thunderbolt X1",
      year: 2023,
      image: "https://picsum.photos/seed/formula1/800/600.jpg",
      engine: "Honda CBR600RR",
      engineType: "Combustion",
      displacement: "599cc",
      cylinders: "4",
      power: "89 HP",
      torque: "65 Nm",
      weight: "210 kg",
      acceleration: "0-100 km/h in 3.2s",
      topSpeed: "140 km/h",
      fuelSystem: "Electronic Fuel Injection",
      transmission: "Sequential 6-speed",
      chassis: "Carbon fiber monocoque",
      aerodynamics: "Active wing system",
      achievements: "1st Place - Formula Student Germany 2023",
      innovations: "Carbon fiber monocoque, active aerodynamics"
    },
    {
      id: 2,
      name: "Velocity Pro",
      year: 2022,
      image: "https://picsum.photos/seed/formula2/800/600.jpg",
      engine: "KTM 690 LC4",
      engineType: "Combustion",
      displacement: "693cc",
      cylinders: "1",
      power: "75 HP",
      torque: "69 Nm",
      weight: "225 kg",
      acceleration: "0-100 km/h in 3.5s",
      topSpeed: "130 km/h",
      fuelSystem: "Electronic Fuel Injection",
      transmission: "Sequential 6-speed",
      chassis: "Steel space frame",
      aerodynamics: "Fixed wing system",
      achievements: "2nd Place - Formula Student Italy 2022",
      innovations: "Lightweight chassis, regenerative braking"
    },
    {
      id: 3,
      name: "Nitro Racer",
      year: 2021,
      image: "https://picsum.photos/seed/formula3/800/600.jpg",
      engine: "Yamaha YZF-R6",
      engineType: "Combustion",
      displacement: "599cc",
      cylinders: "4",
      power: "95 HP",
      torque: "61 Nm",
      weight: "205 kg",
      acceleration: "0-100 km/h in 3.0s",
      topSpeed: "145 km/h",
      fuelSystem: "Electronic Fuel Injection",
      transmission: "Sequential 6-speed",
      chassis: "Aluminum honeycomb",
      aerodynamics: "Adjustable diffuser",
      achievements: "Best Design Award - Formula Student UK 2021",
      innovations: "Telemetry system, adjustable suspension"
    },
    {
      id: 4,
      name: "Phoenix R",
      year: 2020,
      image: "https://picsum.photos/seed/formula4/800/600.jpg",
      engine: "Suzuki GSX-R600",
      engineType: "Combustion",
      displacement: "599cc",
      cylinders: "4",
      power: "85 HP",
      torque: "60 Nm",
      weight: "215 kg",
      acceleration: "0-100 km/h in 3.3s",
      topSpeed: "135 km/h",
      fuelSystem: "Electronic Fuel Injection",
      transmission: "Sequential 6-speed",
      chassis: "Carbon fiber monocoque",
      aerodynamics: "Multi-element wings",
      achievements: "3rd Place - Formula Student Austria 2020",
      innovations: "Hybrid power system, active safety features"
    }
  ];

  return (
    <div className="min-h-[100vh] bg-base-100 pt-8">
      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 py-24 text-center">
          <AnimatedSection direction="up" delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  OUR CARS
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent p-4">
                Formula Student Racing Cars
              </h1>
              <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                Engineering excellence meets competitive racing. Explore our high-performance combustion engine vehicles designed and built by student engineers.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {carsData.map((car, index) => (
            <AnimatedSection
              key={car.id}
              direction="up"
              delay={200 + index * 100}
            >
              <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <figure className="h-64 overflow-hidden relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 badge badge-primary text-white font-bold">
                    {car.year}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h2 className="text-2xl font-bold text-white">{car.name}</h2>
                  </div>
                </figure>

                <div className="card-body p-6">
                  {/* Engine Type Badge */}
                  <div className="flex justify-center mb-4">
                    <div className="badge badge-outline badge-lg text-primary font-bold">
                      <PiEngine className="mr-2" />
                      {car.engineType} Engine
                    </div>
                  </div>

                  {/* Key Specifications */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="stat bg-base-300 rounded-lg p-3">
                      <div className="stat-figure text-primary">
                        <FaTachometerAlt />
                      </div>
                      <div className="stat-title text-xs">Power</div>
                      <div className="stat-value text-lg">{car.power}</div>
                    </div>

                    <div className="stat bg-base-300 rounded-lg p-3">
                      <div className="stat-figure text-secondary">
                        <BsSpeedometer2 className='text-error' />
                      </div>
                      <div className="stat-title text-xs">Top Speed</div>
                      <div className="stat-value text-lg">{car.topSpeed}</div>
                    </div>

                    <div className="stat bg-base-300 rounded-lg p-3">
                      <div className="stat-figure text-accent">
                        <GiSteeringWheel  />
                      </div>
                      <div className="stat-title text-xs">Acceleration</div>
                      <div className="stat-value text-lg">{car.acceleration.split(' ')[0]}</div>
                    </div>

                    <div className="stat bg-base-300 rounded-lg p-3">
                      <div className="stat-figure text-warning">
                        <FaWeight />
                      </div>
                      <div className="stat-title text-xs">Weight</div>
                      <div className="stat-value text-lg">{car.weight}</div>
                    </div>
                  </div>

                  {/* Technical Details */}
                  <div className="collapse collapse-arrow bg-base-300 mb-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-medium">
                      Technical Specifications
                    </div>
                    <div className="collapse-content">
                      <div className="grid grid-cols-1 gap-3 mt-2">
                        <div className="flex items-center">
                          <FaCar className="text-secondary mr-2" />
                          <span className="text-sm font-medium mr-2">Engine:</span>
                          <span className="text-sm">{car.engine}</span>
                        </div>
                        <div className="flex items-center">
                          <FaGasPump className="text-secondary mr-2" />
                          <span className="text-sm font-medium mr-2">Displacement:</span>
                          <span className="text-sm">{car.displacement}</span>
                        </div>
                        <div className="flex items-center">
                          <FaCogs className="text-secondary mr-2" />
                          <span className="text-sm font-medium mr-2">Transmission:</span>
                          <span className="text-sm">{car.transmission}</span>
                        </div>
                        <div className="flex items-center">
                          <GiCarWheel className="text-secondary mr-2" />
                          <span className="text-sm font-medium mr-2">Chassis:</span>
                          <span className="text-sm">{car.chassis}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements and Innovations */}
                  <div className="divider"></div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <FaTrophy className="text-accent mr-2 text-lg" /> {/* Increased size */}
                      <div>
                        <p className="text-xs text-base-content/70">Achievement</p>
                        <p className="font-semibold text-sm">{car.achievements}</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;