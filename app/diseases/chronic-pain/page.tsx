"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react';
import playfair from "../../../fonts/playfair.module.css"

const ChronicPain = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>('emotional');

  const causes = [
    {
      name: "Genetic and Biological Factors",
      description:
        "Nerve damage, inflammation, genetic predisposition, or nervous system hypersensitivity can amplify pain signals and lead to ongoing discomfort without clear physical damage.",
      image: "/genetic-factors.webp", // Replace with your actual image path
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Psychological and Emotional Factors",
      description:
        "Chronic stress, low mood, past trauma, and reduced physical activity all contribute to pain intensity and make recovery harder without targeted intervention.",
      image: "/psychological-factors.webp", // Replace with your actual image path
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
  ];

  const symptoms = {
    emotional: [
      'Low mood, frustration, or irritability',
      'Heightened anxiety about the pain',
      'Emotional exhaustion or withdrawal',
      'Loss of interest in pleasurable activities',
    ],
    behavioral: [
      'Avoidance of physical or social activities',
      'Inconsistent movement or posture habits',
      'Reliance on medications or passive coping',
      'Decreased participation in daily routines',
    ],
    physical: [
      'Persistent pain in muscles, joints, or nerves',
      'Muscle weakness or stiffness',
      'Sleep disturbances or chronic fatigue',
      'Sensitivity to touch, pressure, or temperature',
    ],
    cognitive: [
      'Difficulty concentrating or staying alert',
      'Negative thoughts about pain or prognosis',
      '“Brain fog” and memory lapses',
      'Feeling overwhelmed by minor tasks',
    ],
  };

  const solutionsData = [
    {
      title: 'Pharmacological Treatments',
      description:
        'Non-opioid analgesics, antidepressants, anticonvulsants, or muscle relaxants are used to reduce pain, improve sleep, and regulate nerve signals in chronic conditions.',
      image: '/diseases/chronic-painv2/1.webp',
    },
    {
      title: 'Psychotherapeutic Interventions',
      description:
        'CBT, ACT, MBSR, and biofeedback help individuals reframe pain-related thoughts, manage emotional distress, and develop resilience to persistent discomfort.',
      image: '/diseases/chronic-painv2/2.webp',
    },
    {
      title: 'Lifestyle and Alternative Therapies',
      description:
        'Physiotherapy, acupuncture, spinal adjustments, anti-inflammatory diets, and mind-body practices like yoga or tai chi improve strength, reduce pain, and restore mobility.',
      image: '/diseases/chronic-painv2/3.webp',
    },
    {
      title: 'Complementary Interventions',
      description:
        'Multidisciplinary pain programs, peer support, home-based routines, and regular follow-ups help maintain functional gains and reduce psychological burden over time.',
      image: '/diseases/chronic-painv2/4.webp',
    },
  ];

  type SymptomCategory = keyof typeof symptoms;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">Chronic Pain-Related</h1>
        <Image src="/diseases-banner/ChronicPain.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0" />
      </div>

      {/* Hero Mobile  */}
      <div className="w-full lg:hidden block text-center ">

        <Image src="/diseases-banner/ChronicPain.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full     z-0" />
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">Chronic Pain-Related</h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
     
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">

          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Chronic pain-related disorders refer to conditions where pain lasts for more than three months, continuing beyond normal healing time. This persistent pain can interfere with movement, sleep, work, and emotional health.</p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Common diagnoses include fibromyalgia, chronic back pain, arthritis, and neuropathic pain. These disorders often require a holistic treatment approach, targeting both physical symptoms and psychological distress for long-term relief and improved quality of life.</p>
        </div>

 
      </section>

      {/* Color Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        {/* Title */}
        <h2 className="text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold mb-8">
          Causes of Eating Disorders
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
          Eating disorders can be influenced by a mix of biological, psychological, and environmental factors. Some of the key contributors include:
        </p>

        {/* Causes Grid */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 max-w-2xl mx-auto">
          {causes.map((cause, index) => (
            <div key={index} className="[perspective:1000px] cursor-pointer">
              <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div
                  className={`absolute inset-0 ${cause.bgColor} w-full lg:h-[50vh] rounded-xl p-6 ${cause.textColor} flex flex-col items-center justify-center [backface-visibility:hidden]`}
                >
                  <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">{cause.name}</h3>
                </div>
                {/* Back Side */}
                <div
                  className={`absolute inset-0 ${cause.bgColor} w-full lg:h-[50vh] rounded-xl p-6 ${cause.textColor} flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]`}
                >
                  <p className="lg:text-[1vw] text-[3vw] text-center">{cause.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tab Section */}
      <section className="bg-white w-full h-full lg:px-60 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Symptoms of Chronic Pain Related Disorders
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          These disorders affect both body and mind, producing long-lasting physical discomfort and psychosocial strain.
        </p>

        <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
          {Object.keys(symptoms).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as SymptomCategory)}
              className={`px-4 py-2 rounded-lg transition-all ${activeTab === tab
                  ? 'bg-[#0E7EA0] text-white'
                  : 'hover:bg-gray-100'
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Symptoms
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="lg:w-1/2">
            <ul className="text-left text-black">
              {symptoms[activeTab].map((symptom, index) => (
                <li key={index} className="mb-8 border-b-[2px] pb-2">
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 h-[50vh] relative overflow-hidden rounded-xl">
            <Image
              src={`/diseases/chronic-pain/${activeTab === 'emotional'
                ? '1'
                : activeTab === 'behavioral'
                  ? '2'
                  : activeTab === 'physical'
                    ? '3'
                    : '4'
                }.webp`}
              alt={`${activeTab} symptoms illustration`}
              layout="fill"
              objectFit="contain"
              className="transition-opacity duration-300 cursor-pointer rounded-2xl object-center"
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-30 py-10 text-center">
      <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}>
        Solutions for Managing Chronic Pain Related Disorders
      </h2>

      <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
        Effective care blends medication, psychological therapy, physical rehabilitation, and lifestyle changes tailored to individual needs.
      </p>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        {solutionsData.map((solution, index) => (
          <div key={index} className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src={solution.image}
              alt={solution.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">{solution.title}</h3>
              <p className="text-sm">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Footer Section */}
      {/* Prognosis and Future Outlook Section*/}
      <section className="bg-[#FFD266] w-full h-full lg:px-80 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
        {/* <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}>Conclusion</h2>
                <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
                    <p>Anxiety in children is a critical issue that can affect a child&apos;s emotional and psychological growth if not treated. Knowing its causes and symptoms, parents, educators, and caregivers can take decisive action to assist children to overcome their anxiety in the most effective way. With proper intervention,</p>
                    <p>children can be helped to develop resilience, confidence, and coping mechanisms that will carry them through adulthood. Childhood anxiety management needs patience, consistency, and a warm environment, but if managed well, children can enjoy happy and worry-free lives.</p>
                </div> */}
      </section>
    </main>
  )
}

export default ChronicPain