"use client";
import Image from "next/image";
import Link from "next/link";
import CarouselGallery from "@/components/CarouselGallery";
// import { useState } from "react";

const WhatWeDo = () => {
  return (
    <main className="w-full h-full flex justify-center flex-col bg-[#F1F1F1]">
      {/* Hero Section */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[10vw] text-[10vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[5vw] ">
          ABOUT
        </h1>

        <Image
          src="/about-us/about-us.webp"
          alt="suicidality hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full lg:mt-[-16vw] z-0"
          priority
          onLoad={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("heroImageLoaded"));
            }
          }}
        />
      </div>
      {/* Hero Mobile  */}
      <div className="w-full lg:hidden block text-center ">
        <Image
          src="/about-us/about-us.webp"
          alt="suicidality hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full z-0 "
          priority
          onLoad={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("heroImageLoaded"));
            }
          }}
        />
        <h1 className="lg:text-[5vw] text-[14vw] text-white font-semibold relative z-10 font-[playfull] mt-[-50vw] mb-10">
          About
        </h1>
      </div>

      {/* Circular Info Section */}

      {/* My Approach Section */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-6 lg:py-20 pt-4 pb-30 mt-[-10vw] flex flex-col lg:flex-row items-center justify-between gap-10 mb-20">
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <Image
            src="/about-us/about.webp"
            alt="Dr. SanKalp, Manokalp"
            width={1200}
            height={400}
            className="rounded-2xl w-full h-[500px]  max-w-[400px] object-cover shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 w-full flex flex-col justify-center text-white lg:gap-8 gap-4">
          <p className="text-base lg:text-2xl font-medium">
            Hi, I&apos;m <span className="font-bold">Dr.SanKalp, Manokalp</span>{" "}
            - a psychiatrist, cognitive-behavioral therapist, and passionate
            advocate of mindful mental wellness.
          </p>
          <p className="text-base lg:text-2xl font-medium">
            I founded <span className="font-bold">Manokalp</span> with a
            singular mission:{" "}
            <span className="font-bold">
              to make emotional wellness more accessible, modern, and
              meaningful.
            </span>{" "}
            At a time when therapy often feels clinical or distant, I wanted to
            create a space where people feel seen, heard, and empowered to
            rewire their thoughts and emotions with practical, science-backed
            tools.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="w-full px-6 py-16 bg-white">
        <h2 className="text-[#0E7EA0] font-[playfull] lg:text-[4vw] text-[10vw] font-semibold text-center ">
          A Little About My Approach
        </h2>

        <p className="text-base lg:text-xl font-medium text-black mb-10 max-w-6xl text-center mx-auto">
          I believe that therapy isn&apos;t just for people who are
          “struggling.” It&apos;s for anyone who wants to evolve. Mental health
          is not just the absence of illness—it&apos;s the presence of emotional
          resilience, clarity, and calm.
          <br />
          <br />
          While I&apos;m trained as a psychiatrist, my work goes far beyond
          diagnoses and prescriptions. My approach integrates:
        </p>

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
              <p className="font-semibold">Mindfulness-Based Practices</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-[#0E7EA0] rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <p className="font-semibold">REBT, ACT & DBT tools</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-[#0E7EA0] rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <p className="font-semibold">
                Behavioral Coaching & Insight-Oriented Therapy
              </p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-[#0E7EA0] rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <p className="font-semibold">Holistic Wellness Planning</p>
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

      {/* Who I Work With Section */}
      <section className="w-full px-6 py-16 bg-[#F1F1F1]">
        <h2 className="text-[#0E7EA0] font-[playfull] lg:text-[4vw] text-[10vw] font-semibold text-center mb-12">
          Who I Work With
        </h2>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Adults */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-center gap-4 mb-4 flex-col">
              <div className="w-20 h-20 bg-[#0E7EA0] rounded-full flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <h3 className="text-[#0E7EA0] font-semibold lg:text-[1.2vw] text-[4vw]">
                Adults facing anxiety, depression, relationship issues, burnout or trauma
              </h3>
            </div>
          </div>

          {/* Couples */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-center gap-4 mb-4 flex-col">
              <div className="w-20 h-20 bg-[#0E7EA0] rounded-full flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <h3 className="text-[#0E7EA0] font-semibold lg:text-[1.2vw] text-[4vw]">
                Couples needing emotional reconnection and conflict resolution
              </h3>
            </div>
          </div>

          {/* Parents */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-center gap-4 mb-4 flex-col">
              <div className="w-20 h-20 bg-[#0E7EA0] rounded-full flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <h3 className="text-[#0E7EA0] font-semibold lg:text-[1.2vw] text-[4vw]">
                Parents seeking guidance in emotionally conscious parenting
              </h3>
            </div>
          </div>

          {/* Students */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-center gap-4 mb-4 flex-col">
              <div className="w-20 h-20 bg-[#0E7EA0] rounded-full flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <h3 className="text-[#0E7EA0] font-semibold lg:text-[1.2vw] text-[4vw]">
                Students struggling with identity, performance pressure, or mental overwhelm
              </h3>
            </div>
          </div>

          {/* Corporate Teams */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-center gap-4 mb-4 flex-col">
              <div className="w-20 h-20 bg-[#0E7EA0] rounded-full flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <h3 className="text-[#0E7EA0] font-semibold lg:text-[1.2vw] text-[4vw]">
                Corporate teams in need of mindfulness, stress management, and emotional intelligence training
              </h3>
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
          <p className="text-gray-800 lg:text-[1.2vw] text-[4vw] mt-4">
            At <span className="font-bold">Manokalp</span>, every journey begins
            with insight.
          </p>
          <p className="text-gray-800 lg:text-[1.2vw] text-[4vw] mt-6 mb-12">
            I believe:
          </p>
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
                In <span className="font-bold">collaborative care</span>, where
                you are an active participant in your healing.
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
                That{" "}
                <span className="font-bold">thoughts create emotions,</span> and
                reshaping them can transform your life.
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
                Therapy is <span className="font-bold">not a last resort,</span>{" "}
                but a proactive tool for growth.
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
              <p className="text-[#FFD700] lg:text-[1.1vw] text-[3vw] font-bold">
                Medication is a tool—not a solution—and is used conservatively
                and compassionately when necessary.
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
              Over the years, I noticed that therapy often felt either too
              clinical or too spiritual—lacking a balance.{" "}
              <span className="font-bold">Manokalp bridges that gap.</span> We
              offer{" "}
              <span className="font-bold">
                scientific, grounded, and emotionally intelligent care that
                feels approachable yet powerful.
              </span>
            </p>
            <p className="lg:text-[1.2vw] text-[3vw] text-gray-700">
              Here, you’ll find a team trained not just to help you manage your
              symptoms—but to guide you through insight, emotional strength, and
              lasting change.
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
            I&apos;m also a:
          </p>

          <div className="grid grid-cols-4 max-w-4xl mx-auto mb-16">
            <div className="bg-[#FFD700] h-64 flex flex-col items-start  justify-center">
              <p className="text-black font-semibold lg:text-[1.5vw] text-[3.5vw] px-6">
                Speaker
              </p>
              <p className="text-black px-6 lg:text-[1.0vw] text-[3.5vw]">
                on emotional intelligence and digital-age stress
              </p>
            </div>
            <div className="bg-[#0E7EA0]  h-64 flex flex-col items-start justify-center">
              <p className="text-white font-semibold lg:text-[1.5vw] text-[3.5vw] px-6">
                Workshop Facilitator
              </p>
              <p className="text-white px-6 lg:text-[1.0vw] text-[3.5vw]">
                on emotional intelligence and digital-age stress
              </p>
            </div>
            <div className="bg-[#FFD700] h-64 flex  flex-col items-start justify-center">
              <p className="text-black font-semibold lg:text-[1.5vw] text-[3.5vw] px-2 text-center">
                Content Creator
              </p>
                <p className="text-black px-6 lg:text-[1.0vw] text-[3.5vw]">
                passionate about simplifying mental health for all
              </p>
            </div>
            <div className="bg-[#0E7EA0] h-64 flex flex-col items-start justify-center">
              <p className="text-white font-semibold lg:text-[1.5vw] text-[3.5vw] px-6">
                Writer
              </p>
                <p className="text-white px-6 lg:text-[1.0vw] text-[3.5vw]">
                working on my first book on emotional self-leadership
              </p>
            </div>
          </div>

          <p className="text-center text-gray-800 lg:text-[1.5vw] text-[3.5vw] max-w-4xl mx-auto mb-16">
            I continue to collaborate on research and wellness models that
            combine psychiatry with mindfulness, helping individuals become
            <span className="font-bold"> stronger, not just symptom-free.</span>
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-16 ">
        <CarouselGallery />
      </section>

      {/* Therapy That Works Section - Updated */}
      <section className="w-full px-6 py-16 bg-[#F1F1F1]">
        <h2 className="text-[#0E7EA0] font-[playfull] lg:text-[4vw] text-[10vw] font-semibold text-center mb-12">
          Therapy That Works for You
        </h2>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start mb-16">
          <div className="lg:w-1/2 text-gray-800">
            <p className="lg:text-[1.3vw] text-[3.5vw]">
              Therapy isn&apos;t one-size-fits-all. Whether you&apos;re looking
              for individual sessions, online consultations, or guided wellness
              modules—we&apos;ll build a path that fits your lifestyle and
              personality.
            </p>
          </div>

          <div className="lg:w-1/2 text-gray-800">
            <p className="lg:text-[1.3vw] text-[3.5vw]">
              If you&apos;re ready to understand yourself better, heal deeply,
              and create the life you know you&apos;re capable of— <span className="font-bold">I&apos;d be
              honored to walk with you.</span>
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-black text-white text-center rounded-full hover:bg-gray-800 transition-colors lg:text-[1.2vw] text-[3vw] font-medium"
          >
            Let&apos;s reconnect you with you
          </Link>
        </div>
      </section>
    </main>
  );
};

export default WhatWeDo;
