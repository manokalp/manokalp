'use client';

import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-[#F1F1F1]">
      {/* Navbar Skeleton */}
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="w-[150px] h-[50px] bg-gray-200 animate-pulse rounded"></div>
          <div className="hidden md:flex space-x-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="w-24 h-4 bg-gray-200 animate-pulse rounded"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="w-full h-[300px] bg-gray-200 animate-pulse mt-10"></div>

      {/* Harsh Truth Section Skeleton */}
      <div className="bg-[#0E7EA0] rounded-full w-full px-10 py-20 text-center mt-[-2vw]">
        <div className="flex flex-col items-center gap-6">
          <div className="w-3/4 h-12 bg-gray-200/20 animate-pulse rounded-full"></div>
          <div className="w-1/2 h-8 bg-gray-200/20 animate-pulse rounded-full"></div>
        </div>
        <div className="flex justify-center gap-10 my-20">
          {[1, 2].map((item) => (
            <div key={item} className="w-64 space-y-4">
              <div className="w-full h-8 bg-gray-200/20 animate-pulse rounded-full"></div>
              <div className="w-full h-16 bg-gray-200/20 animate-pulse rounded-full"></div>
            </div>
          ))}
        </div>
        <div className="w-48 h-12 bg-black/80 animate-pulse rounded-full mx-auto"></div>
      </div>

      {/* Foundation Principles Skeleton */}
      <div className="bg-white rounded-t-full w-full px-10 py-20 text-center mt-[-8vw]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="w-3/4 h-12 bg-gray-200 animate-pulse rounded-full mx-auto"></div>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 animate-pulse rounded-full"></div>
              <div className="flex-1 h-8 bg-gray-200 animate-pulse rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Fix Links Skeleton */}
      <div className="bg-[#F1F1F1] px-10 py-20 mt-[-10vw]">
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-[#0E7EA0] rounded-3xl p-6 space-y-4">
              <div className="w-full h-48 bg-gray-200/20 animate-pulse rounded-2xl"></div>
              <div className="w-3/4 h-6 bg-gray-200/20 animate-pulse rounded-full"></div>
              <div className="w-32 h-10 bg-black/80 animate-pulse rounded-full mx-auto"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Skeleton */}
      <footer className="bg-[#F1F1F1] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4">
              <div className="w-[150px] h-[50px] bg-gray-200 animate-pulse rounded"></div>
              <div className="w-64 h-4 bg-gray-200 animate-pulse rounded"></div>
              <div className="w-48 h-4 bg-gray-200 animate-pulse rounded"></div>
            </div>
            <div className="flex gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="w-6 h-6 bg-gray-200 animate-pulse rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Loading;