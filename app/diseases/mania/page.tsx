"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const Mania = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("manic");

  const causes = [
    {
      name: "Genetic and Biological Influences",
      description:
        "A family history of mood disorders, neurotransmitter imbalances, structural brain differences, and hormonal irregularities contribute to the instability seen in bipolar mood cycling.",
      image: "/genetic-factors.webp", // Replace with your actual image path
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Psychological and Emotional Factors",
      description:
        "Unresolved trauma, chronic stress, impulsive temperament, and disrupted sleep cycles can trigger or worsen manic and depressive episodes.",
      image: "/psychological-factors.webp", // Replace with your actual image path
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Environmental and Social Contributors",
      description:
        "Childhood adversity, substance misuse, and lack of social support may increase vulnerability and disrupt mood regulation over time.",
      image: "/genetic-factors.webp", // Replace with your actual image path
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
        "CBT restructures impulsive thinking patterns, DBT builds emotional regulation, and anger management teaches control over triggers and reactive behaviors.",
      image: "/diseases/forgetfulnessv2/2.webp",
    },
    {
      title: "Pharmacological Treatments",
      description:
        "Mood stabilizers, antipsychotics, SSRIs, and beta-blockers may be used to reduce emotional volatility and physical symptoms of aggression.",
      image: "/diseases/forgetfulnessv2/1.webp",
    },
    {
      title: "Integrated Behavioral Programs",
      description:
        "Hospitalization for severe episodes, community mental health services, dual-diagnosis care for addiction, and vocational support assist with stability and reintegration.",
      image: "/diseases/forgetfulnessv2/3.webp",
    },
    {
      title: "Complementary Interventions",
      description:
        "Early mood tracking, lifestyle regulation, school-based mental health education, and stigma reduction programs enhance coping, understanding, and prevention of relapses.",
      image: "/diseases/forgetfulnessv2/4.webp",
    },
  ];

  const typesData = [
    {
      title: "Bipolar I",
      description:
        "At least one full manic episode, often with depressive episodes",
      image: "/diseases/mania/t1.webp",
    },
    {
      title: "Bipolar II",
      description:
        "Hypomania with recurrent major depression",
      image: "/diseases/mania/t2.webp",
    },
    {
      title: "Cyclothymia",
      description:
        "Ongoing mood fluctuations with milder symptoms",
      image: "/diseases/mania/t3.webp",
    },
    {
      title: "BP-NOS",
      description:
        "Atypical patterns that don&apos;t meet full criteria but cause impairment",
      image: "/diseases/mania/t4.webp",
    },
  ];


  type SymptomCategory = keyof typeof symptoms;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
          What Are Mania and Bipolar Disorder?
        </h1>
        <Image
          src="/diseases-banner/mania.webp"
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
          src="/diseases-banner/mania.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full     z-0"
        />
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
          What Are Mania and Bipolar Disorder?
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
          <h2 className="lg:text-[4.0vw] text-[8.5vw] font-bold font-[playfull]">
            
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Mania and Bipolar Disorder are serious mood disorders characterized
            by extreme shifts in mood, energy, and behavior. Bipolar Disorder
            involves alternating episodes of mania or hypomania and depression,
            each affecting judgment, functioning, and interpersonal
            relationships.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Mania often includes impulsivity, heightened self-esteem, and
            reduced need for sleep, while depressive episodes bring emotional
            withdrawal and fatigue. Early diagnosis and long-term treatment are
            essential for stabilizing symptoms and maintaining functional
            well-being.
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
          Causes of Mania and Bipolar Disorder
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
          These conditions result from a complex interaction of genetic
          predisposition, brain chemistry, and external stressors.
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
              src={`/diseases/mania/${
                activeTab === "manic"
                  ? "1"
                  : activeTab === "depressive"
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

      {/* Cards-1 Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-30 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] mb-10 font-semibold ${playfair.className}`}
        >
         Types of Bipolar Disorders:
        </h2>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {typesData.map((solution, index) => (
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

      {/* Cards-2 Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-30 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}
        >
          Solutions for Managing Bipolar Disorder
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
          Long-term care combines medication, therapy, and psychosocial support
          to regulate mood and improve quality of life.
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

export default Mania;
