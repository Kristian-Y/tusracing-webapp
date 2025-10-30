import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaUniversity, FaGraduationCap, FaBook, FaCalendarAlt, FaTools, FaHeart, FaLink, FaPhone, FaFlagCheckered, FaRocket, FaTrophy, FaCheckCircle } from 'react-icons/fa';
import { useTheme } from "../../../theme-manager/ThemeContext";
import AnimatedSection from "../../../components/animate/AnimatedSection";
import toast, { Toaster } from 'react-hot-toast';

const JoinUs = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
    major: "",
    graduation: "",
    course: "",
    semester: "",
    skills: "",
    motivation: "",
    portfolioLink: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formProgress, setFormProgress] = useState(0);
  const [activeField, setActiveField] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [particles, setParticles] = useState([]);

  // Generate random particles for background effect
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 5,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 20 + 10}s`
    }));
    setParticles(newParticles);
  }, []);

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

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
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

    // University validation
    if (!formData.university.trim()) {
      newErrors.university = "University is required";
    }

    // Major validation
    if (!formData.major.trim()) {
      newErrors.major = "Major is required";
    }

    // Graduation validation
    if (!formData.graduation) {
      newErrors.graduation = "Please select your degree program";
    }

    // Course validation
    if (!formData.course) {
      newErrors.course = "Please select your current year of study";
    }

    // Semester validation
    if (!formData.semester) {
      newErrors.semester = "Semester is required";
    } else if (isNaN(formData.semester) || parseInt(formData.semester) < 1 || parseInt(formData.semester) > 2) {
      newErrors.semester = "Semester must be 1 or 2";
    }

    // Skills validation
    if (!formData.skills.trim()) {
      newErrors.skills = "Skills are required";
    } else if (formData.skills.length < 10) {
      newErrors.skills = "Please provide more details about your skills (min 10 characters)";
    }

    // Motivation validation
    if (!formData.motivation.trim()) {
      newErrors.motivation = "Motivation is required";
    } else if (formData.motivation.length < 20) {
      newErrors.motivation = "Please provide more details about your motivation (min 20 characters)";
    }

    // Portfolio Link validation (optional but if provided must be valid)
    if (formData.portfolioLink && !/^https?:\/\/.+/.test(formData.portfolioLink)) {
      newErrors.portfolioLink = "Portfolio link must be a valid URL (http:// or https://)";
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
        toast.success('Your application has been submitted successfully! We\'ll get back to you soon.', {
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
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            university: "",
            major: "",
            graduation: "",
            course: "",
            semester: "",
            skills: "",
            motivation: "",
            portfolioLink: "",
          });
          setShowSuccess(false);
        }, 5000);
      }, 2000);
    }
  };

  return (
    <div className="min-h-[100vh] bg-base-100 relative overflow-hidden pt-8">
      {/* Toast Container */}
      <Toaster />
      
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-primary/20 animate-pulse"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.left,
              top: `${Math.random() * 100}%`,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Racing Track Border */}
      <div className="fixed inset-0 border-8 border-dashed border-primary/10 pointer-events-none"></div>
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <AnimatedSection direction="up" delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-4 relative">
                <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm flex items-center">
                  JOIN OUR TEAM
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent p-4">
                Become Part of Our Racing Legacy
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                Join our team of passionate engineers and designers. Fill out the application form below to start your journey with TU Sofia Racing Team.
              </p>
              
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Application Form */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
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

        <AnimatedSection direction="up" delay={200}>
          <div className="max-w-4xl mx-auto">
            <div
              className={`card backdrop-blur-md bg-opacity-40 rounded-3xl overflow-hidden relative ${theme === 'darkTheme'
                  ? 'bg-gray-900/50 shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : 'bg-white/50 shadow-[0_0_20px_rgba(0,0,0,0.2)]'
                }`}
            >
              {/* Decorative Racing Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
              
              <div className="card-body p-6 sm:p-8">
                {showSuccess ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/20 mb-6 animate-pulse">
                      <FaCheckCircle className="text-5xl text-success" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
                    <p className="text-lg mb-6">Thank you for your interest in joining our team. We'll review your application and get back to you soon.</p>
                    <div className="flex justify-center">
                      <FaRocket className="text-4xl text-primary animate-bounce" />
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* First Name */}
                      <div className={`form-control transform transition-all duration-300 ${activeField === "firstName" ? "scale-105" : ""}`}>
                        <label className="label">
                          <span className="label-text font-medium flex items-center">
                            <FaUser className="mr-2 text-accent" />
                            First Name
                          </span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          placeholder="e.g., John"
                          className={`input input-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.firstName ? 'input-error border-error' : ''}`}
                        />
                        {errors.firstName && <label className="label-text-alt text-error mt-1">{errors.firstName}</label>}
                      </div>

                      {/* Last Name */}
                      <div className={`form-control transform transition-all duration-300 ${activeField === "lastName" ? "scale-105" : ""}`}>
                        <label className="label">
                          <span className="label-text font-medium flex items-center">
                            <FaUser className="mr-2 text-accent" />
                            Last Name
                          </span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          placeholder="e.g., Smith"
                          className={`input input-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.lastName ? 'input-error border-error' : ''}`}
                        />
                        {errors.lastName && <label className="label-text-alt text-error mt-1">{errors.lastName}</label>}
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
                          placeholder="e.g., john.smith@example.com"
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

                      {/* University */}
                      <div className={`form-control transform transition-all duration-300 ${activeField === "university" ? "scale-105" : ""}`}>
                        <label className="label">
                          <span className="label-text font-medium flex items-center">
                            <FaUniversity className="mr-2 text-info" />
                            University
                          </span>
                        </label>
                        <input
                          type="text"
                          name="university"
                          value={formData.university}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          placeholder="e.g., Technical University of Sofia"
                          className={`input input-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.university ? 'input-error border-error' : ''}`}
                        />
                        {errors.university && <label className="label-text-alt text-error mt-1">{errors.university}</label>}
                      </div>

                      {/* Major */}
                      <div className={`form-control transform transition-all duration-300 ${activeField === "major" ? "scale-105" : ""}`}>
                        <label className="label">
                          <span className="label-text font-medium flex items-center">
                            <FaBook className="mr-2 text-info" />
                            Major
                          </span>
                        </label>
                        <input
                          type="text"
                          name="major"
                          value={formData.major}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          placeholder="e.g., Mechanical Engineering"
                          className={`input input-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.major ? 'input-error border-error' : ''}`}
                        />
                        {errors.major && <label className="label-text-alt text-error mt-1">{errors.major}</label>}
                      </div>

                      {/* Graduation */}
                      <div className={`form-control transform transition-all duration-300 ${activeField === "graduation" ? "scale-105" : ""}`}>
                        <label className="label">
                          <span className="label-text font-medium flex items-center">
                            <FaGraduationCap className="mr-2 text-warning" />
                            Degree Program
                          </span>
                        </label>
                        <select
                          name="graduation"
                          value={formData.graduation}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          className={`select select-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 ${errors.graduation ? 'select-error border-error' : ''}`}
                        >
                          <option value="" disabled>Select your degree program</option>
                          <option value="bachelors">Bachelor's</option>
                          <option value="masters">Master's</option>
                          <option value="phd">PhD</option>
                        </select>
                        {errors.graduation && <label className="label-text-alt text-error mt-1">{errors.graduation}</label>}
                      </div>

                      {/* Course (Year of Study) */}
                      <div className={`form-control transform transition-all duration-300 ${activeField === "course" ? "scale-105" : ""}`}>
                        <label className="label">
                          <span className="label-text font-medium flex items-center">
                            <FaCalendarAlt className="mr-2 text-warning" />
                            Year of Study
                          </span>
                        </label>
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          className={`select select-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 ${errors.course ? 'select-error border-error' : ''}`}
                        >
                          <option value="" disabled>Select your current year</option>
                          <option value="1">1st Year</option>
                          <option value="2">2nd Year</option>
                          <option value="3">3rd Year</option>
                          <option value="4">4th Year</option>
                          <option value="5">5th Year</option>
                        </select>
                        {errors.course && <label className="label-text-alt text-error mt-1">{errors.course}</label>}
                      </div>

                      {/* Semester */}
                      <div className={`form-control transform transition-all duration-300 ${activeField === "semester" ? "scale-105" : ""}`}>
                        <label className="label">
                          <span className="label-text font-medium flex items-center">
                            <FaCalendarAlt className="mr-2 text-warning" />
                            Semester
                          </span>
                        </label>
                        <input
                          type="number"
                          name="semester"
                          value={formData.semester}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          placeholder="e.g., 1"
                          min="1"
                          max="2"
                          className={`input input-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.semester ? 'input-error border-error' : ''}`}
                        />
                        {errors.semester && <label className="label-text-alt text-error mt-1">{errors.semester}</label>}
                      </div>

                      {/* Portfolio Link */}
                      <div className={`form-control transform transition-all duration-300 ${activeField === "portfolioLink" ? "scale-105" : ""}`}>
                        <label className="label">
                          <span className="label-text font-medium flex items-center">
                            <FaLink className="mr-2 text-success" />
                            Portfolio Link (Optional)
                          </span>
                        </label>
                        <input
                          type="url"
                          name="portfolioLink"
                          value={formData.portfolioLink}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          placeholder="e.g., https://myportfolio.com"
                          className={`input input-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.portfolioLink ? 'input-error border-error' : ''}`}
                        />
                        {errors.portfolioLink && <label className="label-text-alt text-error mt-1">{errors.portfolioLink}</label>}
                      </div>

                      {/* Skills */}
                      <div className={`form-control md:col-span-2 transform transition-all duration-300 ${activeField === "skills" ? "scale-105" : ""}`}>
                        <label className="label">
                          <span className="label-text font-medium flex items-center">
                            <FaTools className="mr-2 text-error" />
                            Skills
                          </span>
                        </label>
                        <textarea
                          name="skills"
                          value={formData.skills}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          placeholder="e.g., CAD design, CFD analysis, MATLAB programming, welding, composite materials"
                          className={`textarea textarea-bordered h-24 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.skills ? 'textarea-error border-error' : ''}`}
                        ></textarea>
                        {errors.skills && <label className="label-text-alt text-error mt-1">{errors.skills}</label>}
                      </div>

                      {/* Motivation */}
                      <div className={`form-control md:col-span-2 transform transition-all duration-300 ${activeField === "motivation" ? "scale-105" : ""}`}>
                        <label className="label">
                          <span className="label-text font-medium flex items-center">
                            <FaHeart className="mr-2 text-error" />
                            Motivation
                          </span>
                        </label>
                        <textarea
                          name="motivation"
                          value={formData.motivation}
                          onChange={handleChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          placeholder="Tell us why you want to join our racing team and what you hope to contribute"
                          className={`textarea textarea-bordered h-32 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.motivation ? 'textarea-error border-error' : ''}`}
                        ></textarea>
                        {errors.motivation && <label className="label-text-alt text-error mt-1">{errors.motivation}</label>}
                      </div>
                    </div>

                    <div className="form-control mt-8">
                      <button
                        type="submit"
                        className={`btn btn-primary btn-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${isSubmitting ? 'loading' : ''}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
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
  );
};

export default JoinUs;