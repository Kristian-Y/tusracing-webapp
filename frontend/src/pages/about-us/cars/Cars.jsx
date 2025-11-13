import { FaCar, FaTachometerAlt, FaWeight, FaCogs, FaGasPump, FaTrophy } from 'react-icons/fa';
import { GiCarWheel, GiSteeringWheel, GiRaceCar } from 'react-icons/gi';
import { PiEngine } from "react-icons/pi";
import { BsSpeedometer2, BsFuelPump } from 'react-icons/bs';
import { useTheme } from "../../../theme-manager/ThemeContext";
import AnimatedSection from "../../../components/animate/AnimatedSection";
import { useTranslation } from 'react-i18next';


const Cars = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const carsData = [
    {
      id: 1,
      name: "McLaren MCL39",
      year: 2025,
      image: "https://mclaren.bloomreach.io/delivery/resources/content/gallery/mclaren-racing/formula-1/2025/nsr/f1-75-live-m/web/mcl39-cover-image.jpg",
      engine: "Mercedes-AMG F1 M14E Performance",
      engineType: "Hybrid (Turbocharged V6 + ERS)",
      displacement: "1.6 L",
      cylinders: "6 (V6)",
      power: "1050 HP",
      torque: "900 Nm ",
      weight: "798 kg",
      acceleration: "0–100 km/h in 2.6 s",
      topSpeed: "355 km/h",
      fuelSystem: "Direct Fuel Injection (100 kg/h fuel flow limit)",
      transmission: "8-speed sequential semi-automatic with reverse",
      chassis: "Carbon fiber composite monocoque",
      aerodynamics: "Ground-effect floor, active DRS rear wing, complex front wing and sidepod design",
      achievements: "Multiple podium finishes in 2025 Formula One season (Lando Norris & Oscar Piastri)",
      innovations: "Refined ground-effect aero, hybrid energy recovery (MGU-K & MGU-H), advanced cooling package"
    },
    {
      id: 2,
      name: "Red Bull RB21",
      year: 2025,
      image: "https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2024%2F09%2F13192030%2Fsergio-perez-baku-2024-red-bull-planetf1-1320x742.jpg",
      engine: "Honda RBPTH003",
      engineType: "Hybrid (Turbocharged V6 + ERS)",
      displacement: "1.6 L",
      cylinders: "6 (V6)",
      power: "1020 HP",
      torque: "—",
      weight: "800 kg",
      acceleration: "0–100 km/h in 2.6 s",
      topSpeed: "360 km/h",
      fuelSystem: "Direct Fuel Injection",
      transmission: "8‑speed sequential semi‑automatic + reverse",
      chassis: "Carbon fiber monocoque",
      aerodynamics: "Ground‑effect floor, DRS rear wing, evolved cooling & sidepod design",
      achievements: "Multiple wins & podiums in 2025 season",
      innovations: "New aerodynamic upgrades, improved cooling, evolution of RB20 platform"
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

        <div className="relative container mx-auto px-6 py-24 text-center min-h-[100vh] sm:min-h-fit">
          <AnimatedSection direction="up" delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  {t('cars.badge')}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent p-4">
                {t('cars.pageTitle')}
              </h1>
              <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                {t('cars.pageDescription')}
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
                      {t('cars.engineBadge')}
                    </div>
                  </div>

                  {/* Key Specifications */}
                  <div className="grid grid-cols-2 gap-4 mb-6 max-[460px]:grid-cols-1">
                    <div className="stat bg-base-300 rounded-lg p-3">
                      <div className="flex items-center justify-center mb-1">
                        <div className="text-primary mr-2">
                          <FaTachometerAlt />
                        </div>
                        <div className="stat-title text-xs">{t('cars.power')}</div>
                      </div>
                      <div className="stat-value text-lg text-center">{car.power}</div>
                    </div>

                    <div className="stat bg-base-300 rounded-lg p-3">
                      <div className="flex items-center justify-center mb-1">
                        <div className="text-error mr-2">
                          <BsSpeedometer2 />
                        </div>
                        <div className="stat-title text-xs">{t('cars.topSpeed')}</div>
                      </div>
                      <div className="stat-value text-lg text-center">{car.topSpeed}</div>
                    </div>

                    <div className="stat bg-base-300 rounded-lg p-3">
                      <div className="flex items-center justify-center mb-1">
                        <div className="text-accent mr-2">
                          <GiSteeringWheel />
                        </div>
                        <div className="stat-title text-xs">{t('cars.acceleration')}</div>
                      </div>
                      <div className="stat-value text-lg text-wrap text-center">{car.acceleration}</div>
                    </div>

                    <div className="stat bg-base-300 rounded-lg p-3">
                      <div className="flex items-center justify-center mb-1">
                        <div className="text-warning mr-2">
                          <FaWeight />
                        </div>
                        <div className="stat-title text-xs">{t('cars.weight')}</div>
                      </div>
                      <div className="stat-value text-lg text-center">{car.weight}</div>
                    </div>
                  </div>

                  {/* Technical Details */}
                  <div className="collapse collapse-arrow bg-base-300 mb-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-bold">
                      {t('cars.technicalSpecifications')}
                    </div>
                    <div className="collapse-content space-y-2 mt-2">
                      <p><FaCar className="inline text-primary mr-2" /><span className="font-bold">Engine:</span> {car.engine}</p>
                      <p><PiEngine className="inline text-info mr-2" /><span className="font-bold">Engine Type:</span> {car.engineType}</p>
                      <p><GiRaceCar className="inline text-orange-400 mr-2" /><span className="font-bold">Cylinders:</span> {car.cylinders}</p>
                      <p><FaGasPump className="inline text-accent mr-2" /><span className="font-bold">Displacement:</span> {car.displacement}</p>
                      <p><BsSpeedometer2 className="inline text-rose-400 mr-2" /><span className="font-bold">Torque:</span> {car.torque}</p>
                      <p><BsFuelPump className="inline text-success mr-2" /><span className="font-bold">Fuel System:</span> {car.fuelSystem}</p>
                      <p><FaCogs className="inline text-warning mr-2" /><span className="font-bold">Transmission:</span> {car.transmission}</p>
                      <p><GiCarWheel className="inline text-error mr-2" /><span className="font-bold">Chassis:</span> {car.chassis}</p>
                      <p><GiSteeringWheel className="inline text-cyan-400 mr-2" /><span className="font-bold">Aerodynamics:</span> {car.aerodynamics}</p>
                      <p><FaTrophy className="inline text-amber-400 mr-2" /><span className="font-bold">Innovations:</span> {car.innovations}</p>
                    </div>

                  </div>


                  {/* Achievements and Innovations */}
                  <div className="divider"></div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <FaTrophy className="text-accent mr-2 text-lg" /> {/* Increased size */}
                      <div>
                        <p className="text-xs text-base-content/70">{t('cars.achievementLabel')}</p>
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