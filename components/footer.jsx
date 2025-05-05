'use client'

import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  if ((pathname === '/trade' || pathname === '/trade/structure' || pathname === '/trade/vision')) {
    return null;
  }

  return (
    <footer className="flex items-center bg-black/80 w-full justify-center">
      <div className="flex text-2xl sm:text-3xl md:text-5xl lg:text-7xl items-center justify-center gap-1">
        <p className="font-semibold">Re<span className="text-yellow-700">o</span>wn</p>
        <p>@ 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
