import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getStripePreorderUrl, getWaitlistUrl, openExternalUrl, productLinks } from '../config/externalLinks';

// Pop art style icon components
const SparkleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" fill="#FFD700" stroke="#FFA500" strokeWidth="3"/>
    <path d="M50 20 L55 45 L80 50 L55 55 L50 80 L45 55 L20 50 L45 45 Z" fill="#FF6B6B" stroke="#FF4757" strokeWidth="2"/>
    <circle cx="50" cy="50" r="15" fill="#FFD700"/>
    <circle cx="35" cy="35" r="8" fill="#4ECDC4"/>
    <circle cx="65" cy="35" r="8" fill="#FF6B6B"/>
    <circle cx="35" cy="65" r="8" fill="#95E1D3"/>
    <circle cx="65" cy="65" r="8" fill="#F38181"/>
  </svg>
);

const PaletteIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="30" width="60" height="50" rx="5" fill="#FF6B6B" stroke="#FF4757" strokeWidth="3"/>
    <circle cx="35" cy="45" r="8" fill="#4ECDC4"/>
    <circle cx="50" cy="45" r="8" fill="#FFD700"/>
    <circle cx="65" cy="45" r="8" fill="#95E1D3"/>
    <circle cx="35" cy="60" r="8" fill="#F38181"/>
    <circle cx="50" cy="60" r="8" fill="#A8E6CF"/>
    <circle cx="65" cy="60" r="8" fill="#FFD93D"/>
    <rect x="25" y="20" width="15" height="15" rx="3" fill="#FF6B6B" transform="rotate(-15 32.5 27.5)"/>
    <rect x="60" y="20" width="15" height="15" rx="3" fill="#4ECDC4" transform="rotate(15 67.5 27.5)"/>
  </svg>
);

const StrengthIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="35" fill="#4ECDC4" stroke="#26A69A" strokeWidth="4"/>
    <path d="M30 50 L50 30 L70 50 L50 70 Z" fill="#FFD700" stroke="#FFA500" strokeWidth="3"/>
    <circle cx="50" cy="50" r="12" fill="#FF6B6B"/>
    <rect x="45" y="25" width="10" height="20" rx="2" fill="#95E1D3"/>
    <rect x="45" y="55" width="10" height="20" rx="2" fill="#95E1D3"/>
    <rect x="25" y="45" width="20" height="10" rx="2" fill="#95E1D3"/>
    <rect x="55" y="45" width="20" height="10" rx="2" fill="#95E1D3"/>
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10 L60 40 L90 40 L68 58 L78 88 L50 70 L22 88 L32 58 L10 40 L40 40 Z" fill="#FFD700" stroke="#FFA500" strokeWidth="3"/>
    <circle cx="50" cy="50" r="15" fill="#FF6B6B"/>
    <circle cx="50" cy="50" r="8" fill="#FFD700"/>
    <circle cx="30" cy="30" r="6" fill="#4ECDC4"/>
    <circle cx="70" cy="30" r="6" fill="#F38181"/>
    <circle cx="30" cy="70" r="6" fill="#95E1D3"/>
    <circle cx="70" cy="70" r="6" fill="#A8E6CF"/>
  </svg>
);

// Feature card data - playful and colorful
const features = [
  {
    icon: SparkleIcon,
    title: 'Neurodiversity Positive',
    description: "We celebrate the power of different minds. Caiden's story shows kids that ADHD isn't a flaw — it's a source of creativity, energy, and unique strength.",
    bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50', // Warm playful gradient
    iconColor: 'text-yellow-500',
  },
  {
    icon: PaletteIcon,
    title: 'Creativity & Imagination',
    description: "Caiden explores the world through art, imagination, and adventure. His story inspires kids to dream boldly and express their ideas freely.",
    bgColor: 'bg-gradient-to-br from-pink-50 to-purple-50', // Playful pink-purple gradient
    iconColor: 'text-pink-500',
  },
  {
    icon: StrengthIcon,
    title: 'Emotional Courage',
    description: "Through challenges and big feelings, Caiden learns to understand his emotions, communicate openly, and show up bravely in everyday moments.",
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50', // Cool blue gradient
    iconColor: 'text-blue-500',
  },
  {
    icon: StarIcon,
    title: 'Representation Matters',
    description: "Caiden is a hero who looks, feels, and dreams like the kids who rarely see themselves in stories. His journey helps every child feel seen, valued, and powerful.",
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50', // Fresh green gradient
    iconColor: 'text-green-500',
  },
];

// Character data
const characters = [
  {
    name: 'Caiden',
    microLabel: 'The Dreamer',
    description: "The brave, imaginative 11-year-old at the center of our story — learning how his ADHD is actually his greatest strength.",
    image: '/Caiden@4x-100.jpeg',
  },
  {
    name: 'Genesis',
    microLabel: 'The Potential',
    description: "Caiden's heroic alter-ego, unlocked when he taps into courage and creativity. Genesis is everything Caiden is becoming.",
    image: '/Genesis@4x-100.jpeg',
  },
  {
    name: 'B-4',
    microLabel: 'The Mind in Motion',
    description: "A floating robotic companion who represents what's happening inside Caiden's mind. B-4 helps him understand his ADHD.",
    image: '/B-4@4x-100.jpeg',
  },
  {
    name: 'Ollie Buck',
    microLabel: 'Patience & Grounding',
    description: "Caiden's loyal companion who reminds him that slow and steady wins the race — patience is a superpower too.",
    image: '/Turtle@4x-100.jpeg',
  },
];

// Shop products
const products = [
  {
    title: "Caiden's Courage — Limited Edition",
    description: "Caiden discovers that the thing he struggles with most — his ADHD — is actually his superpower. Pre-order the exclusive limited edition now!",
    badge: "Limited Edition",
    badgeColor: "bg-golden-500",
    purchaseUrl: productLinks.limitedEdition,
    available: true,
  },
  {
    title: "Caiden's Courage T-Shirt",
    description: "Wear your courage! Show the world you support neurodiversity with our official Caiden's Courage t-shirt.",
    badge: "New",
    badgeColor: "bg-golden-500",
    purchaseUrl: productLinks.tShirt,
    available: true,
  },
  {
    title: "B-4 Plush Companions",
    description: "Floating robotic friends that represent different neurodivergent strengths — ADHD, Autism, Anxiety, Big Feelers, & more.",
    badge: "New",
    badgeColor: "bg-golden-500",
    purchaseUrl: productLinks.b4Plush,
    available: true,
  },
];

// Coming soon products - uncomment when ready
// const comingSoonProducts = [
//   {
//     title: "The Courage Journal",
//     description: "A kid-friendly guided journal that helps children express feelings, track creative ideas, and build emotional strength.",
//     badge: "Coming Soon",
//     badgeColor: "bg-navy-400",
//     image: '/balance.png',
//     purchaseUrl: null,
//     available: false,
//   },
// ];

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPreorderOpen, setIsPreorderOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [rotatingWord, setRotatingWord] = useState(0);
  const words = ['Superpower', 'Strength', 'Courage', 'Power'];
  const [backgroundImage, setBackgroundImage] = useState(
    typeof window !== 'undefined'
      ? window.innerWidth < 768
        ? "url(/Caidenbackground_phone.jpg)"
        : "url(/Caidenbackground_desktop.jpg)"
      : "url(/Caidenbackground_desktop.jpg)",
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setBackgroundImage(
        width < 768
          ? "url(/Caidenbackground_phone.jpg)"
          : "url(/Caidenbackground_desktop.jpg)",
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections except the hero section
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach((section) => {
      section.classList.add('fade-in-up');
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Rotate words in the title
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingWord((prev) => (prev + 1) % words.length);
    }, 7000); // Change every 7 seconds (between 6-8 seconds)

    return () => clearInterval(interval);
  }, [words.length]);

  const handlePreorderClick = () => {
    const stripeUrl = getStripePreorderUrl();
    if (stripeUrl) return openExternalUrl(stripeUrl);
    setIsPreorderOpen(true);
  };

  const handleWaitlistClick = () => {
    const waitlistUrl = getWaitlistUrl();
    if (waitlistUrl) return openExternalUrl(waitlistUrl);
    setIsPreorderOpen(true);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-cream font-body">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'bg-navy-500 shadow-xl' : 'bg-white/90 shadow-md'}`} style={isScrolled ? { boxShadow: '0 10px 25px -5px rgba(36, 62, 112, 0.4), 0 8px 10px -6px rgba(36, 62, 112, 0.3)' } : { boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center">
              <Link 
                to="/"
                onClick={handleLogoClick}
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/logoCaiden.png" 
                  alt="Caiden's Courage" 
                  className="h-10 sm:h-12 w-auto"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className={`nav-link-underline font-semibold transition-all duration-300 hover:font-bold ${isScrolled ? 'text-white' : 'text-navy-500'}`}>About</a>
              <a href="#characters" className={`nav-link-underline font-semibold transition-all duration-300 hover:font-bold ${isScrolled ? 'text-white' : 'text-navy-500'}`}>Characters</a>
              <a href="#products" className={`nav-link-underline font-semibold transition-all duration-300 hover:font-bold ${isScrolled ? 'text-white' : 'text-navy-500'}`}>Shop</a>
              <a href="mailto:stills@caidenscourage.com" className={`nav-link-underline font-semibold transition-all duration-300 hover:font-bold ${isScrolled ? 'text-white' : 'text-navy-500'}`}>Contact</a>
            </div>
            <button
              onClick={handleWaitlistClick}
              className={`text-sm sm:text-base px-6 py-2.5 rounded-full font-bold transition-all duration-300 hover:scale-110 active:scale-95 ${isScrolled ? 'bg-navy-500 text-white hover:bg-golden-500 hover:text-navy-500' : 'bg-navy-500 text-white hover:bg-golden-500 hover:text-navy-500'}`}
              style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08)';
              }}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - White background */}
      <section
        id="hero"
        className="relative min-h-screen flex items-end sm:items-center bg-white pt-20 overflow-hidden"
      >
        {/* Animated circles - spread out across entire header */}
        <div className="absolute inset-0 z-0">
          {/* Yellow circles */}
          <div className="bubble w-20 h-20 top-12 left-[10%]" style={{ animation: 'float-slow 10s ease-in-out infinite', animationDelay: '0s' }} />
          <div className="bubble w-18 h-18 top-40 left-[25%]" style={{ animation: 'float-slow 12s ease-in-out infinite', animationDelay: '2.5s' }} />
          <div className="bubble w-16 h-16 top-68 left-[50%]" style={{ animation: 'float-slow 11s ease-in-out infinite', animationDelay: '1s' }} />
          <div className="bubble w-22 h-22 top-88 right-[30%]" style={{ animation: 'float-slow 13s ease-in-out infinite', animationDelay: '3.5s' }} />
          
          {/* Blue circles */}
          <div className="bubble-navy w-24 h-24 top-24 right-[15%]" style={{ animation: 'float-slow 12s ease-in-out infinite', animationDelay: '2s' }} />
          <div className="bubble-navy w-16 h-16 top-52 left-[35%]" style={{ animation: 'float-slow 9s ease-in-out infinite', animationDelay: '4s' }} />
          <div className="bubble-navy w-20 h-20 top-76 right-[45%]" style={{ animation: 'float-slow 10s ease-in-out infinite', animationDelay: '1.5s' }} />
          
          {/* Orange circles */}
          <div className="bubble-orange w-18 h-18 top-32 left-[60%]" style={{ animation: 'float-slow 11s ease-in-out infinite', animationDelay: '1s' }} />
          <div className="bubble-orange w-20 h-20 top-60 right-[20%]" style={{ animation: 'float-slow 13s ease-in-out infinite', animationDelay: '3s' }} />
          <div className="bubble-orange w-14 h-14 top-84 left-[75%]" style={{ animation: 'float-slow 9s ease-in-out infinite', animationDelay: '2s' }} />
        </div>
        
        {/* Hero content + CTAs - bottom on mobile, centered on desktop */}
        <div className="relative z-10 w-full pb-28 sm:pb-0 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side - Text content */}
              <div className="max-w-xl animate-slide-up">
                {/* Title and subtitle */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-500 leading-tight">
                  The Boy Who Turned ADHD Into His{' '}
                  <span className="text-golden-500 inline-block min-w-[200px] sm:min-w-[240px] lg:min-w-[280px]">
                    <span key={rotatingWord} className="rotating-word inline-block">
                      {words[rotatingWord]}
                    </span>
                  </span>
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-navy-600">
                  Meet Caiden — an illustrated kids' universe about courage, creativity, and emotional growth. <span className="italic">A story for kids who think differently—and the adults who support them.</span>
                </p>
                
                {/* CTAs - right below text */}
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
                  <button
                    onClick={handlePreorderClick}
                    className="px-9 py-4 rounded-full bg-golden-500 text-navy-500 font-bold text-base sm:text-lg shadow-md transition-all duration-500 ease-in-out hover:bg-navy-500 hover:text-white hover:shadow-xl hover:scale-105"
                  >
                    Pre-order Now
                  </button>
                  <a
                    href="#about"
                    className="px-9 py-4 rounded-full bg-navy-500 text-white font-bold text-base sm:text-lg shadow-md transition-all duration-500 ease-in-out hover:bg-golden-500 hover:text-navy-500 hover:shadow-xl hover:scale-105"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              
              {/* Right side - Hero image */}
              <div className="flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                  {/* Geometric shape behind image */}
                  <div className="geometric-shape shape-blob w-64 h-64 lg:w-80 lg:h-80 -z-10" style={{ top: '10%', right: '5%' }} />
                  <div className="geometric-shape shape-star w-32 h-32 lg:w-40 lg:h-40 -z-10" style={{ bottom: '15%', left: '10%' }} />
                  <div className="geometric-shape shape-squiggle w-48 h-48 lg:w-56 lg:h-56 -z-10" style={{ top: '50%', right: '15%' }} />
                  
                  <img
                    src="/Courageforeverykid_tipping toe.png"
                    alt="Caiden - The Boy Who Turned ADHD Into His Superpower"
                    className="w-full h-auto object-contain drop-shadow-lg relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-10 h-10 text-navy-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Who Is Caiden Section */}
      <section id="about" className="py-20 sm:py-28 bg-navy-500 relative overflow-hidden">
        {/* Decorative elements - hidden on mobile */}
        <div className="hidden sm:block circle-accent circle-coral w-24 h-24 -top-12 left-1/4 opacity-50" style={{ animationDelay: '0s' }} />
        <div className="hidden sm:block circle-accent circle-coral w-16 h-16 bottom-20 left-8 opacity-40" style={{ animationDelay: '1.5s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="animate-fade-in">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Who Is Caiden?
              </h2>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                <strong className="text-golden-400">Caiden is an 11-year-old boy who discovers that the thing he struggles with the most — his ADHD — is actually the source of his greatest power.</strong>
              </p>
              <p className="mt-4 text-white/80 leading-relaxed">
                Through adventure, imagination, and everyday courage, Caiden learns to understand his emotions, trust himself, and show up bravely in a world that doesn't always see him clearly.
              </p>
              <button
                onClick={handlePreorderClick}
                className="mt-8 btn-primary"
              >
                Explore the Story
              </button>
            </div>

            {/* Right - Feature cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`feature-card rounded-3xl p-6 ${feature.bgColor} shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-2xl border-2 border-white/50`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 mb-3 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6`}>
                    <feature.icon className="w-full h-full" />
                  </div>
                  <h3 className="font-display font-bold text-lg mt-3 text-navy-500">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 sm:py-28 bg-cream relative overflow-hidden">
        <div className="hidden sm:block circle-accent circle-navy w-20 h-20 top-20 right-16 opacity-60" style={{ animationDelay: '0.5s' }} />
        <div className="hidden sm:block circle-accent circle-coral w-12 h-12 bottom-24 left-12 opacity-50" style={{ animationDelay: '3s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/Courageforeverykid.jpeg"
                  alt="Caiden celebrating - Courage for Every Kid"
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-card"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-golden-500/20 rounded-full blur-2xl" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-golden-500 font-semibold text-lg">Our Mission:</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-500 mt-2">
                Courage for Every Kid
              </h2>
              <p className="mt-6 text-navy-600 leading-relaxed">
                Every child deserves to see their mind as powerful — especially the ones who feel different.
              </p>
              <p className="mt-4 text-navy-600 leading-relaxed">
                Caiden's Courage was created to help kids understand their emotions, celebrate neurodiversity, and discover the superhero that already lives inside them. Through stories, characters, and imaginative learning tools, we empower children to feel seen, confident, and brave in their everyday world.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#about" className="btn-primary">
                  Learn About the Mission
                </a>
                <a href="#characters" className="btn-secondary">
                  Meet the Characters
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Characters Section */}
      <section id="characters" className="py-20 sm:py-28 bg-navy-500 relative overflow-hidden">
        <div className="hidden sm:block circle-accent circle-coral w-28 h-28 top-12 left-8 opacity-40" style={{ animationDelay: '1s' }} />
        <div className="hidden sm:block circle-accent circle-coral w-20 h-20 bottom-16 right-12 opacity-50" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Meet the Characters of
            </h2>
            <p className="text-golden-400 font-display text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">
              Caiden's Courage
            </p>
            <p className="mt-6 text-white/80 max-w-2xl mx-auto">
              Discover the heroes, friends, and guides who help Caiden navigate courage, creativity, and everyday challenges.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.map((character, index) => (
              <div
                key={character.name}
                className="character-card bg-navy-600/50 rounded-2xl p-6 text-center backdrop-blur-sm border border-white/10"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-golden-400 to-golden-600 p-1 shadow-golden">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-white mt-4">
                  {character.name}
                </h3>
                <p className="text-golden-400 text-xs font-semibold mt-1 mb-2 min-h-[1.25rem]">
                  {character.microLabel}
                </p>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  {character.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="products" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
        <div className="hidden sm:block circle-accent circle-coral w-16 h-16 top-16 left-1/3 opacity-40" style={{ animationDelay: '2.5s' }} />
        <div className="hidden sm:block circle-accent circle-navy w-12 h-12 bottom-24 right-8 opacity-30" style={{ animationDelay: '4s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-500">
              Shop
            </h2>
            <p className="text-gradient font-display text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">
              Caiden's Courage
            </p>
            <p className="mt-4 text-navy-600/80 max-w-2xl mx-auto">
              Support courage, creativity, and neurodiverse kids—at home and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.title}
                className={`feature-card bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover ${
                  product.available ? 'ring-2 ring-golden-500/50' : ''
                }`}
              >
                <div className="p-6">
                  {/* Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-4 py-1.5 ${product.badgeColor} text-navy-500 text-sm font-semibold rounded-full`}>
                      {product.badge}
                    </span>
                    {product.available && (
                      <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        Available Now
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-500">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-navy-600/80 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  {product.available && product.purchaseUrl ? (
                    <button
                      onClick={() => openExternalUrl(product.purchaseUrl!)}
                      className="mt-5 w-full py-3 px-6 bg-golden-500 text-navy-500 font-bold rounded-full shadow-golden hover:bg-golden-600 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Pre-order
                    </button>
                  ) : (
                    <button
                      onClick={handleWaitlistClick}
                      className="mt-5 w-full py-3 px-6 bg-navy-200 text-navy-500 font-semibold rounded-full hover:bg-navy-300 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                      Notify Me
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-navy-500 to-navy-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-golden-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-golden-400 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Join Caiden's Journey?
          </h2>
          <p className="mt-4 text-white/80 text-lg">
            Be the first to know when the book launches and get exclusive updates.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={handleWaitlistClick}
              className="btn-primary"
            >
              Join the Waitlist
            </button>
            <a
              href="mailto:stills@caidenscourage.com"
              className="px-8 py-3 rounded-full bg-transparent text-white font-semibold border-2 border-white/40 transition-all duration-300 hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-extrabold">
                <span className="text-white">Caiden's</span>
                <span className="text-golden-400">Courage</span>
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy" className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/70 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <a href="mailto:stills@caidenscourage.com" className="text-white/70 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Caiden's Courage. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Pre-order Modal */}
      {isPreorderOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-2xl animate-slide-up">
            <button
              className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-white text-navy-500 font-bold shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
              onClick={() => setIsPreorderOpen(false)}
              aria-label="Close pre-order"
            >
              ✕
            </button>
            <iframe
              src="https://beacons.ai/stillianoblack"
              title="Caiden's Courage Pre-order"
              className="w-full h-[70vh] rounded-2xl bg-white shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
