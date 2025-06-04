"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const Suicidality = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("emotional");

  const causes = [
    {
      name: "Neurobiological Factors",
      description: "Altered serotonin function, hyperactive stress response systems, and genetic predispositions affecting brain regions that regulate mood and impulse control contribute to vulnerability for suicidal thoughts and behaviors.",
      image: "/genetic-factors.webp",
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Psychological Vulnerabilities",
      description:
        "Severe depression, hopelessness, feelings of perceived burdensomeness, thwarted belongingness, and cognitive factors like problem-solving deficits and black-and-white thinking increase susceptibility to suicidal ideation.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Environmental Influences",
      description:
        "Trauma exposure, childhood adversity, social isolation, acute life stressors, access to lethal means, and exposure to suicide in one's social network or media significantly impact suicide risk, particularly in vulnerable individuals.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
  ];

  const symptoms = {
    emotional: [
      "Persistent feelings of hopelessness and despair",
      "Overwhelming emotional pain that feels unbearable",
      "Sense of worthlessness, guilt, or self-hatred",
      "Feeling like a burden to others or that others would be better off without them"
    ],
    cognitive: [
      "Preoccupation with thoughts of death or suicide",
      "Difficulty seeing alternatives to suicide or solutions to problems",
      "Perception of being trapped with no way out",
      "Narrowed thinking and tunnel vision focused on ending pain"
    ],
    physical: [
      "Changes in sleep patterns (insomnia or hypersomnia)",
      "Significant changes in appetite and weight",
      "Physical manifestations of depression or anxiety",
      "Fatigue and lack of energy"
    ],
    behavioral: [
      "Giving away possessions or putting affairs in order",
      "Increased substance use or other risk-taking behaviors",
      "Withdrawal from friends, family, and normal activities",
      "Researching suicide methods or acquiring means for suicide"
    ]
  };

  const solutionsData = [
    {
      title: "Crisis Interventions",
      points: [
        "Immediate access to crisis support through hotlines and text services",
        "Emergency psychiatric evaluation and hospitalization when necessary",
        "Creating safety plans to manage suicidal urges and remove access to lethal means"
      ],
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Therapeutic Approaches",
      points: [
        "Evidence-based psychotherapies like Cognitive Behavioral Therapy (CBT) and Dialectical Behavior Therapy (DBT)",
        "Collaborative Assessment and Management of Suicidality (CAMS)",
        "Treatment of underlying mental health conditions such as depression or PTSD"
      ],
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Social Support",
      points: [
        "Building strong connections with family, friends, and community",
        "Peer support groups for those who have experienced suicidal thoughts",
        "Developing a support network that understands and responds appropriately to warning signs"
      ],
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Medical Interventions",
      points: [
        "Medication management for underlying psychiatric conditions",
        "Close monitoring during initiation and adjustment of antidepressants",
        "Consideration of treatments like ketamine for acute suicidal crises in appropriate cases"
      ],
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        />
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
        What Are Suicidality and Suicide?
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Suicidality encompasses a spectrum of thoughts and behaviors ranging from fleeting thoughts about death to detailed planning and suicide attempts. It represents intense psychological distress that has reached a critical point where death seems like the only escape from unbearable pain.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Suicide claims nearly 800,000 lives globally each year, with many more attempting suicide. It&apos;s a complex public health issue influenced by multiple biological, psychological, social, and environmental factors, and is often associated with mental health conditions, though not exclusively.
          </p>
        </div>

        <Link
          href="/"
          className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] "
        >
          Know More
        </Link>
      </section>

      {/* Color Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        {/* Title */}
        <h2
          className="text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold mb-8"
          style={{ fontFamily: "Playfair" }}
        >
          Causes of Suicidality
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
        Suicidality emerges from complex interactions between biological vulnerabilities, psychological states, and environmental pressures that overwhelm a person&apos;s coping resources and sense of hope.
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
          Warning Signs of Suicidality
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Suicidal risk presents through various warning signs affecting emotions, thoughts, physical health, and behaviors that may indicate someone is in danger.
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
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Signs
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
          Approaches for Suicide Prevention
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
        Effective suicide prevention requires a comprehensive approach combining immediate crisis intervention, therapeutic support, social connection, and appropriate medical treatment.
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
