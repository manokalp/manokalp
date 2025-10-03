"use client";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const InhalantsAndSolvents = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("behavioral");

  const causes = [
    {
      name: "Psychological and Emotional Factors",
      description: "Curiosity and experimentation, especially in adolescents. Coping with stress, boredom, or emotional pain. Seeking a quick, accessible high without legal risks.",
      image: "/genetic-factors.webp",
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Environmental and Social Factors",
      description:
        "Easy availability of household products containing volatile chemicals. Peer pressure, especially among teenagers in unsupervised settings. Lack of awareness about the risks associated with inhalant misuse.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
  ];

  const symptoms = {
    behavioral: [
      "Repeated use despite awareness of harmful effects",
      "Secretive behavior or hiding chemical-soaked rags or containers",
      "Declining interest in school, work, or social activities"
    ],
    emotional: [
      "Anxiety, irritability, or mood swings",
      "Depression or emotional numbness",
      "Aggressive behavior or increased impulsivity"
    ],
    cognitive: [
      "Difficulty concentrating or remembering information",
      "Poor decision-making and impaired judgment",
      "Confusion or disorientation, especially after use"
    ],
    physical: [
      "Persistent chemical odor on breath or clothing",
      "Red or runny nose, frequent nosebleeds",
      "Dizziness, headache, or nausea after use",
      "Weight loss, muscle weakness, or tremors"
    ]
  };

  const solutionsData = [
    {
      title: "Medical Interventions",
      points: [
        "Emergency care for acute inhalant poisoning or cardiac arrest",
        "Oxygen therapy for individuals experiencing hypoxia",
        "Regular health monitoring for respiratory, liver, and kidney damage"
      ],
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Psychotherapeutic Interventions",
      points: [
        "Cognitive Behavioral Therapy (CBT) to identify triggers and develop coping skills",
        "Motivational Enhancement Therapy (MET) to strengthen commitment to recovery",
        "Family Counseling to educate parents and improve support systems"
      ],
      image: "https://images.unsplash.com/photo-1574607383172-1421479aec9d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Behavioral and Lifestyle Strategies",
      points: [
        "Education about the dangers of inhalants in schools and community programs",
        "Encouraging healthy recreational activities to replace substance use",
        "Strengthening parental supervision and open communication"
      ],
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Complementary Interventions",
      points: [
        "Peer support groups for shared experiences and accountability",
        "Relaxation techniques, including deep breathing and mindfulness, to manage stress",
        "Psychoeducation for parents and caregivers to recognize early warning signs"
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
          src="/diseases-banner/inhalants.webp"
          alt="inhalants and solvents use hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full     z-0"
          priority
          onLoad={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("heroImageLoaded"));
            }
          }}
        />
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
        Inhalants and Solvents 
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
       
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Inhalants are volatile substances that produce mind-altering effects when their chemical vapors are inhaled. Commonly misused among adolescents due to their easy availability and low cost, inhalants include a wide range of household, industrial, and medical products.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Despite their brief high, inhalant misuse can lead to severe health consequences, including brain damage, organ failure, and sudden death.
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
          Causes of Inhalant Use and Dependence
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
        Inhalant misuse often begins due to a combination of social, psychological, and environmental factors.
        </p>

        {/* Causes Grid */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 max-w-5xl mx-auto">
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
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:pt-30 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Symptoms of Inhalant Dependence
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
        Dependence on inhalants is primarily psychological but can lead to severe physical consequences.
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
                activeTab === "behavioral"
                  ? "1"
                  : activeTab === "emotional"
                  ? "2"
                  : activeTab === "cognitive"
                  ? "3"
                  : "4"
              }.webp`}
              alt={`${activeTab} symptoms of inhalant dependence`}
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
            Solutions for Managing Inhalant Dependence
          </h2>
          <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
            Effective management of inhalant misuse involves medical supervision, psychological support, and family involvement.
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
