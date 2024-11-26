'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Our Players', href: '/players' },
    { name: 'Top Players', href: '/topplayers' },
    { name: 'Highlights of the week', href: '/moments' },
    { name: 'Registration', href: '/registracion' },
    { name: 'Contact', href: '/contacto' },
  ];

  return (
    <header
      className="p-4 bg-cover bg-center flex justify-between items-center"
      style={{ backgroundImage: `url("http://www.pixelstalk.net/wp-content/uploads/2016/06/Best-light-blue-wallpaper.jpg")` }}
    >
      {/* Navigation Links */}
      <nav className="flex space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3 py-2 rounded-md font-bold ${
              pathname === item.href
                ? 'bg-black-500 text-white'
                : 'text-black-800 hover:bg-white-100 hover:text-blue-900'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://i.ibb.co/DknTXCy/image-removebg-preview.png"
          alt="Logo"
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
}