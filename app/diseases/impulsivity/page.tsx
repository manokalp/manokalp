"use client";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const Impulsivity = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("impulsivity");

  const causes = [
    {
      name: "Genetic and Biological Influences",
      description:
        "Genetic predisposition, neurotransmitter imbalances (serotonin, dopamine), and dysfunction in brain regions like the prefrontal cortex and amygdala affect emotion regulation and impulse control.",
      image: "/genetic-factors.webp", // Replace with your actual image path
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Psychological and Emotional Factors",
      description:
        "Low frustration tolerance, mood instability, executive dysfunction, and coexisting disorders like ADHD or borderline personality disorder increase the risk of impulsive and aggressive behaviors.",
      image: "/psychological-factors.webp", // Replace with your actual image path
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Environmental and Social Contributors",
      description:
        "Early trauma, exposure to violence, inconsistent parenting, and substance use can intensify emotional reactivity and reduce the ability to regulate behavior.",
      image: "/genetic-factors.webp", // Replace with your actual image path
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
  ];

  const symptoms = {
    impulsivity: [
      "Acting without considering consequences",
      "Difficulty delaying gratification",
      "Risk-taking in finances, sex, or driving",
      "Poor decision-making under emotional stress",
    ],
    aggression: [
      "Verbal or physical outbursts",
      "Destruction of property or self-harm",
      "Persistent irritability or hostility",
      "Inability to manage anger or conflict",
    ],
  };
  const solutionsData = [
    {
      title: "Psychotherapeutic Approaches",
      description:
        "CBT restructures impulsive thinking patterns, DBT builds emotional regulation, and anger management teaches control over triggers and reactive behaviors.",
      image: "/diseases/impulsivityv2/1.webp",
    },
    {
      title: "Pharmacological Treatments",
      description:
        "Mood stabilizers, antipsychotics, SSRIs, and beta-blockers may be used to reduce emotional volatility and physical symptoms of aggression.",
      image: "/diseases/impulsivityv2/2.webp",
    },
    {
      title: "Integrated Behavioral Programs",
      description:
        "Behavioral programs in schools, structured communities, substance abuse rehab, and social skills training enhance emotional control and improve interpersonal functioning.",
      image: "/diseases/impulsivityv2/3.webp",
    },
    {
      title: "Complementary Interventions",
      description:
        "Parent training, classroom-based self-monitoring, community violence prevention, and early behavioral assessments promote healthier emotional responses in high-risk individuals.",
      image: "/diseases/impulsivityv2/4.webp",
    },
  ];
  type SymptomCategory = keyof typeof symptoms;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
          What Are Impulsivity and Aggression?
        </h1>
        <Image
          src="/diseases-banner/impulsivity.webp"
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
          src="/diseases-banner/impulsivity.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full     z-0"
        />
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
          What Are Impulsivity and Aggression?
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Impulsivity and aggression are disruptive behavioral traits that can
            impair judgment, relationships, and daily functioning. Impulsivity
            involves acting without forethought, while aggression refers to
            hostile verbal, physical, or emotional outbursts.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            These behaviors often occur together and are associated with mood
            disorders, personality disorders, ADHD, and substance use disorders.
            Early recognition and targeted interventions can significantly
            improve self-regulation and social integration.
          </p>
        </div>

        
      </section>

      {/* Color Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        {/* Title */}
        <h2 className="text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold mb-8">
          Causes of Impulsivity and Aggression
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
          These traits emerge from a combination of neurobiological
          vulnerability, emotional dysregulation, and environmental exposure.
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
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:pt-30 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Symptoms of Forgetfulness and Dementia
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Cognitive, emotional, and behavioral changes appear gradually and
          worsen over time, often leading to loss of independence.
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
              src={`/diseases/impulsivity/${
                activeTab === "impulsivity"
                  ? "1"
                  : activeTab === "aggression"
                  ? "2"
                  : activeTab === "physical"
                  ? "3"
                  : "4"
              }.webp`}
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
          Solutions for Managing Impulsivity and Aggression
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
          Treatment requires a blend of behavioral therapy, medication, and
          structured interventions across settings.
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

export default Impulsivity;
