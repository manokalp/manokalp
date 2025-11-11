"use client";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const StressinChildren = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("positive");

  const causes = [
    {
      name: "Genetic and Neurobiological Factors",
      description:
        "Family history, neurotransmitter imbalances—particularly dopamine and glutamate—and structural changes in the brain increase vulnerability to schizophrenia and psychosis.",
      image: "/genetic-factors.webp",
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]",
      textColor: "text-white",
    },
    {
      name: "Environmental and Psychological Factors",
      description:
        "Early trauma, psychoactive substance use, urban stress, and unstable family environments are known to trigger or exacerbate symptoms in predisposed individuals.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]",
      textColor: "text-black",
    },
  ];

  const symptoms = {
    positive: [
      "Hallucinations: Often auditory, involving voices",
      "Delusions: Fixed false beliefs, such as paranoia or grandiosity",
      "Disorganized Speech: Incoherent or tangential communication",
      "Catatonic Behavior: Unusual postures or complete unresponsiveness"
    ],
    negative: [
      "Affective Flattening: Limited emotional expression",
      "Avolition: Decreased motivation for daily tasks",
      "Anhedonia: Reduced ability to experience pleasure",
      "Social Withdrawal: Avoidance of social interaction"
    ],
    cognitive: [
      "Impaired Attention: Difficulty concentrating or sustaining focus",
      "Poor Working Memory: Challenges in short-term retention",
      "Executive Dysfunction: Difficulty planning or making decisions"
    ]
  };

  const solutionsData = [
    {
      title: "Psychotherapeutic Approaches",
      description:
        "CBT helps reduce distress and reframe irrational thoughts; family therapy builds understanding; social skills training and rehabilitation enhance functional independence and quality of life.",
      image: "/diseases/forgetfulnessv2/2.webp",
    },
    {
      title: "Pharmacological Treatments",
      description:
        "First-generation antipsychotics help reduce acute symptoms but may cause motor side effects; second-generation medications offer better tolerance but may affect metabolism or weight.",
      image: "/diseases/forgetfulnessv2/1.webp",
    },
    {
      title: "Lifestyle and Social Support",
      description:
        "Structured routines, vocational rehab, peer support, and wellness habits like nutrition and exercise promote stability, reduce relapse, and improve overall functioning.",
      image: "/diseases/forgetfulnessv2/3.webp",
    },
    {
      title: "Complementary Interventions",
      description:
        "Community services, early psychosis programs, case management, and supported housing offer continuity of care and assist with long-term reintegration.",
      image: "/diseases/relationship/t2.webp",
    },
  ];

  // const typesData = [
  //   {
  //     title: "Bipolar I",
  //     description:
  //       "At least one full manic episode, often with depressive episodes",
  //     image: "/diseases/mania/t1.webp",
  //   },
  //   {
  //     title: "Bipolar II",
  //     description: "Hypomania with recurrent major depression",
  //     image: "/diseases/mania/t2.webp",
  //   },
  //   {
  //     title: "Cyclothymia",
  //     description: "Ongoing mood fluctuations with milder symptoms",
  //     image: "/diseases/mania/t3.webp",
  //   },
  //   {
  //     title: "BP-NOS",
  //     description:
  //       "Atypical patterns that don&apos;t meet full criteria but cause impairment",
  //     image: "/diseases/mania/t4.webp",
  //   },
  // ];

  type SymptomCategory = keyof typeof symptoms;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
           What Is Schizophrenia?
        </h1>
        <Image
          src="/diseases-banner/schizophrenia.webp"
          alt="hero image"
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
          src="/diseases-banner/schizophrenia.webp"
          alt="hero image"
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
           What Is Schizophrenia?
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Schizophrenia is a chronic psychiatric disorder that affects how individuals think, perceive, and interact with the world. It often includes episodes of psychosis, marked by hallucinations, delusions, and disorganized thinking. Affecting roughly 1% of the global population, schizophrenia significantly disrupts emotional expression, cognition, and daily functioning.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            With early intervention and a comprehensive treatment plan, individuals can experience long-term improvement and better integration into daily life.
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
          Causes of Schizophrenia and Psychosis
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
          The disorder emerges from a complex mix of genetic, neurochemical, and environmental factors.
        </p>

        {/* Causes Grid */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 max-w-3xl mx-auto">
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
          Symptoms of Schizophrenia
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Symptoms are divided into three primary categories—positive, negative, and cognitive—and vary in severity and presentation.
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
              src={`/diseases/schizophrenia/${
                activeTab === "positive"
                  ? "1"
                  : activeTab === "negative"
                  ? "2"
                  : "3"
              }.webp`}
              alt={`${activeTab} symptoms illustration`}
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
          Solutions for Managing Schizophrenia and Psychosis
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
          A long-term treatment approach involving medication, therapy, and community support is essential for recovery.
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
                <p className="text-sm">{solution.description}</p>
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

export default StressinChildren;
