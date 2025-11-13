import React, { useState, useEffect } from 'react';
import { FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaClock, FaPaperPlane, FaHeadset, FaUser, FaCheckCircle } from 'react-icons/fa';
import { useTheme } from "../../theme-manager/ThemeContext";
import { useTranslation } from 'react-i18next';
import AnimatedSection from "../../components/animate/AnimatedSection";
import toast, { Toaster } from 'react-hot-toast';

const Contacts = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = `${t('contacts.form.yourName')} ${t('forms.validation.required')}`;
    } else if (formData.name.length < 2) {
      newErrors.name = t('forms.validation.minChars', { count: 2 });
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = `${t('contacts.form.emailAddress')} ${t('forms.validation.required')}`;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = t('forms.validation.invalidEmail');
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = `${t('contacts.form.subject')} ${t('forms.validation.required')}`;
    } else if (formData.subject.length < 3) {
      newErrors.subject = t('forms.validation.minChars', { count: 3 });
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = `${t('contacts.form.message')} ${t('forms.validation.required')}`;
    } else if (formData.message.length < 10) {
      newErrors.message = t('forms.validation.minChars', { count: 10 });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

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
        toast.success(t('contacts.form.messageSentTitle') + ' ' + t('contacts.form.messageSentDescription'), {
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
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setShowSuccess(false);
        }, 5000);
      }, 2000);
    }
  };

  const contactMethods = [
    {
      id: 1,
      name: t('contacts.contactMethods.email'),
      icon: <FaEnvelope />,
      color: "primary",
      value: "formulastudentbg@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=formulastudentbg@gmail.com"
    },
    {
      id: 2,
      name: t('contacts.contactMethods.phone'),
      icon: <FaPhone />,
      color: "primary",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      id: 3,
      name: t('contacts.contactMethods.address'),
      icon: <FaMapMarkerAlt />,
      color: "primary",
      value: "123 Racing Lane, Speed City, SC 12345",
      link: "https://maps.google.com/?q=123+Racing+Lane,+Speed+City,+SC+12345"
    },
    {
      id: 4,
      name: t('contacts.contactMethods.officeHours'),
      icon: <FaClock />,
      color: "primary",
      value: "Mon-Fri: 9AM-6PM",
      link: null
    }
  ];

  const socialMedia = [
    {
      id: 1,
      name: "Instagram",
      icon: <FaInstagram />,
      gradient: "from-purple-500 to-pink-500",
      link: "https://instagram.com/racingteam"
    },
    {
      id: 2,
      name: "Facebook",
      icon: <FaFacebook />,
      gradient: "from-blue-500 to-blue-700",
      link: "https://facebook.com/racingteam"
    },
    {
      id: 3,
      name: "Twitter",
      icon: <FaTwitter />,
      gradient: "from-blue-400 to-blue-600",
      link: "https://twitter.com/racingteam"
    },
    {
      id: 4,
      name: "LinkedIn",
      icon: <FaLinkedin />,
      gradient: "from-blue-500 to-blue-700",
      link: "https://linkedin.com/company/racingteam"
    }
  ];

  return (
    <div className="min-h-[100vh] pt-8 bg-base-100 relative overflow-hidden">
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

      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto mt-6 px-4 sm:px-6 py-16 sm:py-24 text-center ">
          <AnimatedSection direction="up" delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  {t('contacts.badge')}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent p-4">
                {t('contacts.heroTitle')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                {t('contacts.heroDescription')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Contact Methods Bar - With Animation */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-content py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {contactMethods.map((method, index) => (
              <AnimatedSection key={method.id} direction="up" delay={100 + index * 100}>
                <div>
                  <a
                    href={method.link || '#'}
                    className="block group transform transition-all duration-300 hover:scale-105"
                    target={method.link && method.link.startsWith('http') ? '_blank' : '_self'}
                    rel={method.link && method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="flex flex-col items-center">
                      <div className="text-2xl sm:text-3xl mb-2 text-primary-content transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">{method.icon}</div>
                      <div className="text-xs sm:text-sm uppercase tracking-wider opacity-90 mb-1">{method.name}</div>
                      <div className="text-sm font-medium break-all">{method.value}</div>
                    </div>
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form and Team Contact */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <AnimatedSection direction="up" delay={200}>
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">{t('contacts.form.formProgress')}</span>
                <span className="text-sm font-medium">{formProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${formProgress}%` }}
                ></div>
              </div>
            </div>

            <div
              className={`card backdrop-blur-md bg-opacity-40 rounded-3xl overflow-hidden relative ${theme === 'darkTheme'
                ? 'bg-gray-900/50 shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                : 'bg-white/50 shadow-[0_0_20px_rgba(0,0,0,0.2)]'
                }`}
            >
              {/* Decorative Racing Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>

              <div className="card-body p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center">
                  <FaPaperPlane className="mr-3 text-primary" />
                  {t('contacts.form.sendMessage')}
                </h2>

                {showSuccess ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/20 mb-6 animate-pulse">
                      <FaCheckCircle className="text-5xl text-success" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{t('contacts.form.messageSentTitle')}</h2>
                    <p className="text-lg mb-6">{t('contacts.form.messageSentDescription')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className={`form-control transform transition-all duration-300 ${activeField === "name" ? "scale-105" : ""}`}>
                      <label className="label">
                        <span className="label-text font-medium flex items-center">
                          <FaUser className="mr-2 text-primary" />
                          {t('contacts.form.yourName')}
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder={t('contacts.form.placeholders.firstName') || 'John Doe'}
                        className={`input input-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.name ? 'input-error border-error' : ''}`}
                        required
                      />
                      {errors.name && <label className="label-text-alt text-error mt-1">{errors.name}</label>}
                    </div>

                    <div className={`form-control transform transition-all duration-300 ${activeField === "email" ? "scale-105" : ""}`}>
                      <label className="label">
                        <span className="label-text font-medium flex items-center">
                          <FaEnvelope className="mr-2 text-primary" />
                          {t('contacts.form.emailAddress')}
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder={t('contacts.form.placeholders.email') || 'john@example.com'}
                        className={`input input-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.email ? 'input-error border-error' : ''}`}
                        required
                      />
                      {errors.email && <label className="label-text-alt text-error mt-1">{errors.email}</label>}
                    </div>

                    <div className={`form-control transform transition-all duration-300 ${activeField === "subject" ? "scale-105" : ""}`}>
                      <label className="label">
                        <span className="label-text font-medium">{t('contacts.form.subject')}</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder={t('contacts.form.placeholders.subject') || 'Sponsorship Inquiry'}
                        className={`input input-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.subject ? 'input-error border-error' : ''}`}
                        required
                      />
                      {errors.subject && <label className="label-text-alt text-error mt-1">{errors.subject}</label>}
                    </div>

                    <div className={`form-control transform transition-all duration-300 ${activeField === "message" ? "scale-105" : ""}`}>
                      <label className="label">
                        <span className="label-text font-medium">Message</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder="Tell us how we can help you..."
                        className={`textarea textarea-bordered h-32 resize-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.message ? 'textarea-error border-error' : ''}`}
                        required
                      ></textarea>
                      {errors.message && <label className="label-text-alt text-error mt-1">{errors.message}</label>}
                    </div>

                    <button
                      type="submit"
                      className={`btn btn-primary w-full rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${isSubmitting ? 'loading' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t('contacts.form.sending') : t('contacts.form.sendMessage')}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Team Contact - Simplified */}
          <AnimatedSection direction="up" delay={300}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center">
                <FaHeadset className="mr-3 text-primary" />
                Get In Touch
              </h2>

              <div className="bg-base-200 rounded-xl p-6 sm:p-8 shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <FaEnvelope className="text-4xl text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Contact Our Team</h3>
                  <p className="text-base-content/70 mb-4">
                    For all inquiries, please reach out to our team email. We'll direct your message to the right person.
                  </p>

                  {/* Wrap the link in a div */}
                  <div className="max-w-full text-center break-all">
                    <FaEnvelope className="inline mr-2 text-primary" />
                    <a
                      href="mailto:formulastudentbg@gmail.com"
                      className="text-primary-content hover:underline text-lg font-medium "
                    >
                      formulastudentbg@gmail.com
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>

        {/* Social Media Section - Added more spacing */}
        <div className="mt-20 sm:mt-24">
          <AnimatedSection direction="up" delay={400}>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Follow Us on Social Media</h2>
              <p className="text-base-content/70 max-w-2xl mx-auto">
                Stay updated with our latest news, race results, and behind-the-scenes content.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {socialMedia.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${social.gradient} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform`}>
                    <div className="text-2xl sm:text-3xl">{social.icon}</div>
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">{social.name}</p>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Map Section - Larger */}
      <AnimatedSection direction="up" delay={500}>
        <div className="bg-base-200 py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Find Us</h2>
            <div className="rounded-xl overflow-hidden shadow-xl h-96 sm:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11574.844856976933!2d23.344489764056558!3d42.65905770510949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8426c28853ef%3A0x507b5ee6b85ffd1e!2sBlock%209%20of%20the%20Technical%20University!5e0!3m2!1sen!2sbg!4v1731674014136!5m2!1sen!2sbg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Support CTA */}
      <AnimatedSection direction="up" delay={600}>
        <div className="relative bg-gradient-to-br from-primary to-primary-focus text-primary-content overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              Support Our Racing Team
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto text-primary-content/90">
              Your support helps us build competitive race cars and develop the next generation of engineers. Consider sponsoring our team or making a donation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/sponsor"
                className="btn bg-base-100 btn-md sm:btn-lg px-6 sm:px-10 font-bold"
              >
                Become a Sponsor
              </a>
              <a
                href="/donate"
                className="btn btn-md sm:btn-lg px-6 sm:px-10 bg-primary hover:bg-accent/90 text-primary-content"
              >
                Make a Donation
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contacts;