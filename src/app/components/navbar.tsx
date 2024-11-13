"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <nav
      className="bg-black border sm:border-white sm:rounded-full border-r-black border-l-black"
      style={{ boxShadow: "0px 0px 14px 0px rgba(255,255,255,0.75)" }}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-1 rtl:space-x-reverse"
        >
          <Image
            src="/images/logo.png"
            className="h-10"
            width={50}
            height={60}
            alt="Burger Logo"
          />
          <span className="text-2xl font-bold text-white hover:text-yellow-500">
            BURGER
          </span>
        </Link>

        <div className="flex items-center md:order-2 space-x-3">
          {/* Search and Profile Buttons */}
          <button
            type="button"
            className="text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg p-2 hover:text-yellow-500 transition-colors"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>

          <button
            type="button"
            className="focus:outline-none rounded-full overflow-hidden border-2 border-white"
          >
            <Image
              className="h-8 w-8 rounded-full object-cover"
              src="/images/user.jpg" // Replace with the actual profile image path
              width={40}
              height={40}
              alt="User Profile"
            />
            <span className="sr-only">User Profile</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-search"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menu items for desktop */}
        <div
          className={`hidden md:flex md:order-1 relative ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-2 md:flex-row">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white rounded-lg border-b-2 border-black hover:bg-gray-700 hover:border-b-2 hover:border-white hover:text-yellow-500 transition-colors font-bold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-white rounded-lg border-b-2 border-black hover:bg-gray-700 hover:border-b-2 hover:border-white hover:text-yellow-500 transition-colors font-bold"
              >
                About
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/services"
                className="block py-2 px-3 text-white rounded-lg border-b-2 border-black hover:bg-gray-700 hover:border-b-2 hover:border-white hover:text-yellow-500 transition-colors font-bold"
              >
                Services
                {/* Dropdown Icon */}
                <svg
                  className="inline w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 8l4 4 4-4"
                  />
                </svg>
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute left-0 hidden group-hover:block bg-black text-white rounded-lg shadow-lg mt-1 z-10">
                <Link
                  href="/services/delivery"
                  className="block py-2 px-4 hover:bg-gray-700 transition-colors"
                >
                  Delivery
                </Link>
              </div>
            </li>
            <li>
              <Link
                href="/menu"
                className="block py-2 px-3 text-white rounded-lg border-b-2 border-black hover:bg-gray-700 hover:border-b-2 hover:border-white hover:text-yellow-500 transition-colors font-bold"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-white rounded-lg border-b-2 border-black hover:bg-gray-700 hover:border-b-2 hover:border-white hover:text-yellow-500 transition-colors font-bold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col justify-center items-center p-4 space-y-2 bg-black text-white">
          <li>
            <Link
              href="/"
              className="block py-2 px-3 border-b border-white rounded-lg hover:bg-gray-700 hover:border-b-2 hover:border-white hover:text-yellow-500 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 px-3 border-b border-white rounded-lg hover:bg-gray-700 hover:border-b-2 hover:border-white hover:text-yellow-500 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="block py-2 px-3 border-b border-white rounded-lg hover:bg-gray-700 hover:border-b-2 hover:border-white hover:text-yellow-500 transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className="block py-2 px-3 border-b border-white rounded-lg hover:bg-gray-700 hover:border-b-2 hover:border-white hover:text-yellow-500 transition-colors"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 px-3 border-b border-white rounded-lg hover:bg-gray-700 hover:border-b-2 hover:border-white hover:text-yellow-500 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
