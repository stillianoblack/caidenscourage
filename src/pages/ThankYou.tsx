import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#2f5f8e] flex items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-2xl bg-white/10 border border-white/20 p-8 sm:p-12 text-white backdrop-blur">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Thank you for your purchase!</h1>
        <p className="mt-4 text-white/90 text-base sm:text-lg">
          Your support means a lot. You&apos;ll receive a confirmation from Stripe shortly.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-white text-[#2f5f8e] px-6 py-3 font-semibold"
          >
            Back to Home
          </Link>
          <a
            href="mailto:stillianoblack@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-purple-600 text-white px-6 py-3 font-semibold shadow-lg shadow-purple-500/40"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;


