"use client";
import Image from "next/image";
// import Link from "next/link"; 
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const Unhappiness = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("core");

  const causes = [
    {
      name: "Biological and Genetic Factors",
      description:
        "Imbalances in serotonin and dopamine, hormonal disruptions, and family history increase vulnerability to depressive symptoms and emotional instability.",
      image: "/genetic-factors.webp", // Replace with your actual image path
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Psychological and Emotional Factors",
      description:
        "Low self-worth, negative thought patterns, unresolved trauma, or rigid personality traits like perfectionism often intensify depressive tendencies.",
      image: "/psychological-factors.webp", // Replace with your actual image path
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Environmental and Social Factors",
      description:
        "Chronic stress, social isolation, major life changes, or lack of support networks may trigger or worsen depressive episodes over time.",
      image: "/psychological-factors.webp", // Replace with your actual image path
      link: "/psychological-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
  ];

  const symptoms = {
    core: [
      "Persistent low mood and loss of pleasure",
      "Fatigue, disrupted sleep, or appetite changes",
      "Psychomotor agitation or slowing",
    ],
    cognitiveEmotional: [
      "Feelings of guilt or worthlessness",
      "Difficulty concentrating or making decisions",
      "Thoughts of death or suicide in severe cases",
    ],
    dsm: [
      "Five or more symptoms lasting at least two weeks",
      "Clear functional decline from previous baseline",
      "Not caused by medical conditions or substance use",
    ],
  };

  const solutionsData = [
    {
      title: "Psychotherapeutic Interventions",
      points: [
        "CBT targets negative thinking",
        "IPT strengthens relationship skills",
        "Behavioral activation encourages engagement",
        "MBCT merges mindfulness with emotional regulation",
      ],
      image: "https://plus.unsplash.com/premium_photo-1661277620352-d729b96c33f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UHN5Y2hvdGhlcmFwZXV0aWMlMjBJbnRlcnZlbnRpb25zfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      title: "Pharmacological Approaches",
      points: [
        "SSRIs and SNRIs are first-line options",
        "TCAs and MAOIs are used for treatment-resistant cases",
        "Mood stabilizers or antipsychotics may support severe or complex depression",
      ],
      image: "https://images.unsplash.com/photo-1624638746091-4b7de51514c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVkaWNhbCUyMEludGVydmVudGlvbnN8ZW58MHwwfDB8fHww",
    },
    {
      title: "Support and Coping Strategies",
      points: [
        "Routine sleep, exercise, and social support",
        "Journaling and mindfulness",
        "Family involvement helps stabilize mood and promote recovery",
      ],
      image: "https://images.unsplash.com/photo-1649326609138-09de2b661544?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  

  

  type SymptomCategory = keyof typeof symptoms;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
        What Are Unhappiness and 
        Depressive Disorders?
        </h1>
        <Image
          src="/diseases-banner/unhappyness.webp"
          alt="childhood stress hero image"
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
          src="/diseases-banner/unhappyness.webp"
          alt="childhood stress hero image"
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
        What Are Unhappiness and 
        Depressive Disorders?
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Depressive disorders are chronic mood conditions marked by ongoing sadness, emotional numbness, and loss of interest in daily life. Unlike short-term unhappiness, clinical depression affects emotional, cognitive, physical, and social functioning.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Without intervention, depression can impair relationships, work productivity, and self-care. A timely and personalized treatment plan can significantly reduce symptoms and support recovery.
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
          Causes of Depressive Disorders
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
          Depression develops from an interplay of neurochemical imbalances, personal history, and environmental stressors.
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
          Symptoms of Depressive Disorders
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Diagnosis is based on emotional, physical, and cognitive signs that affect daily functioning.
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
              {tab === "core"
                ? "Core Symptoms"
                : tab === "cognitiveEmotional"
                ? "Cognitive and Emotional Symptoms"
                : "DSM-5 Diagnostic Criteria"}
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
                activeTab === "core"
                  ? "1"
                  : activeTab === "cognitiveEmotional"
                  ? "2"
                  : "3"
              }.webp`}
              alt={`${activeTab} symptoms of stress in children`}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 cursor-pointer rounded-2xl border-black border-1 object-center"
            />
          </div>
        </div>
      </section>

      {/* Cards-2 Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-40 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}
        >
          Solutions for Managing Depressive Disorders
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
          An integrated approach combining therapy, medication, and lifestyle support offers the most effective relief.
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
      <section className="bg-[#FFD266] w-full h-full lg:px-80 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
        {/* <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}>Conclusion</h2>
                <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
                    <p>Anxiety in children is a critical issue that can affect a child&apos;s emotional and psychological growth if not treated. Knowing its causes and symptoms, parents, educators, and caregivers can take decisive action to assist children to overcome their anxiety in the most effective way. With proper intervention,</p>
                    <p>children can be helped to develop resilience, confidence, and coping mechanisms that will carry them through adulthood. Childhood anxiety management needs patience, consistency, and a warm environment, but if managed well, children can enjoy happy and worry-free lives.</p>
                </div> */}
      </section>
    </main>
  );
};

export default Unhappiness;
