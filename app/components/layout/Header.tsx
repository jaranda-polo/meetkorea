"use client";

import Link from "next/link";
import { useUser } from "@/app/context/user-context";

type HeaderProps = {
  title?: string;
  showBackButton?: boolean;
  showLogo?: boolean;
  showProfile?: boolean;
};

export default function Header({
  title,
  showBackButton = false,
  showLogo = false,
  showProfile = true,
}: HeaderProps) {
  const { user } = useUser();

  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          {showBackButton && (
            <button className="mr-3" onClick={() => window.history.back()}>
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
            </button>
          )}
          {showLogo && (
            <div className="text-2xl font-bold text-primary">로컬한국어</div>
          )}
          {title && (
            <div className="text-xl font-bold text-gray-800">{title}</div>
          )}
        </div>
        {showProfile && (
          <div className="flex items-center space-x-4">
            <Link
              href="/notifications"
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </Link>
            <Link
              href="/profile"
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"
            >
              {user?.name ? user.name.substring(0, 2).toUpperCase() : "JD"}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
