"use client";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const Sleep = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("common");

  const causes = [
    {
      name: "Medical and Neurological Factors",
      description:
        "Chronic pain, hormonal imbalances, and neurological conditions such as epilepsy or Parkinson’s disease can disturb sleep structure and reduce restorative rest.",
      image: "/genetic-factors.webp",
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]",
      textColor: "text-white",
    },
    {
      name: "Psychological and Emotional Factors",
      description:
        "Anxiety, depression, trauma, and maladaptive thought patterns often lead to insomnia, fragmented sleep, or distressing nighttime awakenings.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]",
      textColor: "text-black",
    },
    {
      name: "Lifestyle and Environmental Factors",
      description:
        "Irregular routines, stimulant use, screen exposure, and shift work can disrupt circadian rhythms and delay natural sleep onset or depth.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]",
      textColor: "text-black",
    },
  ];

  const symptoms = {
    common: [
      "Trouble falling or staying asleep",
      "Excessive daytime sleepiness",
      "Loud snoring, gasping, or choking",
      "Irritability and impaired concentration",
      "Discomfort or tingling in limbs before sleep",
    ],
    dsm: [
      "Sleep issues occurring at least three nights a week for three months",
      "Significant impact on social, academic, or occupational functioning",
      "Symptoms not better explained by another medical or psychiatric condition",
    ],
  };

  const solutionsData = [
    {
      title: "Behavioral and Psychological Interventions",
      description:
        "CBT-I addresses unhelpful beliefs about sleep; relaxation techniques reduce arousal; sleep hygiene training promotes habits that support consistent rest.",
      image: "/diseases/impulsivityv2/1.webp",
    },
    {
      title: "Medical and Pharmacological Treatments",
      description:
        "Melatonin, sedative medications, CPAP for apnea, and dopamine agents for RLS are used based on diagnosis severity and symptom profile.",
      image: "/diseases/impulsivityv2/2.webp",
    },
    {
      title: "Lifestyle and Home-Based Strategies",
      description:
        "Maintaining regular sleep-wake cycles, avoiding caffeine or heavy meals before bed, creating a calming environment, and exercising earlier in the day support healthy sleep.",
      image: "/diseases/impulsivityv2/3.webp",
    },
    {
      title: "Complementary Interventions",
      description:
        "Mindfulness practices, white noise machines, light therapy for circadian regulation, and guided imagery techniques enhance readiness for sleep.",
      image: "/diseases/impulsivityv2/4.webp",
    },
  ];
  type SymptomCategory = keyof typeof symptoms;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
          What Are Sleep Disorders?
        </h1>
        <Image
          src="/diseases-banner/sleep.webp"
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
          src="/diseases-banner/sleep.webp"
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
          What Are Sleep Disorders?
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Sleep disorders are conditions that affect the quality, timing, or
            duration of sleep and interfere with daily functioning. These
            disturbances may result from medical issues, psychological
            conditions, or lifestyle factors.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Left untreated, sleep disorders can impair mood, cognition, and
            physical health. Timely diagnosis and personalized interventions can
            restore sleep patterns and significantly improve overall well-being.
          </p>
        </div>

        
      </section>
      {/* Color Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        {/* Title */}
        <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-8`}>
        Causes of Sleep Disorders
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
        Multiple biological, psychological, and environmental factors 
        contribute to disrupted sleep cycles and poor sleep quality.
        </p>

        {/* Causes Grid */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 max-w-2xl mx-auto">
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
          Symptoms of Sleep Disorders
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          These disorders present with both nighttime disturbances and daytime impairments.
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
              {tab === "common" ? "Common Symptoms" : "DSM-5 Diagnostic Criteria"}
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
              src={`/diseases/sleep/${activeTab === "common" ? "1" : "2"}.webp`}
              alt={`${activeTab} symptoms illustration`}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 cursor-pointer rounded-2xl border-black border-1 object-center"
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-30 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}
        >
          Solutions for Managing Sleep Disorders
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
          Effective treatment requires a multidisciplinary approach involving behavioral therapy, medication, and routine optimization.
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
                <h3 className="text-lg font-bold mb-4 text-[#FFD066]">{solution.title}</h3>
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

export default Sleep;
