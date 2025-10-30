import React, { useState, useEffect } from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight, FaExpand, FaCar, FaTrophy, FaUsers, FaImages } from 'react-icons/fa';
import { useTheme } from "../../theme-manager/ThemeContext";
import AnimatedSection from "../../components/animate/AnimatedSection";

const Gallery = () => {
  const { theme } = useTheme();
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Albums data
  const albums = [
    {
      id: 1,
      title: "Race Cars",
      icon: <FaCar />,
      coverImage: "https://picsum.photos/seed/racecar1/400/300.jpg",
      images: [
        "https://picsum.photos/seed/racecar1/1200/800.jpg",
        "https://picsum.photos/seed/racecar2/1200/800.jpg",
        "https://picsum.photos/seed/racecar3/1200/800.jpg",
        "https://picsum.photos/seed/racecar4/1200/800.jpg",
        "https://picsum.photos/seed/racecar5/1200/800.jpg",
        "https://picsum.photos/seed/racecar6/1200/800.jpg"
      ]
    },
    {
      id: 2,
      title: "Competitions",
      icon: <FaTrophy />,
      coverImage: "https://picsum.photos/seed/competition1/400/300.jpg",
      images: [
        "https://picsum.photos/seed/competition1/1200/800.jpg",
        "https://picsum.photos/seed/competition2/1200/800.jpg",
        "https://picsum.photos/seed/competition3/1200/800.jpg",
        "https://picsum.photos/seed/competition4/1200/800.jpg",
        "https://picsum.photos/seed/competition5/1200/800.jpg"
      ]
    },
    {
      id: 3,
      title: "Team",
      icon: <FaUsers />,
      coverImage: "https://picsum.photos/seed/team1/400/300.jpg",
      images: [
        "https://picsum.photos/seed/team1/1200/800.jpg",
        "https://picsum.photos/seed/team2/1200/800.jpg",
        "https://picsum.photos/seed/team3/1200/800.jpg",
        "https://picsum.photos/seed/team4/1200/800.jpg",
        "https://picsum.photos/seed/team5/1200/800.jpg",
        "https://picsum.photos/seed/team6/1200/800.jpg",
        "https://picsum.photos/seed/team7/1200/800.jpg"
      ]
    }
  ];

  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    // Prevent body scrolling when modal opens
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scrolling when modal closes
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedAlbum(null), 300);
  };

  const goToPreviousImage = () => {
    if (selectedAlbum) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedAlbum.images.length - 1 : prevIndex - 1
      );
    }
  };

  const goToNextImage = () => {
    if (selectedAlbum) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedAlbum.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      switch(e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          goToPreviousImage();
          break;
        case 'ArrowRight':
          goToNextImage();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedAlbum]);

  // Clean up body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="min-h-[100vh] pt-8 bg-base-100">
      {/* ================= HERO SECTION ================= */}
      <div className="mt-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <AnimatedSection direction="up" delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm flex items-center">
                  GALLERY
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent p-4">
                Our Racing Journey
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
                Explore our collection of race cars, competitions, and team moments that define our journey to excellence
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ================= ALBUMS GRID ================= */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {albums.map((album, index) => (
            <AnimatedSection key={album.id} direction="up" delay={200 + index * 100}>
              <div 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 bg-base-200"
                onClick={() => openAlbum(album)}
              >
                <div className="aspect-video relative overflow-hidden rounded-t-2xl">
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-t-2xl"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3 text-primary">{album.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-base-content">{album.title}</h3>
                        <p className="text-sm text-base-content/70">{album.images.length} photos</p>
                      </div>
                    </div>
                    <div className="bg-primary/10 rounded-full p-2 group-hover:bg-primary/20 transition-colors duration-300">
                      <FaExpand className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* ================= IMAGE MODAL ================= */}
      {isModalOpen && selectedAlbum && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
          isModalOpen ? 'opacity-100' : 'opacity-0'
        }`}>
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          <div className="relative w-11/12 max-w-4xl md:w-4/5 lg:w-3/4 xl:w-2/3 flex flex-col">
            {/* Close Button - Fixed positioning inside the modal */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 z-10 text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Close gallery"
            >
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-black/70">
                <FaTimes className="text-xl" />
              </div>
            </button>

            {/* Main Image Container */}
            <div className="relative bg-black rounded-t-xl overflow-hidden shadow-2xl flex items-center justify-center" style={{ height: '60vh', maxHeight: '500px' }}>
              <img
                src={selectedAlbum.images[currentImageIndex]}
                alt={`${selectedAlbum.title} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPreviousImage();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <FaArrowLeft className="text-lg" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNextImage();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <FaArrowRight className="text-lg" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium">
                {currentImageIndex + 1} / {selectedAlbum.images.length}
              </div>
            </div>

            {/* Thumbnail Strip - Fixed height with scrolling */}
            <div className="bg-black/40 backdrop-blur-sm rounded-b-xl p-2 max-h-16 overflow-x-auto">
              <div className="flex space-x-1">
                {selectedAlbum.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      goToImage(index);
                    }}
                    className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'ring-2 ring-primary ring-offset-1 ring-offset-black scale-110'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Album Title */}
            <div className="text-center mt-2">
              <h3 className="text-lg font-bold text-white">{selectedAlbum.title}</h3>
              <p className="text-xs text-white/70 mt-1">Press ESC to close</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;