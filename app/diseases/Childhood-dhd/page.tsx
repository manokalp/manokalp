"use client";
import Image from "next/image";
// import Link from "next/link"; 
import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css";

const ChildhoodADHD = () => {
  const [activeTab, setActiveTab] = useState("inattention");

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* ASPD Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
          What is Childhood ADHD?
        </h2>
        <Image
          src="/diseases-banner/childhoodadhd.webp"
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
          src="/diseases-banner/childhoodadhd.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full     z-0"
        />
        <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
          What is Childhood ADHD?
        </h2>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
     
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Attention-Deficit/Hyperactivity Disorder (ADHD) in children is a
            neurodevelopmental disorder characterized by persistent patterns of
            inattention, hyperactivity, and impulsivity that significantly
            interfere with the child&apos;s ability to function in daily life.
          </p>

          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Children with ADHD often have difficulty focusing on tasks, even
            those they enjoy, and may be overly energetic, impulsive, and
            struggle to complete tasks or follo17.w instructions. These
            behaviors are present in various situations—at school, at home, and
            with friends—and can disrupt emotional, social, and intellectual
            development.
          </p>
        </div>

        
      </section>

      {/* Section 2 para  */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[8vw] ${playfair.className} mb-8`}
        >
          Is ADHD a Serious Problem?
        </h2>

        <div className="flex flex-col lg:flex-row justify-between gap-8 text-left">
          <div className="lg:w-1/2">
            <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">
              ADHD is a serious condition that affects about 2.2% of children
              worldwide. While many children have occasional lapses in attention
              or bursts of energy, children with ADHD experience these
              challenges consistently. These difficulties are not limited to
              schoolwork but also extend to emotional regulation. Children with
              ADHD have heightened emotional reactions and struggle to manage
              frustration, anger, sadness, and nervousness.{" "}
            </p>
          </div>
          <div className="lg:w-1/2">
            <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">
              These exaggerated emotions can make it harder for them to develop
              socially and emotionally, and as they grow, they may not mature at
              the same rate as their peers. If left untreated, ADHD can lead to
              academic failure, low self-esteem, depression, anxiety, and even
              an increased risk of self-harm or suicidal thoughts.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 para  */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[8vw] ${playfair.className} mb-8`}
        >
          Can I Wait it Out and Delay ADHD Treatment?
        </h2>

        <div className="flex flex-col lg:flex-row justify-between gap-8 text-left">
          <div className="lg:w-1/2">
            <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">
              Waiting for ADHD to &quot;go away&quot; is not advisable. Without
              treatment, children with ADHD may continue to struggle with
              emotional regulation, frustration tolerance, and completing tasks,
              which can lead to long-term challenges in both personal and
              academic life. Untreated ADHD can cause children to experience
              feelings of failure{" "}
            </p>
          </div>
          <div className="lg:w-1/2">
            <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">
              and hopelessness, significantly impacting their self-esteem and
              increasing the likelihood of mental health issues. Moreover, ADHD
              tends to persist into adulthood, making it harder for individuals
              to succeed in professional settings, maintain relationships, and
              lead fulfilling lives. Early intervention is crucial.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 para  */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[8vw] ${playfair.className} mb-8`}
        >
          What Causes ADHD in Children?
        </h2>
        <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">
          The causes of ASD are still unknown, but it is said to be the result
          of a combination of genetic and environmental factors. The major
          factors that contribute to autism are:
        </p>
        <div className="flex flex-col lg:flex-row justify-between gap-8 text-left">
          <div className="lg:w-1/2">
            <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">
              ADHD is thought to result from a combination of genetic and
              biological factors. Research suggests that certain imbalances in
              brain chemicals, particularly noradrenaline, contribute to ADHD
              symptoms.
            </p>
          </div>
          <div className="lg:w-1/2">
            <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium">
              High-risk factors include maternal exposure to toxins like lead,
              alcohol, or tobacco during pregnancy, as well as premature birth
              or low birth weight. While environmental factors like unhealthy
              eating habits or family stress may exacerbate symptoms, they are
              not the primary causes of ADHD.
            </p>
          </div>
        </div>
      </section>

      {/*  Section */}
      <section className="bg-white w-full h-full lg:px-60 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}
        >
          Signs and Symptoms of ADHD in Children
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          ADHD manifests in three main areas: inattention, hyperactivity, and
          impulsivity. These symptoms can appear independently in many children
          but are chronic and pervasive in children with ADHD. Here are some
          common signs to watch for:
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
          <button
            onClick={() => setActiveTab("inattention")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "inattention"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Inattention
          </button>
          <button
            onClick={() => setActiveTab("hyperactivity")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "hyperactivity"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Hyperactivity
          </button>
          <button
            onClick={() => setActiveTab("impulsivity")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "impulsivity"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Impulsivity
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
        </div>

        {/* Tab Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Inattention Tab */}
          {activeTab === "inattention" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Difficulty focusing on tasks or details
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Frequent careless mistakes in schoolwork
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Trouble following instructions and staying organized
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Easily distracted by external stimuli
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Losing or forgetting items
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Inability to focus even on enjoyable tasks
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Appears not to listen when spoken to directly
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg"
                  alt="Child struggling with focus and attention"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Hyperactivity Tab */}
          {activeTab === "hyperactivity" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Constant fidgeting or squirming
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Inability to stay seated when expected to
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Running or climbing excessively in inappropriate situations
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Difficulty playing quietly or engaging in leisure activities
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Often &quot;on the go&quot; as if &quot;driven by a motor&quot;
                  </li>
                  <li className="mb-8 border-b-[2px]">Excessive talking</li>
                  <li className="mb-8 border-b-[2px]">
                    Difficulty remaining still for extended periods
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/8535630/pexels-photo-8535630.jpeg"
                  alt="Child showing hyperactive behavior"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Impulsivity Tab */}
          {activeTab === "impulsivity" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Blurting out answers before questions are completed
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Difficulty waiting for their turn
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Interrupting or intruding on others&apos; conversations or games
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Acting without thinking about consequences
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Difficulty delaying gratification
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Making decisions hastily without considering options
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Engaging in potentially risky behaviors
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/3662845/pexels-photo-3662845.jpeg"
                  alt="Child displaying impulsive behavior"
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
                    Low frustration tolerance
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Emotional outbursts or temper tantrums
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Mood swings and irritability
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Difficulty handling criticism
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Low self-esteem and feelings of inadequacy
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Sensitivity to rejection
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Trouble regulating emotions appropriately for their age
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/3807737/pexels-photo-3807737.jpeg"
                  alt="Child experiencing emotional difficulties"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}
        </div>
        <p className="text-black lg:text-[1.5vw] text-[3vw] mt-10 mb-10">
          If a child consistently exhibits these behaviors, it&apos;s important to
          seek a professional evaluation to determine if ADHD is the cause.
        </p>
      </section>

      {/* Treatment of ADHD in Children */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold mb-10 ${playfair.className}`}
        >
          Treatment of ADHD in Children
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Managing ADHD involves a combination of behavioral strategies,
          lifestyle changes, and, in some cases, medication. The goal is to help
          children develop self-regulation, improve focus, and manage their
          emotions effectively.
        </p>
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-2">
          {/* Card 1 */}
          <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">
            <Image
              src="https://images.pexels.com/photos/5863369/pexels-photo-5863369.jpeg"
              alt="Child in behavior therapy session"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Behavior Therapy</h3>
              <p className="text-sm">
                Focuses on teaching children strategies for managing impulsive
                behaviors and improving attention. This often involves setting
                routines, positive reinforcement, and teaching organizational
                skills.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">
            <Image
              src="https://images.pexels.com/photos/7282805/pexels-photo-7282805.jpeg"
              alt="Parent and child working together"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Parenting Techniques</h3>
              <p className="text-sm">
                Parents can benefit from learning how to manage ADHD-related
                behaviors through consistent and structured routines,
                encouragement of healthy habits (e.g., adequate sleep, limited
                screen time), and teaching children how to focus on tasks.
                Behavior modification techniques, such as rewards for staying on
                task, are often effective.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/4058218/pexels-photo-4058218.jpeg"
              alt="ADHD medication"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Medication</h3>
              <p className="text-sm">
                In some cases, medication may be recommended to help manage
                symptoms, particularly for children with more severe ADHD.
                Stimulants and non-stimulants can help improve focus and reduce
                hyperactivity and impulsivity.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/7176307/pexels-photo-7176307.jpeg"
              alt="Parent learning ADHD management strategies"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Therapy Goals for Parents{" "}
              </h3>
              <p className="text-sm">
                Learn about ADHD and how to manage behavior effectively.
                Implement behavior reinforcement strategies. Develop skills for
                crisis management and emotional regulation. Teach communication
                and social skills. Keep calm and consistent in addressing
                challenging behaviors{" "}
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/8535243/pexels-photo-8535243.jpeg"
              alt="Child in therapeutic activity"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Therapy Goals for Children:
              </h3>
              <p className="text-sm">
                Channel excess energy in a positive way. Develop frustration
                tolerance and emotional regulation. Set and follow routines.
                Improve self-esteem and social skills. Build assertive
                communication skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {/* Prognosis and Future Outlook Section*/}
      <section className="bg-[#FFD266] w-full h-full lg:px-40 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-55vw] text-center z-0 ">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}
        >
          Support for ADHD
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
          <p>
            ADHD is a lifelong condition, and while treatment can significantly
            help children manage symptoms, ongoing support is essential. Parent
            education, behavior therapy, cognitive therapy, and specialized
            interventions all play a role in maximizing a child&apos;s potential.
          </p>
          <p>
            {" "}
            By recognizing ADHD early and working with professionals, children
            can lead more successful, fulfilling lives, both academically and
            socially. Through consistent, mindful parenting and a structured
            support system, children with ADHD can learn to cope with their
            challenges, build self-confidence, and achieve their goals.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ChildhoodADHD;
