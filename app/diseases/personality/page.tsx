"use client";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const Personality = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("manic");
  const [activeCluster, setActiveCluster] = useState<number>(0); // Track active cluster tab

  const causes = [
    {
      name: "Biological and Genetic Influences",
      description:
        "Family history, brain structure differences, and neurotransmitter imbalances involving serotonin or dopamine may predispose individuals to emotional instability, impulsivity, or distorted perceptions.",
      image: "/personality.webp",
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Psychological and Emotional Factors",
      description:
        "Negative thought patterns, social withdrawal, and coexisting disorders like anxiety, depression, or substance use often worsen emotional volatility and reinforce maladaptive coping styles.",
      image: "/personality.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Environmental and Social Contributors",
      description:
        "Childhood abuse, neglect, or instability—particularly in early attachment relationships—can lead to chronic emotional dysregulation and difficulty forming healthy interpersonal bonds.",
      image: "/genetic-factors.webp",
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
  ];

  const symptoms = {
    manic: [
      "Excessive energy, restlessness, or euphoria",
      "Reduced need for sleep",
      "Racing thoughts and pressured speech",
      "Impulsivity and poor judgment",
      "Grandiosity or inflated self-image",
      "Risk-taking behaviors",
    ],
    depressive: [
      "Low mood and loss of interest",
      "Sleep and appetite disturbances",
      "Fatigue and low motivation",
      "Feelings of worthlessness or guilt",
      "Impaired concentration",
      "Suicidal thoughts or behaviors",
    ],
  };

  const solutionsData = [
    {
      title: "Psychotherapeutic Approaches",
      description:
        "CBT addresses harmful thought patterns; DBT improves emotion regulation; MBT enhances self-awareness; schema therapy restructures core beliefs; psychodynamic therapy explores developmental origins.",
      image: "/diseases/forgetfulnessv2/2.webp",
    },
    {
      title: "Pharmacological Treatments",
      description:
        "Mood stabilizers help with emotional reactivity; SSRIs address coexisting anxiety or depression; antipsychotics may be used for severe mood or perceptual disturbances.",
      image: "/diseases/forgetfulnessv2/1.webp",
    },
    {
      title: "Integrated Support Programs",
      description:
        "Therapeutic communities, vocational training, substance abuse treatment, and anger management programs support long-term stabilization and reintegration.",
      image: "/diseases/forgetfulnessv2/3.webp",
    },
    {
      title: "Complementary Interventions",
      description:
        "Early screening, school-based emotional wellness programs, caregiver education, and public awareness reduce chronicity and improve long-term outcomes.",
      image: "/diseases/forgetfulnessv2/4.webp",
    },
  ];

  const typesData = [
    {
      title: "Cluster A - Odd Or Eccentric Behavior",
      disorders: [
        "Paranoid Personality Disorder: Distrust and suspicion of others",
        "Schizoid Personality Disorder: Emotional detachment and preference for solitude",
        "Schizotypal Personality Disorder: Eccentric beliefs and social anxiety"
      ],
      image: "/diseases/personality/1.webp",
    },
    {
      title: "Cluster B - Dramatic, Emotional, Or Erratic Behavior",
      disorders: [
        "Antisocial Personality Disorder: Disregard for others and manipulative behavior",
        "Borderline Personality Disorder: Fear of abandonment and emotional instability",
        "Histrionic Personality Disorder: Excessive emotionality and need for attention",
        "Narcissistic Personality Disorder: Grandiosity and lack of empathy"
      ],
      image: "/diseases/personality/2.webp",
    },
    {
      title: "Cluster C - Anxious Or Fearful Behavior",
      disorders: [
        "Avoidant Personality Disorder: Fear of rejection and extreme social inhibition",
        "Dependent Personality Disorder: Excessive reliance on others for decision-making",
        "Obsessive-Compulsive Personality Disorder (OCPD): Perfectionism and control"
      ],
      image: "/diseases/personality/3.webp",
    }
  ];

  type SymptomCategory = keyof typeof symptoms;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
          What Are Personality Disorders?
        </h1>
        <Image
          src="/diseases-banner/personality.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0"
        />
      </div>

      {/* Hero Mobile  */}
      <div className="w-full lg:hidden block text-center ">
        <Image
          src="/diseases-banner/personality.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full     z-0"
        />
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
          What Are Personality Disorders?
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Personality disorders are long-standing mental health conditions
            characterized by rigid patterns of thinking, feeling, and behavior
            that deviate from cultural expectations. These patterns often impair
            relationships, emotional regulation, work performance, and personal
            identity.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
             Typically developing in adolescence or early adulthood, personality
            disorders are persistent and affect multiple areas of life.
            Effective treatment involves a blend of psychotherapy, medication,
            and structured support.
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
          Causes of Personality Disorders
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
          Personality disorders develop from complex interactions between biological vulnerabilities,
          psychological factors, and environmental influences.
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
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Symptoms of Mania and Bipolar Disorder
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Bipolar Disorder presents with alternating mood states that
          significantly impact cognition, emotion, and behavior.
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
              src={`/diseases/personality/${
                activeTab === "manic"
                  ? "4"
                  : activeTab === "depressive"
                  ? "5"
                  : "6"
              }.webp`}
              alt={`${activeTab} symptoms illustration`}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 cursor-pointer rounded-2xl border-black border-1 object-center"
            />
          </div>
        </div>
      </section>

      {/* Cards-1 Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:pt-10 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] mb-4 font-semibold ${playfair.className}`}
        >
          Types of Personality Disorders
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          The DSM-5 classifies personality disorders into three clusters based on behavioral patterns:
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6 border-b border-gray-200">
          <div className="flex">
            {typesData.map((cluster, index) => (
              <button 
                key={index}
                onClick={() => setActiveCluster(index)}
                className={`px-4 py-2 font-medium ${
                  activeCluster === index
                    ? "text-[#0E7EA0] border-b-2 border-[#0E7EA0]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {cluster.title}
              </button>
            ))}
          </div>
        </div>
        
        {/* Active Cluster Content */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="flex items-center  overflow-hidden">
            <div className="w-1/2 ">
              <ul className="space-y-5 text-left text-black ">
                {typesData[activeCluster].disorders.map((disorder, index) => (
                  <li key={index} className="border-b border-gray-300 pb-3 text-sm">
                    {disorder}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-1/2 h-80 relative bg-white">
              <Image
                src={typesData[activeCluster].image}
                alt={typesData[activeCluster].title}
                layout="fill"
                objectFit="contain"
                className="p-4"
              />
            </div>
          </div>
        </div>
      </section>

{/* Cards-2 Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:pb-20  py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}
        >
          Solutions for Managing Personality Disorders
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
          Management requires individualized therapy, medications, and structured psychosocial rehabilitation.
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

export default Personality;
