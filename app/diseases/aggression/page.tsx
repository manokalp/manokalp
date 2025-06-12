"use client";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css";

const Aggression = () => {
  const [activeTab, setActiveTab] = useState("physical");

  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* ASPD Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
        Aggression
        </h2>
        <Image
          src="/diseases-banner/aggression.webp"
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
          src="/diseases-banner/aggression.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full     z-0"
        />
        <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">
        Aggression
        </h2>
      </div>

      {/* The Harsh Truth Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
       
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Anger and aggression are normal human feelings that can occur due to
            frustration, threats, or injustice. Anger per se is not a bad thing,
            but excessive or uncontrollable anger has the potential to result in
            damaging behaviors and poor relationships.
          </p>

          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Aggression, a more external form of anger, may lead to physical
            violence, verbal aggression, or emotional injury. Knowing the
            reasons, symptoms, and possible solutions for anger management is
            important to sustain emotional stability and healthy interactions
            with others.
          </p>
        </div>

        
      </section>

      {/* Section */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Causes of Aggression
        </h2>
        <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">
          Anger and aggression may be caused by a host of factors from within
          and from outside. Some of the most popular causes are:
        </p>

        <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
          {/* Technique Card 1 */}
          <div className="[perspective:1000px] cursor-pointer mb-8">
            <div className="relative w-full h-[300px] lg:h-[300px] transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full h-full rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Frustration and Stress
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full h-full rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  When people encounter challenges in the realization of
                  objectives or are overwhelmed by responsibilities, anger can
                  be a spontaneous reaction. Chronic stress can make an
                  individual more irritable and aggressive.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 2 */}
          <div className="[perspective:1000px] cursor-pointer mb-8">
            <div className="relative w-full h-[300px] lg:h-[300px] transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full h-full rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Physical or Mental Illnesses
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full h-full rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  {" "}
                  Some medical illnesses, including hormonal imbalance,
                  neurological illness, or mental illness such as depression and
                  anxiety, can be a factor for heightened irritability and
                  violence.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 3 */}
          <div className="[perspective:1000px] cursor-pointer mb-8">
            <div className="relative w-full h-[300px] lg:h-[300px] transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full h-full rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Unmet Expectations
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full h-full rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Individuals usually have expectations from circumstances,
                  relationships, or themselves. When expectations are not
                  fulfilled, it may create anger and resentment.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 4 */}
          <div className="[perspective:1000px] cursor-pointer mb-8">
            <div className="relative w-full h-[300px] lg:h-[300px] transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full h-full rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Learned Behaviour
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full h-full rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Some people are raised in a setting where aggression is a
                  normal reaction to disputes. If they have experienced or seen
                  aggressive behavior, they can learn it as a means of coping
                  with their own feelings.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 5 */}
          <div className="[perspective:1000px] cursor-pointer mb-8">
            <div className="relative w-full h-[300px] lg:h-[300px] transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full h-full rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Lack of Emotional Regulation
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full h-full rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  People who are not able to control their emotions might have
                  trouble managing anger in a proper manner, and this can result
                  in impulsive anger or aggressive behavior.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 6 */}
          <div className="[perspective:1000px] cursor-pointer mb-8">
            <div className="relative w-full h-[300px] lg:h-[300px] transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full h-full rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Substance Abuse
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full h-full rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Drinking and drug abuse decrease inhibitions and impair
                  judgment, which causes individuals to become more prone to act
                  violently or lose their temper.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 7 */}
          <div className="[perspective:1000px] cursor-pointer mb-8">
            <div className="relative w-full h-[300px] lg:h-[300px] transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full h-full rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Environmental Triggers
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full h-full rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Situational stimuli like loud noises, crowded rooms, or
                  disorganized surroundings can lead to feelings of irritation
                  and aggression.
                </p>
              </div>
            </div>
          </div>

          {/* Technique Card 8 */}
          <div className="[perspective:1000px] cursor-pointer mb-8">
            <div className="relative w-full h-[300px] lg:h-[300px] transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full h-full rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Feeling Disrespected or Threatened
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full h-full rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  When one feels insulted, belittled, or threatened physically,
                  they are likely to respond defensively with anger or
                  aggression.
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
          Solutions for Aggression
        </h2>
        <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">
          Anger and aggression can be managed with a combination of
          self-awareness, medical guidance, and personal strategies. Here are
          the key aspects to understand:
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
          <button
            onClick={() => setActiveTab("physical")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "physical"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Physical Symptoms
          </button>
          <button
            onClick={() => setActiveTab("self-image")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "self-image"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Disturbed Self-Image
          </button>
          <button
            onClick={() => setActiveTab("behavioral")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "behavioral"
                ? "bg-[#0E7EA0] text-white"
                : "bg-gray-100"
            }`}
          >
            Behavioral Symptoms
          </button>
          <button
            onClick={() => setActiveTab("cognitive")}
            className={`px-4 py-2 rounded-lg ${
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
                    Increased heart rate and blood pressure
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Tense muscles, clenched fists, or jaw clenching
                  </li>
                  <li className="mb-8 border-b-[2px]">Sweating and flushing</li>
                  <li className="mb-8 border-b-[2px]">
                    Rapid breathing or breathlessness
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Headaches or stomach pain
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Feeling hot or flushed in the face
                  </li>
                  <li className="mb-8 border-b-[2px]">Trembling or shaking</li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg"
                  alt="Physical symptoms of anger"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}

          {/* Self-Image Tab */}
          {activeTab === "self-image" && (
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="lg:w-1/2">
                <ul className="text-left text-black">
                  <li className="mb-8 border-b-[2px]">
                    Feeling shame or guilt after angry outbursts
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Viewing oneself as &quot;out of control&quot; or &quot;dangerous&quot;
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Low self-esteem related to inability to control emotions
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Fear of judgment from others about anger issues
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Identity strongly tied to being aggressive or intimidating
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Feeling misunderstood by others
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Struggling with vulnerability and showing emotions other
                    than anger
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/568025/pexels-photo-568025.jpeg"
                  alt="Self-image issues related to anger"
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
                    Yelling, screaming, or using abusive language
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Physical violence against objects (throwing things, slamming
                    doors)
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Violence directed at others (pushing, hitting, physical
                    attacks)
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Intimidating body language and threatening gestures
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Passive-aggressive behaviors (silent treatment, sabotage)
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Isolation and withdrawal from social situations
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Impulsive decision-making during angry moments
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/4100655/pexels-photo-4100655.jpeg"
                  alt="Behavioral symptoms of anger"
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
                    Racing thoughts during anger episodes
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    All-or-nothing thinking patterns
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Difficulty concentrating when angry
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Obsessive thoughts about perceived wrongs
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Catastrophizing situations (assuming the worst)
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Misinterpreting neutral situations as threats
                  </li>
                  <li className="mb-8 border-b-[2px]">
                    Rumination on past grievances
                  </li>
                </ul>
              </div>
              <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                <Image
                  src="https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg"
                  alt="Cognitive symptoms of anger"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/*  Links  */}
      <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold  ${playfair.className}`}
        >
          Solutions for Managing Aggression and Anger
        </h2>
        <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">
          Well-managed anger and aggression entail self-awareness, emotional
          management, and positive coping strategies. The following are
          effective ways of controlling and preventing anger:
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
          {/* Card 1 */}
          <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">
            <Image
              src="https://images.pexels.com/photos/4100655/pexels-photo-4100655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="stressed person"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Identify Triggers and Warning Signs
              </h3>
              <p className="text-sm">
                Becoming aware of the circumstances, individuals, or thoughts
                that trigger anger can aid in taking positive action to steer
                clear of or deal with them successfully.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="people communicating"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Use Deep Breathing and Relaxation Techniques
              </h3>
              <p className="text-sm">
                Breathing slowly and deeply and practicing mindfulness can quiet
                the body&apos;s physiological anger response. Other techniques
                like progressive muscle relaxation or meditation can be helpful
                as well.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/1339845/pexels-photo-1339845.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="people communicating"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Count to Ten</h3>
              <p className="text-sm">
                Allowing oneself a brief moment to stop and reflect before
                acting can avoid impulsive and regrettable behavior.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/774866/pexels-photo-774866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="people communicating"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Use Positive Self-Talk</h3>
              <p className="text-sm">
                Substituting negative thoughts with soothing and logical
                affirmations can decrease emotional intensity. Examples are:
                &quot;I am in control of my emotions&quot; or &quot;This
                situation does not define me.&quot;
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/5858828/pexels-photo-5858828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="people communicating"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Withdrawal Symptoms</h3>
              <p className="text-sm">
                Suffering physical and emotional pain when abstaining from the
                substance or behavior (e.g., anxiety, irritability, nausea,
                sweating).
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.unsplash.com/photo-1523978591478-c753949ff840"
              alt="people expressing emotions"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Express Anger Constructively
              </h3>
              <p className="text-sm">
                Rather than showing aggression, it is possible for people to
                assertively and respectfully express their emotions...
              </p>
            </div>
          </div>

          {/* Card 7 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
              alt="person jogging outdoors"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Get Some Exercise</h3>
              <p className="text-sm">
                Endorphins that are released with exercise can combat stress and
                depression...
              </p>
            </div>
          </div>

          {/* Card 8 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.unsplash.com/photo-1525097487452-6278ff080c31"
              alt="person relaxing with music"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Take a Break</h3>
              <p className="text-sm">
                Disengaging from an angry encounter gives time to calm down...
              </p>
            </div>
          </div>

          {/* Card 9 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="problem solving team"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Develop Problem-Solving Skills
              </h3>
              <p className="text-sm">
                Rather than ruminating on frustrations, people can set their
                minds towards solving problems...
              </p>
            </div>
          </div>

          {/* Card 10 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="friends talking"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Seek Guidance from Friends and Family
              </h3>
              <p className="text-sm">
                A conversation with a close friend, family member, or mentor can
                give emotional support...
              </p>
            </div>
          </div>

          {/* Card 11 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              alt="forgiveness and empathy"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Practice Forgiveness</h3>
              <p className="text-sm">
                Retaining anger and resentment can be mentally draining. Letting
                go of grudges helps...
              </p>
            </div>
          </div>

          {/* Card 12 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/3777940/pexels-photo-3777940.jpeg"
              alt="people laughing together"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Use Humor to Defuse Tension
              </h3>
              <p className="text-sm">
                Having a good sense of humor in stressful situations can ease
                tension...
              </p>
            </div>
          </div>

          {/* Card 13 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/1181335/pexels-photo-1181335.jpeg"
              alt="team resolving conflict"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Improve Conflict Resolution Skills
              </h3>
              <p className="text-sm">
                Learning good communication and bargaining skills can avoid
                misunderstandings...
              </p>
            </div>
          </div>

          {/* Card 14 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/5699454/pexels-photo-5699454.jpeg"
              alt="therapist talking to client"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Seek Professional Assistance if Needed
              </h3>
              <p className="text-sm">
                If anger and hostility become overpowering or destructive,
                therapy may help...
              </p>
            </div>
          </div>

          {/* Card 15 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.pexels.com/photos/8376291/pexels-photo-8376291.jpeg"
              alt="medication and doctor"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Consult Medication if Advised
              </h3>
              <p className="text-sm">
                In some instances, a medical professional may suggest
                medication...
              </p>
            </div>
          </div>

          {/* Card 16 */}
          <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="healthy food and sleep"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">
                Practice a Healthy Lifestyle
              </h3>
              <p className="text-sm">
                Adequate sleep, a balanced diet, and minimizing caffeine or
                alcohol consumption...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {/* Prognosis and Future Outlook Section*/}
      <section className="bg-[#FFD266] w-full h-full lg:px-40 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}
        >
          Conclusion
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
          <p>
            Anger and aggression are normal reactions to some situations, but if
            uncontrolled, they can have a detrimental effect on personal
            relationships, work life, and overall health. Understanding the
            causes of anger, its signs, and utilizing appropriate coping skills
            will allow a person to be more in control of his/her feelings.
          </p>
          <p>
            Through mindfulness, self-awareness, and healthy communication,
            anger can become an inspiring energy instead of a force of
            destruction. Knowing how to handle anger constructively benefits the
            person himself but also encourages more healthy and constructive
            interaction with other people.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Aggression;
