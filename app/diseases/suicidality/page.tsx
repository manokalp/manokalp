"use client";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const Suicidality = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("behavioralIndicators");

  const causes = [
    {
      name: "Biological Factors",
      description:
        "Genetic predisposition, low serotonin levels, and underlying psychiatric disorders such as depression, bipolar disorder, or substance use increase suicide risk significantly.",
      image: "/genetic-factors.webp",
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]",
      textColor: "text-white",
    },
    {
      name: "Environmental and Psychological Factors",
      description:
        "Chronic stress, trauma, marginalization, or isolation can overwhelm coping capacity, leading to feelings of hopelessness and suicidal ideation.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]",
      textColor: "text-black",
    },
    {
      name: "Environmental Influences",
      description:
        "Trauma exposure, childhood adversity, social isolation, acute life stressors, access to lethal means, and exposure to suicide in one's social network or media significantly impact suicide risk, particularly in vulnerable individuals.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#0E7EA0]",
      textColor: "text-white",
    },
  ];

  const symptoms = {
    behavioralIndicators: [
      "Talking about wanting to die or feeling like a burden",
      "Withdrawing from relationships and daily responsibilities",
      "Reckless behavior or increased substance use",
      "Sudden calmness after intense distress",
      "Giving away personal items or saying goodbye unexpectedly",
    ],
    emotionalCognitive: [
      "Persistent hopelessness or despair",
      "Guilt, shame, or feelings of worthlessness",
      "Difficulty concentrating or making decisions",
      "Emotional numbness or disconnection",
    ],
  };

  const solutionsData = [
    {
      title: "Crisis Intervention and Immediate Support",
      points: [
        "Emergency services, suicide helplines, and psychiatric hospitalization ensure safety during acute crises",
        "Safety planning includes coping steps, emergency contacts, and warning sign monitoring"
      ],
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Pharmacological Treatments",
      points: [
        "SSRIs relieve depressive symptoms",
        "Lithium reduces suicide risk in bipolar disorder",
        "Antipsychotics are used when psychosis or mood dysregulation contributes to suicidal thoughts"
      ],
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Psychotherapeutic Interventions",
      points: [
        "CBT addresses cognitive distortions",
        "DBT supports individuals with self-harm risk",
        "Psychodynamic therapy explores underlying emotional conflicts fueling suicidal ideation"
      ],
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Social and Lifestyle Support",
      points: [
        "Peer groups reduce isolation",
        "Family involvement strengthens emotional support",
        "Structured routines, physical activity, and sleep regulation promote stability and resilience"
      ],
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];
  

  

  type SymptomCategory = keyof typeof symptoms;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
        What Are Suicidality and Suicide?
        </h1>
        <Image
          src="/diseases-banner/suicidality.webp"
          alt="suicidality hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full  lg:mt-[-16vw] mt-[-25vw] z-0"
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
          src="/diseases-banner/suicidality.webp"
          alt="suicidality hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full z-0"
          priority
          onLoad={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("heroImageLoaded"));
            }
          }}
        />
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
        What Are Suicidality and Suicide?
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
       
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Suicidality includes a spectrum of thoughts and behaviors related to ending one’s life—ranging from ideation and planning to attempts. Suicide is the intentional act of self-inflicted death. These are serious mental health crises often fueled by emotional pain, psychiatric illness, trauma, and social disconnection.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Early detection, compassionate communication, and comprehensive treatment are essential to reducing risk and fostering recovery.
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
          Causes of Suicidality and Suicide
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
          These behaviors emerge from an interplay of biological vulnerability, unresolved emotional distress, and situational adversity.
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
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:pt-35 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Warning Signs and Symptoms of Suicidality
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Suicidality can present through verbal cues, mood changes, and behavioral shifts that should never be ignored.
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
              {tab === "behavioralIndicators" ? "Behavioral Indicators" : "Emotional and Cognitive Signs"}
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
              src={`/diseases/unhappyness/${activeTab === "behavioralIndicators" ? "1" : "2"}.webp`}
              alt={`${activeTab} warning signs of suicidality`}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 cursor-pointer rounded-2xl border-black border-1 object-center"
            />
          </div>
        </div>
      </section>

      {/* Cards-2 Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-30 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}
        >
          Solutions for Managing Suicidality and Suicide Risk
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
        Crisis management, therapy, medication, and social support play key roles in prevention and treatment.
        </p>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {solutionsData.map((solution, index) => (
            <div
              key={index}
              className="bg-[#0E7EA0] rounded-3xl text-white text-center"
            >
              <Image
                src={solution.image}
                alt={solution.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4 text-[#FFD066]">
                  {solution.title}
                </h3>
                <ul className="text-left text-sm list-none">
                  {solution.points.map((point, i) => (
                    <li key={i} className="mb-3 flex items-start">
                      <span className="text-[#FFD066] mr-2 text-base">&#10148;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      {/* Prognosis and Future Outlook Section*/}
      {/* <section className="bg-[#FFD266] w-full h-full lg:px-80 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
        <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}>Recovery and Outlook</h2>
        <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
            <p className="lg:text-[1.2vw] text-[3.5vw]">Most people who experience suicidal thoughts or attempts can recover and go on to live meaningful lives with appropriate support and treatment. Research shows that many who attempt suicide but survive don't go on to die by suicide later, highlighting that the suicidal crisis is often temporary even when the pain feels permanent.</p>
            <p className="lg:text-[1.2vw] text-[3.5vw]">Recovery requires addressing underlying issues, developing effective coping strategies, and building support networks. While some individuals may continue to experience occasional suicidal thoughts during times of extreme stress, they can learn to manage these experiences safely with proper support and treatment tools.</p>
        </div>
      </section> */}
    </main>
  );
};

export default Suicidality;
