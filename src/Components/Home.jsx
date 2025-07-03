import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {

const navigate=useNavigate();
const gotoQuiz=()=>{
navigate('/quiz')
};

const gotoReadmore=()=>{
    navigate('/events')
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-100 flex items-center justify-center p-6 pt-18">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-pink-400 mb-4 font-serif">
            Rafiah & Shavaiz – A Little Love Story
          </h1>
          <p className="text-gray-700 text-lg sm:text-m mb-6 leading-relaxed font-mono">
            What started with a simple spark turned into a journey full of laughter, memories, and love.
            This page is a small gift from Nida ( aka Chota bheem) to celebrate their journey and the bond they share.
            Wishing you both endless happiness, adventure, and togetherness. Here’s to forever. 💗
          </p>
          <div  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={gotoReadmore} className="px-6 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-600 transition">
              Read More 💌
            </button>
            <button onClick={gotoQuiz} className="px-6 py-2 bg-white text-pink-600 border border-pink-500 rounded-full hover:bg-pink-100 transition">
              Attempt Quiz 🎉
            </button>
          </div>
        </div>

     
        <div className="flex-1 ">
         <video
  src="/weddingvideo.mp4" // Replace with your actual file path
  className="rounded-xl shadow-lg w-full max-w-[250px] object-contain transition-transform duration-300 hover:scale-105"
  autoPlay
  loop
  muted
  playsInline
/>
        </div>
      </div>
    </div>
  );
};

export default Home;
