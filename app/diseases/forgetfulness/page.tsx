"use client";
import Image from "next/image";
// import Link from "next/link"
import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css";

const Forgetfulness = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("emotional");
  const symptoms = {
    emotional: [
      "Unexplained irritability or sadness",
      "Emotional detachment or mood swings",
      "Fear, confusion, or anxiety in new or unfamiliar environments",
      "Suspicion or delusional thinking",
    ],
    behavioral: [
      "Poor judgment in daily matters",
      "Repetitive questioning or storytelling",
      "Reduced interest in hobbies and interactions",
      "Changes in grooming or personal care routines",
    ],
    physical: [
      "Misplacing belongings or forgetting appointments",
      "Difficulty following conversations or instructions",
      "Impaired planning and organization",
      "Dependency in completing daily tasks",
    ],
    cognitive: [
      "Difficulty recalling names, conversations, or recent events.",
      "Poor problem-solving and decision-making",
      "Disorientation in time or location",
      "Language problems, such as difficulty finding words",
    ],
  };
  const solutionsData = [
    {
      title: "Pharmacological Treatments",
      description:
        "Cholinesterase inhibitors like donepezil and rivastigmine, and NMDA receptor antagonists such as memantine, aim to improve memory and communication between brain cells.",
    },
    {
      title: "Psychotherapeutic Interventions",
      description:
        "CBT and reminiscence therapy support mood regulation and emotional stability, while validation therapy helps reduce agitation by acknowledging lived experiences.",
    },
    {
      title: "Lifestyle and Supportive Therapies",
      description:
        "Regular exercise, brain-stimulating activities, and balanced diets rich in essential nutrients help maintain cognitive health and physical vitality.",
    },
    {
      title: "Complementary Interventions",
      description:
        "Caregiver training, emotional support groups, and structured routines foster safety, independence, and emotional stability for both individuals and their families.",
    },
  ];

  type SymptomCategory = keyof typeof symptoms;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* ASPD Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
          What Are Forgetfulness and Dementia?
        </h1>
        <Image
          src="/diseases-banner/forgetfulness.webp"
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

      {/* ASPD Hero Mobile  */}
      <div className="w-full lg:hidden block text-center ">
        <Image
          src="/forg etfulness.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full  z-0"
          priority
          onLoad={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("heroImageLoaded"));
            }
          }}
        />
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
          What Are Forgetfulness and Dementia?
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Forgetfulness and dementia refer to a spectrum of cognitive
            impairments affecting memory, reasoning, communication, and daily
            functioning. While occasional forgetfulness is common with aging,
            dementia is a progressive decline that
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            significantly interferes with independent living. Common forms
            include Alzheimer’s disease, vascular dementia, and Lewy body
            dementia. Though incurable, early diagnosis and personalized care
            can help manage symptoms and improve quality of life.
          </p>
        </div>
      </section>

      {/* Colored Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Causes of Eating Disorders
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
          Temper tantrums may result from different psychological,
          developmental, and environmental factors. Some of the most prevalent
          causes are:
        </p>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-0 mx-auto max-w-2xl">
          {/* Technique Card 1 */}
          <div className="[perspective:1000px] cursor-pointer ">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">
                  Biological Factors
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                   Degenerative diseases like Alzheimer’s and Parkinson’s,
                  reduced cerebral blood flow, genetic predisposition, and
                  neurotransmitter imbalances all contribute to sustained
                  cognitive decline and memory loss.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 2 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">
                  Psychological and Environmental Factors
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Chronic stress, depression, substance abuse, sedentary habits,
                  and poor nutrition impair brain function and accelerate memory
                  deterioration, especially in older adults.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Section */}
      <section className="bg-white w-full h-full lg:px-30 px-10 lg:pt-30 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Symptoms of Forgetfulness and Dementia
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Cognitive, emotional, and behavioral changes appear gradually and
          worsen over time, often leading to loss of independence.
        </p>

        <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
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

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="lg:w-1/2">
            <ul className="text-left text-black">
              {symptoms[activeTab].map((symptom, index) => (
                <li key={index} className="mb-8 border-b-[2px] pb-2">
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 h-[60vh] relative overflow-hidden rounded-xl">
            <Image
              src={`/diseases/forgetfulness/${
                activeTab === "emotional"
                  ? "1"
                  : activeTab === "behavioral"
                  ? "2"
                  : activeTab === "physical"
                  ? "3"
                  : "4"
              }.webp`}
              alt={`${activeTab} symptoms illustration`}
              layout="fill"
              objectFit="contain"
              className="transition-opacity duration-300 cursor-pointer rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-30 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}
        >
          Solutions for Managing Forgetfulness and Dementia
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
          While dementia cannot be reversed, appropriate therapies can help slow
          its progression and improve quality of life.
        </p>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {solutionsData.map((solution, index) => (
            <div
              key={index}
              className="bg-[#0E7EA0] rounded-3xl text-white text-center"
            >
              <Image
                src={`/diseases/forgetfulnessv2/${index + 1}.webp`}
                alt={solution.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4">{solution.title}</h3>
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

export default Forgetfulness;
