"use client";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const RelationshipTribulations = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("emotional");
  const [activeCluster, setActiveCluster] = useState<number>(0); // Track active cluster tab

  const causes = [
    {
      name: "Emotional and Psychological Factors",
      description:
        "Unresolved trauma, communication gaps, insecurity, and attachment differences can disrupt emotional closeness and lead to chronic misunderstanding between partners.",
      image: "/personality.webp",
      link: "/psychosocial-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "External and Social Influences",
      description:
        "Financial pressure, cultural expectations, work stress, and social media comparisons can strain relationship balance and emotional availability.",
      image: "/personality.webp",
      link: "/external-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Behavioral and Lifestyle Contributors",
      description:
        "Infidelity, addiction, emotional neglect, and conflicting goals or values often erode trust, reduce intimacy, and intensify existing relational conflicts.",
      image: "/genetic-factors.webp",
      link: "/environmental-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
  ];

  const symptoms = {
    emotional: [
      "Ongoing anxiety, sadness, or frustration",
      "Emotional isolation or feeling emotionally drained",
      "Frequent mood swings or hopelessness"
    ],
    behavioral: [
      "Verbal conflicts and passive-aggressive exchanges",
      "Withdrawal from shared activities",
      "Acting out or sabotaging the relationship"
    ],
    psychological: [
      "Low self-worth or heightened self-doubt",
      "Physical symptoms like headaches or fatigue",
      "Trouble focusing, sleeping, or managing stress"
    ]
  };

  const solutionsData = [
    {
      title: "Psychotherapeutic Interventions",
      description:
        "Couples therapy improves communication; CBT reshapes distorted thinking; EFT deepens emotional bonds; mindfulness promotes calm and perspective in difficult conversations.",
      image: "/diseases/forgetfulnessv2/2.webp",
    },
    {
      title: "Communication and Conflict Resolution Strategies",
      description:
        "Practicing active listening, using non-blaming language, setting clear boundaries, and validating each other’s feelings are foundational for conflict resolution.",
      image: "/diseases/impulsivityv2/2.webp",
    },
    {
      title: "Rebuilding Trust and Intimacy",
      description:
        "Consistency, openness, shared time, forgiveness, and nurturing touch help repair broken bonds and revive emotional closeness.",
      image: "/diseases/impulsivityv2/3.webp",
    },
    {
      title: "Lifestyle Changes for Relationship Health",
      description:
        "Prioritizing the relationship, encouraging mutual growth, maintaining individual well-being, and seeking outside support when needed can strengthen partnership resilience.",
      image: "/diseases/impulsivityv2/4.webp",
    },
    {
      title: "Complementary Interventions",
      description:
        "Early conflict resolution workshops, premarital counseling, self-help resources, and support groups help partners build stronger emotional and relational habits.",
      image: "/diseases/impulsivityv2/5.webp",
    },
  ];

  const typesData = [
    {
      title: "Communication Difficulties",
      disorders: [
        "Misunderstood intentions and tone",
        "Avoidance, stonewalling, or emotional shutdown",
        "Escalation from defensive or aggressive dialogue"
      ],
      image: "/diseases/relationship/t1.webp"
    },
    {
      title: "Trust and Commitment Issues",
      disorders: [
        "Jealousy and possessiveness",
        "Emotional unavailability or fear of commitment",
        "Broken trust through dishonesty or inconsistency"
      ],
      image: "/diseases/relationship/t2.webp"
    },
    {
      title: "Emotional Disconnection",
      disorders: [
        "Feeling unseen or undervalued",
        "Decreased ability to express or receive affection",
        "Divergent emotional coping styles"
      ],
      image: "/diseases/relationship/t3.webp"
    },
    {
      title: "Conflict and Control Dynamics",
      disorders: [
        "Frequent arguments without resolution",
        "Power struggles or dominance behaviors",
        "Inability to compromise or collaborate"
      ],
      image: "/diseases/relationship/t4.webp"
    },
    {
      title: "Infidelity and Betrayal",
      disorders: [
        "Emotional or physical affairs",
        "Secrets or hidden aspects of life",
        "Persistent distrust after betrayal"
      ],
      image: "/diseases/relationship/t5.webp"
    },
    {
      title: "Intimacy and Affection Challenges",
      disorders: [
        "Loss of physical closeness or romance",
        "Mismatch in sexual or emotional needs",
        "Relationship becoming routine or emotionally stagnant"
      ],
      image: "/diseases/relationship/t6.webp"
    }
  ];

  type SymptomCategory = keyof typeof symptoms;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[5vw] text-[6vw] text-black font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
          What Are Relationship Tribulations?
        </h1>
        <Image
          src="/diseases-banner/relationship-tribulations.webp"
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
          src="/diseases-banner/relationship-tribulations.webp"
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
        <h1 className="lg:text-[5vw] text-[6vw] text-black font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
          What Are Relationship Tribulations?
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Relationship tribulations refer to ongoing emotional, psychological, or behavioral difficulties within interpersonal partnerships—especially romantic relationships. These challenges can arise from communication breakdowns, unmet needs, unresolved past experiences, or lifestyle stressors.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            If left unaddressed, such issues may lead to chronic conflict, emotional exhaustion, and even the breakdown of otherwise meaningful connections. Strengthening awareness and investing in conflict resolution are crucial steps toward relational well-being.
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
          Causes of Relationship Tribulations
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
          Relationship difficulties are shaped by individual psychology,
          behavioral patterns, and social dynamics.
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
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:pt-35 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Symptoms of Relationship Tribulations
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Chronic relational stress can lead to emotional, behavioral, and psychological disturbances in one or both partners.
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
              {tab === "emotional"
                ? "Emotional Symptoms"
                : tab === "behavioral"
                ? "Behavioral Symptoms"
                : "Psychological and Physical Impact"}
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
              src={`/diseases/relationship/${
                activeTab === "emotional"
                  ? "1"
                  : activeTab === "behavioral"
                  ? "3"
                  : "2"
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
      <section className="bg-white w-full h-full lg:px-10 px-10 lg:pt-10 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] mb-4 font-semibold ${playfair.className}`}
        >
          Types of Relationship Tribulations
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          These challenges vary in intensity and impact but often fall into specific relational categories:
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
                  <li
                    key={index}
                    className="border-b border-gray-300 pb-3 text-sm"
                  >
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
      <section className="bg-white w-full h-full lg:px-6 px-10 lg:pb-40 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}
        >
          Solutions for Managing Personality Disorders
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
          Management requires individualized therapy, medications, and
          structured psychosocial rehabilitation.
        </p>

        <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-4">
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

export default RelationshipTribulations;
