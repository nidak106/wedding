import React from "react";
import { MessageCircleHeart } from "lucide-react";

function Header() {
  return (
    <header className="bg-pink-100 shadow-md py-4 px-6 flex items-center justify-center gap-2 fixed top-0 z-50 w-full ">
      <MessageCircleHeart color="hotpink" size={28} />
      <h1 className="text-xl font-bold text-pink-600 tracking-wide">R & S</h1>
    </header>
  );
}

export default Header;
