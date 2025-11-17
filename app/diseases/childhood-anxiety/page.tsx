"use client";
import Image from "next/image";
// import Link from "next/link";
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
          src="/diseases-banner/childhoodanxiety.webp"
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
          What is Childhood Anxiety?
        </h2>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
       
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Childhood anxiety disorder is a prevalent mental health condition affecting children across different ages and backgrounds. While occasional fears are normal, excessive childhood anxiety can severely disrupt daily activities, academic performance, and social interactions.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Understanding the causes, symptoms, and treatment options for childhood anxiety is essential for parents, caregivers, and educators to support children&apos;s emotional resilience.
          </p>
        </div>

        
      </section>

      {/* Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Causes of Child Anxiety
        </h2>
        <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">
          Childhood anxiety develops due to a combination of genetic predisposition, environmental influences, and psychological factors. Key causes of childhood anxiety include:
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
                  Children with a family history of anxiety or mental health disorders are more likely to develop childhood anxiety.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 2 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Brain Chemistry
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Imbalances in neurotransmitters such as serotonin and dopamine contribute to childhood anxiety symptoms.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 3 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0]  w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Trauma and Stress
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Experiences like parental divorce, bullying, or loss of a loved one often trigger anxiety in children.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 4 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Parental Influence
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Overprotective or anxious parenting styles can unintentionally increase anxiety in children.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 5 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Academic Pressure
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Fear of failure and social challenges at school contribute significantly to childhood anxiety.
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
                  While normal in toddlers, prolonged fear of caregiver separation may develop into separation anxiety disorder.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 7 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Environmental Factors
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Exposure to family conflict, unsafe surroundings, or distressing news increases risk of childhood anxiety.
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
          Common Symptoms of Childhood Anxiety Disorder
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Children with anxiety exhibit a combination of physical, emotional, and behavioral symptoms.
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
                  <li className="mb-8 border-b-[2px]">Restlessness and fatigue</li>
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
                  <li className="mb-8 border-b-[2px]">Excessive worry about future events</li>
                  <li className="mb-8 border-b-[2px]">Difficulty concentrating or focusing</li>
                  <li className="mb-8 border-b-[2px]">Frequent crying or emotional outbursts</li>
                  <li className="mb-8 border-b-[2px]">Irritability and mood swings</li>
                  <li className="mb-8 border-b-[2px]">Low self-esteem and feelings of helplessness</li>
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
                  <li className="mb-8 border-b-[2px]">Avoidance of social or school activities</li>
                  <li className="mb-8 border-b-[2px]">Clinging excessively to caregivers</li>
                  <li className="mb-8 border-b-[2px]">Difficulty making friends or joining groups</li>
                  <li className="mb-8 border-b-[2px]">Repetitive behaviors or compulsions</li>
                  <li className="mb-8 border-b-[2px]">Frequent need for reassurance</li>
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
                  <li className="mb-8 border-b-[2px]">Persistent negative thoughts and overanalyzing situations</li>
                  <li className="mb-8 border-b-[2px]">Difficulty making decisions due to worry</li>
                  <li className="mb-8 border-b-[2px]">Inability to relax or disengage from fearful thoughts</li>
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
    Effective Strategies for Managing Childhood Anxiety
  </h2>
  <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
    Managing childhood anxiety requires a collaborative approach involving parents, educators, and mental health professionals.
  </p>
  <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">

    {/* Card 1 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/8653951/pexels-photo-8653951.jpeg" alt="parent listening to child" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Open Communication</h3>
        <p className="text-sm">Creating a safe space for children to express fears helps them feel supported and understood.</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/7447266/pexels-photo-7447266.jpeg" alt="child doing breathing exercise" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Relaxation Techniques</h3>
        <p className="text-sm">Teaching deep breathing, mindfulness, and guided imagery helps children reduce anxiety.</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/3810789/pexels-photo-3810789.jpeg" alt="family planning daily routine" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Establishing Routines</h3>
        <p className="text-sm">Consistent daily schedules provide stability and reduce anxiety in children.</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/4098285/pexels-photo-4098285.jpeg" alt="therapy session teaching coping skills" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Coping Skills</h3>
        <p className="text-sm">Teaching problem-solving and emotional regulation empowers children to handle anxiety.</p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9" alt="child gradually encountering fear with support" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Gradual Exposure</h3>
        <p className="text-sm">Slowly introducing feared situations reduces avoidance and builds confidence.</p>
      </div>
    </div>

    {/* Card 6 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/4065905/pexels-photo-4065905.jpeg" alt="child being active and healthy snack" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Healthy Habits</h3>
        <p className="text-sm">Balanced nutrition, physical activity, and adequate sleep support emotional wellbeing.</p>
      </div>
    </div>

    {/* Card 7 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/4065907/pexels-photo-4065907.jpeg" alt="child unplugging from screen" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Limiting Screen Time</h3>
        <p className="text-sm">Reducing exposure to distressing news and social media decreases anxiety triggers.</p>
      </div>
    </div>

    {/* Card 8 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/7008012/pexels-photo-7008012.jpeg" alt="child receiving praise and encouragement" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Positive Reinforcement</h3>
        <p className="text-sm">Encouraging children’s efforts boosts motivation to develop coping skills.</p>
      </div>
    </div>

    {/* Card 9 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/4145035/pexels-photo-4145035.jpeg" alt="parent modeling calm behavior" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Modeling Calm Behavior</h3>
        <p className="text-sm">Caregivers managing their own stress set positive examples for anxious children.</p>
      </div>
    </div>

    {/* Card 10 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/7008011/pexels-photo-7008011.jpeg" alt="child with therapist for guidance" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Professional Help</h3>
        <p className="text-sm">Consulting a child psychologist is essential when anxiety severely disrupts daily life.</p>
      </div>
    </div>

    {/* Card 11 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg" alt="child in CBT session" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Cognitive‑Behavioral Therapy (CBT)</h3>
        <p className="text-sm">CBT helps children change negative thinking patterns and develop effective coping strategies.</p>
      </div>
    </div>

    {/* Card 12 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <img src="https://images.pexels.com/photos/7008009/pexels-photo-7008009.jpeg" alt="child with supportive medication context" className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Medication</h3>
        <p className="text-sm">In severe cases, doctors may prescribe medication alongside therapy to manage childhood anxiety symptoms.</p>
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
            Childhood anxiety disorder can significantly impact a child’s emotional and psychological development if untreated. By recognizing its causes and symptoms early, parents, educators, and caregivers can implement effective strategies and professional treatments to help children overcome anxiety. With consistent support and appropriate interventions, children can build resilience, confidence, and healthy coping skills that improve their quality of life and future wellbeing.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ChildhoodAnxiety;
