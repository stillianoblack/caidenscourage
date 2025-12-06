import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isPreorderOpen, setIsPreorderOpen] = useState(false);
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

  return (
    <div
      className="h-screen overflow-hidden relative flex flex-col caiden-bg"
      style={{ backgroundImage }}
    >
      <div className="sticky top-0 z-30 pt-6 px-4 sm:pt-10 sm:px-8 md:pt-6 md:px-6 lg:pt-10 lg:px-8 flex justify-end items-center gap-4">
        <button
          className="px-6 py-2 sm:px-10 sm:py-3 md:px-8 md:py-2.5 lg:px-10 lg:py-3 rounded-full bg-purple-600 text-white font-semibold text-xs sm:text-sm md:text-xs lg:text-sm shadow-lg shadow-purple-500/40"
          onClick={() => setIsPreorderOpen(true)}
        >
          Join waitlist
        </button>
        <a
          href="mailto:stillianoblack@gmail.com"
          className="text-white font-bold text-sm sm:text-base md:text-sm lg:text-base"
        >
          Contact Us
        </a>
      </div>

      {isPreorderOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-2xl">
            <button
              className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white text-black text-sm font-bold shadow-md flex items-center justify-center"
              onClick={() => setIsPreorderOpen(false)}
              aria-label="Close pre-order"
            >
              ✕
            </button>
            <iframe
              src="https://beacons.ai/stillianoblack"
              title="Caiden's Courage Pre-order"
              className="w-full h-[70vh] rounded-xl bg-white"
            />
          </div>
        </div>
      )}

      <footer className="absolute bottom-0 z-20 w-full h-20 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-center space-y-2">
          <p>© {new Date().getFullYear()} Caidens Courage. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
