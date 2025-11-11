"use client";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const Stress = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("emotional");

  const causes = [
    {
      name: "Biological Factors",
      description:
        "Family history of mood disorders, imbalanced neurotransmitters like serotonin and cortisol, and long-term hormonal activation increase vulnerability to stress-related conditions.",
      image: "/genetic-factors.webp",
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Environmental and Psychological Factors",
      description:
        "Work overload, personal loss, life transitions, or unresolved trauma can elevate stress and disrupt emotional resilience and coping capacity.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
  ];

  const symptoms = {
    emotional: [
      "Persistent irritability or low mood",
      "Feelings of helplessness or anxiety",
      "Mood swings or emotional outbursts"
    ],
    cognitive: [
      "Trouble concentrating or remembering",
      "Racing thoughts or persistent worry",
      "Negative self-talk or pessimism"
    ],
    physical: [
      "Muscle tension or headaches",
      "Gastrointestinal discomfort or fatigue",
      "Disrupted sleep or appetite changes"
    ],
    behavioral: [
      "Withdrawal from responsibilities or social life",
      "Substance use or compulsive behaviors",
      "Decreased motivation and productivity"
    ]
  };

  const solutionsData = [
    {
      title: "Pharmacological Treatments",
      points: [
        "SSRIs regulate mood and reduce anxiety",
        "Beta-blockers manage physical symptoms",
        "Benzodiazepines offer short-term relief for acute distress but are used cautiously"
      ],
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Psychotherapeutic Interventions",
      points: [
        "CBT helps challenge stress-inducing thought patterns",
        "Mindfulness and breathwork build present-moment focus",
        "Support groups offer emotional validation and coping strategies"
      ],
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lifestyle and Supportive Therapies",
      points: [
        "Regular physical activity lowers cortisol levels",
        "A balanced diet stabilizes hormones",
        "Consistent sleep supports recovery",
        "Time management skills help reduce daily overload"
      ],
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Complementary Interventions",
      points: [
        "Journaling, digital detox, nature exposure, and creative hobbies aid in stress release",
        "Enhance emotional clarity and coping flexibility"
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
         What Are Stress and Related Problems?
        </h1>
        <Image
          src="/diseases-banner/stress.webp"
          alt="stress hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full  lg:mt-[-16vw] mt-[-25vw] z-0"
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
          src="/diseases-banner/stress.webp"
          alt="stress hero image"
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
         What Are Stress and Related Problems?
        </h1> 
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
       
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Stress is the body’s response to demands or perceived threats. While short bursts of stress can enhance performance, chronic or unregulated stress may impair emotional, cognitive, and physical functioning.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          When persistent, it can contribute to burnout, anxiety, depression, and physical health issues. Timely identification and stress-reduction techniques can help restore balance and prevent long-term complications.
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
          Causes of Stress and Related Problems
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
          Chronic stress arises from the convergence of genetic sensitivity, hormonal responses, environmental pressures, and unresolved emotional challenges.
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
          Symptoms of Stress and Its Impact
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Stress can present through emotional instability, physical discomfort, cognitive overload, and behavioral changes.
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
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Signs
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
              alt={`${activeTab} signs of chronic stress`}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 cursor-pointer rounded-2xl border-black border-1 object-center"
            />
          </div>
        </div>
      </section>

      {/* Cards-2 Section */}
      {/* Long-Term Consequences */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-10 py-8 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.2vw] text-[7vw] font-semibold ${playfair.className}`}
        >
          Long-Term Consequences
        </h2>
        <div className="flex justify-center">
          <ul className="text-left text-black lg:text-[1.0vw] text-[3.5vw] max-w-3xl">
            <li className="mb-3 border-b-[2px] pb-2">Increased risk of hypertension and heart disease</li>
            <li className="mb-3 border-b-[2px] pb-2">Emotional burnout, especially in high-stress roles</li>
            <li className="mb-3 border-b-[2px] pb-2">Onset of anxiety, depression, or panic disorders</li>
          </ul>
        </div>
      </section>

      {/* Cards-2 Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-30 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}
        >
          Solutions for Managing Stress
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
          Effective stress management includes behavioral strategies, medication when necessary, and supportive lifestyle adjustments.
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
            <p className="lg:text-[1.2vw] text-[3.5vw]">With appropriate stress management techniques and lifestyle adjustments, most individuals can effectively reduce chronic stress and improve their overall well-being. Developing resilience through regular practice of stress reduction strategies creates lasting protection against future stressors.</p>
            <p className="lg:text-[1.2vw] text-[3.5vw]">While stress is an inevitable part of life, learning to respond differently to stressors can transform the impact they have on physical and mental health. Building a personalized toolkit of effective stress management techniques is key to long-term success in maintaining balance despite life's challenges.</p>
        </div>
      </section> */}
    </main>
  );
};

export default Stress;
