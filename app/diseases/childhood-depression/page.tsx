"use client";
import Image from "next/image";
// import Link from "next/link"
import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css";

const ChildhoodDepression = () => {
  const [activeTab, setActiveTab] = useState<SymptomCategory>("physical");
  const symptoms = {
    physical: [
      "Stomachaches, headaches, or nausea",
      "Rapid heartbeat and shortness of breath",
      "Sweating or trembling",
      "Restlessness and tiredness",
      "Difficulty sleeping or frequent nightmares",
    ],
    emotional: [
      "Persistent sadness or hopelessness",
      "Loss of interest in activities",
      "Feelings of worthlessness",
      "Excessive guilt or self-blame",
      "Frequent mood swings",
    ],
    behavioral: [
      "Social withdrawal",
      "Aggressive or defiant behavior",
      "Changes in eating habits",
      "Poor academic performance",
      "Difficulty concentrating",
    ],
    cognitive: [
      "Negative thought patterns",
      "Difficulty making decisions",
      "Poor concentration",
      "Memory problems",
      "Thoughts of death or suicide",
    ],
  };
  type SymptomCategory = keyof typeof symptoms;

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* ASPD Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
          What is Childhood Depression ?
        </h2>
        <Image
          src="/diseases-banner/childhooddepression.webp"
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
          src="/diseases-banner/childhooddepression.webp"
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
          What is Childhood Depression ?
        </h2>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Childhood depression is a significant mental health disorder affecting children and adolescents globally. Unlike normal sadness, childhood depression severely impacts emotional wellbeing, social relationships, and academic performance.
          </p>
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Children often lack the words to describe their feelings, making it vital for caregivers to recognize early signs of depression. Untreated childhood depression can lead to chronic mental health problems, affecting overall development and wellbeing. Understanding causes, symptoms, and treatments is essential for helping children recover from depression.
          </p>
        </div>
      </section>

      {/* Section */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Causes of Childhood Depression
        </h2>
        <p className="text-black lg:text-[1.0vw] text-[3.5vw] mb-10">
          Biological, psychological, and environmental factors contribute to childhood depression. Common causes of childhood depression include:
        </p>

        <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 mb-50">
          {/* Technique Card 1 */}
          <div className="[perspective:1000px] cursor-pointer ">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Genetic Factors</h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  A family history of depression or mental illness increases a child's risk of developing depression.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 2 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Brain Chemistry</h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Imbalances in neurotransmitters like serotonin and dopamine contribute to childhood depression.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 3 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0]  w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Trauma and Stress</h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Experiences such as parental divorce, abuse, neglect, bullying, or loss of a loved one often trigger depression.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 4 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Social Isolation</h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Difficulty forming friendships or social exclusion can lead to feelings of loneliness and depression.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 5 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Academic Pressure</h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Stress from schoolwork, exams, and parental expectations can contribute to childhood depression.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 mb-40 mt-20">
          {/* Technique Card 6 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Low Self-Esteem</h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Negative self-image and frequent failures increase risk of depression in children.
                </p>
              </div>
            </div>
          </div>
          {/* Technique Card 7 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Chronic Illness</h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Ongoing physical health issues may trigger emotional distress and depression.
                </p>
              </div>
            </div>
          </div>
          {/* Technique Card 8 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Substance Abuse</h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Exposure to parental substance abuse or personal experimentation raises the risk of childhood depression.
                </p>
              </div>
            </div>
          </div>
          {/* Technique Card 9 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Lack of Support</h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Insufficient emotional nurturing by caregivers can lead to feelings of neglect and depression.
                </p>
              </div>
            </div>
          </div>{" "}
          {/* Technique Card 10 */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.0vw] text-[4vw] font-bold">Bullying and Peer Pressure</h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Negative peer interactions are significant contributors to childhood depression.
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
          Common Symptoms of Childhood Depression
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Symptoms of depression in children often differ from those seen in adults.
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

          <div className="lg:w-1/2 h-[40vh] relative overflow-hidden rounded-xl">
            <Image
              src={`/diseases/childhooddepression/${
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
              objectFit="cover"
              className="transition-opacity duration-300 cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/*  Links  */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-30 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold  ${playfair.className}`}
        >
          Effective Treatments and Solutions for Childhood Depression
        </h2>
        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
          Treating childhood depression requires a comprehensive approach including emotional support, therapy, lifestyle changes, and sometimes medication.
        </p>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="/diseases/childhooddepressionv2/1.webp"
              alt="stressed person"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Early Identification and Intervention
              </h3>
              <p className="text-sm">
                Identifying symptoms at an early stage and consulting a
                professional can avoid the aggravation of depression.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="/diseases/childhooddepressionv2/2.webp"
              alt="people communicating"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Therapy and Counseling</h3>
              <p className="text-sm">
                CBT helps children reframe negative thoughts, play therapy
                enables emotional expression through play, and family therapy
                strengthens communication and support within the home
                environment.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="/diseases/childhooddepressionv2/3.webp"
              alt="people communicating"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Open Communication and Emotional Support
              </h3>
              <p className="text-sm">
                Letting children talk about their feelings without judgment can
                be relieving and comforting.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="/diseases/childhooddepressionv2/4.webp"
              alt="people communicating"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Healthy Lifestyle Changes
              </h3>
              <p className="text-sm">
                Encouraging regular exercise, balanced nutrition, and consistent
                sleep routines helps regulate mood, enhance mental stability,
                and support emotional well-being in children.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="/diseases/childhooddepressionv2/5.webp"
              alt="people communicating"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Enhancing Self-Esteem and Confidence
              </h3>
              <p className="text-sm">
                Celebrating small achievements, supporting hobbies, and teaching
                problem-solving and resilience boosts confidence and helps
                children cope better with emotional challenges.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="/diseases/childhooddepressionv2/6.webp"
              alt="people communicating"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                School-Based Support Systems
              </h3>
              <p className="text-sm">
                Schools should provide counseling access, train staff to
                recognize symptoms, and cultivate a safe, inclusive environment
                that prevents bullying and promotes mental health.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-6">
          {/* Card 7 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="/diseases/childhooddepressionv2/7.webp"
              alt="people communicating"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Medication (If Necessary)
              </h3>
              <p className="text-sm">
                In severe cases, psychiatrists may prescribe antidepressants,
                ensuring close monitoring to manage symptoms safely and support
                overall treatment effectiveness.
              </p>
            </div>
          </div>

          {/* Card 8 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="/diseases/childhooddepressionv2/8.webp"
              alt="people communicating"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Parental Involvement and Education
              </h3>
              <p className="text-sm">
                Educating parents, fostering emotional bonding, and using
                positive reinforcement instead of criticism strengthens a
                child&apos;s sense of support and emotional connection.
              </p>
            </div>
          </div>

          {/* Card 9 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="/diseases/childhooddepressionv2/9.webp"
              alt="people communicating"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Encouraging Social Connections
              </h3>
              <p className="text-sm">
                Helping children build friendships, engage in group activities,
                and develop communication skills promotes inclusion and counters
                feelings of isolation or loneliness.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          {/* Card 10 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="/diseases/childhooddepressionv2/10.webp"
              alt="people communicating"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Mindfulness and Relaxation Strategies
              </h3>
              <p className="text-sm">
                Mindfulness practices like breathing exercises, yoga, and
                creative therapies help children manage anxiety, reduce stress,
                and improve emotional regulation.
              </p>
            </div>
          </div>

          {/* Card 11 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="/diseases/childhooddepressionv2/11.webp"
              alt="people communicating"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Cognitive-Behavioral Therapy (CBT)</h3>
              <p className="text-sm">CBT helps children change negative thinking patterns and develop effective coping strategies.</p>
            </div>
          </div>

          {/* Card 12 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="/diseases/childhooddepressionv2/12.webp"
              alt="people communicating"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Medication When Needed</h3>
              <p className="text-sm">
                In certain situations, physicians might prescribe medicine for
                bad anxiety, but it should always be done in conjunction with
                therapy and dietary modifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {/* Prognosis and Future Outlook Section*/}
      <section className="bg-[#FFD266] w-full h-full lg:px-80 px-10 lg:pt-20 lg:pb-20 pt-20 pb-20 text-center z-0">
        <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
          <p>
            Childhood depression is a complex mental health disorder requiring early recognition and compassionate care. With support from parents, educators, and mental health professionals, children can recover and regain emotional stability. Increasing awareness and reducing stigma around childhood depression encourages timely intervention and helps children lead healthy, fulfilling lives.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ChildhoodDepression;
