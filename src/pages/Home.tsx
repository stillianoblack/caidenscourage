import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isPreorderOpen, setIsPreorderOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(
    typeof window !== 'undefined'
      ? window.innerWidth < 768
        ? "url(/Caidenbackground_phone.jpeg)"
        : "url(/Caidenbackground_desktop.jpeg)"
      : "url(/Caidenbackground_desktop.jpeg)",
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setBackgroundImage(
        width < 768
          ? "url(/Caidenbackground_phone.jpeg)"
          : "url(/Caidenbackground_desktop.jpeg)",
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
      <div className="pt-6 px-4 sm:pt-10 sm:px-8 flex justify-end">
        <a
          href="mailto:stillianoblack@gmail.com"
          className="text-white font-bold text-sm sm:text-base"
        >
          Contact Us
        </a>
      </div>
      <div className="absolute inset-x-0 bottom-[450px] sm:bottom-[250px] px-6 sm:px-20">
        <div className="flex justify-center sm:justify-start sm:pl-48">
          <button
            className="px-10 py-3 rounded-full bg-purple-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-purple-500/40"
            onClick={() => setIsPreorderOpen(true)}
          >
            Pre-order Now
          </button>
        </div>
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
