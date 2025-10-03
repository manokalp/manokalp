"use client";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const NicotineCigarette = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("behavioral");

  const causes = [
    {
      name: "Biological Factors",
      description: "Genetic predisposition to addiction. Rapid dopamine release in the brain's reward system, creating a strong sense of pleasure. Withdrawal symptoms such as irritability, anxiety, and restlessness encourage continued use.",
      image: "/genetic-factors.webp",
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Psychological and Emotional Factors",
      description:
        "Smoking as a coping mechanism for stress, anxiety, or boredom. Social cues and peer influence, especially during adolescence. Habitual associations (smoking with coffee, after meals, or during breaks).",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Environmental and Social Factors",
      description:
        "Easy availability of cigarettes and other tobacco products. Cultural normalization of smoking in social settings. Family history of tobacco use, creating intergenerational habits.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
  ];

  const symptoms = {
    behavioral: [
      "Inability to reduce or quit smoking despite multiple attempts",
      "Smoking soon after waking up or during stressful situations",
      "Neglecting responsibilities in favor of smoking breaks"
    ],
    emotional: [
      "Irritability, anxiety, or restlessness when unable to smoke",
      "Emotional reliance on nicotine for mood regulation",
      "Feelings of guilt or shame after smoking"
    ],
    cognitive: [
      "Persistent thoughts about smoking or craving tobacco",
      "Difficulty concentrating without nicotine",
      "Justifying or rationalizing continued smoking despite health risks"
    ],
    physical: [
      "Increased heart rate, elevated blood pressure, and dizziness",
      "Persistent cough, sore throat, or respiratory discomfort",
      "Withdrawal symptoms, including headaches, nausea, and fatigue when quitting"
    ]
  };

  const solutionsData = [
    {
      title: "Medical Interventions",
      points: [
        "Nicotine Replacement Therapy (NRT): Nicotine patches, gum, lozenges, or inhalers to reduce withdrawal symptoms",
        "Prescription Medications: Varenicline (Chantix) and bupropion (Zyban) for reducing cravings",
        "Regular health monitoring for respiratory, cardiovascular, and oral health"
      ],
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Psychotherapeutic Interventions",
      points: [
        "Cognitive Behavioral Therapy (CBT) to identify triggers and replace smoking habits",
        "Motivational Interviewing (MI) to strengthen commitment to quitting",
        "Mindfulness-Based Stress Reduction (MBSR) for managing stress without smoking"
      ],
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Behavioral and Lifestyle Strategies",
      points: [
        "Setting a quit date and gradually reducing cigarette intake",
        "Avoiding triggers, such as coffee breaks or social gatherings where smoking is common",
        "Engaging in regular physical exercise to reduce cravings and improve mood",
        "Drinking water and chewing gum to manage oral fixation"
      ],
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Complementary Interventions",
      points: [
        "Peer support groups for shared experiences and accountability",
        "Family education to create a smoke-free environment",
        "Digital apps or online platforms for quit tracking and motivation"
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
        Nicotine & Cigarette Smoking
        </h1>
        <Image
          src="/diseases-banner/nicotine-cigarette.webp"
          alt="cigarette smoking hero image"
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
          src="/diseases-banner/nicotine-cigarette.webp"
          alt="cigarette smoking hero image"
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
        Nicotine & Cigarette Smoking
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
       
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Nicotine dependence, primarily through cigarette smoking, is one of the most widespread forms of addiction globally. Despite its known health risks, nicotine use remains socially accepted in many cultures, making it one of the most difficult addictions to overcome.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Nicotine is a powerful stimulant that rapidly affects the brain, creating a cycle of addiction that can lead to severe physical, psychological, and social consequences.
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
          Causes of Nicotine Dependence
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
        Nicotine dependence is driven by a combination of biological, psychological, and social factors.
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
          Signs of Nicotine Dependence
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Nicotine dependence can be identified through a range of behavioral, emotional, cognitive, and physical symptoms.
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
                activeTab === "behavioral"
                  ? "1"
                  : activeTab === "emotional"
                  ? "2"
                  : activeTab === "cognitive"
                  ? "3"
                  : "4"
              }.webp`}
              alt={`${activeTab} symptoms of nicotine dependence`}
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
          Solutions for Managing Nicotine Dependence
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
        Overcoming nicotine dependence requires a combination of medical, psychological, and behavioral strategies.
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
            <p className="lg:text-[1.2vw] text-[3.5vw]">Recovery from nicotine addiction is possible with appropriate treatment. The journey requires patience, persistence, and ongoing support. Many individuals achieve lasting freedom from smoking through comprehensive cessation plans tailored to their unique needs and circumstances.</p>
            <p className="lg:text-[1.2vw] text-[3.5vw]">While relapse can occur as part of the recovery process, it doesn't signify failure but rather indicates a need for approach adjustment. With proper medical support, behavioral strategies, and lifestyle modifications, individuals can regain their health and maintain long-term abstinence from smoking.</p>
        </div>
      </section> */}
    </main>
  );
};

export default NicotineCigarette;
