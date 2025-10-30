import React, { useState, useEffect } from 'react';
import { FaBuilding, FaUser, FaEnvelope, FaPhone, FaFileAlt, FaHandshake, FaRocket, FaTrophy, FaCheckCircle, FaFlagCheckered, FaStar, FaCrown, FaMedal, FaGem } from 'react-icons/fa';
import { useTheme } from "../../theme-manager/ThemeContext";
import AnimatedSection from "../../components/animate/AnimatedSection";
import toast, { Toaster } from 'react-hot-toast';

const Sponsors = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    companyName: "",
    contactPersonnames: "",
    email: "",
    description: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formProgress, setFormProgress] = useState(0);
  const [activeField, setActiveField] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Calculate form progress
  useEffect(() => {
    const filledFields = Object.values(formData).filter(value => 
      value !== "" && value !== null
    ).length;
    const totalFields = Object.keys(formData).length;
    setFormProgress(Math.round((filledFields / totalFields) * 100));
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};

    // Company Name validation
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    } else if (formData.companyName.length < 2) {
      newErrors.companyName = "Company name must be at least 2 characters";
    }

    // Contact Person Name validation
    if (!formData.contactPersonnames.trim()) {
      newErrors.contactPersonnames = "Contact person name is required";
    } else if (formData.contactPersonnames.length < 2) {
      newErrors.contactPersonnames = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length < 20) {
      newErrors.description = "Please provide more details (min 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const handleFocus = (e) => {
    setActiveField(e.target.name);
  };

  const handleBlur = () => {
    setActiveField("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        
        // Show success toast
        toast.success('Your sponsorship inquiry has been submitted successfully! We\'ll get back to you soon.', {
          duration: 5000,
          position: 'top-center',
          style: {
            background: theme === 'darkTheme' ? '#1f2937' : '#ffffff',
            color: theme === 'darkTheme' ? '#ffffff' : '#1f2937',
          },
        });

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            companyName: "",
            contactPersonnames: "",
            email: "",
            description: "",
            phone: "",
          });
          setShowSuccess(false);
        }, 5000);
      }, 2000);
    }
  };

  // Sponsor tiers data
  const sponsorTiers = [
    {
      name: "Title Sponsor",
      icon: <FaCrown />,
      color: "warning",
      bgGradient: "from-yellow-400/20 to-orange-500/20",
      borderColor: "border-warning",
      sponsors: [
        { name: "SpeedTech Motors", logo: "https://picsum.photos/seed/speedtech/200/100.jpg" },
        { name: "Racing Dynamics", logo: "https://picsum.photos/seed/racingdyn/200/100.jpg" }
      ]
    },
    {
      name: "Gold Sponsor",
      icon: <FaTrophy />,
      color: "warning",
      bgGradient: "from-yellow-300/20 to-yellow-500/20",
      borderColor: "border-yellow-500",
      sponsors: [
        { name: "AutoParts Pro", logo: "https://picsum.photos/seed/autoparts/200/100.jpg" },
        { name: "TurboTech", logo: "https://picsum.photos/seed/turbotec/200/100.jpg" },
        { name: "RaceFuel Plus", logo: "https://picsum.photos/seed/racefuel/200/100.jpg" }
      ]
    },
    {
      name: "Silver Sponsor",
      icon: <FaMedal />,
      color: "neutral",
      bgGradient: "from-gray-300/20 to-gray-500/20",
      borderColor: "border-gray-400",
      sponsors: [
        { name: "Mechanical Solutions", logo: "https://picsum.photos/seed/mechsol/200/100.jpg" },
        { name: "Carbon Works", logo: "https://picsum.photos/seed/carbon/200/100.jpg" },
        { name: "AeroDesign", logo: "https://picsum.photos/seed/aerodes/200/100.jpg" },
        { name: "Speed Lubricants", logo: "https://picsum.photos/seed/speedlub/200/100.jpg" }
      ]
    },
    {
      name: "Bronze Sponsor",
      icon: <FaGem />,
      color: "accent",
      bgGradient: "from-orange-300/20 to-orange-600/20",
      borderColor: "border-orange-400",
      sponsors: [
        { name: "FastFix Tools", logo: "https://picsum.photos/seed/fastfix/200/100.jpg" },
        { name: "RaceWear", logo: "https://picsum.photos/seed/racewear/200/100.jpg" },
        { name: "TrackSide Support", logo: "https://picsum.photos/seed/trackside/200/100.jpg" },
        { name: "Velocity Graphics", logo: "https://picsum.photos/seed/velocity/200/100.jpg" },
        { name: "PitStop Pro", logo: "https://picsum.photos/seed/pitstop/200/100.jpg" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Toast Container */}
      <Toaster />
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative">
        <div className="hero min-h-[60vh] bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-4xl">
              <AnimatedSection direction="up" delay={100}>
                <div className="mb-6">
                  <span className="px-6 py-3 bg-primary/20 backdrop-blur-sm text-primary font-bold rounded-full text-lg inline-flex items-center">
                    <FaHandshake className="mr-2" />
                    PARTNER WITH EXCELLENCE
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 text-base-content">
                  Drive Success With
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    TU Sofia Racing
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
                  Join our elite circle of partners and help us shape the future of motorsport engineering
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SPONSORS SHOWCASE ================= */}
      <div className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Valued Partners</h2>
              <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-base-content/70 max-w-3xl mx-auto">
                We're proud to collaborate with industry leaders who share our passion for innovation and excellence
              </p>
            </div>
          </AnimatedSection>

          {sponsorTiers.map((tier, tierIndex) => (
            <AnimatedSection key={tier.name} direction="up" delay={300 + tierIndex * 100}>
              <div className={`mb-12 p-8 rounded-3xl bg-gradient-to-br ${tier.bgGradient} border-2 ${tier.borderColor}`}>
                <div className="flex items-center justify-center mb-8">
                  <div className={`text-4xl text-${tier.color} mr-3`}>{tier.icon}</div>
                  <h3 className="text-3xl font-bold text-base-content">{tier.name}</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {tier.sponsors.map((sponsor, sponsorIndex) => (
                    <div
                      key={sponsor.name}
                      className="group bg-base-100 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                    >
                      <div className="aspect-video bg-white rounded-lg overflow-hidden mb-3">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-center text-sm font-medium text-base-content/80 group-hover:text-primary transition-colors">
                        {sponsor.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* ================= SPONSORSHIP FORM ================= */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" delay={500}>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Become Our Partner</h2>
                <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                  Ready to accelerate your brand with us? Fill out the form below and let's create something amazing together
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Application Progress</span>
                  <span className="text-sm font-medium">{formProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${formProgress}%` }}
                  ></div>
                </div>
              </div>

              <div className={`card backdrop-blur-md bg-opacity-40 rounded-3xl overflow-hidden relative ${theme === 'darkTheme'
                  ? 'bg-gray-900/50 shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : 'bg-white/50 shadow-[0_0_20px_rgba(0,0,0,0.2)]'
                }`}
              >
                {/* Decorative Racing Elements */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
                
                <div className="card-body p-6 sm:p-8">
                  {showSuccess ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/20 mb-6 animate-pulse">
                        <FaCheckCircle className="text-5xl text-success" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">Sponsorship Inquiry Submitted!</h2>
                      <p className="text-lg mb-6">Thank you for your interest in sponsoring our team. We'll review your information and get back to you soon.</p>
                      <div className="flex justify-center">
                        <FaHandshake className="text-4xl text-primary animate-bounce" />
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Company Name */}
                        <div className={`form-control transform transition-all duration-300 ${activeField === "companyName" ? "scale-105" : ""}`}>
                          <label className="label">
                            <span className="label-text font-medium flex items-center">
                              <FaBuilding className="mr-2 text-accent" />
                              Company Name
                            </span>
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="e.g., SpeedTech Motors"
                            className={`input input-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.companyName ? 'input-error border-error' : ''}`}
                          />
                          {errors.companyName && <label className="label-text-alt text-error mt-1">{errors.companyName}</label>}
                        </div>

                        {/* Contact Person Name */}
                        <div className={`form-control transform transition-all duration-300 ${activeField === "contactPersonnames" ? "scale-105" : ""}`}>
                          <label className="label">
                            <span className="label-text font-medium flex items-center">
                              <FaUser className="mr-2 text-accent" />
                              Contact Person
                            </span>
                          </label>
                          <input
                            type="text"
                            name="contactPersonnames"
                            value={formData.contactPersonnames}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="e.g., John Smith"
                            className={`input input-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.contactPersonnames ? 'input-error border-error' : ''}`}
                          />
                          {errors.contactPersonnames && <label className="label-text-alt text-error mt-1">{errors.contactPersonnames}</label>}
                        </div>

                        {/* Email */}
                        <div className={`form-control transform transition-all duration-300 ${activeField === "email" ? "scale-105" : ""}`}>
                          <label className="label">
                            <span className="label-text font-medium flex items-center">
                              <FaEnvelope className="mr-2 text-primary" />
                              Email
                            </span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="e.g., contact@speedtech.com"
                            className={`input input-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.email ? 'input-error border-error' : ''}`}
                          />
                          {errors.email && <label className="label-text-alt text-error mt-1">{errors.email}</label>}
                        </div>

                        {/* Phone */}
                        <div className={`form-control transform transition-all duration-300 ${activeField === "phone" ? "scale-105" : ""}`}>
                          <label className="label">
                            <span className="label-text font-medium flex items-center">
                              <FaPhone className="mr-2 text-primary" />
                              Phone Number
                            </span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="e.g., +359 888 123 456"
                            className={`input input-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.phone ? 'input-error border-error' : ''}`}
                          />
                          {errors.phone && <label className="label-text-alt text-error mt-1">{errors.phone}</label>}
                        </div>

                        {/* Description */}
                        <div className={`form-control md:col-span-2 transform transition-all duration-300 ${activeField === "description" ? "scale-105" : ""}`}>
                          <label className="label">
                            <span className="label-text font-medium flex items-center">
                              <FaFileAlt className="mr-2 text-info" />
                              Sponsorship Details
                            </span>
                          </label>
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="Tell us about your company, what kind of sponsorship you're interested in, and how you'd like to partner with our racing team"
                            className={`textarea textarea-bordered h-32 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.description ? 'textarea-error border-error' : ''}`}
                          ></textarea>
                          {errors.description && <label className="label-text-alt text-error mt-1">{errors.description}</label>}
                        </div>
                      </div>

                      <div className="form-control mt-8">
                        <button
                          type="submit"
                          className={`btn btn-primary btn-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${isSubmitting ? 'loading' : ''}`}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Sponsorship Inquiry'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;