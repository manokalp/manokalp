"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css";

const ChildhoodAnxiety = () => {
  const [activeTab, setActiveTab] = useState("physical");

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* ASPD Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
          What is Childhood Anxiety?
        </h2>
        <Image
          src="/diseases-banner/childhoodanxiety.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0"
        />
      </div>

      {/* ASPD Hero Mobile  */}
      <div className="w-full lg:hidden block text-center ">
        <Image
          src="/diseases-banner/childhoodanxiety.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full     z-0"
        />
        <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
          What is Childhood Anxiety?
        </h2>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
          <h2 className="lg:text-[4.0vw] text-[8.5vw] font-bold font-[playfull]"></h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Childhood anxiety is a common mental health disorder that occurs in
            children of various ages and backgrounds. Although it is natural for
            children to have occasional fears and worries, excessive anxiety can
            disrupt their daily functioning, school performance, and social
            relationships.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Anxiety in children can be expressed in different forms, such as
            chronic nervousness, avoidance behaviors, and somatic symptoms.
            Learning about the causes, symptoms, and remedies for child anxiety
            is critical for parents, caregivers, and educators to enable
            children to manage their feelings well and become resilient.
          </p>
        </div>

        <Link
          href="/"
          className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] "
        >
          Know More
        </Link>
      </section>

      {/* Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Causes of Child Anxiety
        </h2>
        <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">
          Childhood anxiety can be caused by a combination of genetic,
          environmental, and psychological factors. Some of the most prevalent
          causes are:
        </p>

        <div className="grid lg:grid-cols-7 grid-cols-1 gap-4 mb-60">
          {/* Technique Card 1 */}
          <div className="[perspective:1000px] cursor-pointer ">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Genetic Predisposition
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                   Children whose family has a history of anxiety or mental
                  illness have a higher chance of developing anxiety.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 2 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Brain Chemistry and Development
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Dysregulation of neurotransmitters like serotonin and dopamine
                  can lead to increased anxiety in children.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 3 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0]  w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Trauma and Stressful Life Events
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Having experienced traumatic events, including a divorce of
                  parents, bullying, or the loss of a parent, leads to anxiety
                  in children.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 4 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Parental Overprotectiveness and Influence
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Overprotective or overly anxious parents tend to reinforce
                  anxiety in children unwittingly.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 5 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Academic Pressures
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Fear of failure, social interactions at school, and academic
                  expectations place immense stress and anxiety on children.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 6 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Separation Anxiety
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Fear of being separated from a caregiver is normal in young
                  children but can evolve into separation anxiety disorder if
                  continued.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 7 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Environmental and Societal Factors
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Exposure to negative news, family conflict, or unsafe
                  environments can contribute to childhood anxiety.
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
          Symptoms of Childhood Anxiety
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Anxiety in children appears in the form of a mix of physical,
          emotional, and behavioral symptoms. Some of the most frequent signs
          are:
        </p>
        
        {/* Tab Buttons */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
          <button
            onClick={() => setActiveTab("physical")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "physical"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Physical Symptoms
          </button>
          <button
            onClick={() => setActiveTab("emotional")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "emotional"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Emotional Symptoms
          </button>
          <button
            onClick={() => setActiveTab("behavioral")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "behavioral"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Behavioral Symptoms
          </button>
          <button
            onClick={() => setActiveTab("cognitive")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "cognitive"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Cognitive Symptoms
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Physical Symptoms Tab */}
          {activeTab === "physical" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Stomachaches, headaches, or nausea
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Rapid heartbeat and shortness of breath
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Sweating or trembling
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Restlessness and tiredness
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Difficulty sleeping or frequent nightmares
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/3933904/pexels-photo-3933904.jpeg"
                  alt="Child experiencing physical symptoms of anxiety"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Emotional Symptoms Tab */}
          {activeTab === "emotional" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Excessive worry and fear
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Irritability or mood swings
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Feeling overwhelmed or panicky
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Intense fear of specific situations or objects
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Persistent feelings of dread or impending danger
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/3807735/pexels-photo-3807735.jpeg"
                  alt="Child showing emotional distress from anxiety"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Behavioral Symptoms Tab */}
          {activeTab === "behavioral" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Avoidance of certain activities or places
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Clinginess or difficulty separating from parents
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Refusing to go to school or social gatherings
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Tantrums, crying, or freezing in stressful situations
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Seeking constant reassurance or approval
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/3807753/pexels-photo-3807753.jpeg"
                  alt="Child displaying behavioral symptoms of anxiety"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Cognitive Symptoms Tab */}
          {activeTab === "cognitive" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Negative thinking patterns or catastrophizing
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Difficulty concentrating or mind going blank
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Perfectionism or fear of making mistakes
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Overthinking or obsessing over details
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Excessive self-criticism or worry about judgment
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg"
                  alt="Child showing signs of cognitive anxiety symptoms"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}
        </div>
      </section>

{/* Solutions in Managing Childhood Anxiety */}
<section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
  <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}>
    Solutions in Managing Childhood Anxiety
  </h2>
  <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
    Managing childhood anxiety effectively requires a collaborative plan that includes parents, teachers, and mental health clinicians. Below are some strategies useful in reducing child anxiety:
  </p>
  <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">

    {/* Card 1 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/8653951/pexels-photo-8653951.jpeg" alt="parent listening to child" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Promoting Open Communication</h3>
        <p className="text-sm">Allowing children a secure environment to express fears helps them feel heard and comforted.</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/7447266/pexels-photo-7447266.jpeg" alt="child doing breathing exercise" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Education on Relaxation Techniques</h3>
        <p className="text-sm">Deep breathing, mindfulness, and guided imagery assist anxious children in relaxing their minds.</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/3810789/pexels-photo-3810789.jpeg" alt="family planning daily routine" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Developing a Routine</h3>
        <p className="text-sm">Structured schedules and habits help give anxious children a sense of stability and security.</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/4098285/pexels-photo-4098285.jpeg" alt="therapy session teaching coping skills" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Developing Coping Skills</h3>
        <p className="text-sm">Teaching children problem-solving and emotional control techniques helps them better manage anxiety.</p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9" alt="child gradually encountering fear with support" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Exposure to Fears Gradually</h3>
        <p className="text-sm">Exposing children to fears in small steps can decrease avoidance and build confidence.</p>
      </div>
    </div>

    {/* Card 6 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/4065905/pexels-photo-4065905.jpeg" alt="child being active and healthy snack" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Healthy Lifestyle Habits</h3>
        <p className="text-sm">A balanced diet, regular exercise, and proper sleep contribute to overall emotional well‑being.</p>
      </div>
    </div>

    {/* Card 7 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/4065907/pexels-photo-4065907.jpeg" alt="child unplugging from screen" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Restricting Screen Use & Stressful Info</h3>
        <p className="text-sm">Limiting exposure to upsetting news and social media can reduce sources of anxiety.</p>
      </div>
    </div>

    {/* Card 8 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/7008012/pexels-photo-7008012.jpeg" alt="child receiving praise and encouragement" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Positive Reinforcement</h3>
        <p className="text-sm">Praising efforts in managing anxiety encourages children to continue using coping strategies.</p>
      </div>
    </div>

    {/* Card 9 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/4145035/pexels-photo-4145035.jpeg" alt="parent modeling calm behavior" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Demonstrating Calm & Positive Actions</h3>
        <p className="text-sm">Adults can model stress management, reinforcing constructive emotional responses.</p>
      </div>
    </div>

    {/* Card 10 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/7008011/pexels-photo-7008011.jpeg" alt="child with therapist for guidance" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Pursuing Professional Guidance</h3>
        <p className="text-sm">When anxiety impacts daily functioning, a child psychologist or therapist can provide expert advice.</p>
      </div>
    </div>

    {/* Card 11 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg" alt="child in CBT session" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Cognitive‑Behavioral Therapy (CBT)</h3>
        <p className="text-sm">CBT helps shift negative thinking and builds coping skills—highly effective for anxious youth.</p>
      </div>
    </div>

    {/* Card 12 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/7008009/pexels-photo-7008009.jpeg" alt="child with supportive medication context" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Medication When Needed</h3>
        <p className="text-sm">In certain cases, medication alongside therapy and healthy habits may be advised under supervision.</p>
      </div>
    </div>

  </div>
</section>


      {/* Footer Section */}
      {/* Prognosis and Future Outlook Section*/}
      <section className="bg-[#FFD266] w-full h-full lg:px-80 px-10 lg:pt-20 lg:pb-[55vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
        <h2
          className={`text-[#0E7EA0] lg:text-[5vw] text-[8vw] font-bold ${playfair.className} mb-10`}
        >
          Conclusion
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
          <p>
            Anxiety in children is a critical issue that can affect a
            child&apos;s emotional and psychological growth if not treated.
            Knowing its causes and symptoms, parents, educators, and caregivers
            can take decisive action to assist children to overcome their
            anxiety in the most effective way. With proper intervention,
          </p>
          <p>
            children can be helped to develop resilience, confidence, and coping
            mechanisms that will carry them through adulthood. Childhood anxiety
            management needs patience, consistency, and a warm environment, but
            if managed well, children can enjoy happy and worry-free lives.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ChildhoodAnxiety;
