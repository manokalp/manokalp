"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const AdultPsychological = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("emotional");

  const causes = [
    {
      name: "Neurobiological Factors",
      description: "Attachment patterns developed early in life influence brain structures that regulate emotions and stress responses, affecting how individuals form bonds and respond to relationship challenges throughout life.",
      image: "/genetic-factors.webp",
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Psychological Vulnerabilities",
      description:
        "Unresolved trauma, insecure attachment styles, fear of intimacy, and negative self-concepts can create barriers to healthy emotional connections and relationship satisfaction.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Environmental Influences",
      description:
        "Family relationship models, cultural expectations around relationships, social media influences, and work-life balance challenges significantly impact relationship patterns and emotional expression.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
  ];

  const symptoms = {
    emotional: [
      "Persistent feelings of loneliness even in relationships",
      "Emotional numbness or difficulty expressing feelings",
      "Intense fear of abandonment or rejection",
      "Frequent jealousy, insecurity, or emotional dependence"
    ],
    cognitive: [
      "Negative thought patterns about relationships or self-worth",
      "Unrealistic expectations of partners or relationships",
      "Rumination about relationship problems",
      "Black-and-white thinking about relationship situations"
    ],
    physical: [
      "Stress-related physical symptoms during relationship conflicts",
      "Sleep disturbances related to relationship concerns",
      "Changes in appetite or weight during relationship distress",
      "Physical tension or fatigue from emotional suppression"
    ],
    behavioral: [
      "Avoidance of emotional intimacy or commitment",
      "Pattern of unstable or short-lived relationships",
      "Communication difficulties, including withdrawal or aggression",
      "Excessive reassurance-seeking or relationship sabotage"
    ]
  };

  const solutionsData = [
    {
      title: "Therapeutic Approaches",
      points: [
        "Individual therapy to address personal patterns and emotional barriers",
        "Couples therapy to improve communication and resolve relationship issues",
        "Attachment-focused therapies to heal insecure attachment patterns"
      ],
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Skill Development",
      points: [
        "Emotional awareness and regulation techniques",
        "Healthy communication skills, including active listening and assertiveness",
        "Boundary-setting and conflict resolution strategies"
      ],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      title: "Supportive Practices",
      points: [
        "Mindfulness and self-compassion exercises",
        "Building social support networks beyond romantic relationships",
        "Engagement in activities that foster self-worth independent of relationship status"
      ],
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Educational Resources",
      points: [
        "Relationship education workshops and courses",
        "Books and resources on attachment theory and healthy relationships",
        "Online communities and support groups for relationship challenges"
      ],
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];
  

  

  type SymptomCategory = keyof typeof symptoms;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
        Adult Psychological Problems
        </h1>
            <Image
              src="/diseases-banner/ relationshipsn-emotional.webp"
          alt="emotional relationship challenges hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full  lg:mt-[-16vw] mt-[-25vw] z-0"
        />
      </div>

      {/* Hero Mobile  */}
      <div className="w-full lg:hidden block text-center ">
        <Image
          src="/diseases-banner/relationshipsn-emotional.webp"
          alt="emotional relationship challenges hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full z-0"
        />
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
        Adult Psychological Problems
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          Relationship challenges are universal human experiences that significantly impact mental health and wellbeing. Difficulties forming or maintaining satisfying emotional connections affect approximately 20% of adults and can lead to profound loneliness, anxiety, and depression.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
          While relationship struggles are common, repeated patterns of unhealthy relationships, emotional disconnection, or interpersonal conflicts can indicate deeper attachment issues that may benefit from therapeutic intervention and skills development.
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
          Causes of Relationship Difficulties
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
        Relationship challenges emerge from complex interactions between neurobiological factors, psychological vulnerabilities, and environmental influences that shape how we connect with others.
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
          Signs of Relationship and Emotional Challenges
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Relationship difficulties manifest through various symptoms affecting emotional states, thought patterns, physical wellbeing, and behavioral patterns.
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
              src={
                activeTab === "emotional"
                  ? "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=2399&auto=format&fit=crop&ixlib=rb-4.0.3"
                  : activeTab === "cognitive"
                  ? "https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
                  : activeTab === "physical"
                  ? "https://images.unsplash.com/photo-1483193722442-5422d99849bc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
                  : "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
              }
              alt={`${activeTab} signs of relationship difficulties`}
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
          Approaches for Improving Relationships
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
        Enhancing relationship satisfaction and emotional wellbeing requires a multifaceted approach combining therapeutic support, skill development, supportive practices, and educational resources.
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
            <p className="lg:text-[1.2vw] text-[3.5vw]">With appropriate support and a willingness to develop new relationship skills, most people can significantly improve their relationship satisfaction and emotional wellbeing. Research shows that learning secure attachment behaviors and healthy communication patterns can transform relationship dynamics even after years of difficulties.</p>
            <p className="lg:text-[1.2vw] text-[3.5vw]">Growth in relationships is an ongoing process rather than a destination. While challenging patterns may occasionally resurface during times of stress, developing awareness of triggers and having effective tools for managing relationship difficulties provides a foundation for continual improvement in connection and emotional fulfillment.</p>
        </div>
      </section> */}
    </main>
  );
};

export default AdultPsychological;
