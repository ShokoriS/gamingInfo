// ✅ AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">About Gaming Info</h1>
      <p className="mb-4">Gaming Info is your ultimate destination for discovering and tracking video games.</p>
      <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
      <p className="mb-4">A platform built by gamers, for gamers. Find new games, post your own reviews, and explore ratings.</p>
      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <p className="mb-2">📧 Email: gaminginfo.support@gmail.com</p>
      <p>💬 WhatsApp: +123 456 7890</p>
    </div>
  );
};

export default AboutUs;