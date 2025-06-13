"use client";
import Image from "next/image";
// import Link from "next/link"; 
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const Unhappiness = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("emotional");

  const causes = [
    {
      name: "Emotional and Psychological Factors",
      description:"Low emotional awareness, self-criticism, unrealistic expectations, and limited problem-solving skills can heighten stress responses.",
      image: "/genetic-factors.webp", // Replace with your actual image path
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Family and Environmental Factors",
      description:
        " Family conflict, parental separation, academic pressure, bullying, and exposure to traumatic news can overwhelm a child's coping ability.",
      image: "/psychological-factors.webp", // Replace with your actual image path
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Social and Peer Influences",
      description:
        " Friendship conflicts, peer rejection, social media pressure, and performance competition contribute to childhood stress and anxiety.",
      image: "/psychological-factors.webp", // Replace with your actual image path
      link: "/psychological-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
  ];

  const symptoms = {
    emotional: [
      "Persistent sadness or emptiness",
      "Feelings of hopelessness or pessimism",
      "Irritability, frustration, or restlessness"
    ],
    cognitive: [
      "Compulsive substance use despite consequences",
      "Loss of interest in hobbies or responsibilities",
      "Secretive behavior around substance use",
      "Risk-taking or dangerous behaviors"
    ],
    physical: [
      "Fatigue and decreased energy",
      "Insomnia or oversleeping",
      "Changes in appetite or unplanned weight changes"
    ],
    behavioral: [
      "Loss of interest in previously enjoyed activities",
      "Moving or talking more slowly than usual",
      "Social withdrawal and relationship difficulties"
    ]
  };

  const solutionsData = [
    {
      title: "Medical Interventions",
      points: [
        "Detoxification to safely manage withdrawal symptoms",
        "Medication-Assisted Treatment (MAT) with methadone, buprenorphine, or naltrexone",
        "Regular health monitoring to address physical complications"
      ],
      image: "https://images.unsplash.com/photo-1624638746091-4b7de51514c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVkaWNhbCUyMEludGVydmVudGlvbnN8ZW58MHwwfDB8fHww",
    },
    {
      title: "Psychotherapeutic Interventions",
      points: [
        "Cognitive Behavioral Therapy (CBT) to reframe negative thoughts and develop coping skills",
        "Dialectical Behavior Therapy (DBT) for emotional regulation",
        "Family Counseling to repair relationships and build support systems"
      ],
      image: "https://plus.unsplash.com/premium_photo-1661277620352-d729b96c33f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UHN5Y2hvdGhlcmFwZXV0aWMlMjBJbnRlcnZlbnRpb25zfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      title: "Relapse Prevention Strategies",
      points: [
        "Identification of personal triggers and development of avoidance strategies",
        "Mindfulness and meditation techniques to manage cravings",
        "Regular attendance at peer support groups for accountability"
      ],
      image: "https://images.unsplash.com/photo-1714976694541-98e82692d0a6?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Complementary Approaches",
      points: [
        "Nutritional guidance to restore physical health and stabilize mood",
        "Exercise programs to reduce stress and rebuild physical strength",
        "Vocational training and life skills development for social reintegration"
      ],
      image: "https://images.unsplash.com/photo-1649326609138-09de2b661544?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
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
          Addiction, also known as substance use disorder, is a chronic medical condition marked by compulsive substance use despite harmful consequences. It affects brain chemistry, behavior, physical health, and emotional well-being.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Addiction is not a matter of willpower—it is a complex illness requiring comprehensive intervention, including medical, psychological, and social support.
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
          Causes of Addiction
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
          Schizophrenia develops from a complex interplay of genetic, neurobiological, and environmental factors.
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
          Symptoms of Stress in Children
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Childhood stress manifests through emotional, cognitive, physical, and behavioral changes that vary by developmental stage.
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
          Solutions for Managing Addiction
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
          Effective addiction treatment requires a comprehensive approach combining medical, psychological, and social support strategies.
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
