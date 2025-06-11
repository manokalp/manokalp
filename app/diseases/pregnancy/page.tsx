"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const Pregnancy = () => {
  const [activeTab, setActiveTab] = useState<DisorderCategory>("hypertensive");

  const causes = [
    {
      name: "Neurobiological Factors",
      description: "Hormonal fluctuations during pregnancy affect neurotransmitter functioning, particularly serotonin and dopamine, which can influence mood regulation and emotional well-being.",
      image: "/genetic-factors.webp",
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Psychological Vulnerabilities",
      description:
        "Pre-existing mental health conditions, stress about maternal role transition, and concerns about childbirth can contribute to psychological distress during pregnancy.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Environmental Influences",
      description:
        "Social support quality, healthcare access, socioeconomic factors, and relationship stability significantly impact maternal mental health and pregnancy outcomes.",
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
      points: [
        "Regular prenatal check-ups to monitor maternal and fetal health",
        "Appropriate medication management for pregnancy-related conditions",
        "Specialized care for high-risk pregnancies or complications"
      ],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lifestyle Modifications",
      points: [
        "Pregnancy-safe exercise routines like prenatal yoga or swimming",
        "Balanced nutrition focused on essential nutrients for fetal development",
        "Proper sleep hygiene and rest positioning for pregnancy comfort"
      ],
      image: "https://images.unsplash.com/photo-1611042553484-d61f84d22784?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Supportive Strategies",
      points: [
        "Childbirth education classes and pregnancy support groups",
        "Partner involvement and family support system strengthening",
        "Mindfulness and stress reduction techniques for pregnancy"
      ],
      image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Professional Support",
      points: [
        "Psychological support for prenatal and postpartum mental health",
        "Consultation with maternal-fetal medicine specialists when needed",
        "Development of personalized birth plans with healthcare providers"
      ],
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
        />
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
        Pregnancy Mental Health
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Pregnancy represents a significant life transition that affects physical health, emotional well-being, and social relationships. While often portrayed as exclusively joyful, many women experience complex emotional and psychological challenges during this time.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Research indicates that approximately 15-25% of women experience significant emotional distress during pregnancy. Proper support, early identification of risk factors, and timely intervention can significantly improve outcomes for both mother and child.
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
          Factors Affecting Pregnancy Mental Health
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
        Multiple factors influence maternal mental health during pregnancy, including biological mechanisms, psychological predispositions, and environmental support systems.
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
      <section className="bg-white text-black w-full h-full lg:px-20 px-10 lg:py-20 py-10">
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto">
          <h2
            className="text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold mb-8"
            style={{ fontFamily: "Playfair" }}
          >
            Types of Pregnancy
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
            Metabolic Disorders
          </button>
          <button
            onClick={() => setActiveTab("pregnancy_complications")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === "pregnancy_complications"
                ? "bg-[#0E7EA0] text-white"
                : "bg-transparent text-[#0E7EA0] border border-[#0E7EA0]"
            }`}
          >
            Pregnancy Complications
          </button>
        </div>

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
          
          {/* Right side: image */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden relative h-80 w-full">
              <Image 
                src={disorderImages[activeTab]}
                alt={`${activeTab} disorders`}
                fill
                className="object-cover"
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
            Supportive Approaches During Pregnancy
          </h2>
          <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
            Comprehensive support strategies can significantly improve pregnancy experiences and outcomes, addressing both physical health and emotional well-being.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-w-5xl mx-auto">
          {solutionsData.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 items-center"
            >
              {/* Image */}
              <div className="w-full md:w-1/2 h-48 relative rounded-xl overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-[#0E7EA0] lg:text-[1.5vw] text-[5vw] font-bold mb-4">
                  {solution.title}
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  {solution.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="text-black lg:text-[0.85vw] text-[3vw]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Pregnancy;
