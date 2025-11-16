import { FaCar, FaTachometerAlt, FaWeight, FaCogs, FaGasPump, FaTrophy } from 'react-icons/fa';
import { GiCarWheel, GiSteeringWheel, GiRaceCar } from 'react-icons/gi';
import { PiEngine } from "react-icons/pi";
import { BsSpeedometer2, BsFuelPump } from 'react-icons/bs';
import { useTheme } from "../../../theme-manager/ThemeContext";
import AnimatedSection from "../../../components/animate/AnimatedSection";
import { useTranslation } from 'react-i18next';
import "./Cars.css"

const Cars = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const carsData = [
    {
      id: 1,
      name: "TUSRT - 2",
      year: 2022,
      image: "https://res.cloudinary.com/dfs1ak9qn/image/upload/v1762292717/gvpshfmfnnct3mlxwezb.jpg",
      engine: "KTM 690cc LC4",
      engineType: "Combustion",
      displacement: "1.6 L",
      cylinders: "1",
      power: "46kW @ 7,000 rpm",
      torque: "69 Nm @ 6,000 rpm",
      weight: "240 kg",
      acceleration: "0–100 km/h in 3.5 s",
      topSpeed: "180 km/h",
      transmission: "6-speed sequential semi-automatic with reverse",
      chassis: "Space Frame",
      aerodynamics: "Ground-effect floor",
      achievements: "Multiple podium finishes in 2025 Formula One season (Lando Norris & Oscar Piastri)",
      innovations: "Refined ground-effect aero, hybrid energy recovery (MGU-K & MGU-H), advanced cooling package"
    },
    {
      id: 2,
      name: "TUSRT - 1",
      year: 2016,
      image: "https://res.cloudinary.com/dfs1ak9qn/image/upload/v1763164102/D4SC08161_zoyoeh.jpg",
      engine: "Honda CBR 600",
      engineType: "Combustion",
      displacement: "600cc",
      cylinders: "4",
      power: "120 HP",
      torque: "—",
      weight: "400 kg",
      acceleration: "0–100 km/h in 4 s",
      topSpeed: "- km/h",
      fuelSystem: "Direct Fuel Injection",
      transmission: "6 ‑ manual + reverse",
      chassis: "Space Frame",
      aerodynamics: "Ground‑effect floor",
      achievements: "Multiple wins & podiums in 2025 season",
      innovations: "New aerodynamic upgrades, improved cooling, evolution of RB20 platform"
    },
  ];

  const CarCard = ({ car, index}) => {
    return (
      <AnimatedSection key={car.id} direction="up" delay={200 + index * 100}>
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
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="text-xl md:text-2xl font-bold text-white" id="car-ribbon">
                {car.name}
              </h2>
            </div>
          </figure>

          <div className="card-body p-6">
            {/* Engine Type Badge */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex flex-wrap items-center justify-center border border-primary rounded-lg px-3 py-1 max-w-full">
                <div className="flex-shrink-0 mr-2">
                  <PiEngine className="text-primary" />
                </div>
                <div className="whitespace-normal break-words text-primary font-bold text-sm md:text-md text-center">
                  {t('cars.engineBadge')}
                </div>
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
                <p><FaCogs className="inline text-warning mr-2" /><span className="font-bold">Transmission:</span> {car.transmission}</p>
                <p><GiCarWheel className="inline text-error mr-2" /><span className="font-bold">Chassis:</span> {car.chassis}</p>
                <p><GiSteeringWheel className="inline text-cyan-400 mr-2" /><span className="font-bold">Aerodynamics:</span> {car.aerodynamics}</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    );
  };

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
            <CarCard key={car.id} car={car} index={index} t={t} />
          ))}
        </div>
      </div>
    </div>
  );

};

export default Cars;