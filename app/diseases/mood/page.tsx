"use client";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css";

const Mood = () => {
  const [activeTab, setActiveTab] = useState("depressive");

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* ASPD Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
          Mood Disorder
        </h2>
        <Image
          src="/diseases-banner/mood.webp"
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
          src="/diseases-banner/mood.webp"
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
          Mood Disorder
        </h2>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
       
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Mood disorders are a category of mental health conditions that primarily affect an individual&apos;s emotional state and regulation. They cause persistent mood disturbances that range from prolonged sadness and hopelessness in depression to episodes of elevated energy and euphoria in bipolar disorder.
          </p>

          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Mood disorders significantly impact daily functioning, interpersonal relationships, and overall quality of life. Understanding their causes, symptoms, and treatment options is essential for effective management and recovery.
          </p>
        </div>

        
      </section>

      {/* Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Causes of Mood Disorders
        </h2>
        <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">
          Mood disorders result from a complex interaction of biological, psychological, and environmental factors. The most frequent causes are:
        </p>

        <div className="grid lg:grid-cols-7 grid-cols-1 gap-4 mb-60">
          {/* Technique Card 1 */}
          <div className="[perspective:1000px] cursor-pointer ">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Genetic Factors
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  A family history of mood disorders, such as depression or bipolar disorder, increases the risk of developing these conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 2 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Brain Chemistry and Neurotransmitters
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Imbalances in neurotransmitters such as serotonin, dopamine, and norepinephrine, which are crucial for mood regulation, can contribute to mood disorders.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 3 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0]  w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Hormonal Changes
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Hormonal fluctuations during puberty, pregnancy, menopause, or due to thyroid disorders can significantly impact mood stability.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 4 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Trauma and Stress
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Emotional trauma, abuse, major life transitions, or chronic stress can trigger mood disorders or exacerbate existing conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 5 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Medical Conditions
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Medical conditions such as cardiovascular disease, diabetes, and neurological disorders are associated with increased risk of developing depression and other mood disorders.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 6 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Substance Abuse
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Alcohol and substance abuse can alter brain chemistry, potentially causing or worsening mood disorders.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 7 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Lack of Social Support
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Social isolation, loneliness, and absence of supportive relationships can contribute to the development of depressive symptoms.
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
          Symptoms of Mood Disorders
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Mood disorders manifest in various ways, affecting emotions, behavior, and physical well-being. While symptoms vary depending on the specific disorder, common signs include:
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
          <button
            onClick={() => setActiveTab("depressive")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "depressive"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Depressive Symptoms
          </button>
          <button
            onClick={() => setActiveTab("manic")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "manic" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"
            }`}
          >
            Manic Symptoms
          </button>
          <button
            onClick={() => setActiveTab("cycling")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "cycling"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Cycling Between Moods
          </button>
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
        </div>

        {/* Tab Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Depressive Symptoms Tab */}
          {activeTab === "depressive" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Loss of interest in previously enjoyable activities
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Fatigue and lack of energy
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Changes in weight and appetite
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Sleep disturbances (insomnia or hypersomnia)
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Thoughts of death or suicide
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Feelings of worthlessness or excessive guilt
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/6753175/pexels-photo-6753175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Depressive symptoms visualization"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Manic Symptoms Tab */}
          {activeTab === "manic" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Elevated energy levels and restlessness
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Elevated mood, euphoria, or irritability
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Racing thoughts and rapid speech
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Decreased need for sleep
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Impulsive behavior and poor judgment
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Grandiose beliefs or delusions
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg"
                  alt="Manic symptoms visualization"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Cycling Between Moods Tab */}
          {activeTab === "cycling" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Alternating periods of depression and mania
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Unpredictable mood changes
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Mixed episodes with features of both depression and mania
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Rapid cycling between emotional states
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Difficulty maintaining stable relationships
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Inconsistent performance at work or school
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"
                  alt="Cycling between moods visualization"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Physical Symptoms Tab */}
          {activeTab === "physical" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Headaches or unexplained aches and pains
                  </li>
                  <li className="mb-8 border-b-[2px]">Digestive problems</li>
                  <li className="mb-8 border-b-[2px]">
                    Changes in appetite and weight
                  </li>
                  <li className="mb-8 border-b-[2px]">Sleep disturbances</li>
                  <li className="mb-8 border-b-[2px]">Fatigue or low energy</li>
                  <li className="mb-8 border-b-[2px]">
                    Psychomotor agitation or retardation
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/3807752/pexels-photo-3807752.jpeg"
                  alt="Physical symptoms visualization"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Solutions for Managing Mood Disorders */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold ${playfair.className}`}
        >
          Solutions for Managing Mood Disorders
        </h2>
        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
          Mood disorders require a comprehensive treatment approach that combines therapy, lifestyle modifications, and when appropriate, medication. Some effective strategies are:
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {/* Card 1: Psychotherapy and Counseling */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <img
              src="https://images.pexels.com/photos/6325545/pexels-photo-6325545.jpeg"
              alt="counselor talking with patient"
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Psychotherapy and Counseling
              </h3>
              <p className="text-sm">
                Cognitive‑Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and other therapeutic approaches can help individuals manage their mood symptoms effectively.
              </p>
            </div>
          </div>

          {/* Card 2: Medication */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <img
              src="https://images.pexels.com/photos/4052233/pexels-photo-4052233.jpeg"
              alt="pills and prescription bottle"
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Medication</h3>
              <p className="text-sm">
                Antidepressants, mood stabilizers, and antipsychotic medications may be prescribed to help regulate brain chemistry.
              </p>
            </div>
          </div>

          {/* Card 3: Healthy Lifestyle Choices */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <img
              src="https://images.pexels.com/photos/414886/pexels-photo-414886.jpeg"
              alt="healthy food and exercise outdoors"
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Healthy Lifestyle Choices
              </h3>
              <p className="text-sm">
                Exercise, nutrition, and quality sleep support mood regulation
                and brain health.
              </p>
            </div>
          </div>

          {/* Card 4: Stress Management Techniques */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <img
              src="https://images.pexels.com/photos/4057727/pexels-photo-4057727.jpeg"
              alt="person meditating at sunset"
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Stress Management Techniques
              </h3>
              <p className="text-sm">
                Meditation, mindfulness, breathing exercises, and journaling
                build emotional resilience.
              </p>
            </div>
          </div>

          {/* Card 5: Social Support */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <img
              src="https://images.pexels.com/photos/3184450/pexels-photo-3184450.jpeg"
              alt="friends supporting each other"
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Social Support</h3>
              <p className="text-sm">
                Staying connected with friends, family, or support groups offers
                emotional backing and belonging.
              </p>
            </div>
          </div>

          {/* Card 6: Routine and Structure */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <img
              src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
              alt="organized planner and morning routine"
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Routine and Structure</h3>
              <p className="text-sm">
                Creating daily schedules introduces stability and reduces mood
                fluctuations.
              </p>
            </div>
          </div>

          {/* Card 7: Avoiding Triggers */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <img
              src="https://images.pexels.com/photos/5946155/pexels-photo-5946155.jpeg"
              alt="person avoiding alcohol and stress"
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Avoiding Triggers</h3>
              <p className="text-sm">
                Reducing alcohol/drug use and identifying stressors helps
                maintain emotional stability.
              </p>
            </div>
          </div>

          {/* Card 8: Professional Assistance When Necessary */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <img
              src="https://images.pexels.com/photos/4498165/pexels-photo-4498165.jpeg"
              alt="psychiatrist discussing treatment plan"
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Professional Assistance When Necessary
              </h3>
              <p className="text-sm">
                Psychiatric or therapeutic care ensures personalized plans and
                crisis intervention support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {/* Prognosis and Future Outlook Section*/}
      <section className="bg-[#FFD266] w-full h-full lg:px-80 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}
        >
          Conclusion
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
          <p>
            Autism Spectrum Disorder is a highly complex and varied condition
            with implications for how the individual experiences life.
            Difficulties certainly present themselves, yet early intervention,
            individualized therapy, and proper environment can improve an
            individual&apos;s capacity for survival immensely.
          </p>
          <p>
            By emphasizing strengths, promoting inclusivity, and offering proper
            resources, society can build a more accommodating and accepting
            world for those with autism. Greater awareness and education about
            ASD can contribute to making sure that those with autism get the
            help that they need to live happy and fulfilling lives
          </p>
        </div>
      </section>
    </main>
  );
};

export default Mood;
