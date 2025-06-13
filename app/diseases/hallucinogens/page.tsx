"use client";
import Image from "next/image";
// import Link from "next/link"; 
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const Hallucinogens = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("emotional");

  const causes = [
    {
      name: "Neurobiological Factors",
      description: "Hallucinogens alter brain chemistry by affecting serotonin and glutamate neurotransmitter systems, creating profound changes in perception, mood, and cognition that can lead to psychological dependence.",
      image: "/genetic-factors.webp",
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Psychological Vulnerabilities",
      description:
        "Pre-existing mental health conditions, spiritual seeking, and desire for transcendent experiences can predispose individuals to hallucinogen use and potential psychological dependence.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Environmental Influences",
      description:
        "Peer pressure, cultural contexts that normalize psychedelic use, availability within certain communities, and use in recreational settings contribute to initial and continued hallucinogen consumption.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
  ];

  const symptoms = {
    emotional: [
      "Profound mood alterations ranging from euphoria to terror",
      "Spiritual or mystical experiences that can be emotionally overwhelming",
      "Emotional flashbacks or persisting emotional disturbances after use"
    ],
    cognitive: [
      "Altered perception of reality, including visual and auditory hallucinations",
      "Synesthesia (mixing of sensory experiences)",
      "Distorted sense of time and space",
      "Difficulty distinguishing reality from hallucination during active effects"
    ],
    physical: [
      "Dilated pupils, increased heart rate, and elevated blood pressure",
      "Nausea, dizziness, and loss of coordination",
      "Potential triggering of Hallucinogen Persisting Perception Disorder (HPPD)"
    ],
    behavioral: [
      "Engaging in risky behaviors due to impaired judgment",
      "Social withdrawal or changes in relationships",
      "Continued use despite experiencing adverse psychological effects",
      "Seeking increasingly intense or frequent hallucinogenic experiences"
    ]
  };

  const solutionsData = [
    {
      title: "Medical Interventions",
      points: [
        "Emergency medical treatment for acute adverse reactions or 'bad trips'",
        "Psychiatric evaluation and treatment for hallucinogen-induced disorders",
        "Medication to manage persistent psychosis or HPPD when necessary"
      ],
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Psychological Support",
      points: [
        "Therapy to process and integrate challenging psychedelic experiences",
        "Cognitive-behavioral approaches for managing flashbacks or HPPD",
        "Support for underlying mental health conditions that may be exacerbated by use"
      ],
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Harm Reduction",
      points: [
        "Education about proper dosing, drug interactions, and safer contexts for use",
        "Ensuring trusted companions ('trip sitters') when using hallucinogens",
        "Creating safe physical environments to minimize accident risks"
      ],
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Recovery Support",
      points: [
        "Substance use counseling for those seeking to stop hallucinogen use",
        "Peer support groups specific to psychedelic experiences",
        "Integration of spiritual or psychological insights in a healthy context"
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
        Hallucinogens and LSD
        </h1>
        <Image
          src="/diseases-banner/hallucinogens.webp"
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
          src="/diseases-banner/hallucinogens.webp"
          alt="coffee use hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full z-0"
        />
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
        Hallucinogens and LSD
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
       
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Hallucinogens are a diverse group of substances that alter perception, mood, and cognitive processes by disrupting communication between brain chemical systems throughout the nervous system, causing significant changes in sensory experiences.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          While some cultures have used hallucinogens in traditional contexts for centuries, recreational use carries significant risks including adverse psychological reactions, persisting perception disorders, and potential triggering of underlying mental health conditions.
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
          Causes of Hallucinogen Use
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
        Multiple factors influence hallucinogen use, including neurobiological mechanisms, psychological motivations, and sociocultural environments that shape patterns of consumption.
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
      <section className="bg-white w-full h-full lg:px-30 px-10 lg:pt-30 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Effects of Hallucinogens
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Hallucinogens produce profound alterations across multiple domains, causing significant changes in perception, emotion, cognition, and behavior.
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
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Effects
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
              alt={`${activeTab} effects of hallucinogens`}
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
          Managing Hallucinogen-Related Issues
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
        Addressing hallucinogen use requires a multifaceted approach combining medical interventions, psychological support, harm reduction strategies, and appropriate recovery resources.
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

export default Hallucinogens;
