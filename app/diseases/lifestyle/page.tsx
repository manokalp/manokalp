"use client"
import Image from "next/image"
import Link from "next/link"
// import { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import playfair from "../../../fonts/playfair.module.css"

const Lifestyle = () => {


    return (
        <main className="w-full h-full flex justify-center flex-col  bg-white ">
            {/* ASPD Hero Desktop  */}
            <div className="w-full hidden lg:block text-center ">
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] translate-y-[3vw]">Lifestyle Diseases</h2>
                <Image src="/diseases-banner/lifestyle.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full  lg:mt-[-16vw] mt-[-25vw]  z-0" />
            </div>

            {/* ASPD Hero Mobile  */}
            <div className="w-full lg:hidden block text-center ">

                <Image src="/diseases-banner/lifestyle.webp" alt="hero image" objectFit="cover" width={1200} height={100} className="w-full     z-0" />
                <h2 className="lg:text-[5vw] text-[6vw] text-white font-semibold relative z-10 font-[playfull] mt-[-10vw] mb-10">Lifestyle Diseases</h2>
            </div>

            {/* The Harsh Truth Section  */}
            <section className="bg-[#0E7EA0] rounded-full w-full h-full lg:px-40 px-10 lg:py-20 py-20 text-center lg:mt-[-20vw] mt-[-0vw]">
                <div className="flex flex-col justify-center items-center lg:mb-20 mb-10">
                    <h2 className="lg:text-[4.0vw] text-[8.5vw] font-bold font-[playfull]"></h2>

                </div>
                <div className="flex flex-col lg:flex-row justify-center lg:gap-20 gap-10 items-center text-center mb-20">

                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">Lifestyle diseases are health conditions that arise from the choices people make about how they live. These diseases are typically not caused by infections or genetics but by poor habits and behaviors, such as poor diet, lack of exercise, excessive stress, or unhealthy coping mechanisms.</p>


                    <p className="lg:text-[1.55vw] text-[3.5vw] font-medium text-left">While they may develop slowly over time, lifestyle diseases can be more dangerous than infectious diseases because they often don’t show symptoms until they are already quite advanced. These diseases are often chronic, difficult to manage, and costly to treat.</p>
                </div>

                <Link href="/" className="lg:px-30 px-16 py-6 bg-black rounded-full lg:text-[2vw] text-[4.5vw] ">Know More</Link>
            </section>

            {/* Section */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.8vw] text-[7vw] font-bold ${playfair.className} mb-8`}>Causes of Addiction</h2>
                <p className="text-black lg:text-[1.25vw] text-[3.5vw] mb-10">Addiction results from a mix of biological, psychological, and
                    environmental reasons. The following are some of the key causes:</p>

                <div className="grid lg:grid-cols-7 grid-cols-1 gap-4 mb-60">
                    {/* Technique Card 1 */}
                    <div className="[perspective:1000px] cursor-pointer ">
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
                                <p className="lg:text-[1vw] text-[3vw]">Alcohol, drugs, and stimulants like caffeine can exacerbate anxiety symptoms.</p>
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
            <section className="bg-white w-full h-full lg:px-60 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[7vw] font-bold ${playfair.className} mb-12`}>Symptoms of Anxiety Spectrum Disorders</h2>
                <p className="text-black lg:text-[1.5vw] text-[3vw] mb-10">Anxiety can manifest in different ways, affecting thoughts,
                    emotions, and physical well-being. Common symptoms include:</p>
                <div className="flex flex-col lg:flex-row justify-between gap-4 text-black mb-16">
                    <p>Physical Symptoms:</p>
                    <p>Disturbed Self-Image</p>
                    <p>Behavioral Symptoms:</p>
                    <p>Cognitive Symptoms:</p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="  ">
                        <ul className="text-left text-black">
                            <li className="mb-8 border-b-[2px]">Increased heart rate and palpitations</li>
                            <li className="mb-8 border-b-[2px]">Shortness of breath or hyperventilation</li>
                            <li className="mb-8 border-b-[2px]">Excessive sweating and trembling</li>
                            <li className="mb-8 border-b-[2px]">Muscle tension and headaches</li>
                            <li className="mb-8 border-b-[2px]">Dizziness or nausea</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20vw] w-[80vw] h-[40vh] bg-[#0E7EA0]" />
                </div>

            </section>

            {/*  Links  */}
            <section className="bg-white w-full h-full lg:px-20 px-10 lg:py-20 py-10 text-center">
                <h2 className={`text-[#0E7EA0] lg:text-[4vw] text-[7vw] font-semibold  ${playfair.className}`}>Solutions for Managing Anxiety Spectrum Disorders</h2>
                <p className="text-black lg:text-[1.55vw] text-[3.5vw] font-medium mb-10">Effectively managing anxiety involves a combination of self-care strategies, therapy,
                    and sometimes medication. Here are several approaches to help alleviate anxiety:</p>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
                    {/* Card 1 */}
                    <div className="bg-[#0E7EA0] rounded-3xl  text-white text-center">

                        <Image src="/quick_links/2.webp" alt="stressed person" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Cognitive-Behavioral Therapy (CBT)</h3>
                            <p className="text-sm">This therapy helps individuals identify and change negative thought patterns that contribute to anxiety.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Exercise and Physical Activity</h3>
                            <p className="text-sm">Engaging in regular exercise releases endorphins, which improve mood and reduce stress.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Mindfulness and Meditation</h3>
                            <p className="text-sm">Practicing mindfulness techniques can help individuals stay present and reduce excessive worry.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Healthy Diet and Nutrition</h3>
                            <p className="text-sm">Consuming a balanced diet with minimal caffeine and sugar intake can help stabilize mood and energy levels.</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Deep Breathing and Relaxation Techniques</h3>
                            <p className="text-sm">Practices such as deep breathing, progressive muscle relaxation, and guided imagery can help calm the nervous system.</p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Adequate Sleep</h3>
                            <p className="text-sm">Ensuring sufficient rest each night can help regulate emotions and reduce anxiety levels.</p>
                        </div>
                    </div>

                    {/* Card 7 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Limiting Stimulants and Alcohol</h3>
                            <p className="text-sm">Reducing or eliminating caffeine, nicotine, and alcohol consumption can prevent anxiety triggers.</p>
                        </div>
                    </div>

                    {/* Card 8 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Social Support</h3>
                            <p className="text-sm">Connecting with friends, family, or support groups can provide reassurance and emotional comfort.</p>
                        </div>
                    </div>

                    {/* Card 9 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Time Management and Organization</h3>
                            <p className="text-sm">Creating structured routines and setting realistic goals can prevent overwhelming stress.</p>
                        </div>
                    </div>

                    {/* Card 10 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Exposure Therapy</h3>
                            <p className="text-sm">Gradually confronting feared situations can help desensitize individuals to anxiety triggers.</p>
                        </div>
                    </div>

                    {/* Card 11 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Journaling and Expressive Writing</h3>
                            <p className="text-sm">Writing about worries and emotions can provide clarity and relief from anxious thoughts.</p>
                        </div>
                    </div>

                    {/* Card 12 */}
                    <div className="bg-[#0E7EA0] rounded-3xl text-white text-center">
                        <Image src="/quick_links/2.webp" alt="people communicating" width={300} height={200} className="w-full h-48 object-cover rounded-2xl mb-6" />
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-4">Professional Help and Medication</h3>
                            <p className="text-sm">If anxiety becomes severe or debilitating, consulting a mental health professional can provide tailored treatment, including medication if necessary.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Footer Section */}
            {/* Prognosis and Future Outlook Section*/}
            <section className="bg-[#FFD266] w-full h-full lg:px-80 px-10 lg:pt-20 lg:pb-[50vw] pt-20 pb-50 mb-[-60vw] text-center z-0 ">
                <h2 className={`text-[#0E7EA0] lg:text-[3.5vw] text-[8vw] font-bold ${playfair.className} mb-10`}>Conclusion</h2>
                <div className="flex flex-col lg:flex-row justify-between items-center text-left text-black gap-20 mb-50">
                    <p>Anxiety is a common and natural emotion, but when it becomes persistent, disproportionate, and disruptive to daily life, it can evolve into an anxiety disorder. Understanding the underlying causes, recognizing the symptoms, and seeking the right treatment are crucial steps toward managing and overcoming anxiety.</p>
                    <p>Therapy, particularly Cognitive Behavioral Therapy, combined with medication and support, can offer effective solutions for those struggling with anxiety disorders, enabling them to lead more fulfilling, peaceful lives.</p>
                </div>
            </section>
        </main>
    )
}

export default Lifestyle