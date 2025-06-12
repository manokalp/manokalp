"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import playfair from "../../../fonts/playfair.module.css";

const PassiveAggression = () => {
  // Define the type for symptom categories
  type SymptomCategory = "emotional" | "behavioral" | "verbal" | "relational";
  
  // Use the type in the state declaration
  const [activeTab, setActiveTab] = useState<SymptomCategory>("emotional");

  const causes = [
    {
      name: "Psychological Factors",
      description: "Difficulty expressing anger directly, fear of confrontation, low self-esteem, and underlying feelings of powerlessness often contribute to passive-aggressive behavior patterns.",
      image: "/psychological-factors.webp",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
    {
      name: "Environmental Influences",
      description:
        "Growing up in environments where direct expression of anger was punished or where passive-aggressive behavior was modeled by caregivers or authority figures.",
      image: "/environmental-factors.webp",
      bgColor: "bg-[#FFD700]", // Yellow background
      textColor: "text-black",
    },
    {
      name: "Social Learning",
      description:
        "Observing and learning that indirect expression of negative feelings is safer or more effective than direct communication, particularly in environments where power dynamics are unbalanced.",
      image: "/social-factors.webp",
      bgColor: "bg-[#0E7EA0]", // Blue background
      textColor: "text-white",
    },
  ];

  const symptoms: Record<SymptomCategory, string[]> = {
    emotional: [
      "Underlying resentment and anger",
      "Feelings of powerlessness or victimization",
      "Emotional disconnection or withdrawal",
      "Masked hostility behind a pleasant facade",
      "Persistent feelings of being unappreciated"
    ],
    behavioral: [
      "Procrastination and intentional inefficiency",
      "Deliberately 'forgetting' responsibilities",
      "Chronic lateness to events or meetings",
      "Leaving tasks incomplete",
      "Sulking or pouting instead of discussing issues"
    ],
    verbal: [
      "Making ambiguous or sarcastic comments",
      "Giving backhanded compliments",
      "Using the silent treatment as punishment",
      "Muttering under breath rather than speaking directly",
      "Making excuses rather than taking responsibility"
    ],
    relational: [
      "Withholding emotional or physical intimacy",
      "Spreading rumors instead of addressing conflicts",
      "Excluding others as a form of punishment",
      "Sabotaging others' success or happiness",
      "Creating confusion through mixed messages"
    ]
  };

  const strategies = [
    {
      title: "Cognitive Behavioral Therapy",
      points: [
        "Identifying passive-aggressive thought patterns",
        "Learning to recognize and express anger appropriately",
        "Developing assertive communication skills"
      ],
      image: "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Mindfulness Practices",
      points: [
        "Increasing awareness of emotional states in real-time",
        "Developing tolerance for uncomfortable feelings",
        "Creating space between feeling and reacting"
      ],
      image: "https://images.pexels.com/photos/3759658/pexels-photo-3759658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Communication Training",
      points: [
        "Learning direct and honest expression of needs",
        "Practicing 'I' statements instead of blame",
        "Developing active listening skills"
      ],
      image: "https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Emotional Intelligence Development",
      points: [
        "Building greater self-awareness of emotional triggers",
        "Improving emotional regulation capabilities",
        "Enhancing empathy and perspective-taking"
      ],
      image: "https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
  ];

  return (
    <main className="w-full h-full flex justify-center flex-col bg-white">
      {/* Hero Desktop */}
      <div className="w-full hidden lg:block text-center">
        <h1 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
          Passive Aggression
        </h1>
        <Image
          src="https://images.pexels.com/photos/7516447/pexels-photo-7516447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="passive aggression hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full lg:mt-[-55vw] mt-[-25vw] z-0"
        />
      </div>

      {/* Hero Mobile */}
      <div className="w-full lg:hidden block text-center">
        <Image
          src="https://images.pexels.com/photos/7516447/pexels-photo-7516447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="passive aggression hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full z-0"
        />
        <h1 className="lg:text-[5vw] text-[6vw] text-black font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
          Passive Aggression
        </h1>
      </div>

      {/* Introduction Section */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-60vw] mt-[-0vw]">
        <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Passive aggression is a pattern of indirectly expressing negative feelings instead of openly addressing them. It's a form of emotional dishonesty where a person appears to comply or act appropriately on the surface, while actually harboring resentment and engaging in subtle, indirect acts of resistance or hostility.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            This behavior often stems from an inability to express anger in a healthy way and can manifest as procrastination, sulking, backhanded compliments, silent treatment, or deliberate inefficiency. While everyone may occasionally engage in passive-aggressive behavior, persistent patterns can damage relationships and indicate deeper psychological issues.
          </p>
        </div>

        <Link
          href="/"
          className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw]"
        >
          Know More
        </Link>
      </section>

      {/* Causes Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center ">
        {/* Title */}
        <h2
          className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Causes of Passive Aggression
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
          Passive-aggressive behavior develops from multiple factors including psychological predispositions, family dynamics, and learned social behaviors.
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
                  <h3 className="lg:text-[1.5vw] text-[4vw] font-bold">
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

      {/* Symptoms Tab Section */}
      <section className="bg-white w-full h-full lg:px-60 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Signs and Symptoms
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Passive aggression manifests in various ways that can be categorized into different types of expressions:
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
                  ? "https://images.pexels.com/photos/3807758/pexels-photo-3807758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  : activeTab === "behavioral"
                  ? "https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  : activeTab === "verbal"
                  ? "https://images.pexels.com/photos/7516362/pexels-photo-7516362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  : "https://images.pexels.com/photos/6964104/pexels-photo-6964104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt={`${activeTab} signs of passive aggression`}
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Impact on Relationships
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-16">
          <div className="lg:w-1/2 text-left">
            <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-6">
              Passive-aggressive behavior can significantly damage relationships in several ways:
            </p>
            <ul className="list-disc pl-5 text-black lg:text-[1.25vw] text-[3.5vw]">
              <li className="mb-4">Erodes trust when actions don't match words</li>
              <li className="mb-4">Creates confusion and anxiety in recipients</li>
              <li className="mb-4">Prevents genuine conflict resolution</li>
              <li className="mb-4">Leads to communication breakdown</li>
              <li className="mb-4">Builds resentment on both sides over time</li>
            </ul>
          </div>
          <div className="lg:w-1/2 h-[50vh] overflow-hidden rounded-xl">
            <Image
              src="https://images.pexels.com/photos/4672438/pexels-photo-4672438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Impact on relationships"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Treatment Strategies */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Treatment Strategies
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3.5vw] mb-10">
          Addressing passive-aggressive behavior requires awareness, commitment to change, and often professional support:
        </p>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {strategies.map((strategy, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center bg-[#0E7EA0] rounded-xl overflow-hidden text-white">
              <div className="lg:w-1/2">
                <Image
                  src={strategy.image}
                  alt={strategy.title}
                  width={300}
                  height={200}
                  className="w-full h-[30vh] object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-6 text-left">
                <h3 className="text-xl font-bold mb-4">{strategy.title}</h3>
                <ul className="list-disc pl-5">
                  {strategy.points.map((point, i) => (
                    <li key={i} className="mb-2">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Self-Help Techniques */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12 text-center`}
        >
          Self-Help Techniques
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 mb-10">
          <div className="lg:w-1/2">
            <Image
              src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Self-help techniques"
              width={500}
              height={400}
              className="w-full h-[50vh] object-cover rounded-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-6">
              If you recognize passive-aggressive tendencies in yourself, these strategies can help:
            </p>
            <ul className="text-left text-black lg:text-[1.25vw] text-[3.5vw]">
              <li className="mb-4">
                <strong>Practice emotional awareness:</strong> Learn to identify and name your feelings, especially anger and resentment, as they arise.
              </li>
              <li className="mb-4">
                <strong>Keep a communication journal:</strong> Document situations where you felt unable to express yourself directly and reflect on alternatives.
              </li>
              <li className="mb-4">
                <strong>Develop assertiveness skills:</strong> Learn to express needs and boundaries clearly without aggression or withdrawal.
              </li>
              <li className="mb-4">
                <strong>Seek feedback:</strong> Ask trusted friends or family members to point out when you're being passive-aggressive.
              </li>
              <li className="mb-4">
                <strong>Practice direct communication:</strong> Start with small, low-risk situations to build confidence in expressing yourself honestly.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* When to Seek Professional Help */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12 text-center`}
        >
          When to Seek Professional Help
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 mb-10">
          <div className="lg:w-1/2">
            <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-6">
              Consider seeking professional help if:
            </p>
            <ul className="text-left text-black lg:text-[1.25vw] text-[3.5vw] list-disc pl-5">
              <li className="mb-4">Passive-aggressive patterns are significantly affecting your relationships</li>
              <li className="mb-4">You consistently struggle to express anger or negative emotions directly</li>
              <li className="mb-4">Self-help strategies haven't been effective</li>
              <li className="mb-4">You notice these patterns causing problems in multiple areas of life</li>
              <li className="mb-4">You're experiencing related issues like anxiety or depression</li>
            </ul>
            <p className="text-black lg:text-[1.25vw] text-[3.5vw] mt-6">
              Mental health professionals can provide personalized strategies and support for developing healthier communication patterns.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="https://images.pexels.com/photos/7176327/pexels-photo-7176327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Professional help"
              width={500}
              height={400}
              className="w-full h-[50vh] object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default PassiveAggression; 