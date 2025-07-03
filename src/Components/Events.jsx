import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Events() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/p1.png',
    '/p2.png',
    "/p3.png",
    "/p4.png",
    "/p5.png",
    "/p6.png",
    "/p7.png",
    "/p8.png",
    "/p9.png",
    "/p10.png",
    "/p11.png",
    "/p12.png",
  ];

  const goLeft = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goRight = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-pink-50 px-6 py-10 flex flex-col items-center pt-20">
      <h1 className="text-3xl font-bold text-pink-600 mb-10 font-mono">Meet the Stars 💫</h1>

      <div className="flex flex-col md:flex-row gap-10 max-w-5xl w-full justify-center">
        {/* Rafiah's Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex-1 text-center">
          <img
            src="/rafiah.png"
            alt="Rafiah"
            className="w-50 h-50 mx-auto mb-4 rounded-full object-cover"
          />
          <h1 className="text-2xl font-semibold font-mono text-pink-500 mb-2">Rafiah</h1>
          <h1 className="text-m font-semibold text-pink-500 mb-2">Bride</h1>
          <p className="text-gray-700">
            Cute, hardworking, dedicated, and always thoughtful —
            she even brought us cakes and gifts to welcome us. 💗
          </p>
        </div>

        {/* Shavaiz's Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex-1 text-center">
          <img
            src="/shavaiz.png"
            alt="Shavaiz"
            className="w-50 h-50 mx-auto mb-4 rounded-full object-cover"
          />
          <h1 className="text-2xl font-semibold text-pink-500 mb-2 font-mono">Shavaiz</h1>
          <h1 className="text-m font-semibold text-pink-500 mb-2">Groom</h1>
          <p className="text-gray-700">
            Absolutely hilarious, knowledgeable, understanding, a great listener,
            and one of the kindest-hearted people you’ll meet. 💗
          </p>
        </div>
      </div>

      {/* Nikkah Section */}
      <div className="mt-16 bg-white rounded-xl shadow-lg p-6 max-w-3xl w-full text-center">
        <img
          src="/nikkah.png"
          alt="Nikkah Ceremony"
          className="w-full max-w-[300px] object-contain rounded-lg mb-4 mx-auto"
        />
        <h2 className="text-xl font-bold text-pink-500 mb-2">The Journey Begins 💍</h2>
        <p className="text-gray-700 text-md leading-relaxed">
          It all became official with a beautiful Nikkah ceremony — a moment full of joy, blessings, and promises.
          Surrounded by love, Rafiah and Shavaiz stepped into a new chapter of their lives,
          bound by faith, laughter, and forever.
        </p>
      </div>

      {/* Wedding Ceremony */}
      <div className="mt-16 bg-white rounded-xl shadow-lg p-6 max-w-3xl w-full text-center">
        <img
          src="/w2.png"
          alt="Wedding Ceremony"
          className="w-full max-w-[200px] object-contain rounded-lg mb-4 mx-auto"
        />
        <h2 className="text-xl font-bold text-pink-500 mb-2">The Final Wedding Ceremony 💍</h2>
        <p className="text-gray-700 text-md leading-relaxed">
          Rafiah stepped into her new home,
          marking the beginning of a beautiful forever with Shavaiz.
          The wedding ceremony was filled with joy, emotions, and the warmth of two families becoming one.
          Here's to the journey ahead — hand in hand, heart to heart.
        </p>
      </div>

      {/* Life After Marriage Section (Image Slider) */}
      <div className="mt-16 bg-white rounded-xl shadow-lg p-6 max-w-3xl w-full text-center">
        <h2 className="text-xl font-bold text-pink-500 mb-4">Life After Marriage 💕</h2>
        <p className="text-gray-700 text-md mb-4">
         Here's a glimpse into their happily ever after.
        </p>

        <div className="relative flex items-center justify-center w-full">
  {/* Left Chevron */}
  <button
    onClick={goLeft}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/80 rounded-full shadow hover:bg-white"
  >
    <ChevronLeft size={28} className="text-pink-500" />
  </button>

  {/* Image */}
  <img
    src={images[currentImage]}
    alt="Life After Marriage"
    className="rounded-lg object-contain h-64 w-auto mx-auto transition-all duration-500"
  />

  {/* Right Chevron */}
  <button
    onClick={goRight}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/80 rounded-full shadow hover:bg-white"
  >
    <ChevronRight size={28} className="text-pink-500" />
  </button>
</div>
      </div>
    </div>
  );
}
