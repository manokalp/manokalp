"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css"

const Anxiety = () => {
    const [activeTab, setActiveTab] = useState("physical");

    return (
        <main className="w-full h-full flex justify-center flex-col  bg-white ">
            {/* ASPD Hero Desktop  */}
            <div className="w-full hidden lg:block text-center ">
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">Anxiety Disorder</h2>
                <Image src="/diseases-banner/anxiety.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0" />
            </div>

            {/* ASPD Hero Mobile  */}
            <div className="w-full lg:hidden block text-center ">

                <Image src="/diseases-banner/anxiety.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full z-0" />
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">Anxiety <br />Disorder</h2>
            </div>

            {/* The Harsh Truth Section  */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
 
                <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">

                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Anxiety is a common mental health condition that affects millions of people worldwide. It is characterized by persistent feelings of worry, fear, and unease, which can interfere with daily life and overall well-being.</p>


                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">While experiencing occasional anxiety is normal, excessive or chronic anxiety can develop into an anxiety disorder, significantly impacting a person&apos;s mental, emotional, and physical health. Understanding the causes, symptoms, and solutions for anxiety spectrum disorders is essential in managing and alleviating their effects.</p>
                </div>

                <Link href="/" className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] ">Know More</Link>
            </section>

            {/* Section */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}>Causes of Anxiety Spectrum Disorders</h2>
                <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">Anxiety disorders can arise from a combination of biological, psychological,
                    and environmental factors. Some of the most common causes include:</p>

                <div className="grid lg:grid-cols-7 grid-cols-1 gap-4 mb-60">
                    {/* Technique Card 1 */}
                    <div className="[perspective:1000px] cursor-pointer pb-30">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Genetic Factors</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">A family history of anxiety or mental health disorders can increase the likelihood of developing anxiety.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 2 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Brain Chemistry and Function</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Imbalances in neurotransmitters such as serotonin, dopamine, and gamma-aminobutyric acid (GABA) can contribute to heightened anxiety.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 3 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0]  w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Stress and Trauma</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Experiencing traumatic events, such as abuse, accidents, or major life changes, can trigger anxiety disorders.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 4 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Personality Traits</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Certain personality types, such as perfectionists or individuals with low self-esteem, are more prone to anxiety.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 5 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Medical Conditions</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Chronic illnesses, hormonal imbalances, or neurological disorders can lead to increased anxiety levels.</p>
                            </div>
                        </div>
                    </div>
                    {/* Technique Card 6 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Substance Abuse</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#FFD700] w-full lg:h-[50vh] rounded-xl p-6 text-black flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">Drinking and drug abuse decrease inhibitions and impair judgment, which causes individuals to become more prone to act violently or lose their temper.</p>
                            </div>
                        </div>
                    </div>

                    {/* Technique Card 7 */}
                    <div className="[perspective:1000px] cursor-pointer">
                        <div className="relative w-full aspect-square transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                                <h3 className="lg:text-[1.25vw] text-[4vw] font-bold">Environmental and Social Factors</h3>
                            </div>
                            <div className="absolute inset-0 bg-[#0E7EA0] w-full lg:h-[50vh] rounded-xl p-6 text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <p className="lg:text-[1vw] text-[3vw]">High-pressure work environments, financial instability, or strained relationships can contribute to chronic anxiety.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/*  Section */}
            <section className="bg-white w-full h-full lg:px-60 px-10 lg:py-20 py-10 text-center mt-[-10vw]">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}>Symptoms of Anxiety Spectrum Disorders</h2>
                <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">Anxiety can manifest in different ways, affecting thoughts, 
                emotions, and physical well-being. Common symptoms include:</p>
                
                {/* Tab Buttons */}
                <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
                    <button 
                        onClick={() => setActiveTab("physical")} 
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "physical" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
                    >
                        Physical Symptoms
                    </button>
                    <button 
                        onClick={() => setActiveTab("self-image")} 
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "self-image" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
                    >
                        Disturbed Self-Image
                    </button>
                    <button 
                        onClick={() => setActiveTab("behavioral")} 
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "behavioral" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
                    >
                        Behavioral Symptoms
                    </button>
                    <button 
                        onClick={() => setActiveTab("cognitive")} 
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "cognitive" ? "bg-[#0E7EA0] text-white" : "bg-gray-100"}`}
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
                                    <li className="mb-8 border-b-[2px]">Increased heart rate and palpitations</li>
                                    <li className="mb-8 border-b-[2px]">Shortness of breath or hyperventilation</li>
                                    <li className="mb-8 border-b-[2px]">Excessive sweating and trembling</li>
                                    <li className="mb-8 border-b-[2px]">Muscle tension and headaches</li>
                                    <li className="mb-8 border-b-[2px]">Dizziness or nausea</li>
                                    <li className="mb-8 border-b-[2px]">Chest pain or discomfort</li>
                                    <li className="mb-8 border-b-[2px]">Sleep disturbances and insomnia</li>
                                </ul>
                            </div>
                            <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                                <Image 
                                    src="https://images.pexels.com/photos/5699421/pexels-photo-5699421.jpeg" 
                                    alt="Physical symptoms of anxiety" 
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
                                    <li className="mb-8 border-b-[2px]">Feeling disconnected from oneself or surroundings</li>
                                    <li className="mb-8 border-b-[2px]">Persistent negative self-perception</li>
                                    <li className="mb-8 border-b-[2px]">Questioning one&apos;s abilities or worth</li>
                                    <li className="mb-8 border-b-[2px]">Fear of judgment or negative evaluation from others</li>
                                    <li className="mb-8 border-b-[2px]">Feeling inadequate compared to others</li>
                                    <li className="mb-8 border-b-[2px]">Impostor syndrome and self-doubt</li>
                                    <li className="mb-8 border-b-[2px]">Perfectionist tendencies and unrealistic standards</li>
                                </ul>
                            </div>
                            <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                                <Image 
                                    src="https://images.pexels.com/photos/6337335/pexels-photo-6337335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="Disturbed self-image related to anxiety" 
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
                                    <li className="mb-8 border-b-[2px]">Avoidance of anxiety-triggering situations</li>
                                    <li className="mb-8 border-b-[2px]">Restlessness and difficulty sitting still</li>
                                    <li className="mb-8 border-b-[2px]">Compulsive behaviors or rituals to reduce anxiety</li>
                                    <li className="mb-8 border-b-[2px]">Withdrawal from social activities</li>
                                    <li className="mb-8 border-b-[2px]">Procrastination and difficulty making decisions</li>
                                    <li className="mb-8 border-b-[2px]">Seeking reassurance excessively</li>
                                    <li className="mb-8 border-b-[2px]">Changes in appetite (increased or decreased)</li>
                                </ul>
                            </div>
                            <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                                <Image 
                                    src="https://images.pexels.com/photos/3807742/pexels-photo-3807742.jpeg" 
                                    alt="Behavioral symptoms of anxiety" 
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
                                    <li className="mb-8 border-b-[2px]">Excessive worry and rumination</li>
                                    <li className="mb-8 border-b-[2px]">Catastrophizing and expecting the worst</li>
                                    <li className="mb-8 border-b-[2px]">Difficulty concentrating or mind going blank</li>
                                    <li className="mb-8 border-b-[2px]">All-or-nothing thinking patterns</li>
                                    <li className="mb-8 border-b-[2px]">Racing thoughts that are hard to control</li>
                                    <li className="mb-8 border-b-[2px]">Overthinking decisions and second-guessing</li>
                                    <li className="mb-8 border-b-[2px]">Persistent fear of losing control</li>
                                </ul>
                            </div>
                            <div className="lg:w-[40%] w-[80vw] h-[40vh] lg:mt-0 mt-8">
                                <Image 
                                    src="https://images.pexels.com/photos/2128817/pexels-photo-2128817.jpeg" 
                                    alt="Cognitive symptoms of anxiety" 
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
  <h2 className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-semibold ${playfair.className}`}>
    Solutions for Managing Anxiety Spectrum Disorders
  </h2>
  <p className="text-black lg:text-[1.35vw] text-[3.5vw] font-medium mb-10">
    Effectively managing anxiety involves a combination of self-care strategies, therapy, and sometimes medication. Here are several approaches to help alleviate anxiety:
  </p>

  <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
    {/* Card 1 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <Image src="https://images.pexels.com/photos/4099406/pexels-photo-4099406.jpeg" alt="therapist consulting client" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Cognitive-Behavioral Therapy (CBT)</h3>
        <p className="text-sm">This therapy helps individuals identify and change negative thought patterns that contribute to anxiety.</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <Image src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg" alt="person jogging outdoors" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Exercise and Physical Activity</h3>
        <p className="text-sm">Engaging in regular exercise releases endorphins, which improve mood and reduce stress.</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <Image src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg" alt="meditating in nature" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Mindfulness and Meditation</h3>
        <p className="text-sm">Practicing mindfulness techniques can help individuals stay present and reduce excessive worry.</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <Image src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" alt="healthy meal" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Healthy Diet and Nutrition</h3>
        <p className="text-sm">Consuming a balanced diet with minimal caffeine and sugar intake can help stabilize mood and energy levels.</p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <Image src="/quick_links/2.webp" alt="person practicing breathing" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Deep Breathing and Relaxation Techniques</h3>
        <p className="text-sm">Deep breathing, progressive muscle relaxation, and guided imagery help calm the nervous system.</p>
      </div>
    </div>

    {/* Card 6 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <Image src="https://images.pexels.com/photos/935743/pexels-photo-935743.jpeg" alt="person sleeping peacefully" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Adequate Sleep</h3>
        <p className="text-sm">Ensuring sufficient rest each night can help regulate emotions and reduce anxiety levels.</p>
      </div>
    </div>

    {/* Card 7 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <Image src="https://images.pexels.com/photos/290544/pexels-photo-290544.jpeg" alt="no alcohol and caffeine" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Limiting Stimulants and Alcohol</h3>
        <p className="text-sm">Reducing or eliminating caffeine, nicotine, and alcohol consumption can prevent anxiety triggers.</p>
      </div>
    </div>

    {/* Card 8 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <Image src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" alt="people in support group" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Social Support</h3>
        <p className="text-sm">Connecting with friends, family, or support groups can provide reassurance and emotional comfort.</p>
      </div>
    </div>

    {/* Card 9 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <Image src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg" alt="organized workspace" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Time Management and Organization</h3>
        <p className="text-sm">Creating structured routines and setting realistic goals can prevent overwhelming stress.</p>
      </div>
    </div>

    {/* Card 10 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <Image src="https://images.pexels.com/photos/4098230/pexels-photo-4098230.jpeg" alt="therapist guiding exposure" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Exposure Therapy</h3>
        <p className="text-sm">Gradually confronting feared situations can help desensitize individuals to anxiety triggers.</p>
      </div>
    </div>

    {/* Card 11 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <Image src="https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg" alt="journaling at desk" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Journaling and Expressive Writing</h3>
        <p className="text-sm">Writing about worries and emotions can provide clarity and relief from anxious thoughts.</p>
      </div>
    </div>

    {/* Card 12 */}
    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
      <Image src="https://images.pexels.com/photos/5327859/pexels-photo-5327859.jpeg" alt="doctor and patient" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Professional Help and Medication</h3>
        <p className="text-sm">If anxiety becomes severe or debilitating, consulting a mental health professional can provide tailored treatment, including medication if necessary.</p>
      </div>
    </div>
  </div>
</section>



            {/* Footer Section */}
            {/* Prognosis and Future Outlook Section*/}
            <section className="bg-[#FFD266] w-full h-full lg:px-40 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}>Conclusion</h2>
                <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
                    <p>Anxiety is a common and natural emotion, but when it becomes persistent, disproportionate, and disruptive to daily life, it can evolve into an anxiety disorder. Understanding the underlying causes, recognizing the symptoms, and seeking the right treatment are crucial steps toward managing and overcoming anxiety.</p>
                    <p>Therapy, particularly Cognitive Behavioral Therapy, combined with medication and support, can offer effective solutions for those struggling with anxiety disorders, enabling them to lead more fulfilling, peaceful lives.</p>
                </div>
            </section>
        </main>
    )
}

export default Anxiety