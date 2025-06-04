"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const WhatWeDo = () => {
  return (
    <main className="w-full h-full flex justify-center flex-col bg-[#F1F1F1]">
      {/* Hero Section */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[5vw] ">
          ABOUT
        </h1>
        <p className="text-[1.5vw] max-w-4xl mx-auto px-4 text-white relative z-10">
          Founder, Psychiatrist, Cognitive Wellness Strategist | Manokalp
        </p>
        <Image
          src="/about-us/about.webp"
          alt="suicidality hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full lg:mt-[-16vw] mt-[-25vw] z-0"
        />
      </div>
      {/* Hero Mobile  */}
      <div className="w-full lg:hidden block text-center ">
        <Image
          src="/about-us/about.webp"
          alt="suicidality hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full z-0"
        />
        <h1 className="lg:text-[5vw] text-[10vw] text-white font-semibold relative z-10 font-[playfull] mt-[-50vw] mb-10">
          About
        </h1>
        <p className="lg:text-[1.5vw] text-[3vw] text-white max-w-4xl mx-auto px-4 mb-10">
          Founder, Psychiatrist, Cognitive Wellness Strategist | Manokalp
        </p>
      </div>

      {/* Circular Info Section */}

      {/* My Approach Section */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        <div className="flex flex-col justify-center items-center lg:mb-20 mb-10"></div>
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Hi, I'm Dr.SanKalp, Manokalp—a psychiatrist, cognitive-behavioral
            therapist, and passionate advocate of mindful mental wellness.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            I founded Manokalp with a singular mission: to make emotional
            wellness more accessible, modern, and meaningful. At a time when
            therapy often feels clinical or distant, I wanted to create a space
            where people feel seen, heard, and empowered to rewire their
            thoughts and emotions with practical, science-backed tools.
          </p>
        </div>

        <Link
          href="/"
          className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] "
        >
          Know More
        </Link>
      </section>

      {/* Expertise Section */}
      <section className="w-full px-6 py-16 bg-white">
        <h2 className="text-[#0E7EA0] font-[playfull] lg:text-[4vw] text-[10vw] font-semibold text-center mb-12">
          Areas of Expertise
        </h2>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8 text-black">
          <div className="flex flex-col ">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-[#0E7EA0] rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <p className="font-semibold">
                Cognitive Behavioral Therapy (CBT)
              </p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-[#0E7EA0] rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <p className="font-semibold">Trauma-Focused Therapy</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-[#0E7EA0] rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <p className="font-semibold">Relationship Counseling</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-[#0E7EA0] rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <p className="font-semibold">Anxiety & Depression Management</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-[#0E7EA0] rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <p className="font-semibold">
                Stress & Coping Strategy Development
              </p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-[#0E7EA0] rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <p className="font-semibold">Mindfulness-Based Interventions</p>
            </div>
          </div>
        </div>
      </section>

      {/* My Philosophy Section */}
      <section className="w-full px-6 py-16 bg-white">
        <h2 className="text-[#0E7EA0] font-[playfull] lg:text-[4vw] text-[10vw] font-semibold text-center">
          My Philosophy
        </h2>
        
        <div className="text-center mb-12">
          <p className="text-gray-800 lg:text-[1.2vw] text-[4vw] mt-4">At Manokalp, every journey begins with insight.</p>
          <p className="text-gray-800 lg:text-[1.2vw] text-[4vw] mt-6 mb-12">I believe:</p>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col border-2 border-gray-300 rounded-lg">
            <div className="w-full h-64 overflow-hidden">
              <Image
                src="/quick_links/1.webp"
                alt="Collaborative care"
                width={300}
                height={200}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="bg-[#0E7EA0] p-6 text-center flex-grow rounded-b-lg">
              <p className="text-[#FFD700] lg:text-[1.1vw] text-[3vw]">
                In collaborative care, where you are an active participant in your healing.
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="flex flex-col border-2 border-gray-300 rounded-lg">
            <div className="w-full h-64 overflow-hidden">
              <Image
                src="/quick_links/2.webp"
                alt="Emotions and thoughts"
                width={300}
                height={200}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="bg-[#0E7EA0] p-6 text-center flex-grow rounded-b-lg">
              <p className="text-[#FFD700] lg:text-[1.1vw] text-[3vw]">
                That thoughts create emotions, and reshaping them can transform your life.
              </p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="flex flex-col border-2 border-gray-300 rounded-lg">
            <div className="w-full h-64 overflow-hidden">
              <Image
                src="/principles/1.webp"
                alt="Therapy as a growth tool"
                width={300}
                height={200}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="bg-[#0E7EA0] p-6 text-center flex-grow rounded-b-lg">
              <p className="text-[#FFD700] lg:text-[1.1vw] text-[3vw]">
                Therapy is not a last resort, but a proactive tool for growth.
              </p>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="flex flex-col border-2 border-gray-300 rounded-lg">
            <div className="w-full h-64 overflow-hidden">
              <Image
                src="/principles/2.webp"
                alt="Medication approach"
                width={300}
                height={200}
                            className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="bg-[#0E7EA0] p-6 text-center flex-grow rounded-b-lg">
              <p className="text-[#FFD700] lg:text-[1.1vw] text-[3vw]">
                Medication is a tool—not a solution—and is used conservatively and compassionately when necessary.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* Why I Started Manokalp */}
            <section className="w-full px-6 py-16 bg-white">
        <h2 className="text-[#0E7EA0] font-[playfull] lg:text-[3vw] text-[10vw] font-semibold text-center mb-8">
          Why I Started Manokalp
        </h2>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <p className="lg:text-[1.2vw] text-[3vw] mb-6 text-gray-700">
              Over the years, I noticed that many people struggle to find
              effective, accessible mental health care that truly meets their
              needs. After witnessing both the suffering caused by untreated
              psychological issues and the transformative power of appropriate
              therapeutic support, I felt called to create a practice centered
              on evidence-based approaches delivered with genuine compassion.
            </p>
            <p className="lg:text-[1.2vw] text-[3vw] text-gray-700">
              Manokalp was founded with a commitment to providing therapy that
              addresses the whole person – recognizing that mental health is
              inseparable from our physical wellbeing, relationships, work life,
              and sense of purpose. The name "Manokalp" combines "mano" (mind)
              with "sankalp" (resolution), reflecting my belief in the mind's
              capacity for positive change when given the right support and
              tools.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/diseases/unhappyness/2.webp"
              alt="Founder of Manokalp"
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Beyond the Clinic Section */}
      <section className="w-full px-6 py-16 bg-[#F1F1F1]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#0E7EA0] font-[playfull] lg:text-[4vw] text-[10vw] font-semibold text-center mb-4">
            Beyond the Clinic
          </h2>
          
          <p className="text-center text-gray-800 lg:text-[1.8vw] text-[4vw] mb-12">
            I'm also a:
          </p>
          
          <div className="grid grid-cols-4 max-w-4xl mx-auto mb-16">
            <div className="bg-[#FFD700] h-64 flex items-center justify-center">
              <p className="text-black font-semibold lg:text-[1.5vw] text-[3.5vw]">Speaker</p>
            </div>
            <div className="bg-[#0E7EA0] h-64 flex items-center justify-center">
              <p className="text-white font-semibold lg:text-[1.5vw] text-[3.5vw] px-4 text-center">Workshop Facilitator</p>
            </div>
            <div className="bg-[#FFD700] h-64 flex items-center justify-center">
              <p className="text-black font-semibold lg:text-[1.5vw] text-[3.5vw] px-4 text-center">Content Creator</p>
            </div>
            <div className="bg-[#0E7EA0] h-64 flex items-center justify-center">
              <p className="text-white font-semibold lg:text-[1.5vw] text-[3.5vw]">Writer</p>
            </div>
          </div>
          
          <p className="text-center text-gray-800 lg:text-[1.5vw] text-[3.5vw] max-w-4xl mx-auto mb-16">
            I continue to collaborate on research and wellness models that combine psychiatry with mindfulness, helping individuals become stronger, not just symptom-free.
          </p>
        </div>
      </section>
      
      {/* Therapy That Works Section - Updated */}
      <section className="w-full px-6 py-16 bg-[#F1F1F1]">
        <h2 className="text-[#0E7EA0] font-[playfull] lg:text-[4vw] text-[10vw] font-semibold text-center mb-12">
          Therapy That Works for You
        </h2>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start mb-16">
          <div className="lg:w-1/2 text-gray-800">
            <p className="lg:text-[1.3vw] text-[3.5vw]">
              Therapy isn't one-size-fits-all. Whether you're looking for individual sessions, online consultations, or guided wellness modules—we'll build a path that fits your lifestyle and personality.
            </p>
          </div>
          
          <div className="lg:w-1/2 text-gray-800">
            <p className="lg:text-[1.3vw] text-[3.5vw]">
              If you're ready to understand yourself better, heal deeply, and create the life you know you're capable of—I'd be honored to walk with you.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-black text-white text-center rounded-full hover:bg-gray-800 transition-colors lg:text-[1.2vw] text-[3vw] font-medium"
          >
            Let's reconnect you with you
          </Link>
        </div>
      </section>


    </main>
  );
};

export default WhatWeDo;
