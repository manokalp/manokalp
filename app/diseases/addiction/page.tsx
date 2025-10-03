"use client";
import Image from "next/image";
// import Link from "next/link"
// import { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css";

const Addiction = () => {
  return (
    <main className="w-full h-full flex justify-center flex-col  bg-white ">
      {/* ASPD Hero Desktop  */}
      <div className="w-full hidden lg:block text-center ">
        <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">
          Addiction
        </h2>
        <Image
          src="/diseases-banner/addiction.webp"
          alt="hero image"
          objectFit="cover"
          width={1200}
          height={100}
          className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0 "
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
          src="/diseases-banner/addiction.webp"
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
          Addiction
        </h2>
      </div>

      {/* Addiction: A Medical Illness Section  */}
      <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
        <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">
          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Addiction, also known as substance use disorder, is a chronic medical condition marked by compulsive substance use despite harmful consequences. It affects brain chemistry, behavior, physical health, and emotional well-being.
          </p>

          <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">
            Addiction is not a matter of willpower—it is a complex illness requiring comprehensive intervention, including medical, psychological, and social support.
          </p>
        </div>
      </section>

      {/* Causes Section */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Causes of Addiction
        </h2>
        <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">
          Addiction arises from a combination of biological vulnerability, psychological patterns, and environmental exposure.
        </p>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mb-20">
          {/* Biological Factors Card */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Biological Factors
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Genetic predisposition, neurotransmitter imbalances, and brain changes from substance use increase addiction risk.
                </p>
              </div>
            </div>
          </div>

          {/* Psychological and Emotional Factors Card */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Psychological and Emotional Factors
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Unresolved trauma, low self-esteem, chronic stress, or co-occurring mental health conditions may fuel addictive behavior.
                </p>
              </div>
            </div>
          </div>

          {/* Environmental and Social Factors Card */}
          <div className="[perspective:1000px] cursor-pointer">
            <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">
                  Environmental and Social Factors
                </h3>
              </div>
              <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="lg:text-[1vw] text-[3vw]">
                  Peer pressure, family dysfunction, exposure to substance use, and lack of social support elevate addiction risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="bg-[#F5F5F5] w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Symptoms of Addiction
        </h2>
        <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">
          Addiction symptoms affect emotional, behavioral, cognitive, and physical functioning.
        </p>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mb-20">
          {/* Behavioral Symptoms */}
          <div className="bg-[#0E7EA0] rounded-xl p-6 text-white">
            <h3 className="lg:text-[1.5vw] text-[4.5vw] font-bold mb-4">
              Behavioral Symptoms:
            </h3>
            <ul className="lg:text-[1vw] text-[3vw] text-left space-y-2">
              <li>• Compulsive substance use despite consequences</li>
              <li>• Loss of interest in hobbies or responsibilities</li>
              <li>• Secretive behavior around substance use</li>
              <li>• Risk-taking or dangerous behaviors</li>
            </ul>
          </div>

          {/* Emotional Symptoms */}
          <div className="bg-[#FFD700] rounded-xl p-6 text-black">
            <h3 className="lg:text-[1.5vw] text-[4.5vw] font-bold mb-4">
              Emotional Symptoms:
            </h3>
            <ul className="lg:text-[1vw] text-[3vw] text-left space-y-2">
              <li>• Persistent guilt, shame, or self-blame</li>
              <li>• Mood swings or irritability</li>
              <li>• Emotional numbness or heightened anxiety</li>
            </ul>
          </div>

          {/* Cognitive Symptoms */}
          <div className="bg-[#0E7EA0] rounded-xl p-6 text-white">
            <h3 className="lg:text-[1.5vw] text-[4.5vw] font-bold mb-4">
              Cognitive Symptoms:
            </h3>
            <ul className="lg:text-[1vw] text-[3vw] text-left space-y-2">
              <li>• Obsessive thoughts about obtaining or using the substance</li>
              <li>• Poor decision-making and impaired judgment</li>
              <li>• Denial or minimization of the problem</li>
            </ul>
          </div>

          {/* Physical Symptoms */}
          <div className="bg-[#FFD700] rounded-xl p-6 text-black">
            <h3 className="lg:text-[1.5vw] text-[4.5vw] font-bold mb-4">
              Physical Symptoms:
            </h3>
            <ul className="lg:text-[1vw] text-[3vw] text-left space-y-2">
              <li>• Tolerance, requiring higher doses to feel the effect</li>
              <li>• Withdrawal symptoms when not using the substance</li>
              <li>• Declining physical health (weight loss, fatigue, organ damage)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-white w-full h-full lg:px-40 px-10 lg:py-20 py-10 text-center">
        <h2
          className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}
        >
          Solutions for Managing Addiction
        </h2>
        <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">
          Effective addiction treatment involves a combination of medical care, psychological support, and lifestyle changes.
        </p>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mb-20">
          {/* Medical Interventions */}
          <div className="bg-[#0E7EA0] rounded-xl p-6 text-white">
            <h3 className="lg:text-[1.5vw] text-[4.5vw] font-bold mb-4">
              Medical Interventions:
            </h3>
            <ul className="lg:text-[1vw] text-[3vw] text-left space-y-2">
              <li>• Detoxification to safely manage withdrawal symptoms</li>
              <li>• Medication-Assisted Treatment (MAT) with methadone, buprenorphine, or naltrexone</li>
              <li>• Regular health monitoring to address physical complications</li>
            </ul>
          </div>

          {/* Psychotherapeutic Interventions */}
          <div className="bg-[#FFD700] rounded-xl p-6 text-black">
            <h3 className="lg:text-[1.5vw] text-[4.5vw] font-bold mb-4">
              Psychotherapeutic Interventions:
            </h3>
            <ul className="lg:text-[1vw] text-[3vw] text-left space-y-2">
              <li>• Cognitive Behavioral Therapy (CBT) to reframe negative thoughts and develop coping skills</li>
              <li>• Dialectical Behavior Therapy (DBT) for emotional regulation</li>
              <li>• Family Counseling to repair relationships and build support systems</li>
            </ul>
          </div>

          {/* Relapse Prevention Strategies */}
          <div className="bg-[#0E7EA0] rounded-xl p-6 text-white">
            <h3 className="lg:text-[1.5vw] text-[4.5vw] font-bold mb-4">
              Relapse Prevention Strategies:
            </h3>
            <ul className="lg:text-[1vw] text-[3vw] text-left space-y-2">
              <li>• Identifying and avoiding triggers</li>
              <li>• Developing alternative coping mechanisms</li>
              <li>• Building a support network through peer groups or recovery programs</li>
            </ul>
          </div>

          {/* Complementary Approaches */}
          <div className="bg-[#FFD700] rounded-xl p-6 text-black">
            <h3 className="lg:text-[1.5vw] text-[4.5vw] font-bold mb-4">
              Complementary Approaches:
            </h3>
            <ul className="lg:text-[1vw] text-[3vw] text-left space-y-2">
              <li>• Mindfulness practices, yoga, and exercise for stress reduction</li>
              <li>• Nutrition counseling to restore physical health</li>
              <li>• Skill-building for employment and social reintegration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {/* Prognosis and Future Outlook Section*/}
      <section className="bg-[#FFD266] w-full h-full lg:px-40 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
        <h2
          className={`text-[#0E7EA0] lg:text-[5vw] text-[8vw] font-bold ${playfair.className} mb-10`}
        >
          Conclusion
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
          <p>
            Addiction is a serious and intricate problem that impacts people on
            various levels—bodily, emotionally, and socially. Nevertheless, it
            is a surmountable challenge. Knowing the causes, being aware of the
            symptoms,
          </p>
          <p>
            {" "}
            and finding the right solutions can free people from the grip of
            addiction. With the right treatment, encouragement, and self-will,
            one can overcome it, and with that, there will be a healthier and
            richer life ahead.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Addiction;
