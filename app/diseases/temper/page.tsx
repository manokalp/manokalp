"use client";
import Image from "next/image";
// import Link from "next/link"
import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css";

const ChildhoodDepression = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("physical");
  const temperSolutions = [
    {
      title: "Stay Calm and Patient",
      description:
        "Responding calmly helps de-escalate the situation and sets a positive example.",
    },
    {
      title: "Validate Emotions While Setting Boundaries",
      description:
        "Acknowledge feelings but reinforce acceptable behavior (e.g., ‘I understand you’re upset, but hitting is not okay.’).",
    },
    {
      title: "Teach Emotional Regulation",
      description:
        "Encourage deep breathing, mindfulness, or counting techniques to manage frustration.",
    },
    {
      title: "Offer Limited Choices",
      description:
        "Giving options helps individuals feel more in control and reduces power struggles.",
    },
    {
      title: "Encourage Clear Communication",
      description:
        "Help develop alternative ways to express needs, like using words or gestures.",
    },
    {
      title: "Use Positive Reinforcement",
      description:
        "Praise and reward appropriate behavior rather than giving attention to tantrums.",
    },
    {
      title: "Establish Consistent Routines",
      description:
        "Predictable schedules can reduce anxiety and prevent tantrum triggers.",
    },
    {
      title: "Redirect Attention",
      description:
        "Involve the individual in a different activity to divert focus from frustration.",
    },
    {
      title: "Promote Problem-Solving Skills",
      description:
        "Teach alternative ways to handle problems instead of tantrums.",
    },
    {
      title: "Use Time-Outs When Appropriate",
      description:
        "A quiet break can help regain composure without reinforcing negative behavior.",
    },
    {
      title: "Avoid Giving In to Tantrums",
      description:
        "Maintain firm boundaries to prevent reinforcement of unwanted behavior.",
    },
    {
      title: "Encourage Self-Soothing Techniques",
      description:
        "Use calming tools like music, sensory activities, or breathing exercises.",
    },
  ];

  const symptoms = {
    physical: [
      "Crying, screaming, or shouting",
      "Stomping, kicking, or throwing objects",
      "Holding breath or rapid breathing (hyperventilation)",
      "Tense muscles and clenched fists",
      "Hitting others or attempting to flee",
    ],
    emotional: [
      "Intense frustration or anger",
      "Feelings of helplessness or being trapped",
      "Sudden mood swings or emotional outbursts",
      "Difficulty calming down after an emotional trigger",
    ],
    behavioral: [
      "Refusing to obey instructions",
      "Ignoring attempts to comfort or calm them",
      "Physical or verbal aggression",
      "Overreacting to gain attention",
      "Repeating tantrum behaviors when demands are unmet",
    ],
    cognitive: [
      "Rigid thinking and resistance to change",
      "Negative thoughts about the situation or others",
      "Poor problem-solving and rationalization skills",
      "Blaming others for their frustration",
    ],
  };

  type SymptomCategory = keyof typeof symptoms;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* ASPD Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
          What Are Temper Tantrums ?
        </h2>
        <Image
          src="/diseases-banner/temper.webp"
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
          src="/diseases-banner/temper.webp"
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
        <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
          What Are Temper Tantrums ?
        </h2>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Temper tantrums are emotional outbursts usually characterized by crying, screaming, kicking, and other physical or verbal expressions of frustration. They are most common in young children but can also occur in older individuals who struggle to manage their emotions.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            These outbursts often result from unmet needs, frustration, or difficulty expressing feelings. Understanding the causes, symptoms, and ways to manage temper tantrums is essential for promoting healthier emotional responses.
          </p>
        </div>
      </section>

      {/* Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Causes of Temper Tantrums
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
          Temper tantrums can arise from a variety of psychological, developmental, and environmental factors. Common causes include:
        </p>

        <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 mb-40">
          {/* Technique Card 1 */}
          <div className="[perspective:1000px] cursor-pointer ">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">
                  Frustration and Communication Difficulties
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Young children or those with limited communication skills may throw tantrums when unable to express their needs or feelings.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 2 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">
                  Unmet Needs or Desires
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  When expectations are not met, tantrums may serve as an expression of disappointment or frustration.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 3 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0]  w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">
                  Oversimulation, Hunger, or Fatigue
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Excessive stimulation, hunger, or lack of sleep can lower frustration tolerance and increase tantrum likelihood.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 4 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">
                  Attention-Seeking
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Sometimes tantrums are triggered by feelings of neglect or a desire to gain attention from caregivers, peers, or authority figures.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 5 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">
                  Poor Emotional Regulation Skills
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Some individuals lack effective coping mechanisms to manage stress and frustration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mb-0">
          {/* Technique Card 6 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">
                  Learned Behavior
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  If tantrums have previously resulted in attention or rewards, individuals may use them to achieve their goals.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 7 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">
                  Medical or Psychological Conditions
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Conditions like ADHD, autism, or sensory processing disorders can lead to more frequent and intense tantrums.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 8 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">
                  Changes in Routine or Environment
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Disruptions in daily routines or sudden changes in the environment can cause anxiety and frustration, resulting in tantrums.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Section */}
      <section className="bg-white w-full h-full lg:px-60 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Symptoms of Temper Tantrums
        </h2>

        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Symptoms of temper tantrums can vary in severity and duration but typically include:
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
              src={`/diseases/temper/${
                activeTab === "physical"
                  ? "1"
                  : activeTab === "emotional"
                  ? "2"
                  : activeTab === "behavioral"
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

      {/*  Links  */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-30 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}
        >
          Effective Strategies for Managing Temper Tantrums
        </h2>
        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
          Managing temper tantrums effectively requires a combination of prevention, emotional regulation, and behavioral strategies.
        </p>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {temperSolutions.map((item, index) => (
            <div
              key={index}
              className="bg-[#0E7EA0] rounded-3xl text-white text-center"
            >
              <Image
                src={`/diseases/temperv2/${index + 1}.webp`}
                alt={item.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
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

export default ChildhoodDepression;
