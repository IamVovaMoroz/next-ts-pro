
"use client";
import { useState, useEffect } from 'react';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <button
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed bottom-10 right-10 bg-[#4328EB] text-white px-4 py-2 rounded-full hover:bg-[#3d2e9f] focus:outline-none`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
}
