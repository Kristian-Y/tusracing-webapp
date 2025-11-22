import React, { useState, useEffect } from 'react';
import {
  FaBuilding, FaUser, FaEnvelope, FaPhone, FaFileAlt,
  FaHandshake, FaTrophy, FaCheckCircle, FaCrown, FaMedal, FaGem
} from 'react-icons/fa';
import { useTheme } from "../../theme-manager/ThemeContext";
import { useTranslation } from 'react-i18next';
import AnimatedSection from "../../components/animate/AnimatedSection";
import toast, { Toaster } from 'react-hot-toast';
import api from '../../api/axios';
import "./Sponsors.css"
import axios from 'axios';

const getTierTranslations = (t) => [
  { id: "title", name: t('sponsors.tiers.title.name'), icon: <FaCrown />, color: "primary", description: t('sponsors.tiers.title.description'), sponsors: [] },
  { id: "gold", name: t('sponsors.tiers.gold.name'), icon: <FaTrophy />, color: "warning", description: t('sponsors.tiers.gold.description'), sponsors: [] },
  { id: "bronze", name: t('sponsors.tiers.bronze.name'), icon: <FaGem />, color: "accent", description: t('sponsors.tiers.bronze.description'), sponsors: [] }
];

const INITIAL_SPONSOR_TIERS = getTierTranslations(key => key);

const Sponsors = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [sponsorTiers, setSponsorTiers] = useState(getTierTranslations(t));
  const [formData, setFormData] = useState({
    companyName: "",
    contactPersonnames: "",
    email: "",
    description: "",
    phone: "",
    tier: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formProgress, setFormProgress] = useState(0);
  const [activeField, setActiveField] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Map tier colors for light/dark theme
  const tierBg = {
    light: {
      primary: 'bg-primary',
      warning: 'bg-warning',
      accent: 'bg-accent',
      default: 'bg-gray-600',
    },
    dark: {
      primary: 'bg-gradient-to-r from-primary to-accent',
      warning: 'bg-gradient-to-r from-warning to-yellow-400',
      accent: 'bg-gradient-to-r from-accent to-green-500',
      default: 'bg-gray-500',
    }
  };

  // fetch sponsors on component mount
  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await api.get('/sponsors');
        // create a fresh copy of the tiers and populate sponsors without mutating initial data
        const newTiers = getTierTranslations(t).map(t => ({ ...t, sponsors: [] }));
        response.data.forEach(element => {
          console.log('Processing sponsor:', element);
          const tier = newTiers.find(t => t.id === element.type);
          if (tier) {
            tier.sponsors.push(element);
          }
        });

        console.log('Organized sponsors by tier:', newTiers);
        setSponsorTiers(newTiers);
      } catch (error) {
        console.error('Error fetching sponsors:', error);
      }
    };

    fetchSponsors();
  }, []);

  // Calculate form progress
  useEffect(() => {
    const filledFields = Object.values(formData).filter(value => value !== "" && value !== null).length;
    const totalFields = Object.keys(formData).length;
    setFormProgress(Math.round((filledFields / totalFields) * 100));
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) newErrors.companyName = `${t('sponsors.form.labels.companyName')} ${t('forms.validation.required')}`;
    else if (formData.companyName.length < 2) newErrors.companyName = t('forms.validation.minChars', { count: 2 });

    if (!formData.contactPersonnames.trim()) newErrors.contactPersonnames = `${t('sponsors.form.labels.contactPerson')} ${t('forms.validation.required')}`;
    else if (formData.contactPersonnames.length < 2) newErrors.contactPersonnames = t('forms.validation.minChars', { count: 2 });

    if (!formData.email.trim()) newErrors.email = `${t('sponsors.form.labels.email')} ${t('forms.validation.required')}`;
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = t('forms.validation.invalidEmail');

    if (!formData.phone.trim()) newErrors.phone = `${t('sponsors.form.labels.phone')} ${t('forms.validation.required')}`;
    else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/.test(formData.phone)) newErrors.phone = t('forms.validation.invalidPhone');

    if (!formData.description.trim()) newErrors.description = `${t('sponsors.form.labels.description')} ${t('forms.validation.required')}`;
    else if (formData.description.length < 20) newErrors.description = t('forms.validation.minChars', { count: 20 });

    if (!formData.tier.trim()) newErrors.tier = `${t('sponsors.form.labels.tier')} ${t('forms.validation.required')}`;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleFocus = (e) => setActiveField(e.target.name);
  const handleBlur = () => setActiveField("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try { 
        const responnse = await api.post("forms/sponsor-applications/", {
          company_name: formData.companyName,
          contact_person_names: formData.contactPersonnames,
          email: formData.email,
          phone: formData.phone,
          description: formData.description,
          tier: formData.tier,
        })
        setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        toast.success(t('sponsors.form.successMessage'), {
          duration: 5000,
          position: 'top-center',
          style: {
            background: theme === 'darkTheme' ? '#1A1A2E' : '#ffffff',
            color: theme === 'darkTheme' ? '#E5E5E5' : '#0F172A',
          },
        });
        setTimeout(() => {
          setFormData({ companyName: "", contactPersonnames: "", email: "", description: "", phone: "", tier: "" });
          setShowSuccess(false);
          }, 5000);
        }, 2000);
      } catch (err) {
        console.log(err.response.data)
      }
      
    }
  };

  // const handleTierClick = (tier) => {
  //   setFormData({ ...formData, tier: tier.name });
  //   setTimeout(() => document.getElementById('sponsorship-form').scrollIntoView({ behavior: 'smooth' }), 100);
  // };





  // const sponsorTiers = [
  //   { id: "title", name: "Title Sponsor", icon: <FaCrown />, color: "primary", description: "Our premier partners who drive our success", sponsors: [{ name: "SpeedTech Motors", logo: "https://picsum.photos/seed/speedtech/200/100.jpg" }, { name: "Racing Dynamics", logo: "https://picsum.photos/seed/racingdyn/200/100.jpg" }] },
  //   { id: "gold", name: "Gold Sponsor", icon: <FaTrophy />, color: "warning", description: "Major contributors to our racing excellence", sponsors: [{ name: "AutoParts Pro", logo: "https://picsum.photos/seed/autoparts/200/100.jpg" }, { name: "TurboTech", logo: "https://picsum.photos/seed/turbotec/200/100.jpg" }, { name: "RaceFuel Plus", logo: "https://picsum.photos/seed/racefuel/200/100.jpg" }] },
  //   { id: "silver", name: "Silver Sponsor", icon: <FaMedal />, color: "", description: "Valued supporters of our engineering journey", sponsors: [{ name: "Mechanical Solutions", logo: "https://picsum.photos/seed/mechsol/200/100.jpg" }, { name: "Carbon Works", logo: "https://picsum.photos/seed/carbon/200/100.jpg" }, { name: "AeroDesign", logo: "https://picsum.photos/seed/aerodes/200/100.jpg" }, { name: "Speed Lubricants", logo: "https://picsum.photos/seed/speedlub/200/100.jpg" }] },
  //   { id: "bronze", name: "Bronze Sponsor", icon: <FaGem />, color: "accent", description: "Essential partners in our racing ecosystem", sponsors: [{ name: "FastFix Tools", logo: "https://picsum.photos/seed/fastfix/200/100.jpg" }, { name: "RaceWear", logo: "https://picsum.photos/seed/racewear/200/100.jpg" }, { name: "TrackSide Support", logo: "https://picsum.photos/seed/trackside/200/100.jpg" }, { name: "Velocity Graphics", logo: "https://picsum.photos/seed/velocity/200/100.jpg" }, { name: "PitStop Pro", logo: "https://picsum.photos/seed/pitstop/200/100.jpg" }] }
  // ];

  const SponsorTierCard = (tier, tierIndex) => {
    return <AnimatedSection key={tier.id} direction="up" delay={300 + tierIndex * 100}>
      <div
        className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer ${tierBg[theme === 'darkTheme' ? 'dark' : 'light'][tier.color || 'default']}`}
      >
        <div className="p-6 text-primary-content">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="text-4xl mr-4 text-white">{tier.icon}</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{tier.name}</h3>
                <p className="text-primary-content/80">{tier.description}</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-3xl md:text-4xl font-bold text-white">{tier.sponsors.length}</div>
              <div className="text-sm text-primary-content/80">{t('sponsors.partnersLabel')}</div>
            </div>
          </div>
        </div>
        <div className="bg-base-100 p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tier.sponsors.map((sponsor) => (
              <a href={sponsor.link} target="_blank" rel="noreferrer">
                <div key={sponsor.name} className="group bg-base-200 rounded-xl p-4 hover:bg-base-300 transition-all duration-300">
                  <div className="aspect-video bg-white rounded-lg overflow-hidden mb-3">
                    <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-center text-sm font-medium text-base-content/80 group-hover:text-primary transition-colors">
                    {sponsor.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>;
  }

  return (
    <div className="min-h-[100vh] pt-8 bg-base-100">
      <Toaster />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="relative container mt-6 mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <AnimatedSection direction="up" delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                  {t('sponsors.heroBadge')}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent p-4">
                {t('sponsors.heroTitle')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                {t('sponsors.heroDescription')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Sponsors Showcase */}
      <div className="py-16 bg-base-200">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection direction="up" delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span id="ribbon">{t('sponsors.showcaseTitle')}</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-base sm:text-lg text-base-content/70 max-w-3xl mx-auto">
                {t('sponsors.showcaseDescription')}
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto space-y-6">
            {sponsorTiers.map((tier, tierIndex) => (
              SponsorTierCard(tier, tierIndex)
            ))}
          </div>
        </div>
      </div>

      {/* Sponsorship Form */}
      <div id="sponsorship-form" className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up" delay={200}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t('sponsors.becomePartnerTitle')}</h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto">
                  {t('sponsors.becomePartnerDescription')}
                </p>
              </div>
            </AnimatedSection>

            {/* Progress Bar */}
            <AnimatedSection direction="up" delay={200}>
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{t('sponsors.form.applicationProgress')}</span>
                  <span className="text-sm font-medium">{formProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500 ease-out" style={{ width: `${formProgress}%` }}></div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <div className={`card backdrop-blur-md bg-opacity-40 rounded-3xl overflow-hidden relative ${theme === 'darkTheme'
                ? 'bg-base-200/50 shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                : 'bg-base-100/50 shadow-[0_0_20px_rgba(0,0,0,0.1)]'
                }`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>

                <div className="card-body p-6 sm:p-8">
                  {showSuccess ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/20 mb-6 animate-pulse">
                        <FaCheckCircle className="text-5xl text-success" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{t('sponsors.form.successTitle')}</h2>
                      <p className="text-lg mb-6">{t('sponsors.form.successMessage')}</p>
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
                              {t('sponsors.form.labels.companyName')}
                            </span>
                          </label>
                          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder="e.g., SpeedTech Motors"
                            className={`input input-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.companyName ? 'input-error border-error' : ''}`} />
                          {errors.companyName && (
                            <span className={`text-sm mt-1 ${theme === 'darkTheme' ? 'text-red-400' : 'text-error'}`}>{errors.companyName}</span>
                          )}
                        </div>

                        {/* Contact Person */}
                        <div className={`form-control transform transition-all duration-300 ${activeField === "contactPersonnames" ? "scale-105" : ""}`}>
                          <label className="label">
                            <span className="label-text font-medium flex items-center">
                              <FaUser className="mr-2 text-accent" />
                              {t('sponsors.form.labels.contactPerson')}
                            </span>
                          </label>
                          <input type="text" name="contactPersonnames" value={formData.contactPersonnames} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder="e.g., John Smith"
                            className={`input input-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.contactPersonnames ? 'input-error border-error' : ''}`} />
                          {errors.contactPersonnames && (
                            <span className={`text-sm mt-1 ${theme === 'darkTheme' ? 'text-red-400' : 'text-error'}`}>{errors.contactPersonnames}</span>
                          )}
                        </div>

                        {/* Email */}
                        <div className={`form-control transform transition-all duration-300 ${activeField === "email" ? "scale-105" : ""}`}>
                          <label className="label">
                            <span className="label-text font-medium flex items-center">
                              <FaEnvelope className="mr-2 text-primary" />
                              {t('sponsors.form.labels.email')}
                            </span>
                          </label>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder="e.g., contact@speedtech.com"
                            className={`input input-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.email ? 'input-error border-error' : ''}`} />
                          {errors.email && (
                            <span className={`text-sm mt-1 ${theme === 'darkTheme' ? 'text-red-400' : 'text-error'}`}>{errors.email}</span>
                          )}
                        </div>

                        {/* Phone */}
                        <div className={`form-control transform transition-all duration-300 ${activeField === "phone" ? "scale-105" : ""}`}>
                          <label className="label">
                            <span className="label-text font-medium flex items-center">
                              <FaPhone className="mr-2 text-primary" />
                              {t('sponsors.form.labels.phone')}
                            </span>
                          </label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder="e.g., +359 888 123 456"
                            className={`input input-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.phone ? 'input-error border-error' : ''}`} />
                          {errors.phone && (
                            <span className={`text-sm mt-1 ${theme === 'darkTheme' ? 'text-red-400' : 'text-error'}`}>{errors.phone}</span>
                          )}
                        </div>

                        {/* Tier */}
                        <div className={`form-control md:col-span-2 transform transition-all duration-300 ${activeField === "tier" ? "scale-105" : ""}`}>
                          <label className="label">
                            <span className="label-text font-medium flex items-center">
                              <FaTrophy className="mr-2 text-warning" />
                              {t('sponsors.form.labels.tier')}
                            </span>
                          </label>
                          <select name="tier" value={formData.tier} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}
                            className={`select select-bordered w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 ${errors.tier ? 'select-error border-error' : ''}`}>
                            <option value="" disabled>{t('sponsors.form.selectTierPlaceholder')}</option>
                            {sponsorTiers.map((tier) => <option key={tier.id} value={tier.id}>{tier.name}</option>)}
                          </select>
                          {errors.tier && (
                            <span className={`text-sm mt-1 ${theme === 'darkTheme' ? 'text-red-400' : 'text-error'}`}>{errors.tier}</span>
                          )}
                        </div>

                        {/* Description */}
                        <div className={`form-control md:col-span-2 transform transition-all duration-300 ${activeField === "description" ? "scale-105" : ""}`}>
                          <label className="label">
                            <span className="label-text font-medium flex items-center">
                              <FaFileAlt className="mr-2 text-info" />
                              {t('sponsors.form.labels.description')}
                            </span>
                          </label>
                          <textarea name="description" value={formData.description} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder="Tell us about your company..."
                            className={`textarea textarea-bordered h-32 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-base-content/40 ${errors.description ? 'textarea-error border-error' : ''}`}></textarea>
                          {errors.description && (
                            <span className={`text-sm mt-1 ${theme === 'darkTheme' ? 'text-red-400' : 'text-error'}`}>{errors.description}</span>
                          )}
                        </div>
                      </div>

                      <div className="form-control mt-8">
                        <button type="submit" className={`btn btn-primary btn-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${isSubmitting ? 'loading' : ''}`} disabled={isSubmitting}>
                          {isSubmitting ? t('sponsors.form.submitting') : t('sponsors.form.submit')}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Sponsors;
