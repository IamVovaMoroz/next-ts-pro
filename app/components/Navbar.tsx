"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '@/public/assets/Logo.svg';
import User from '@/public/assets/User.svg';
import Menu from '@/public/assets/Menu.svg';



const navLinks = [
  { name: 'Features', to: 'features' },
  { name: 'Pricing', to: 'pricing' },
  { name: 'FAQ', to: 'faq' },
  { name: 'Contact us', to: 'contact us' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" />

        <div className="hidden md:flex lg:pl-[74px] gap-x-[56px] md:pl-[25px]">
          {navLinks.map((item, index) => (
            <a className="text-[#36485C] font-medium" key={index} href={`#${item.to}`}>
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex gap-x-3 pl-2">
        <div className="flex items-center gap-x-2">
        <div className="flex items-center gap-x-2">
					{/* <Image src={User} alt="User Profile" /> */}
					<span className="hidden font-medium text-[#36485C] lg:block">
						Sign in
					</span>
				</div>
          {/* <SignedIn>
            <Image src={User} alt="User Profile" />
            <span className="font-medium text-[#36485C]">
              Welcome, {user?.firstName}!
            </span>
            <SignOutButton>
              <span className="font-medium text-[#36485C] cursor-pointer mr-1">
                Sign out
              </span>
            </SignOutButton>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <span className="font-medium text-[#36485C] cursor-pointer">
                Sign in
              </span>
            </SignInButton>
          </SignedOut> */}
        </div>

        <div className="md:hidden" onClick={toggleMenu}>
          <Image src={Menu} alt="Menu Button" />
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white py-4 px-6 flex flex-col items-center ">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={`#${item.to}`}
                className="text-[#36485C] font-medium text-[20px] py-2"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
