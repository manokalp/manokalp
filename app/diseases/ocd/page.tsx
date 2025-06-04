"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const OCD = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("obsessions");

  const causes = [
    {
      name: "Biological and Genetic Influences",
      description:
        "Genetic predisposition, serotonin imbalance, and irregular brain activity in regions like the orbitofrontal cortex or basal ganglia increase vulnerability to obsessive and compulsive behavior patterns.",
      image: "/genetic-factors.webp", // Replace with your actual image path
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Psychological and Emotional Factors",
      description:
        "Perfectionism, fear-driven thinking, and childhood trauma may fuel obsessive thoughts and compulsive actions, particularly in those with high emotional sensitivity.",
      image: "/psychological-factors.webp", // Replace with your actual image path
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Environmental and Social Contributors",
      description:
        "Stressful events, controlling environments, or certain infections in children (PANDAS) may initiate or intensify obsessive-compulsive symptoms.",
      image: "/genetic-factors.webp", // Replace with your actual image path
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
  ];

  const symptoms = {
    obsessions: [
      "Fear of contamination or illness",
      "Intrusive aggressive or taboo thoughts",
      "Fixation on symmetry or exactness",
      "Unwanted sexual or religious content"
    ],
    compulsions: [
      "Excessive cleaning or handwashing",
      "Repeated checking of doors or appliances",
      "Counting or tapping rituals",
      "Avoidance of perceived triggers"
    ],
    DSM: [
      "Presence of time-consuming obsessions or compulsions",
      "Significant distress or interference with daily functioning",
      "Not attributable to other disorders or substance use"
    ],
  };

  const solutionsData = [
    {
      title: "Psychotherapeutic Approaches",
      description:
        "CBT corrects distorted beliefs; ERP exposes individuals to feared thoughts without enabling rituals; ACT promotes acceptance; mindfulness improves focus and reduces compulsive reactivity.",
      image: "/diseases/forgetfulnessv2/2.webp",
    },
    {
      title: "Pharmacological Treatments",
      description:
        "SSRIs like fluoxetine and sertraline are first-line medications; clomipramine may be added in resistant cases; antipsychotics are used for augmentation in treatment-resistant OCD.",
      image: "/diseases/forgetfulnessv2/1.webp",
    },
    {
      title: "Integrated Support Programs",
      description:
        "Intensive outpatient therapy, residential care for severe cases, support groups, and occupational rehabilitation help reinforce treatment and reduce isolation.",
      image: "/diseases/forgetfulnessv2/3.webp",
    },
    {
      title: "Complementary Interventions",
      description:
        "Early behavior tracking, parent training, school awareness programs, and stigma-reduction campaigns improve understanding, early help-seeking, and long-term prognosis.",
      image: "/diseases/forgetfulnessv2/4.webp",
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
           What Is Obsessive-Compulsive Disorder (OCD)?
        </h1>
        <Image
          src="/ocd.webp"
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
          src="/ocd.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full     z-0"
        />
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
           What Is Obsessive-Compulsive Disorder (OCD)?
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
            Obsessive-Compulsive Disorder (OCD) is a chronic psychiatric
            condition marked by persistent intrusive thoughts (obsessions) and
            repetitive behaviors (compulsions) aimed at reducing distress.
            Affecting daily function and emotional well-being,
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            OCD disrupts relationships, work, and personal routines. Early
            diagnosis, appropriate therapy, and structured intervention help
            individuals manage symptoms and improve long-term outcomes.
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
          Causes of OCD
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
        OCD develops from a blend of genetic vulnerability, brain function 
        irregularities, emotional patterns, and life experiences.
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
          Symptoms of OCD
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
        Symptoms must cause significant distress or impairment 
        and often involve both obsessions and compulsions.
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
              {tab === "obsessions" 
                ? "Common Obsessions" 
                : tab === "compulsions" 
                ? "Common Compulsions" 
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
              src={`/diseases/ocd/${
                activeTab === "obsessions"
                  ? "1"
                  : activeTab === "compulsions"
                  ? "2"
                  : "3"
              }.webp`}
              alt={`${activeTab} illustration`}
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
          Solutions for Managing OCD
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
        OCD treatment requires integrated care combining therapy, medications, and social support.
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

export default OCD;
