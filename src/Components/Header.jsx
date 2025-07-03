import React from 'react';
import { MessageCircleHeart } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full p-4 bg-gradient-to-br from-pink-100   to-pink-300 shadow z-50 flex items-center justify-center">
      <Link to="/" className="flex items-center gap-2">
        <MessageCircleHeart color="hotpink" size={28} />
        <span className="text-xl font-bold text-pink-500">R & S</span>
      </Link>
    </div>
  );
}

export default Header;
