"use client";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const Coffee = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("emotional");

  const causes = [
    {
      name: "Neurobiological Factors",
      description: "Caffeine blocks adenosine receptors in the brain, preventing the natural feeling of tiredness and creating a dependency on its stimulating effects over time.",
      image: "/genetic-factors.webp",
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Psychological Vulnerabilities",
      description:
        "Many individuals use coffee to boost productivity, cope with stress, or manage mood issues, creating a psychological reliance on caffeine to function optimally.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Environmental Influences",
      description:
        "Social coffee culture, workplace norms that normalize high caffeine consumption, and easy accessibility contribute to habitual use and potential dependence.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
  ];

  const symptoms = {
    emotional: [
      "Irritability and mood swings when caffeine consumption is delayed",
      "Anxiety and nervousness with high consumption",
      "Feelings of psychological dependence on caffeine to function normally"
    ],
    cognitive: [
      "Difficulty concentrating without regular caffeine intake",
      "Mental fog and reduced alertness during withdrawal",
      "Preoccupation with obtaining coffee/caffeine"
    ],
    physical: [
      "Headaches and fatigue when caffeine is not consumed",
      "Sleep disturbances, insomnia, and altered sleep patterns",
      "Digestive issues, increased heart rate, and potential cardiovascular effects"
    ],
    behavioral: [
      "Regular consumption despite experiencing negative health consequences",
      "Increasing caffeine amounts over time due to tolerance",
      "Unsuccessful attempts to cut down on caffeine intake",
      "Disruption to daily schedule to accommodate coffee breaks"
    ]
  };

  const solutionsData = [
    {
      title: "Medical Interventions",
      points: [
        "Slowly decreasing daily caffeine intake to minimize withdrawal symptoms",
        "Substituting with lower-caffeine alternatives like herbal tea or decaf coffee",
        "Tracking consumption to create awareness of intake patterns"
      ],
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lifestyle Modifications",
      points: [
        "Establishing healthy sleep hygiene to reduce reliance on caffeine",
        "Regular physical exercise to naturally boost energy levels",
        "Stress management techniques like meditation to reduce caffeine cravings"
      ],
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Supportive Strategies",
      points: [
        "Hydration with water to help manage withdrawal symptoms",
        "Nutritional approaches to stabilize energy levels naturally",
        "Peer support from others reducing caffeine dependency"
      ],
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Professional Support",
      points: [
        "Consultation with healthcare providers about caffeine's impact on specific health conditions",
        "Behavioral therapy for addressing habitual consumption patterns",
        "Development of personalized caffeine reduction plans"
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
        Coffee and Caffeine Dependence
        </h1>
        <Image
          src="/diseases-banner/coffee.webp"
          alt="coffee use hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full  lg:mt-[-16vw] mt-[-25vw] z-0"
        />
      </div>

      {/* Hero Mobile  */}
      <div className="w-full lg:hidden block text-center ">
        <Image
          src="/diseases-banner/coffee.webp"
          alt="coffee use hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full z-0"
        />
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
        Coffee and Caffeine Dependence
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
       
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Caffeine is a widely consumed central nervous system stimulant found in coffee, tea, energy drinks, and certain foods. It produces alertness by blocking adenosine receptors, potentially leading to dependence with regular consumption.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          While moderate coffee consumption is generally considered safe for many adults, excessive caffeine intake can lead to dependence, sleep disturbances, and various health impacts that may affect daily functioning and wellbeing.
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
          Causes of Caffeine Dependence
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
        Multiple factors influence the development of caffeine dependence, including neurobiological mechanisms, psychological vulnerabilities, and environmental contexts.
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
          Symptoms of Caffeine Dependence
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Caffeine affects users through various symptom categories that may indicate regular use, problematic use, or dependence.
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
              alt={`${activeTab} symptoms of caffeine dependence`}
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
          Solutions for Managing Caffeine Dependence
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
        Effective management of caffeine dependence involves a comprehensive approach combining gradual reduction, lifestyle changes, and supportive strategies.
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

export default Coffee;
