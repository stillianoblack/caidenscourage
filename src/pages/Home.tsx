import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getStripePreorderUrl, getWaitlistUrl, openExternalUrl, productLinks } from '../config/externalLinks';

// Feature card data - alternating soft cream and muted blue-gray
const features = [
  {
    icon: '💡',
    title: 'Neurodiversity Positive',
    description: "We celebrate the power of different minds. Caiden's story shows kids that ADHD isn't a flaw — it's a source of creativity, energy, and unique strength.",
    bgColor: 'bg-[#f7f3eb]', // Soft warm cream
  },
  {
    icon: '🎨',
    title: 'Creativity & Imagination',
    description: "Caiden explores the world through art, imagination, and adventure. His story inspires kids to dream boldly and express their ideas freely.",
    bgColor: 'bg-[#e4e9f0]', // Soft cool blue-gray
  },
  {
    icon: '💪',
    title: 'Emotional Courage',
    description: "Through challenges and big feelings, Caiden learns to understand his emotions, communicate openly, and show up bravely in everyday moments.",
    bgColor: 'bg-[#f7f3eb]', // Soft warm cream
  },
  {
    icon: '🌟',
    title: 'Representation Matters',
    description: "Caiden is a hero who looks, feels, and dreams like the kids who rarely see themselves in stories. His journey helps every child feel seen, valued, and powerful.",
    bgColor: 'bg-[#e4e9f0]', // Soft cool blue-gray
  },
];

// Character data
const characters = [
  {
    name: 'Caiden',
    description: "The brave, imaginative 11-year-old at the center of our story — learning how his ADHD is actually his greatest strength.",
    image: '/Caiden@4x-100.jpeg',
  },
  {
    name: 'Genesis',
    description: "Caiden's heroic alter-ego, unlocked when he taps into courage and creativity. Genesis is everything Caiden is becoming.",
    image: '/Genesis@4x-100.jpeg',
  },
  {
    name: 'B-4',
    description: "A floating robotic companion who represents what's happening inside Caiden's mind. B-4 helps him understand his ADHD.",
    image: '/B-4@4x-100.jpeg',
  },
  {
    name: 'Turtle',
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
  const [isPreorderOpen, setIsPreorderOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(
    typeof window !== 'undefined'
      ? window.innerWidth < 768
        ? "url(/Caidenbackground_phone.jpg)"
        : "url(/Caidenbackground_desktop.png)"
      : "url(/Caidenbackground_desktop.png)",
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setBackgroundImage(
        width < 768
          ? "url(/Caidenbackground_phone.jpg)"
          : "url(/Caidenbackground_desktop.png)",
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  return (
    <div className="min-h-screen bg-cream font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center">
              <img 
                src="/logoCaiden.png" 
                alt="Caiden's Courage" 
                className="h-10 sm:h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-navy-500 font-semibold hover:text-golden-500 transition-colors">About</a>
              <a href="#characters" className="text-navy-500 font-semibold hover:text-golden-500 transition-colors">Characters</a>
              <a href="#products" className="text-navy-500 font-semibold hover:text-golden-500 transition-colors">Shop</a>
              <a href="mailto:stillianoblack@gmail.com" className="text-navy-500 font-semibold hover:text-golden-500 transition-colors">Contact</a>
            </div>
            <button
              onClick={handleWaitlistClick}
              className="btn-nav text-sm sm:text-base"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Using existing background */}
      <section
        className="relative min-h-screen flex items-center caiden-bg pt-20"
        style={{ backgroundImage }}
      >
        {/* Hero content + CTAs - vertically centered */}
        <div className="relative z-10 w-full py-12">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="max-w-xl animate-slide-up">
              {/* Title and subtitle */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                The Boy Who Turned ADHD Into His
                <span className="text-golden-400"> Superpower</span>
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-white/90 drop-shadow-md">
                Meet Caiden — an illustrated kids' universe about courage, creativity, and emotional growth.
              </p>
              
              {/* CTAs - right below text */}
              <div className="flex flex-wrap gap-4 sm:gap-5 mt-8">
                <button
                  onClick={handlePreorderClick}
                  className="px-12 py-5 rounded-full bg-golden-500 text-navy-500 font-bold text-lg sm:text-xl shadow-golden hover:bg-golden-600 transition-all duration-300 hover:scale-105"
                >
                  Pre-order Now
                </button>
                <a
                  href="#about"
                  className="px-12 py-5 rounded-full bg-white/95 text-navy-500 font-bold text-lg sm:text-xl shadow-lg transition-all duration-300 hover:bg-white hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-10 h-10 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Who Is Caiden Section */}
      <section id="about" className="py-20 sm:py-28 bg-navy-500 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="circle-accent circle-coral w-24 h-24 -top-12 left-1/4 opacity-50" />
        <div className="circle-accent circle-coral w-16 h-16 bottom-20 left-8 opacity-40" />
        
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
                  className={`feature-card rounded-2xl p-6 ${feature.bgColor} shadow-card`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-3xl">{feature.icon}</span>
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
        <div className="circle-accent circle-navy w-20 h-20 top-20 right-16 opacity-60" />
        <div className="circle-accent circle-coral w-12 h-12 bottom-24 left-12 opacity-50" />
        
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
        <div className="circle-accent circle-coral w-28 h-28 top-12 left-8 opacity-40" />
        <div className="circle-accent circle-coral w-20 h-20 bottom-16 right-12 opacity-50" />
        
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
                <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-gradient-to-br from-golden-400 to-golden-600 p-1 shadow-golden">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-white mt-4">
                  {character.name}
                </h3>
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
        <div className="circle-accent circle-coral w-16 h-16 top-16 left-1/3 opacity-40" />
        <div className="circle-accent circle-navy w-24 h-24 bottom-12 right-1/4 opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-500">
              Shop
            </h2>
            <p className="text-gradient font-display text-2xl sm:text-3xl lg:text-4xl font-bold mt-2">
              Caiden's Courage
            </p>
            <p className="mt-4 text-navy-600/80 max-w-2xl mx-auto">
              Bring the magic of Caiden's journey home with our exclusive products
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
              href="mailto:stillianoblack@gmail.com"
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
              <a href="mailto:stillianoblack@gmail.com" className="text-white/70 hover:text-white transition-colors">
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
