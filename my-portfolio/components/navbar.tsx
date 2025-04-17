"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
  { name: "About Me", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact Me", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-3 z-40 w-full">
      <div className="container flex h-16 items-center justify-between mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 bg-gray-100 text-gray-800 h-10 py-2 px-4 shadow-md">
            <span className="font-bold text-lg">Romsep</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center flex-1">
          <nav
            className={cn(
              "flex items-center space-x-20 text-sm font-medium border border-gray-300 px-6 py-3 rounded-full shadow-md transition-colors duration-300",
              isScrolled ? "bg-gray-100/80 backdrop-blur-md" : "bg-gray-100"
            )}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "transition-all duration-300 ease-in-out hover:text-black hover:underline",
                  pathname === item.path
                    ? "text-black font-semibold underline"
                    : "text-gray-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 h-10 py-2 px-4 shadow-md"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}