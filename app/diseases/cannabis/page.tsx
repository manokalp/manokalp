"use client";
import Image from "next/image";
// import Link from "next/link";     
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const Cannabis = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("behavioral");

  const causes = [
    {
      name: "Biological Factors",
      description:"Genetic predisposition, altered endocannabinoid receptor function, and individual differences in THC sensitivity increase addiction risk.",
      image: "/genetic-factors.webp", // Replace with your actual image path
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Psychological and Emotional Factors",
      description:
        "Cannabis may be used to manage stress, anxiety, depression, or insomnia, creating a cycle of dependency.",
      image: "/psychological-factors.webp", // Replace with your actual image path
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Environmental and Social Factors",
      description:
        "Peer influence, social normalization, cultural acceptance, and easy availability contribute to initiation and continued use.",
      image: "/psychological-factors.webp", // Replace with your actual image path
      link: "/psychological-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
  ];

  const symptoms = {
    behavioral: [
      "Frequent or daily use despite negative consequences",
      "Difficulty controlling use or quitting",
      "Prioritizing cannabis over responsibilities or hobbies"
    ],
    emotional: [
      "Irritability, anxiety, or restlessness when not using",
      "Mood swings or emotional numbness",
      "Dependence on cannabis for relaxation or stress relief"
    ],
    cognitive: [
      "Poor concentration, impaired memory, and reduced decision-making ability",
      "Obsessive thoughts about obtaining or using cannabis",
      "Denial or minimization of the problem"
    ],
    physical: [
      "Increased heart rate, dry mouth, and bloodshot eyes",
      "Sleep disturbances or vivid dreams upon cessation",
      "Reduced physical energy or motivation"
    ]
  };

  const solutionsData = [
    {
      title: "Medical Interventions",
      points: [
        "Gradual tapering to minimize withdrawal symptoms",
        "Symptomatic treatment for anxiety or sleep disturbances",
        "Regular health monitoring for respiratory or cognitive effects"
      ],
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Psychotherapeutic Interventions",
      points: [
        "Cognitive Behavioral Therapy (CBT) to identify and challenge cannabis-related thought patterns",
        "Motivational Enhancement Therapy (MET) to strengthen commitment to change",
        "Family Counseling to improve communication and support"
      ],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Behavioral and Lifestyle Strategies",
      points: [
        "Establishing a structured daily routine to prevent idle use",
        "Avoiding triggers and high-risk situations where cannabis is used",
        "Engaging in physical exercise to boost mood and reduce cravings"
      ],
      image: "https://images.unsplash.com/photo-1600189528280-a793b6b931d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVoYXZpb3JhbCUyMGFuZCUyMExpZmVzdHlsZSUyMFN0cmF0ZWdpZXN8ZW58MHwwfDB8fHww",
    },
    {
      title: "Complementary Interventions",
      points: [
        "Mindfulness meditation, yoga, or guided relaxation to reduce stress",
        "Nutritional support to restore physical health and energy",
        "Peer support groups for shared learning and encouragement"
      ],
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2799&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];
  

  

  type SymptomCategory = keyof typeof symptoms;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
        Cannabis and Cannabinoids Use
        </h1>
        <Image
          src="/diseases-banner/cannabis.webp"
          alt="cannabis use hero image"
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
          src="/diseases-banner/cannabis.webp"
          alt="cannabis use hero image"
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
        Cannabis and Cannabinoids Use
        </h1>
      </div>

      {/* Cannabis and Cannabinoids Use Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
       
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Cannabis refers to the plant species Cannabis sativa, indica, and ruderalis, known for containing psychoactive compounds—primarily tetrahydrocannabinol (THC) and cannabidiol (CBD). While CBD is non-intoxicating and used for therapeutic purposes, THC is responsible for the mind-altering effects of cannabis.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Cannabis is one of the most widely used recreational substances globally, available in various forms and used for both medicinal and non-medical purposes.
          </p>
        </div>

        
      </section>

      {/* Color Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-30 py-10 text-center">
        {/* Title */}
        <h2
          className="text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold mb-8"
          style={{ fontFamily: "Playfair" }}
        >
          Causes of Cannabis Misuse and Dependence
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
        Cannabis dependence can develop due to biological sensitivity, psychological coping mechanisms, and environmental exposure.
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
          Symptoms of Cannabis Dependence
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Dependence on cannabis can manifest through behavioral, cognitive, and physical changes.
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
              alt={`${activeTab} symptoms of cannabis dependence`}
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
          Solutions for Managing Cannabis Dependence
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
        Effective treatment of cannabis dependence combines medical care, psychological support, and behavioral strategies.
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
            <p className="lg:text-[1.2vw] text-[3.5vw]">Recovery from alcohol addiction is possible with appropriate treatment. The journey requires patience, persistence, and ongoing support. Many individuals achieve lasting sobriety through comprehensive treatment plans tailored to their unique needs and circumstances.</p>
            <p className="lg:text-[1.2vw] text-[3.5vw]">While relapse can occur as part of the recovery process, it doesn't signify failure but rather indicates a need for treatment adjustment. With proper medical care, therapeutic support, and lifestyle modifications, individuals can rebuild their lives and maintain long-term sobriety.</p>
        </div>
      </section> */}
    </main>
  );
};

export default Cannabis;
