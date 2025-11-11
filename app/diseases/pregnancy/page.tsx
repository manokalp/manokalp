"use client";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";

const Pregnancy = () => {
  const [activeTab, setActiveTab] = useState<DisorderCategory>("hypertensive");

  const causes = [
    {
      name: "Biological and Genetic Factors",
      description: "Family history of complications, hormonal imbalances, and pre-existing conditions like hypertension or diabetes raise the likelihood of developing pregnancy-related disorders.",
      image: "/genetic-factors.webp",
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Environmental and Lifestyle Factors",
      description:
        "Poor nutrition, substance use, lack of prenatal care, and excessive physical or emotional stress increase the risk of gestational complications and poor fetal outcomes.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Psychosocial Influences",
      description:
        "Inadequate support, financial hardship, and cultural barriers can delay care, elevate emotional distress, and worsen pregnancy health outcomes.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
  ];

  const disorderTypes = {
    hypertensive: [
      {
        name: "Gestational Hypertension:",
        description: "Elevated blood pressure without proteinuria"
      },
      {
        name: "Preeclampsia:",
        description: "Hypertension with proteinuria and potential organ damage"
      },
      {
        name: "Eclampsia:",
        description: "Seizures due to severe preeclampsia"
      },
      {
        name: "Chronic Hypertension:",
        description: "Existing high blood pressure before pregnancy"
      }
    ],
    metabolic: [
      {
        name: "Gestational Diabetes:",
        description: "High blood sugar levels during pregnancy"
      },
      {
        name: "Thyroid Disorders:",
        description: "Affects fetal growth and maternal metabolism"
      },
      {
        name: "Obesity-Related Risks:",
        description: "Raises risk of gestational hypertension and diabetes"
      }
    ],
    pregnancy_complications: [
      {
        name: "Miscarriage:",
        description: "Pregnancy loss before 20 weeks"
      },
      {
        name: "Stillbirth:",
        description: "Fetal death after 20 weeks"
      },
      {
        name: "Preterm Labor:",
        description: "Early delivery increasing neonatal risk"
      }
    ]
  };

  const disorderImages = {
    hypertensive: "/diseases/preganancy/1.webp",
    metabolic: "/diseases/preganancy/2.webp",
    pregnancy_complications: "/diseases/preganancy/3.webp"
  };

  const solutionsData = [
    {
      title: "Medical Interventions",
      description:
        "Antihypertensives, insulin or dietary therapy, iron supplementation, and infection control medications are prescribed based on the condition and risk level.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Psychotherapeutic Approaches",
      description:
        "CBT, peer support groups, and medication for severe mood disturbances help manage perinatal mental health concerns safely under medical supervision.",
      image: "https://images.unsplash.com/photo-1611042553484-d61f84d22784?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lifestyle and Preventive Strategies",
      description:
        "Balanced diets, prenatal vitamins, regular check-ups, stress management techniques, and avoiding alcohol or tobacco ensure better outcomes.",
      image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Complementary Interventions",
      description:
        "Family education, community outreach, school-based prenatal awareness, and early pregnancy tracking support healthier pregnancies across all populations.",
      image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];
  

  

  type DisorderCategory = keyof typeof disorderTypes;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
         Pregnancy Mental Health
        </h1>
        <Image
          src="/diseases-banner/pregnancy.webp"
          alt="pregnancy image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full  lg:mt-[-16vw] mt-[-25vw] z-0"
        />
      </div>

      {/* Hero Mobile  */}
      <div className="w-full lg:hidden block text-center ">
        <Image
          src="/diseases-banner/pregnancy.webp"
          alt="pregnancy image"
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
        Pregnancy Mental Health
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
       
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Pregnancy-related disorders refer to a group of medical and psychological conditions that arise during pregnancy, posing risks to both maternal and fetal health. These conditions may result from hormonal changes, pre-existing illnesses, or complications specific to gestation.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Early detection and integrated medical support are essential to reduce complications and improve long-term outcomes for mother and child.
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
          Causes of Pregnancy-Related Disorders
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
          Pregnancy complications are influenced by genetic, medical, lifestyle, and social factors that affect maternal well-being and fetal development.
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

      {/* Replace Tab Section */}
      <section className="bg-white text-black w-full h-full lg:px-20 px-10 lg:pt-35 py-10">
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto">
          <h2
            className="text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold mb-8"
            style={{ fontFamily: "Playfair" }}
          >
            Types of Pregnancy-Related Disorders
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveTab("hypertensive")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === "hypertensive"
                ? "bg-[#0E7EA0] text-white"
                : "bg-transparent text-[#0E7EA0] border border-[#0E7EA0]"
            }`}
          >
            Hypertensive Disorders
          </button>
          <button
            onClick={() => setActiveTab("metabolic")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === "metabolic"
                ? "bg-[#0E7EA0] text-white"
                : "bg-transparent text-[#0E7EA0] border border-[#0E7EA0]"
            }`}
          >
            Endocrine and Metabolic Conditions
          </button>
          <button
            onClick={() => setActiveTab("pregnancy_complications")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === "pregnancy_complications"
                ? "bg-[#0E7EA0] text-white"
                : "bg-transparent text-[#0E7EA0] border border-[#0E7EA0]"
            }`}
          >
            Pregnancy Loss and Fetal Complications
          </button>
        </div>

        {/* Symptoms Section */}
        <section className="bg-white text-black w-full h-full lg:px-20 px-10 lg:py-20 py-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2
              className="text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold mb-8"
              style={{ fontFamily: "Playfair" }}
            >
              Symptoms of Pregnancy-Related Disorders
            </h2>
            <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
              Symptoms depend on the specific disorder and must be recognized early for proper care.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-[#0E7EA0] lg:text-[1.5vw] text-[5vw] font-bold mb-4">Common Symptoms</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-black lg:text-[0.95vw] text-[3vw]">High blood pressure and swelling (preeclampsia)</li>
                <li className="text-black lg:text-[0.95vw] text-[3vw]">Excessive thirst and fatigue (gestational diabetes)</li>
                <li className="text-black lg:text-[0.95vw] text-[3vw]">Shortness of breath and pallor (anemia)</li>
                <li className="text-black lg:text-[0.95vw] text-[3vw]">Depressed mood or severe anxiety (perinatal mental health)</li>
                <li className="text-black lg:text-[0.95vw] text-[3vw]">Vaginal bleeding or pain (miscarriage risk)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-[#0E7EA0] lg:text-[1.5vw] text-[5vw] font-bold mb-4">Diagnostic Methods</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-black lg:text-[0.95vw] text-[3vw]">Blood Pressure Monitoring: Detects hypertensive complications</li>
                <li className="text-black lg:text-[0.95vw] text-[3vw]">Glucose Tolerance Test: Screens for gestational diabetes</li>
                <li className="text-black lg:text-[0.95vw] text-[3vw]">CBC: Identifies anemia</li>
                <li className="text-black lg:text-[0.95vw] text-[3vw]">Ultrasound: Evaluates fetal growth and placental function</li>
                <li className="text-black lg:text-[0.95vw] text-[3vw]">Mental Health Screening: Assesses psychological well-being</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 items-center ">
          {/* Left side: text content */}
          <div className="md:w-1/2">
            <ul className="space-y-6">
              {disorderTypes[activeTab].map((disorder, index) => (
                <li key={index} className="border-b border-gray-700 pb-4 last:border-0">
                  <span className="text-[#0E7EA0] font-semibold lg:text-[1.3vw] text-[3.5vw]">{disorder.name}</span>
                  <p className="text-black lg:text-[1.1vw] text-[3vw]">{disorder.description}</p>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right side: image - Fixed for mobile */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="rounded-lg overflow-hidden w-full h-64 md:h-120">
              <Image 
                src={disorderImages[activeTab]}
                alt={`${activeTab} disorders`}
                width={500}
                height={400}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10">
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto">
          <h2
            className="text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold mb-8"
            style={{ fontFamily: "Playfair" }}
          >
            Solutions for Managing Pregnancy-Related Disorders
          </h2>
          <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
            Comprehensive care involves medical management, psychological support, and preventive strategies.
          </p>
        </div>
        {/* Cards */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-w-5xl mx-auto">
          {solutionsData.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="w-full md:w-1/2 h-48 relative rounded-xl overflow-hidden">
                <Image src={solution.image} alt={solution.title} fill className="object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-[#0E7EA0] lg:text-[1.5vw] text-[5vw] font-bold mb-4">{solution.title}</h3>
                <p className="text-black lg:text-[0.95vw] text-[3vw]">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Pregnancy;
