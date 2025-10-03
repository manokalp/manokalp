"use client";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const NonSubstanceAddiction = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("behavioral");

  const causes = [
    {
      name: "Psychological Causes",
      description:
        "Emotional Coping: Use of behaviors as a way to escape stress, anxiety, or boredom. Reward and Reinforcement: The behavior is reinforced by immediate pleasure or relief, encouraging repetition. Cognitive Distortions: Belief that the behavior is harmless or justified, despite evidence of harm.",
      image: "/genetic-factors.webp",
      link: "/genetic-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Biological Causes",
      description:
        "Dopamine Release: Engaging in the behavior triggers dopamine production in the brain's reward pathways, creating feelings of pleasure. Tolerance Development: Over time, more intense engagement is needed to achieve the same sense of satisfaction. Withdrawal Symptoms: Anxiety, irritability, restlessness, or mood swings occur when unable to engage in the behavior.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Social Causes",
      description:
        "Peer Influence: Social pressure to participate in certain activities (e.g., gaming, gambling). Cultural Norms: Acceptance of certain behaviors (e.g., social media use) as normal, even when excessive. Easy Accessibility: Immediate access to addictive activities, such as online gaming, shopping, or social media.",
      image: "/psychological-factors.webp",
      link: "/psychological-factors",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
  ];

  const symptoms = {
    behavioral: [
      "Inability to control or limit the behavior.",
      "Spending excessive time on the activity, neglecting responsibilities.",
      "Prioritizing the behavior over personal, social, or professional commitments.",
    ],
    emotional: [
      "Anxiety, irritability, or agitation when unable to engage in the behavior.",
      "Mood swings directly tied to access to the behavior.",
      "Feelings of guilt, shame, or regret after engaging in the behavior.",
    ],
    cognitive: [
      "Obsessive thoughts about the behavior, even when trying to focus on other tasks.",
      "Rationalizing or justifying the behavior despite its negative impact.",
      "Difficulty concentrating on daily activities without engaging in the behavior.",
    ],
    physical: [
      "Sleep disturbances due to late-night engagement (gaming, binge-watching).",
      "Physical exhaustion or muscle strain from excessive exercise.",
      "Financial strain due to compulsive spending or gambling losses.",
    ],
  };

  const solutionsData = [
    {
      title: "Psychotherapeutic Interventions",
      points: [
        "Cognitive Behavioral Therapy (CBT): Identifies and modifies distorted thoughts and compulsive behaviors.",
        "Dialectical Behavior Therapy (DBT): Enhances emotional regulation and coping skills.",
        "Motivational Enhancement Therapy (MET): Strengthens commitment to change.",
        "Exposure Therapy: Gradually reduces reliance on addictive behaviors through controlled exposure.",
      ],
      image:
        "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Medical Interventions",
      points: [
        "Medication Management: Antidepressants or anti-anxiety medications for co-occurring mental health issues.",
        "Neurofeedback Therapy: Monitors and regulates brainwave patterns associated with addiction.",
        "Digital Detox Programs: Supervised reduction of screen time or technology use for tech-related addictions.",
      ],
      image:
        "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Behavioral and Lifestyle Strategies",
      points: [
        "Setting clear boundaries for technology use, such as screen-free hours.",
        "Engaging in regular physical activities to reduce cravings and improve mood.",
        "Replacing addictive behaviors with healthy alternatives (exercise, reading, hobbies).",
        "Maintaining a journal to track triggers, cravings, and progress.",
      ],
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Complementary Interventions",
      points: [
        "Peer support groups for shared experiences and mutual accountability.",
        "Family education to create a supportive environment and recognize warning signs.",
        "Mindfulness and stress reduction techniques (meditation, yoga, deep breathing).",
      ],
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  type SymptomCategory = keyof typeof symptoms;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
          Non-Substance Addictions
        </h1>
        <Image
          src="/diseases-banner/non-substance.webp"
          alt="behavioral addiction hero image"
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
          src="/diseases-banner/non-substance.webp"
          alt="behavioral addiction hero image"
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
          Non-Substance Addictions
        </h1>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Non-substance addictions, also known as behavioral addictions, involve compulsive behaviors that provide temporary pleasure or relief but lead to significant emotional, social, and psychological harm. These behaviors become addictive when they are repeated despite negative consequences, lead to a loss of control, and cause distress when restricted.
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
          Causes of Behavioral Addictions
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
          Behavioral addictions arise from a complex interaction of psychological, biological, and social factors.
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
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Symptoms of Behavioral Addictions
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Behavioral addictions can present a range of symptoms categorized into emotional, cognitive, physical, and behavioral types.
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
                activeTab === "behavioral"
                  ? "1"
                  : activeTab === "emotional"
                  ? "2"
                  : activeTab === "cognitive"
                  ? "3"
                  : "4"
              }.webp`}
              alt={`${activeTab} symptoms of behavioral addictions`}
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
          Solutions for Managing Behavioral Addictions
        </h2>

        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
          Effective management of behavioral addictions requires a comprehensive approach, including psychological therapy, medical interventions, and lifestyle adjustments.
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
                      <span className="text-[#FFD066] mr-2 text-base">
                        &#10148;
                      </span>
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
            <p className="lg:text-[1.2vw] text-[3.5vw]">Recovery from behavioral addictions is achievable with appropriate treatment approaches. Many individuals successfully overcome these challenges through a combination of therapy, lifestyle changes, and support systems tailored to their specific addiction pattern and underlying needs.</p>
            <p className="lg:text-[1.2vw] text-[3.5vw]">Unlike substance addictions where abstinence is often the goal, behavioral addiction recovery often involves learning moderation, healthy boundaries, and balanced engagement with activities that may be necessary parts of daily life (like internet use or shopping). With proper support, individuals can develop healthier relationships with previously problematic behaviors.</p>
        </div>
      </section> */}
    </main>
  );
};

export default NonSubstanceAddiction;
