"use client";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const InhalantsAndSolvents = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("emotional");

  const causes = [
    {
      name: "Neurobiological Factors",
      description: "Inhalants rapidly cross the blood-brain barrier, disrupting neurotransmission and damaging brain cells. Regular use can lead to neurological damage and dependence through altered brain chemistry.",
      image: "/genetic-factors.webp",
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Psychological Vulnerabilities",
      description:
        "Many users turn to inhalants as an escape mechanism from trauma, emotional distress, or untreated mental health conditions, creating a cycle of self-medication and dependence.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Environmental Influences",
      description:
        "Accessibility and low cost make inhalants particularly prevalent among vulnerable populations. Poverty, lack of supervision, and peer pressure significantly contribute to initial and continued use.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
  ];

  const symptoms = {
    emotional: [
      "Mood swings and irritability when unable to use",
      "Depression and emotional blunting with prolonged use",
      "Anxiety and panic attacks, especially during withdrawal"
    ],
    cognitive: [
      "Confusion and disorientation even after immediate effects wear off",
      "Impaired judgment and problem-solving abilities",
      "Memory problems and potential permanent cognitive decline"
    ],
    physical: [
      "Dizziness, loss of coordination, and slurred speech",
      "Headaches, nausea, and vomiting",
      "Damage to vital organs including liver, kidneys, and heart"
    ],
    behavioral: [
      "Hiding use and lying about activities",
      "Loss of interest in previously enjoyed activities",
      "Continued use despite obvious physical and social consequences",
      "Using in dangerous situations (like while driving)"
    ]
  };

  const solutionsData = [
    {
      title: "Medical Interventions",
      points: [
        "Assessment and treatment of physical damage from inhalant use",
        "Management of withdrawal symptoms under medical supervision",
        "Treatment of co-occurring medical conditions resulting from inhalant abuse"
      ],
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lifestyle Modifications",
      points: [
        "Structured daily routines to replace harmful inhalant-using patterns",
        "Physical exercise and recreational activities as healthy alternatives",
        "Environmental modifications to reduce access to inhalants"
      ],
      image: "https://images.unsplash.com/photo-1574607383172-1421479aec9d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Supportive Strategies",
      points: [
        "Family therapy to address enabling behaviors and improve support systems",
        "Peer support groups specific to solvent and inhalant recovery",
        "Educational interventions about the serious risks of inhalant use"
      ],
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Professional Support",
      points: [
        "Cognitive Behavioral Therapy to address underlying triggers for use",
        "Neuropsychological rehabilitation for cognitive deficits",
        "Long-term case management for severe cases with neurological damage"
      ],
      image: "https://images.unsplash.com/photo-1566669437687-7040a6926753?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];
  

  

  type SymptomCategory = keyof typeof symptoms;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
        Inhalants and Solvents 
        </h1>
        <Image
          src="/diseases-banner/inhalants.webp"
          alt="inhalants and solvents use hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0"
        />
      </div>

      {/* Hero Mobile  */}
      <div className="w-full lg:hidden block text-center ">
        <Image
          src="/diseases-banner/inhalants.webp"
          alt="inhalants and solvents use hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full     z-0"
        />
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
        Inhalants and Solvents 
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
       
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Inhalants and solvents are volatile substances that produce chemical vapors that can be inhaled to induce mind-altering effects. These substances are found in many common household products, making them easily accessible, particularly to young people.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Despite their legal status and widespread availability, inhalants are among the most dangerous substances of abuse. A single session of prolonged inhalant use can lead to severe health consequences including sudden sniffing death syndrome, cardiac arrest, or permanent neurological damage.
          </p>
        </div>

        
      </section>

      {/* Color Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        {/* Title */}
        <h2
          className="text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold mb-8"
          style={{ fontFamily: "Playfair" }}
        >
          Causes of Inhalants and Solvents 
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
        Inhalant addiction develops through a complex interplay of biological vulnerability, psychological factors, and environmental influences that promote initial and continued use.
        </p>

        {/* Causes Grid */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 max-w-5xl mx-auto">
          {causes.map((cause, index) => (
            <div key={index} className="[perspective:1000px] cursor-pointer">
              <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div
                  className={`absolute inset-0 ${cause.bgColor} w-full lg:h-[50vh] rounded-xl p-6 ${cause.textColor} flex flex-col items-center justify-center [backface-visibility:hidden]`}
                >
                  <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">
                    {cause.name}
                  </h3>
                </div>
                {/* Back Side */}
                <div
                  className={`absolute inset-0 ${cause.bgColor} w-full lg:h-[50vh] rounded-xl p-6 ${cause.textColor} flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]`}
                >
                  <p className="lg:text-[1vw] text-[3vw] text-center">
                    {cause.description}
                  </p>
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
          Symptoms of Inhalants and Solvents
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
        Inhalant abuse manifests through various physical, cognitive, emotional, and behavioral signs that can develop quickly due to the toxic nature of these substances.
        </p>

        <div className="flex flex-col lg:flex-row justify-center gap-4 text-black mb-16">
          {Object.keys(symptoms).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as SymptomCategory)}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === tab
                  ? "bg-[#0E7EA0] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Symptoms
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
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
              src={`/diseases/unhappyness/${
                activeTab === "emotional"
                  ? "1"
                  : activeTab === "cognitive"
                  ? "2"
                  : activeTab === "physical"
                  ? "3"
                  : "4"
              }.webp`}
              alt={`${activeTab} symptoms of inhalants and solvents abuse`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 pt-20">
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto">
          <h2
            className="text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold mb-8"
            style={{ fontFamily: "Playfair" }}
          >
            Recovery from Inhalants and Solvents Abuse
          </h2>
          <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
            Recovery from inhalant abuse requires comprehensive approaches that address both immediate physical health concerns and long-term psychological dependence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-w-5xl mx-auto">
          {solutionsData.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 items-center"
            >
              {/* Image */}
              <div className="w-full md:w-1/2 h-48 relative rounded-xl overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-[#0E7EA0] lg:text-[1.5vw] text-[5vw] font-bold mb-4">
                  {solution.title}
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  {solution.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="text-black lg:text-[0.85vw] text-[3vw]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default InhalantsAndSolvents;
